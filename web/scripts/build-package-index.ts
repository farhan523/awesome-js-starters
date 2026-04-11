import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface Package {
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
}

const packagesDir = path.resolve(__dirname, "../../packages");
const outputFile = path.resolve(__dirname, "../src/data/packages.json");

function extractField(lines: string[], prefix: string): string {
  const line = lines.find((l) => l.startsWith(prefix));
  if (!line) return "";
  return line.replace(prefix, "").replace(/\s+$/, "").trim();
}

function parseReadme(content: string, category: string, packageName: string): Package {
  const lines = content.split("\n");

  // Name: first # heading
  const nameLine = lines.find((l) => l.startsWith("# "));
  const name = nameLine ? nameLine.replace(/^#\s+/, "").trim() : packageName;

  // Description: first > blockquote line (preferred), or first plain text line as fallback
  const descLine = lines.find((l) => l.startsWith("> ") && !l.startsWith("> Add"));
  let description = descLine ? descLine.replace(/^>\s+/, "").trim() : "";

  if (!description) {
    // Fallback: use the first non-empty, non-heading, non-link, non-separator line
    const fallback = lines.find(
      (l) =>
        l.trim() !== "" &&
        !l.startsWith("# ") &&
        !l.startsWith("**") &&
        !l.startsWith("---") &&
        !l.startsWith("## ") &&
        !l.startsWith("```") &&
        !l.startsWith("<!--")
    );
    description = fallback ? fallback.trim() : "";
  }

  // Links
  const npm = extractField(lines, "**npm:**");
  const github = extractField(lines, "**GitHub:**");
  const docs = extractField(lines, "**Docs:**");

  // Submitted by: look for [@handle](url) after "## Submitted by"
  let submittedBy: string | undefined;
  const submittedIdx = lines.findIndex((l) => l.trim() === "## Submitted by");
  if (submittedIdx !== -1) {
    for (let i = submittedIdx + 1; i < lines.length; i++) {
      const match = lines[i].match(/@([\w-]+)/);
      if (match && !lines[i].trim().startsWith("<!--")) {
        submittedBy = match[1];
        break;
      }
    }
  }

  if (!description) {
    console.warn(`[warn] No description found for ${category}/${packageName}`);
  }

  return {
    name,
    description,
    category,
    npm,
    github,
    docs,
    repoPath: `packages/${category}/${packageName}`,
    submittedBy,
  };
}

function buildIndex(): Package[] {
  const packages: Package[] = [];

  if (!fs.existsSync(packagesDir)) {
    console.error(`packages directory not found: ${packagesDir}`);
    process.exit(1);
  }

  const categories = fs
    .readdirSync(packagesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const category of categories) {
    const categoryDir = path.join(packagesDir, category);
    const packageFolders = fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    for (const packageName of packageFolders) {
      const readmePath = path.join(categoryDir, packageName, "README.md");
      if (!fs.existsSync(readmePath)) {
        console.warn(`[warn] No README.md found for ${category}/${packageName}`);
        continue;
      }
      const content = fs.readFileSync(readmePath, "utf-8");
      const pkg = parseReadme(content, category, packageName);
      packages.push(pkg);
    }
  }

  return packages;
}

const CACHE_DIR = path.resolve(__dirname, "../../.cache");
const CACHE_FILE = path.join(CACHE_DIR, "metadata-cache.json");
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

function loadCache(): Record<string, { data: any; ts: number }> {
  if (fs.existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
    } catch {
      return {};
    }
  }
  return {};
}

function saveCache(cache: Record<string, { data: any; ts: number }>) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

function extractNpmName(npmUrl: string): string {
  // https://www.npmjs.com/package/@vercel/blob → @vercel/blob
  const match = npmUrl.match(/npmjs\.com\/package\/(.+)/);
  return match ? match[1].replace(/\/$/, "") : "";
}

function extractGitHubRepo(githubUrl: string): string {
  // https://github.com/honojs/hono → honojs/hono
  const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+)/);
  return match ? match[1] : "";
}

async function fetchMetadata(pkg: Package, cache: Record<string, { data: any; ts: number }>): Promise<void> {
  const npmName = extractNpmName(pkg.npm);
  const ghRepo = extractGitHubRepo(pkg.github);

  // Fetch npm weekly downloads
  if (npmName) {
    const cacheKey = `npm:${npmName}`;
    const cached = cache[cacheKey];
    if (cached && Date.now() - cached.ts < CACHE_TTL) {
      pkg.weeklyDownloads = cached.data;
    } else {
      try {
        const res = await fetch(`https://api.npmjs.org/downloads/point/last-week/${npmName}`);
        if (res.ok) {
          const data = await res.json();
          pkg.weeklyDownloads = data.downloads;
          cache[cacheKey] = { data: data.downloads, ts: Date.now() };
        }
      } catch {
        // Silently skip — metadata is optional
      }
    }
  }

  // Fetch GitHub stars and last updated
  if (ghRepo) {
    const cacheKey = `gh:${ghRepo}`;
    const cached = cache[cacheKey];
    if (cached && Date.now() - cached.ts < CACHE_TTL) {
      pkg.githubStars = cached.data.stars;
      pkg.lastUpdated = cached.data.pushed;
    } else {
      try {
        const res = await fetch(`https://api.github.com/repos/${ghRepo}`, {
          headers: { "User-Agent": "awesome-js-starters-build" },
        });
        if (res.ok) {
          const data = await res.json();
          pkg.githubStars = data.stargazers_count;
          pkg.lastUpdated = data.pushed_at;
          cache[cacheKey] = { data: { stars: data.stargazers_count, pushed: data.pushed_at }, ts: Date.now() };
        }
      } catch {
        // Silently skip — metadata is optional
      }
    }
  }
}

async function main() {
  const fetchMeta = process.argv.includes("--fetch-metadata");
  const packages = buildIndex();

  if (fetchMeta) {
    console.log("[build] Fetching live metadata from npm and GitHub...");
    const cache = loadCache();
    await Promise.all(packages.map((pkg) => fetchMetadata(pkg, cache)));
    saveCache(cache);
    const enriched = packages.filter((p) => p.weeklyDownloads || p.githubStars).length;
    console.log(`[build] Enriched ${enriched}/${packages.length} packages with metadata`);
  }

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, JSON.stringify(packages, null, 2));
  console.log(`[build] Generated ${packages.length} packages → src/data/packages.json`);
}

main();
