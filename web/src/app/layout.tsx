import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://awesome-js-starters.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "awesome-js-starters — Find npm packages by use case",
    template: "%s | awesome-js-starters",
  },
  description:
    "Describe what you want to build and instantly discover community-curated npm packages that fit your use case — not just tags.",
  keywords: [
    "npm packages",
    "javascript",
    "typescript",
    "react",
    "nodejs",
    "package discovery",
    "developer tools",
  ],
  authors: [{ name: "awesome-js-starters community" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "awesome-js-starters",
    title: "Find npm packages by use case",
    description:
      "Describe what you want to build and instantly discover community-curated npm packages that fit your use case.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find npm packages by use case",
    description:
      "Describe what you want to build and instantly discover community-curated npm packages that fit your use case.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Nav />{children}<Analytics /></body>
    </html>
  );
}
