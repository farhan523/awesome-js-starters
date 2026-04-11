"use client";

import type { Package } from "@/lib/types";
import packagesData from "@/data/packages.json";

const packages = packagesData as Package[];

interface RankedPackage {
  pkg: Package;
  momentum: number;
  freshness: "hot" | "warm" | "stable" | "stale";
}

function computeMomentum(pkg: Package): number {
  const downloads = pkg.weeklyDownloads ?? 0;
  const stars = pkg.githubStars ?? 1;
  // Ratio of downloads-per-star — higher means more "momentum" relative to awareness
  return downloads / stars;
}

function computeFreshness(
  pkg: Package,
): "hot" | "warm" | "stable" | "stale" {
  if (!pkg.lastUpdated) return "stable";
  const daysAgo = Math.floor(
    (Date.now() - new Date(pkg.lastUpdated).getTime()) /
      (1000 * 60 * 60 * 24),
  );
  if (daysAgo <= 7) return "hot";
  if (daysAgo <= 30) return "warm";
  if (daysAgo <= 180) return "stable";
  return "stale";
}

const FRESHNESS_CONFIG = {
  hot: {
    label: "Hot",
    color:
      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    bar: "bg-red-500",
  },
  warm: {
    label: "Active",
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    bar: "bg-orange-500",
  },
  stable: {
    label: "Stable",
    color:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    bar: "bg-blue-500",
  },
  stale: {
    label: "Dormant",
    color:
      "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
    bar: "bg-zinc-400",
  },
};

function formatNum(n: number | undefined): string {
  if (n == null) return "-";
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export default function TrendingStars() {
  const ranked: RankedPackage[] = packages
    .filter((p) => p.weeklyDownloads && p.githubStars)
    .map((pkg) => ({
      pkg,
      momentum: computeMomentum(pkg),
      freshness: computeFreshness(pkg),
    }))
    .sort((a, b) => b.momentum - a.momentum);

  const maxMomentum = ranked.length > 0 ? ranked[0].momentum : 1;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Explanation */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 text-sm text-zinc-600 dark:text-zinc-400">
        <strong className="text-zinc-800 dark:text-zinc-200">
          How momentum works:
        </strong>{" "}
        Momentum = weekly downloads / GitHub stars. A high score means the
        package is getting lots of real-world usage relative to its awareness —
        a signal that it&apos;s a hidden gem gaining traction.
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {ranked.map((item, i) => {
          const config = FRESHNESS_CONFIG[item.freshness];
          const barWidth = (item.momentum / maxMomentum) * 100;

          return (
            <div
              key={item.pkg.name}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-zinc-400 dark:text-zinc-500 w-6 text-right shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {item.pkg.name}
                    </h3>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {item.pkg.category}
                    </span>
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${config.color}`}
                >
                  {config.label}
                </span>
              </div>

              {/* Momentum bar */}
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-1 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${config.bar} transition-all duration-500`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 w-16 text-right">
                  {item.momentum.toFixed(1)}x
                </span>
              </div>

              {/* Stats row */}
              <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                <span>★ {formatNum(item.pkg.githubStars)} stars</span>
                <span>
                  ↓ {formatNum(item.pkg.weeklyDownloads)} downloads/wk
                </span>
                {item.pkg.lastUpdated && (
                  <span>
                    Updated{" "}
                    {new Date(item.pkg.lastUpdated).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric" },
                    )}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {ranked.length === 0 && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400 italic text-center py-8">
          No packages with both download and star data available. Run the build
          with --fetch-metadata to populate this page.
        </p>
      )}
    </div>
  );
}
