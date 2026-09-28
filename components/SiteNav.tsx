"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/daily", label: "Daily", icon: "📅" },
  { href: "/archive", label: "Archive", icon: "📂" },
  { href: "/leaderboard", label: "Leaderboard", icon: "🏆" },
  { href: "/profile", label: "Profile", icon: "👤" },
  { href: "/admin", label: "Admin", icon: "⚙️" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const inCase = pathname?.startsWith("/case/");

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#080B10]/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {inCase && (
            <Link
              href="/"
              className="text-xs sm:text-sm px-2 py-1 rounded-md border border-white/10 text-[#C9A227] hover:bg-[#C9A227]/10 transition shrink-0"
              title="Back to Home"
            >
              ← Back to Home
            </Link>
          )}
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C9A227] hover:text-[#d8b13a] transition shrink-0"
          >
            AI DETECTIVE
          </Link>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-2.5 sm:px-3 py-1.5 rounded-md text-[11px] sm:text-xs whitespace-nowrap transition ${
                  active
                    ? "bg-[#C9A227]/15 text-[#C9A227] font-semibold"
                    : "text-[#8993A1] hover:text-[#E8EDF2]"
                }`}
              >
                <span className="mr-1">{l.icon}</span>
                <span className="hidden sm:inline">{l.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}