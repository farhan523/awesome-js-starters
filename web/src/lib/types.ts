export interface Package {
  name: string;
  description: string;
  category: string;
  npm: string;
  github: string;
  docs: string;
  repoPath: string;
  submittedBy?: string;
  weeklyDownloads?: number;
  githubStars?: number;
  lastUpdated?: string;
  hasTypes?: boolean;
  bundleSize?: { gzip: number; raw: number };
}

export interface SearchResult {
  name: string;
  reason: string;
}

export type EnrichedResult = Package & { reason: string };
