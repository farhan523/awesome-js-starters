"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMoreOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const moreActive = moreLinks.some((l) => l.href === pathname);
  const allLinks = [...primaryLinks, ...moreLinks];

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
    >
      <div className="mx-auto flex h-12 w-full max-w-5xl items-center justify-between gap-2 px-3 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect width="18" height="18" rx="5" fill="#5e6ad2" />
            <path d="M4 9h10M4 6h7M4 12h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="truncate text-sm font-semibold tracking-tight text-foreground">
            awesome-js-starters
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {primaryLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-[13px] font-medium tracking-tight transition-colors",
                  active
                    ? "bg-white/6 text-foreground"
                    : "text-muted-foreground hover:text-secondary-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              className={cn(
                "flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[13px] font-medium tracking-tight transition-colors",
                moreActive
                  ? "bg-white/6 text-foreground"
                  : "text-muted-foreground hover:text-secondary-foreground"
              )}
            >
              More
              <ChevronDownIcon
                className={cn(
                  "size-3 opacity-60 transition-transform",
                  moreOpen && "rotate-180"
                )}
              />
            </button>

            {moreOpen && (
              <div
                className="absolute top-full right-0 z-50 mt-1.5 w-44 rounded-lg border border-border bg-popover py-1 shadow-lg"
              >
                {moreLinks.map(({ href, label }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "block px-3 py-2 text-[13px] transition-colors",
                        active
                          ? "bg-white/5 font-medium text-foreground"
                          : "text-muted-foreground hover:bg-white/4 hover:text-secondary-foreground"
                      )}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href="https://github.com/farhan523/awesome-js-starters/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <Button className="h-8 rounded-md px-3 text-[13px]"> 
              Submit
            </Button>
          </a>
        </div>

        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <MenuIcon className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="mt-6 space-y-2">
                {allLinks.map(({ href, label }) => {
                  const active = pathname === href
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm transition-colors",
                        active
                          ? "bg-white/6 font-medium text-foreground"
                          : "text-secondary-foreground hover:bg-white/4 hover:text-foreground"
                      )}
                    >
                      {label}
                    </Link>
                  )
                })}
              </div>
              <Separator className="my-2" />
              <a
                href="https://github.com/farhan523/awesome-js-starters/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button className="h-9 w-full rounded-md text-sm">
                  Submit
                </Button>
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
