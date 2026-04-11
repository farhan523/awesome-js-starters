"use client";

import type { Package } from "@/lib/types";
import packagesData from "@/data/packages.json";

const packages = packagesData as Package[];

interface Contributor {
  username: string;
  packages: Package[];
  totalStars: number;
  totalDownloads: number;
}

function buildLeaderboard(): Contributor[] {
  const map = new Map<string, Package[]>();

  for (const pkg of packages) {
    if (!pkg.submittedBy) continue;
    const existing = map.get(pkg.submittedBy) ?? [];
    existing.push(pkg);
    map.set(pkg.submittedBy, existing);
  }

  const contributors: Contributor[] = [];
  for (const [username, pkgs] of map.entries()) {
    contributors.push({
      username,
      packages: pkgs,
      totalStars: pkgs.reduce((s, p) => s + (p.githubStars ?? 0), 0),
      totalDownloads: pkgs.reduce((s, p) => s + (p.weeklyDownloads ?? 0), 0),
    });
  }

  contributors.sort((a, b) => b.packages.length - a.packages.length);
  return contributors;
}

function formatNum(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export default function Leaderboard() {
  const contributors = buildLeaderboard();
  const totalPackages = packages.length;
  const totalContributors = contributors.length;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 text-center">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {totalPackages}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            Packages
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 text-center">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {totalContributors}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            Contributors
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 text-center col-span-2 sm:col-span-1">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {packages.filter((p) => p.category).map((p) => p.category).filter((v, i, a) => a.indexOf(v) === i).length}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            Categories
          </div>
        </div>
      </div>

      {contributors.length === 0 ? (
        <p className="text-sm text-zinc-500 dark:text-zinc-400 italic text-center py-8">
          No contributors have been attributed yet. Encourage submitters to add
          their GitHub handle in the &quot;Submitted by&quot; section.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {contributors.map((c, rank) => (
            <div
              key={c.username}
              className="flex items-center gap-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 hover:shadow-sm transition-shadow"
            >
              {/* Rank */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  rank === 0
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                    : rank === 1
                      ? "bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                      : rank === 2
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                        : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                }`}
              >
                #{rank + 1}
              </div>

              {/* Avatar + info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <img
                    src={`https://github.com/${c.username}.png?size=40`}
                    alt={c.username}
                    className="h-8 w-8 rounded-full"
                    loading="lazy"
                  />
                  <a
                    href={`https://github.com/${c.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:underline"
                  >
                    @{c.username}
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {c.packages.map((pkg) => (
                    <span
                      key={pkg.name}
                      className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-xs text-zinc-600 dark:text-zinc-400"
                    >
                      {pkg.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="shrink-0 flex flex-col items-end gap-1 text-right">
                <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  {c.packages.length}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {c.packages.length === 1 ? "package" : "packages"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 p-5 text-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
          Want to see your name here?
        </p>
        <a
          href="https://github.com/farhan523/awesome-js-starters/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          Submit a package →
        </a>
      </div>
    </div>
  );
}
