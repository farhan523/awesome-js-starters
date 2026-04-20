"use client";

import { useState } from "react";
import type { Package } from "@/lib/types";
import packagesData from "@/data/packages.json";
import { fmt } from "@/lib/utils";

const packages = packagesData as Package[];

const CAT_STYLE: Record<string, { bg: string; color: string }> = {
  react:        { bg: "rgba(59,130,246,0.12)",  color: "#60a5fa" },
  node:         { bg: "rgba(34,197,94,0.12)",   color: "#4ade80" },
  "general-js": { bg: "rgba(234,179,8,0.12)",   color: "#facc15" },
};

export default function DiscoverRandom() {
  const [pkg, setPkg] = useState<Package | null>(null);
  const [spinning, setSpinning] = useState(false);

  function discover() {
    setSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      setPkg(packages[Math.floor(Math.random() * packages.length)]);
      if (++count >= 8) { clearInterval(interval); setSpinning(false); }
    }, 100);
  }

  const cat = pkg ? (CAT_STYLE[pkg.category] ?? { bg: "rgba(255,255,255,0.06)", color: "#8a8f98" }) : null;

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-lg">
      <button type="button" onClick={discover} disabled={spinning}
        className="rounded-full h-36 w-36 flex items-center justify-center text-5xl transition-all duration-300"
        style={{
          border: spinning ? "3px solid rgba(255,255,255,0.12)" : "3px solid rgba(255,255,255,0.12)",
          background: spinning ? "rgba(94,106,210,0.08)" : "rgba(255,255,255,0.02)",
          transform: spinning ? "scale(0.95)" : undefined,
          cursor: spinning ? "default" : "pointer",
          boxShadow: spinning ? "none" : "0 0 0 1px rgba(94,106,210,0) ",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => { if (!spinning) { (e.currentTarget as HTMLElement).style.borderColor = "#5e6ad2"; (e.currentTarget as HTMLElement).style.background = "rgba(94,106,210,0.08)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
      >
        <span className={spinning ? "animate-spin" : ""}>{spinning ? "🎰" : "🎲"}</span>
      </button>

      <p style={{ fontSize: 13, color: "#62666d" }}>
        {spinning ? "Shuffling..." : pkg ? "Click again to discover another gem" : "Click to discover a random package"}
      </p>

      {pkg && !spinning && (
        <div className="w-full rounded-xl p-5"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-start justify-between gap-3 mb-3">
            <h2 style={{ fontSize: 20, fontWeight: 590, color: "#f7f8f8", letterSpacing: "-0.24px" }}>{pkg.name}</h2>
            {cat && (
              <span className="shrink-0 rounded-full px-2.5 py-0.5" style={{ fontSize: 11, fontWeight: 510, background: cat.bg, color: cat.color }}>{pkg.category}</span>
            )}
          </div>

          {pkg.description && (
            <p style={{ fontSize: 14, color: "#8a8f98", lineHeight: 1.6, marginBottom: 16 }}>{pkg.description}</p>
          )}

          {(pkg.githubStars || pkg.weeklyDownloads) && (
            <div className="flex gap-4 mb-4" style={{ fontSize: 12, color: "#62666d" }}>
              {pkg.githubStars != null && <span>★ {fmt(pkg.githubStars)} stars</span>}
              {pkg.weeklyDownloads != null && <span>↓ {fmt(pkg.weeklyDownloads, "/wk")}</span>}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {pkg.npm && <a href={pkg.npm} target="_blank" rel="noopener noreferrer" className="rounded-md px-2.5 py-1 transition-colors" style={{ fontSize: 12, fontWeight: 510, color: "#8a8f98", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>npm</a>}
            {pkg.github && <a href={pkg.github} target="_blank" rel="noopener noreferrer" className="rounded-md px-2.5 py-1 transition-colors" style={{ fontSize: 12, fontWeight: 510, color: "#8a8f98", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>GitHub</a>}
            {pkg.docs && <a href={pkg.docs} target="_blank" rel="noopener noreferrer" className="rounded-md px-2.5 py-1 transition-colors" style={{ fontSize: 12, fontWeight: 510, color: "#8a8f98", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>Docs</a>}
            <a href={`https://github.com/farhan523/awesome-js-starters/tree/main/${pkg.repoPath}`} target="_blank" rel="noopener noreferrer"
              className="ml-auto rounded-md px-2.5 py-1 transition-colors" style={{ fontSize: 12, fontWeight: 510, color: "#fff", background: "#5e6ad2" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#7170ff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#5e6ad2"; }}
            >View in repo →</a>
          </div>
        </div>
      )}
    </div>
  );
}
