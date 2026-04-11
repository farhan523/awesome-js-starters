import type { Package } from "@/lib/types";
import packagesData from "@/data/packages.json";

const packages = packagesData as Package[];

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://awesome-js-starters.vercel.app";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = packages
    .map((pkg) => {
      const repoUrl = `https://github.com/farhan523/awesome-js-starters/tree/main/${pkg.repoPath}`;
      const pubDate = pkg.lastUpdated
        ? new Date(pkg.lastUpdated).toUTCString()
        : new Date().toUTCString();

      return `    <item>
      <title>${escapeXml(pkg.name)}</title>
      <link>${escapeXml(repoUrl)}</link>
      <description>${escapeXml(pkg.description || "")}</description>
      <category>${escapeXml(pkg.category)}</category>
      <pubDate>${pubDate}</pubDate>
      <guid>${escapeXml(repoUrl)}</guid>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>awesome-js-starters</title>
    <link>${siteUrl}</link>
    <description>Community-curated npm packages you didn't know you needed</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
