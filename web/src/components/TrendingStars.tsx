"use client";

import type { Package } from "@/lib/types";
import packagesData from "@/data/packages.json";
import { fmt, getFreshness } from "@/lib/utils";

const packages = packagesData as Package[];

const NO_STATS_STYLE = { label: "Dormant", bg: "rgba(255,255,255,0.05)", color: "#62666d", bar: "#3e3e44" };

export default function TrendingStars() {
  const withStats = packages
    .filter((p) => p.weeklyDownloads && p.githubStars)
    .map((pkg) => ({
      pkg,
      momentum: (pkg.weeklyDownloads ?? 0) / (pkg.githubStars ?? 1),
      freshness: getFreshness(pkg.lastUpdated),
      hasStats: true as const,
    }))
    .sort((a, b) => b.momentum - a.momentum);

  const withoutStats = packages
    .filter((p) => !p.weeklyDownloads || !p.githubStars)
    .map((pkg) => ({
      pkg,
      momentum: 0,
      freshness: getFreshness(pkg.lastUpdated),
      hasStats: false as const,
    }));

  const ranked = [...withStats, ...withoutStats];
  const maxMomentum = withStats[0]?.momentum ?? 1;
  const noLiveData = withStats.length === 0;

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Explanation */}
      <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <span style={{ fontSize: 13, fontWeight: 510, color: "#d0d6e0" }}>How momentum works: </span>
        <span style={{ fontSize: 13, color: "#8a8f98" }}>
          Momentum = weekly downloads ÷ GitHub stars. A high score means real-world traction relative to awareness — the hidden gem signal.
        </span>
      </div>

      {/* No-stats banner */}
      {noLiveData && (
        <div className="rounded-xl px-4 py-3 flex items-center gap-2"
          style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}>
          <span style={{ fontSize: 13, color: "#fb923c" }}>
            Live stats not yet fetched — showing all packages. Run{" "}
            <code style={{ fontFamily: "monospace", background: "rgba(255,255,255,0.06)", padding: "1px 5px", borderRadius: 4 }}>
              npm run build-package-index:fetch
            </code>{" "}
            inside the <code style={{ fontFamily: "monospace", background: "rgba(255,255,255,0.06)", padding: "1px 5px", borderRadius: 4 }}>web/</code>{" "}
            directory to enable momentum ranking.
          </span>
        </div>
      )}

      {/* Cards */}
      <div className="flex flex-col gap-2">
        {ranked.map((item, i) => {
          const f = item.hasStats ? item.freshness : NO_STATS_STYLE;
          const barWidth = item.hasStats ? (item.momentum / maxMomentum) * 100 : 0;
          return (
            <div key={item.pkg.name} className="rounded-xl p-4"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono shrink-0 w-6 text-right" style={{ fontSize: 12, color: "#62666d" }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 510, color: "#d0d6e0", letterSpacing: "-0.13px" }}>{item.pkg.name}</h3>
                    <span style={{ fontSize: 11, color: "#62666d" }}>{item.pkg.category}</span>
                  </div>
                </div>
                <span className="rounded-full px-2.5 py-0.5 shrink-0" style={{ fontSize: 11, fontWeight: 510, background: f.bg, color: f.color }}>
                  {item.hasStats ? f.label : "No stats"}
                </span>
              </div>

              {/* Momentum bar */}
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${barWidth}%`, background: f.bar }} />
                </div>
                <span className="font-mono w-14 text-right" style={{ fontSize: 11, color: "#62666d" }}>
                  {item.hasStats ? `${item.momentum.toFixed(1)}x` : "—"}
                </span>
              </div>

              <div className="flex gap-4" style={{ fontSize: 12, color: "#62666d" }}>
                <span>★ {fmt(item.pkg.githubStars)}</span>
                <span>↓ {fmt(item.pkg.weeklyDownloads)}/wk</span>
                {item.pkg.lastUpdated && (
                  <span>Updated {new Date(item.pkg.lastUpdated).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
