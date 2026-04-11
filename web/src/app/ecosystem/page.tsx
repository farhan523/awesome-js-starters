import type { Metadata } from "next";
import EcosystemMap from "@/components/EcosystemMap";

export const metadata: Metadata = {
  title: "Ecosystem Map",
  description:
    "Interactive visual map of the npm package ecosystem — explore packages grouped by category.",
};

export default function EcosystemPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-16 sm:px-8">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Ecosystem map
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            A visual map of every package in the catalog. Bubbles are sized by
            popularity and grouped by ecosystem. Click any node to explore.
          </p>
        </div>

        <EcosystemMap />
      </div>
    </main>
  );
}
