"use client";

import { useState, useRef, useEffect } from "react";
import type { Package } from "@/lib/types";
import packagesData from "@/data/packages.json";

const packages = packagesData as Package[];

const CATEGORY_CONFIG: Record<
  string,
  { color: string; bg: string; x: number; y: number }
> = {
  react: { color: "#3b82f6", bg: "rgba(59,130,246,0.1)", x: 0.25, y: 0.3 },
  node: { color: "#22c55e", bg: "rgba(34,197,94,0.1)", x: 0.75, y: 0.3 },
  "general-js": {
    color: "#eab308",
    bg: "rgba(234,179,8,0.1)",
    x: 0.5,
    y: 0.65,
  },
  angular: { color: "#ef4444", bg: "rgba(239,68,68,0.1)", x: 0.15, y: 0.7 },
  vue: { color: "#10b981", bg: "rgba(16,185,129,0.1)", x: 0.85, y: 0.7 },
  express: { color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", x: 0.3, y: 0.85 },
  fastify: { color: "#f97316", bg: "rgba(249,115,22,0.1)", x: 0.7, y: 0.85 },
};

interface Node {
  pkg: Package;
  x: number;
  y: number;
  radius: number;
  color: string;
}

function buildNodes(width: number, height: number): Node[] {
  const nodes: Node[] = [];
  const categoryGroups: Record<string, Package[]> = {};

  for (const pkg of packages) {
    if (!categoryGroups[pkg.category]) categoryGroups[pkg.category] = [];
    categoryGroups[pkg.category].push(pkg);
  }

  for (const [category, pkgs] of Object.entries(categoryGroups)) {
    const config = CATEGORY_CONFIG[category] ?? {
      color: "#71717a",
      bg: "rgba(113,113,122,0.1)",
      x: 0.5,
      y: 0.5,
    };

    const centerX = config.x * width;
    const centerY = config.y * height;

    pkgs.forEach((pkg, i) => {
      const angle = (i / pkgs.length) * Math.PI * 2;
      const spread = 40 + pkgs.length * 12;
      const x = centerX + Math.cos(angle) * spread;
      const y = centerY + Math.sin(angle) * spread;

      // Size based on downloads/stars
      const downloads = pkg.weeklyDownloads ?? 0;
      let radius = 18;
      if (downloads >= 1000000) radius = 34;
      else if (downloads >= 100000) radius = 28;
      else if (downloads >= 10000) radius = 22;

      nodes.push({ pkg, x, y, radius, color: config.color });
    });
  }

  return nodes;
}

export default function EcosystemMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const [selected, setSelected] = useState<Package | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setDimensions({ width: w, height: Math.max(400, w * 0.6) });
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nodes = buildNodes(dimensions.width, dimensions.height);

  const categories = Object.entries(CATEGORY_CONFIG).filter(([cat]) =>
    packages.some((p) => p.category === cat),
  );

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Legend */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map(([cat, config]) => (
          <div key={cat} className="flex items-center gap-1.5">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: config.color }}
            />
            <span className="text-xs text-zinc-600 dark:text-zinc-400">
              {cat}
            </span>
          </div>
        ))}
      </div>

      {/* Map */}
      <div
        ref={containerRef}
        className="relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
        style={{ height: dimensions.height }}
      >
        <svg
          width={dimensions.width}
          height={dimensions.height}
          className="absolute inset-0"
        >
          {/* Category cluster backgrounds */}
          {categories.map(([cat, config]) => {
            const catNodes = nodes.filter((n) => n.pkg.category === cat);
            if (catNodes.length === 0) return null;
            const cx =
              catNodes.reduce((s, n) => s + n.x, 0) / catNodes.length;
            const cy =
              catNodes.reduce((s, n) => s + n.y, 0) / catNodes.length;
            const maxDist = Math.max(
              ...catNodes.map((n) =>
                Math.sqrt((n.x - cx) ** 2 + (n.y - cy) ** 2),
              ),
            );
            return (
              <circle
                key={cat}
                cx={cx}
                cy={cy}
                r={maxDist + 60}
                fill={config.bg}
                stroke={config.color}
                strokeWidth={0.5}
                strokeOpacity={0.3}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isHovered = hovered === node.pkg.name;
            const isSelected = selected?.name === node.pkg.name;
            return (
              <g
                key={node.pkg.name}
                onClick={() =>
                  setSelected(
                    selected?.name === node.pkg.name ? null : node.pkg,
                  )
                }
                onMouseEnter={() => setHovered(node.pkg.name)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer"
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={
                    node.radius * (isHovered || isSelected ? 1.15 : 1)
                  }
                  fill={node.color}
                  fillOpacity={isHovered || isSelected ? 0.9 : 0.7}
                  stroke={isSelected ? "#fff" : node.color}
                  strokeWidth={isSelected ? 2.5 : 0}
                  style={{
                    transition:
                      "r 0.2s ease, fill-opacity 0.2s ease",
                  }}
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize={node.radius > 26 ? 10 : 8}
                  fontWeight={600}
                  pointerEvents="none"
                  className="select-none"
                >
                  {node.pkg.name.length > 12
                    ? node.pkg.name.slice(0, 10) + "..."
                    : node.pkg.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected package detail */}
      {selected && (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              {selected.name}
            </h3>
            <button
              onClick={() => setSelected(null)}
              className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Close
            </button>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
            {selected.description}
          </p>
          <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
            {selected.githubStars != null && (
              <span>
                {"★ "}
                {selected.githubStars >= 1000
                  ? `${(selected.githubStars / 1000).toFixed(1)}k`
                  : selected.githubStars}
              </span>
            )}
            {selected.weeklyDownloads != null && (
              <span>
                {"↓ "}
                {selected.weeklyDownloads >= 1000000
                  ? `${(selected.weeklyDownloads / 1000000).toFixed(1)}M/wk`
                  : selected.weeklyDownloads >= 1000
                    ? `${(selected.weeklyDownloads / 1000).toFixed(1)}k/wk`
                    : `${selected.weeklyDownloads}/wk`}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            {selected.npm && (
              <a
                href={selected.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                npm
              </a>
            )}
            {selected.github && (
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                GitHub
              </a>
            )}
            {selected.docs && (
              <a
                href={selected.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                Docs
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
