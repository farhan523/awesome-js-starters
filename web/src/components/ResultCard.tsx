import type { EnrichedResult } from "@/lib/types";
import { fmt, formatBytes, getFreshness } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  react:        { bg: "rgba(59,130,246,0.12)",  color: "#60a5fa" },
  node:         { bg: "rgba(34,197,94,0.12)",   color: "#4ade80" },
  "general-js": { bg: "rgba(234,179,8,0.12)",   color: "#facc15" },
  angular:      { bg: "rgba(239,68,68,0.12)",   color: "#f87171" },
  vue:          { bg: "rgba(16,185,129,0.12)",  color: "#34d399" },
  express:      { bg: "rgba(139,92,246,0.12)",  color: "#a78bfa" },
  fastify:      { bg: "rgba(249,115,22,0.12)",  color: "#fb923c" },
};

const CATEGORY_LABELS: Record<string, string> = {
  react:        "React",
  node:         "Node.js",
  "general-js": "General JS",
  angular:      "Angular",
  vue:          "Vue",
  express:      "Express",
  fastify:      "Fastify",
};

interface Props {
  result: EnrichedResult;
}

function StatPill({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: 11, fontWeight: 510, color: "#62666d", letterSpacing: "-0.13px" }}>
      {children}
    </span>
  );
}

export default function ResultCard({ result }: Props) {
  const cat = CATEGORY_COLORS[result.category] ?? { bg: "rgba(255,255,255,0.06)", color: "#8a8f98" };
  const catLabel = CATEGORY_LABELS[result.category] ?? result.category;
  const repoUrl = `https://github.com/farhan523/awesome-js-starters/tree/main/${result.repoPath}`;

  return (
    <div
      className="flex flex-col gap-3.5 rounded-xl p-4 transition-all group"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h2 style={{ fontSize: 14, fontWeight: 590, color: "#f7f8f8", letterSpacing: "-0.24px", lineHeight: 1.3 }}>
          {result.name}
        </h2>
        <span
          className="shrink-0 rounded-full px-2 py-0.5"
          style={{ fontSize: 11, fontWeight: 510, background: cat.bg, color: cat.color, letterSpacing: "-0.13px", whiteSpace: "nowrap" }}
        >
          {catLabel}
        </span>
      </div>

      {/* Description */}
      {result.description && (
        <p style={{ fontSize: 13, fontWeight: 400, color: "#8a8f98", lineHeight: 1.6, letterSpacing: "-0.165px" }}>
          {result.description}
        </p>
      )}

      {/* Stats */}
      {(result.githubStars != null || result.weeklyDownloads != null || result.lastUpdated || result.hasTypes || result.bundleSize) && (
        <div className="flex items-center flex-wrap gap-2.5">
          {result.githubStars != null && (
            <StatPill>★ {fmt(result.githubStars)}</StatPill>
          )}
          {result.weeklyDownloads != null && (
            <StatPill>↓ {fmt(result.weeklyDownloads, "/wk")}</StatPill>
          )}
          {result.lastUpdated && (() => {
            const f = getFreshness(result.lastUpdated);
            return (
              <span
                className="rounded-full px-2 py-0.5"
                style={{ fontSize: 10, fontWeight: 510, background: f.bg, color: f.color, letterSpacing: "-0.1px" }}
              >
                {f.label}
              </span>
            );
          })()}
          {result.hasTypes === true && (
            <span
              style={{ fontSize: 10, fontWeight: 600, color: "#60a5fa", background: "rgba(59,130,246,0.12)", padding: "1px 6px", borderRadius: 4, letterSpacing: "0.2px" }}
            >
              TS
            </span>
          )}
          {result.bundleSize && (
            <StatPill>{formatBytes(result.bundleSize.gzip)} gz</StatPill>
          )}
          {result.lastUpdated && (
            <StatPill>
              {new Date(result.lastUpdated).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </StatPill>
          )}
        </div>
      )}

      {/* AI reason */}
      <p style={{ fontSize: 12, fontStyle: "italic", color: "#62666d", lineHeight: 1.5, borderLeft: "2px solid rgba(255,255,255,0.08)", paddingLeft: 10 }}>
        {result.reason}
      </p>

      {/* Links */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {result.npm && (
          <a href={result.npm} target="_blank" rel="noopener noreferrer"
            className="rounded-md px-2.5 py-1 transition-colors"
            style={{ fontSize: 12, fontWeight: 510, color: "#8a8f98", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#d0d6e0"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8a8f98"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
          >npm</a>
        )}
        {result.github && (
          <a href={result.github} target="_blank" rel="noopener noreferrer"
            className="rounded-md px-2.5 py-1 transition-colors"
            style={{ fontSize: 12, fontWeight: 510, color: "#8a8f98", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#d0d6e0"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8a8f98"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
          >GitHub</a>
        )}
        {result.docs && (
          <a href={result.docs} target="_blank" rel="noopener noreferrer"
            className="rounded-md px-2.5 py-1 transition-colors"
            style={{ fontSize: 12, fontWeight: 510, color: "#8a8f98", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#d0d6e0"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8a8f98"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
          >Docs</a>
        )}
        <a href={repoUrl} target="_blank" rel="noopener noreferrer"
          className="ml-auto rounded-md px-2.5 py-1 transition-colors"
          style={{ fontSize: 12, fontWeight: 510, color: "#f7f8f8", background: "#5e6ad2" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#7170ff"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#5e6ad2"; }}
        >View →</a>
      </div>
    </div>
  );
}
