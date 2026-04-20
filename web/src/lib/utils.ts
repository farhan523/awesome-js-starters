import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fmt(n: number | undefined, suffix = ""): string {
  if (n == null) return "-";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M${suffix}`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k${suffix}`;
  return `${n}${suffix}`;
}

export function formatBytes(b: number | undefined): string {
  if (b == null) return "-";
  if (b >= 1_000_000) return `${(b / 1_000_000).toFixed(1)} MB`;
  if (b >= 1_000) return `${(b / 1_000).toFixed(1)} kB`;
  return `${b} B`;
}

export type Freshness = "hot" | "warm" | "stable" | "stale";

const FRESHNESS_STYLES: Record<Freshness, { label: string; bg: string; color: string; bar: string }> = {
  hot: { label: "Hot", bg: "rgba(239,68,68,0.12)", color: "#f87171", bar: "#ef4444" },
  warm: { label: "Active", bg: "rgba(249,115,22,0.12)", color: "#fb923c", bar: "#f97316" },
  stable: { label: "Stable", bg: "rgba(94,106,210,0.12)", color: "#818cf8", bar: "#5e6ad2" },
  stale: { label: "Dormant", bg: "rgba(255,255,255,0.05)", color: "#62666d", bar: "#3e3e44" },
};

export function getFreshness(lastUpdated: string | undefined): { key: Freshness; label: string; bg: string; color: string; bar: string } {
  let key: Freshness;
  if (!lastUpdated) {
    key = "stable";
  } else {
    const d = Math.floor((Date.now() - new Date(lastUpdated).getTime()) / 86_400_000);
    if (d <= 7) key = "hot";
    else if (d <= 30) key = "warm";
    else if (d <= 180) key = "stable";
    else key = "stale";
  }
  return { key, ...FRESHNESS_STYLES[key] };
}
