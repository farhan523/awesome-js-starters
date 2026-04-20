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
  hasTypes?: boolean;
  bundleSize?: { gzip: number; raw: number };
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

async function fetchNpmTypes(npmName: string): Promise<boolean | undefined> {
  try {
    const res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(npmName)}/latest`, {
      headers: { "User-Agent": "awesome-js-starters-build" },
    });
    if (!res.ok) return undefined;
    const data = await res.json();
    if (data.types || data.typings) return true;
    const typesName = npmName.startsWith("@")
      ? `@types/${npmName.slice(1).replace("/", "__")}`
      : `@types/${npmName}`;
    const companion = await fetch(
      `https://registry.npmjs.org/${encodeURIComponent(typesName)}`,
      { method: "HEAD", headers: { "User-Agent": "awesome-js-starters-build" } }
    );
    return companion.ok;
  } catch {
    return undefined;
  }
}

async function fetchBundleSize(npmName: string): Promise<{ gzip: number; raw: number } | undefined> {
  try {
    const res = await fetch(
      `https://bundlephobia.com/api/size?package=${encodeURIComponent(npmName)}`,
      { headers: { "User-Agent": "awesome-js-starters-build" } }
    );
    if (!res.ok) return undefined;
    const data = await res.json();
    if (typeof data.gzip !== "number") return undefined;
    return { gzip: data.gzip, raw: data.size };
  } catch {
    return undefined;
  }
}

async function fetchMetadata(pkg: Package, cache: Record<string, { data: any; ts: number }>): Promise<boolean> {
  const npmName = extractNpmName(pkg.npm);
  const ghRepo = extractGitHubRepo(pkg.github);
  let hitNetwork = false;

  // Fetch npm weekly downloads
  if (npmName) {
    const cacheKey = `npm:${npmName}`;
    const cached = cache[cacheKey];
    if (cached && Date.now() - cached.ts < CACHE_TTL) {
      pkg.weeklyDownloads = cached.data;
    } else {
      hitNetwork = true;
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
      hitNetwork = true;
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

  // Fetch TypeScript types support
  if (npmName) {
    const cacheKey = `npmtypes:${npmName}`;
    const cached = cache[cacheKey];
    if (cached && Date.now() - cached.ts < CACHE_TTL) {
      pkg.hasTypes = cached.data;
    } else {
      hitNetwork = true;
      const has = await fetchNpmTypes(npmName);
      if (has !== undefined) {
        pkg.hasTypes = has;
        cache[cacheKey] = { data: has, ts: Date.now() };
      }
    }
  }

  // Fetch bundle size
  if (npmName) {
    const cacheKey = `bundle:${npmName}`;
    const cached = cache[cacheKey];
    if (cached && Date.now() - cached.ts < CACHE_TTL) {
      pkg.bundleSize = cached.data;
    } else {
      hitNetwork = true;
      const size = await fetchBundleSize(npmName);
      if (size) {
        pkg.bundleSize = size;
        cache[cacheKey] = { data: size, ts: Date.now() };
      }
    }
  }

  return hitNetwork;
}

function applyCache(pkg: Package, cache: Record<string, { data: any; ts: number }>): void {
  const npmName = extractNpmName(pkg.npm);
  const ghRepo = extractGitHubRepo(pkg.github);

  if (npmName) {
    const npm = cache[`npm:${npmName}`];
    if (npm) pkg.weeklyDownloads = npm.data;
    const types = cache[`npmtypes:${npmName}`];
    if (types) pkg.hasTypes = types.data;
    const bundle = cache[`bundle:${npmName}`];
    if (bundle) pkg.bundleSize = bundle.data;
  }
  if (ghRepo) {
    const gh = cache[`gh:${ghRepo}`];
    if (gh) {
      pkg.githubStars = gh.data.stars;
      pkg.lastUpdated = gh.data.pushed;
    }
  }
}

async function main() {
  const fetchMeta = process.argv.includes("--fetch-metadata");
  const packages = buildIndex();
  const cache = loadCache();

  if (fetchMeta) {
    console.log(`[build] Fetching live metadata for ${packages.length} packages (throttled, ~250ms/pkg on cold cache)...`);
    const DELAY_MS = 250;
    for (let i = 0; i < packages.length; i++) {
      const hitNetwork = await fetchMetadata(packages[i], cache);
      if (i % 10 === 9) saveCache(cache); // flush periodically in case of crash
      if (hitNetwork && i < packages.length - 1) {
        await new Promise((r) => setTimeout(r, DELAY_MS));
      }
    }
    saveCache(cache);
  } else {
    // No network — apply any cached metadata so dev builds don't lose enrichment
    for (const pkg of packages) applyCache(pkg, cache);
  }

  const withStars = packages.filter((p) => p.githubStars != null).length;
  const withDL = packages.filter((p) => p.weeklyDownloads != null).length;
  const withTypes = packages.filter((p) => p.hasTypes != null).length;
  const withBundle = packages.filter((p) => p.bundleSize != null).length;
  console.log(`[build] Metadata: ${withStars} stars, ${withDL} downloads, ${withTypes} types, ${withBundle} bundle (of ${packages.length})`);

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, JSON.stringify(packages, null, 2));
  console.log(`[build] Generated ${packages.length} packages → src/data/packages.json`);
}

main();
