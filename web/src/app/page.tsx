import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-20 sm:px-6">
      <div className="w-full max-w-3xl flex flex-col gap-12">

        {/* Hero */}
        <div className="flex flex-col gap-5">
          <div className="inline-flex w-fit rounded-full px-3 py-1 text-xs border"
            style={{ fontWeight: 510, letterSpacing: "-0.13px", color: "#7170ff", borderColor: "rgba(113,112,255,0.25)", background: "rgba(94,106,210,0.08)" }}>
            Community-curated · 131 packages
          </div>

          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 510, lineHeight: 1.05, letterSpacing: "-1.056px", color: "#f7f8f8" }}>
            Find the right npm package.
            <br />
            <span style={{ color: "#8a8f98" }}>Describe it, don&apos;t search for it.</span>
          </h1>

          <p style={{ fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#8a8f98", letterSpacing: "-0.165px", maxWidth: 480 }}>
            No tags, no keyword guessing. Tell us what you&apos;re building —
            our AI matches you with packages real developers have actually shipped.
          </p>
        </div>

        {/* Search */}
        <SearchBox />

        {/* Bottom CTA */}
        <div className="rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex flex-col gap-1">
            <p style={{ fontSize: 13, fontWeight: 510, color: "#d0d6e0", letterSpacing: "-0.13px" }}>
              Found a package others should know about?
            </p>
            <p style={{ fontSize: 12, color: "#62666d" }}>
              Share the ones you&apos;ve personally shipped — real context beats any README.
            </p>
          </div>
          <a
            href="https://github.com/farhan523/awesome-js-starters/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md px-4 py-2 transition-colors"
            style={{ fontSize: 13, fontWeight: 510, letterSpacing: "-0.13px", color: "#d0d6e0", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
          >
            Submit a package →
          </a>
        </div>

        {/* Footer */}
        <footer style={{ fontSize: 12, color: "#62666d", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20 }}>
          Powered by{" "}
          <a href="https://github.com/farhan523/awesome-js-starters" target="_blank" rel="noopener noreferrer"
            style={{ color: "#8a8f98", textDecoration: "underline" }}>
            awesome-js-starters
          </a>{" "}
          · AI via Groq + Llama 3
        </footer>
      </div>
    </main>
  );
}
