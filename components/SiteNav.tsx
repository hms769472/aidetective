"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AudioToggle from "./AudioToggle";

const LINKS = [
  { href: "/", label: "Home", icon: "🏠", short: "Home" },
  { href: "/daily", label: "Daily", icon: "📅", short: "Daily" },
  { href: "/archive", label: "Archive", icon: "📂", short: "Files" },
  { href: "/leaderboard", label: "Leaderboard", icon: "🏆", short: "Ranks" },
  { href: "/profile", label: "Profile", icon: "👤", short: "You" },
  { href: "/admin", label: "Admin", icon: "⚙️", short: "Build" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const inCase = pathname?.startsWith("/case/");

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#080B10]/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 flex items-center justify-between gap-2">
        {/* LEFT: Back button (case only) + Logo */}
        <div className="flex items-center gap-2 shrink-0">
          {inCase && (
            <Link
              href="/"
              className="text-[11px] sm:text-xs px-2 py-1.5 rounded-md border border-white/10 text-[#C9A227] hover:bg-[#C9A227]/10 transition shrink-0"
              title="Back to Home"
            >
              <span className="sm:hidden">←</span>
              <span className="hidden sm:inline">← Back</span>
            </Link>
          )}
          <Link
            href="/"
            className="text-[11px] sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#C9A227] hover:text-[#d8b13a] transition whitespace-nowrap"
          >
            <span className="hidden sm:inline">AI DETECTIVE</span>
            <span className="sm:hidden">AI·D</span>
          </Link>
        </div>

        {/* MIDDLE: Nav links */}
        <div className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto flex-1 justify-center min-w-0">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                title={l.label}
                className={`flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-md text-[11px] sm:text-xs whitespace-nowrap transition shrink-0 ${
                  active
                    ? "bg-[#C9A227]/15 text-[#C9A227] font-semibold"
                    : "text-[#8993A1] hover:text-[#E8EDF2] hover:bg-white/5"
                }`}
              >
                <span className="text-sm leading-none">{l.icon}</span>
                <span className="hidden lg:inline">{l.label}</span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT: AudioToggle (rightmost) */}
        <div className="shrink-0">
          <AudioToggle />
        </div>
      </div>
    </nav>
  );
}