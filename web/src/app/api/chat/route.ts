import { generateText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import type { Package } from "@/lib/types";
import packagesData from "@/data/packages.json";

const defaultGroq = createGroq({ apiKey: process.env.GROQ_API_KEY });

const packages = packagesData as Package[];

const catalog = packages
  .map((p) => `- ${p.name} (${p.category}): ${p.description}`)
  .join("\n");

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: Request) {
  const userApiKey = request.headers.get("x-groq-api-key")?.trim() || null;

  if (userApiKey && !userApiKey.startsWith("gsk_")) {
    return Response.json(
      { error: "Invalid API key format.", code: "INVALID_USER_KEY" },
      { status: 400 },
    );
  }

  const activeGroq = userApiKey
    ? createGroq({ apiKey: userApiKey })
    : defaultGroq;

  let messages: Message[];
  try {
    const body = await request.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
    if (messages.length === 0) {
      return Response.json(
        { error: "Messages are required" },
        { status: 400 },
      );
    }
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const conversationHistory = messages
    .map((m) => `${m.role === "user" ? "Developer" : "Assistant"}: ${m.content}`)
    .join("\n");

  try {
    const { text } = await generateText({
      model: activeGroq("llama-3.3-70b-versatile"),
      prompt: `You are a friendly, conversational package advisor for awesome-js-starters — a curated catalog of battle-tested npm packages.

Your role:
- Help developers find the right packages through natural conversation
- Ask clarifying questions to narrow down what they need (framework preference, bundle size concerns, TypeScript support, etc.)
- When you have enough context, recommend specific packages from the catalog below
- Be concise — keep responses under 3-4 sentences unless listing packages
- When recommending packages, format them as: **PackageName** — reason

Available packages in our catalog:
${catalog}

IMPORTANT RULES:
- Only recommend packages from the catalog above
- If nothing matches, say so honestly and suggest they check npmjs.com
- Don't make up packages that aren't in the catalog
- When you recommend packages, include their exact names from the catalog
- Keep the conversation focused on package discovery

Conversation so far:
${conversationHistory}

Respond as the Assistant. Be helpful, concise, and conversational.`,
    });

    return Response.json({ reply: text.trim() });
  } catch (err) {
    const message = err instanceof Error ? err.message : "AI request failed";
    console.error("[chat] error:", message);

    if (userApiKey) {
      const isAuthError =
        message.includes("401") ||
        message.toLowerCase().includes("unauthorized") ||
        message.toLowerCase().includes("invalid");
      if (isAuthError) {
        return Response.json(
          {
            error: "Your API key appears to be invalid.",
            code: "INVALID_USER_KEY",
          },
          { status: 401 },
        );
      }
    }

    const isQuota =
      message.includes("quota") ||
      message.includes("rate") ||
      message.includes("429");
    if (isQuota) {
      return Response.json(
        {
          error: userApiKey
            ? "Your Groq API key has hit its rate limit."
            : "Too many requests. Please wait a moment.",
        },
        { status: 429 },
      );
    }

    return Response.json(
      { error: "Failed to generate response. Please try again." },
      { status: 500 },
    );
  }
}
