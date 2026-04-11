"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const primaryLinks = [
  { href: "/", label: "Search" },
  { href: "/analyze", label: "Analyze" },
  { href: "/compare", label: "Compare" },
  { href: "/stack-builder", label: "Stack Builder" },
  { href: "/chat", label: "Chat" },
];

const moreLinks = [
  { href: "/discover", label: "Discover" },
  { href: "/health", label: "Health" },
  { href: "/migrate", label: "Migrate" },
  { href: "/ecosystem", label: "Ecosystem Map" },
  { href: "/trending", label: "Rising Stars" },
  { href: "/leaderboard", label: "Leaderboard" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const moreActive = moreLinks.some((l) => l.href === pathname);

  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-4xl flex items-center justify-between px-4 sm:px-8 h-12">
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight"
        >
          awesome-js-starters
        </Link>
        <div className="flex items-center gap-1">
          {primaryLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* More dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                moreActive
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              More {open ? "▴" : "▾"}
            </button>
            {open && (
              <div className="absolute right-0 top-full mt-1 w-44 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg py-1 z-50">
                {moreLinks.map(({ href, label }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`block px-4 py-2 text-xs font-medium transition-colors ${
                        active
                          ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                          : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
