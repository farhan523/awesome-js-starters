import type { Metadata } from "next";
import ChatMode from "@/components/ChatMode";

export const metadata: Metadata = {
  title: "Chat",
  description:
    "Have a conversation with our AI to find the perfect npm packages for your project.",
};

export default function ChatPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-16 sm:px-8">
      <div className="w-full max-w-2xl flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Chat with AI
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            Not sure what you need? Have a conversation and we&apos;ll narrow it
            down together — ask follow-up questions, refine your requirements,
            and get tailored recommendations.
          </p>
        </div>

        <ChatMode />
      </div>
    </main>
  );
}
