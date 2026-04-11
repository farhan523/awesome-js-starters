import type { Metadata } from "next";
import Leaderboard from "@/components/Leaderboard";

export const metadata: Metadata = {
  title: "Leaderboard",
  description:
    "See who has contributed the most packages to the awesome-js-starters catalog.",
};

export default function LeaderboardPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-16 sm:px-8">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Contributor leaderboard
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            The people who make this catalog great. Every package submission
            earns a spot on the board.
          </p>
        </div>

        <Leaderboard />
      </div>
    </main>
  );
}
