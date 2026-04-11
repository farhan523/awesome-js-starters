import type { Metadata } from "next";
import TrendingStars from "@/components/TrendingStars";

export const metadata: Metadata = {
  title: "Rising Stars",
  description:
    "Discover npm packages with the highest momentum — downloads relative to awareness.",
};

export default function TrendingPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-16 sm:px-8">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Rising stars
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            Packages ranked by momentum — real-world usage relative to
            awareness. The higher the score, the more of a hidden gem it is.
          </p>
        </div>

        <TrendingStars />
      </div>
    </main>
  );
}
