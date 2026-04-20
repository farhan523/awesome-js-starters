"use client";

import { useState } from "react";
import type { Package } from "@/lib/types";
import { getGroqKey } from "@/lib/groq-key";
import ApiKeyManager from "./ApiKeyManager";
import packagesData from "@/data/packages.json";
import { fmt } from "@/lib/utils";

const packages = packagesData as Package[];
const packageNames = packages.map((p) => p.name).sort();

interface Comparison {
  summary: string;
  packageA: { strengths: string[]; weaknesses: string[] };
  packageB: { strengths: string[]; weaknesses: string[] };
  pickA: string; pickB: string; verdict: string;
}
interface CompareResult { packageA: Package; packageB: Package; comparison: Comparison; }

function PackageColumn({ pkg, side, strengths, weaknesses }: { pkg: Package; side: "A" | "B"; strengths: string[]; weaknesses: string[] }) {
  const accent = side === "A" ? "#60a5fa" : "#34d399";
  const accentBg = side === "A" ? "rgba(59,130,246,0.08)" : "rgba(34,197,94,0.08)";
  return (
    <div className="flex-1 rounded-xl overflow-hidden" style={{ border: `1px solid ${side === "A" ? "rgba(59,130,246,0.2)" : "rgba(34,197,94,0.2)"}` }}>
      <div className="p-4" style={{ background: accentBg }}>
        <h3 style={{ fontSize: 16, fontWeight: 590, color: "#f7f8f8", letterSpacing: "-0.24px" }}>{pkg.name}</h3>
        <p style={{ fontSize: 12, color: "#8a8f98", marginTop: 4 }}>{pkg.description}</p>
        {(pkg.githubStars || pkg.weeklyDownloads) && (
          <div className="flex gap-5 mt-3">
            {pkg.githubStars != null && <div className="flex flex-col"><span style={{ fontSize: 16, fontWeight: 590, color: accent }}>{fmt(pkg.githubStars)}</span><span style={{ fontSize: 11, color: "#62666d" }}>Stars</span></div>}
            {pkg.weeklyDownloads != null && <div className="flex flex-col"><span style={{ fontSize: 16, fontWeight: 590, color: accent }}>{fmt(pkg.weeklyDownloads)}</span><span style={{ fontSize: 11, color: "#62666d" }}>Downloads/wk</span></div>}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div>
          <p style={{ fontSize: 11, fontWeight: 510, color: "#4ade80", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Strengths</p>
          <ul className="space-y-1.5">
            {strengths.map((s, i) => (
              <li key={i} className="flex gap-2" style={{ fontSize: 13, color: "#d0d6e0" }}><span style={{ color: "#4ade80" }}>+</span>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 510, color: "#f87171", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Weaknesses</p>
          <ul className="space-y-1.5">
            {weaknesses.map((w, i) => (
              <li key={i} className="flex gap-2" style={{ fontSize: 13, color: "#d0d6e0" }}><span style={{ color: "#f87171" }}>-</span>{w}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 mt-1">
          {pkg.npm && <a href={pkg.npm} target="_blank" rel="noopener noreferrer" className="rounded-md px-2.5 py-1 transition-colors" style={{ fontSize: 12, fontWeight: 510, color: "#8a8f98", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>npm</a>}
          {pkg.github && <a href={pkg.github} target="_blank" rel="noopener noreferrer" className="rounded-md px-2.5 py-1 transition-colors" style={{ fontSize: 12, fontWeight: 510, color: "#8a8f98", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>GitHub</a>}
        </div>
      </div>
    </div>
  );
}

const SELECT_STYLE = { fontSize: 13, color: "#f7f8f8", background: "#0f1011", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "8px 12px" };

export default function PackageCompare() {
  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");
  const [result, setResult] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showByok, setShowByok] = useState(false);

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!nameA || !nameB || nameA === nameB) return;
    setLoading(true); setError(null); setResult(null);
    try {
      const userKey = getGroqKey();
      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(userKey ? { "x-groq-api-key": userKey } : {}) },
        body: JSON.stringify({ packageA: nameA, packageB: nameB }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 429) setShowByok(true);
        if (res.status === 401 && data?.code === "INVALID_USER_KEY") setShowByok(true);
        throw new Error(data?.error ?? `Request failed: ${res.status}`);
      }
      setResult(await res.json()); setShowByok(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally { setLoading(false); }
  }

  const MATCHUPS = [["valibot", "ai (Vercel AI SDK)"], ["swr", "nuqs"], ["Hono", "Ky"]];

  return (
    <div className="w-full flex flex-col gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-end">
          <div className="flex-1 flex flex-col gap-1.5">
            <label style={{ fontSize: 12, fontWeight: 510, color: "#62666d" }}>Package A</label>
            <select value={nameA} onChange={(e) => setNameA(e.target.value)} disabled={loading} className="outline-none" style={SELECT_STYLE}>
              <option value="">Select a package...</option>
              {packageNames.map((name) => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <span className="self-center py-1" style={{ fontSize: 13, fontWeight: 510, color: "#62666d" }}>vs</span>
          <div className="flex-1 flex flex-col gap-1.5">
            <label style={{ fontSize: 12, fontWeight: 510, color: "#62666d" }}>Package B</label>
            <select value={nameB} onChange={(e) => setNameB(e.target.value)} disabled={loading} className="outline-none" style={SELECT_STYLE}>
              <option value="">Select a package...</option>
              {packageNames.map((name) => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <button type="submit" disabled={loading || !nameA || !nameB || nameA === nameB}
            className="rounded-md px-5 py-2.5 transition-colors disabled:opacity-40"
            style={{ fontSize: 13, fontWeight: 510, color: "#fff", background: "#5e6ad2" }}
            onMouseEnter={(e) => { if (!(e.currentTarget as HTMLButtonElement).disabled) (e.currentTarget as HTMLElement).style.background = "#7170ff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#5e6ad2"; }}
          >{loading ? "Comparing..." : "Compare"}</button>
        </div>
      </form>

      {!result && !loading && !error && (
        <div className="flex flex-col gap-2">
          <p style={{ fontSize: 12, color: "#62666d" }}>Popular matchups:</p>
          <div className="flex flex-wrap gap-2">
            {MATCHUPS.map(([a, b]) => (
              <button key={`${a}-${b}`} type="button" onClick={() => { setNameA(a); setNameB(b); }}
                className="rounded-full px-3 py-1.5 transition-colors"
                style={{ fontSize: 12, color: "#8a8f98", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#d0d6e0"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8a8f98"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
              >{a} vs {b}</button>
            ))}
          </div>
        </div>
      )}

      <ApiKeyManager show={showByok} onKeyChange={() => setShowByok(false)} />
      {error && !showByok && <p style={{ fontSize: 13, color: "#f87171" }}>{error}</p>}

      {loading && (
        <div className="flex justify-center py-10">
          <div className="h-5 w-5 animate-spin rounded-full" style={{ border: "2px solid rgba(255,255,255,0.08)", borderTopColor: "#5e6ad2" }} />
        </div>
      )}

      {result && !loading && (
        <div className="flex flex-col gap-4">
          <p style={{ fontSize: 14, fontStyle: "italic", color: "#8a8f98", lineHeight: 1.6, borderLeft: "2px solid rgba(255,255,255,0.08)", paddingLeft: 12 }}>{result.comparison.summary}</p>
          <div className="flex flex-col lg:flex-row gap-4">
            <PackageColumn pkg={result.packageA} side="A" strengths={result.comparison.packageA.strengths} weaknesses={result.comparison.packageA.weaknesses} />
            <PackageColumn pkg={result.packageB} side="B" strengths={result.comparison.packageB.strengths} weaknesses={result.comparison.packageB.weaknesses} />
          </div>
          <div className="rounded-xl p-5 flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p style={{ fontSize: 11, fontWeight: 510, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Pick {result.packageA.name} when...</p>
                <p style={{ fontSize: 13, color: "#d0d6e0", lineHeight: 1.6 }}>{result.comparison.pickA}</p>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 510, color: "#34d399", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Pick {result.packageB.name} when...</p>
                <p style={{ fontSize: 13, color: "#d0d6e0", lineHeight: 1.6 }}>{result.comparison.pickB}</p>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 510, color: "#62666d", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Verdict</p>
              <p style={{ fontSize: 13, color: "#8a8f98", lineHeight: 1.6 }}>{result.comparison.verdict}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
