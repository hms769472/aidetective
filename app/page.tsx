"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getDailyCase, ALL_CASES } from "@/data/cases";
import { getUserStats, type UserStats } from "@/lib/storage";

export default function Home() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const daily = getDailyCase();

  useEffect(() => {
    setStats(getUserStats());
  }, []);

  return (
    <main className="relative min-h-screen bg-[#080B10] text-[#E8EDF2] overflow-hidden">
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-40 z-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.4) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top meta bar */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#C9A227]/80 border-b border-[#C9A227]/15 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
            <span>Case Terminal · Live</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-[#8993A1]">
              {stats?.currentStreak ? `Streak ${stats.currentStreak}d` : "Rookie"}
            </span>
            <span className="text-[#8993A1]">v1.0</span>
          </div>
        </div>

        {/* Hero + Today's case */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 mt-10 sm:mt-16">
          {/* Left column */}
          <div className="lg:pt-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#C9A227]/60" />
              <span className="text-[10px] tracking-[0.45em] text-[#C9A227] font-medium">
                AI DETECTIVE
              </span>
            </div>

            <h1 className="leading-[1.05]">
              <span
                className="block text-xl sm:text-2xl lg:text-3xl font-light text-[#8993A1] tracking-[0.25em] slow-blink mb-2"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                EVERY CLUE
              </span>
              <span
                className="block text-3xl sm:text-4xl lg:text-6xl font-bold shimmer-text whitespace-nowrap"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  backgroundImage:
                    "linear-gradient(90deg, #8a6d1a 0%, #C9A227 25%, #ffffff 50%, #C9A227 75%, #8a6d1a 100%)",
                  letterSpacing: "-0.02em",
                }}
              >
                TELLS A STORY
              </span>
            </h1>

            <p
              className="mt-6 text-lg sm:text-xl text-[#8993A1] max-w-md leading-relaxed italic"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Not every story tells the truth.
            </p>

            <div className="mt-6 mb-6 w-16 h-px bg-gradient-to-r from-[#C9A227]/60 to-transparent" />

            <p className="text-sm text-[#8993A1] max-w-md leading-relaxed">
              A daily detective investigation. Read evidence, catch contradictions, accuse the right suspect — before everyone else.
            </p>

            {stats && stats.currentStreak > 0 && (
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/40">
                <span className="text-[#C9A227]">🔥</span>
                <span className="text-xs sm:text-sm text-[#E8EDF2]">
                  {stats.currentStreak} day streak — keep going
                </span>
              </div>
            )}

            <div className="mt-8 space-y-1 max-w-md">
              <MenuLink href="/daily" label="New Case" active />
              <MenuLink href="/archive" label={`Case Files (${ALL_CASES.length})`} />
              <MenuLink href="/leaderboard" label="Leaderboard" />
              <MenuLink href="/profile" label="Profile" />
              <MenuLink href="/admin" label="Case Builder" />
            </div>
          </div>

          {/* Right column — image + Today's case */}
          <div className="lg:pt-20 space-y-5">
            {/* Hero detective image */}
            <div className="relative rounded-lg overflow-hidden border border-[#C9A227]/40 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/aidetect.jpeg"
                alt="AI Detective"
                className="w-full h-auto block"
              />
            </div>

            {/* Today's case card */}
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #1a1710 0%, #0f0c07 100%)",
                border: "1px solid rgba(201,162,39,0.35)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              }}
            >
              <div className="px-5 py-3 border-b border-[#C9A227]/25 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227] font-bold">
                    Today&apos;s Case
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8993A1]">
                  #{String(daily.number).padStart(3, "0")}
                </span>
              </div>

              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227] mb-2">
                  Difficulty {"★".repeat(daily.difficulty)}
                  <span className="text-[#8993A1]/40">
                    {"★".repeat(5 - daily.difficulty)}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#E8EDF2] leading-tight">
                  {daily.title}
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-[10px] uppercase tracking-wider text-[#8993A1]">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#C9A227]">◉</span>
                    {daily.suspects.length} suspects
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#C9A227]">◆</span>
                    {daily.evidence.length} evidence
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#C9A227]">⏱</span>
                    15-20 min
                  </span>
                </div>

                <Link
                  href="/play"
                  className="group mt-5 flex items-center justify-between w-full py-3.5 px-5 rounded-md font-bold tracking-wider uppercase text-sm transition-all active:scale-[0.99]"
                  style={{
                    background: "linear-gradient(180deg, #C9A227 0%, #a8821f 100%)",
                    color: "#080B10",
                    boxShadow: "0 4px 20px rgba(201,162,39,0.35)",
                  }}
                >
                  <span>Open Case File</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        {stats && stats.casesSolved.length > 0 && (
          <div className="mt-16 pt-6 border-t border-[#C9A227]/15 grid grid-cols-3 gap-4 text-center">
            <Stat
              label="Solved"
              value={`${stats.casesSolved.length}/${ALL_CASES.length}`}
            />
            <Stat
              label="Accuracy"
              value={`${Math.round(
                (stats.attempts.filter((a) => a.correct).length /
                  Math.max(stats.attempts.length, 1)) *
                  100
              )}%`}
            />
            <Stat label="Streak" value={`${stats.currentStreak}d`} />
          </div>
        )}

        {/* Behind the investigation */}
        <section className="mt-20 pt-10 border-t border-[#C9A227]/15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#C9A227]/60" />
                <span className="text-[10px] tracking-[0.45em] text-[#C9A227] uppercase font-medium">
                  Behind the Investigation
                </span>
              </div>

              <h2 className="leading-[1.05]">
                <span
                  className="block text-3xl sm:text-4xl lg:text-5xl font-light text-[#E8EDF2] tracking-tight"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Every clue,
                </span>
                <span
                  className="block text-3xl sm:text-4xl lg:text-5xl font-bold mt-1 shimmer-text"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    backgroundImage:
                      "linear-gradient(90deg, #8a6d1a 0%, #C9A227 25%, #ffffff 50%, #C9A227 75%, #8a6d1a 100%)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  PINNED TO THE BOARD.
                </span>
              </h2>

              <p
                className="mt-6 text-base sm:text-lg text-[#8993A1] leading-relaxed italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Read between the lines. Find the liar.
              </p>

              <div className="mt-6 w-16 h-px bg-gradient-to-r from-[#C9A227]/60 to-transparent" />

              <p className="mt-6 text-sm text-[#8993A1] leading-relaxed max-w-md">
                Suspects, statements, evidence — connected with red string on a
                detective&apos;s cork board. Every case is a puzzle. Every suspect
                has a story. Only one is lying.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden border border-[#C9A227]/30 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/detectthumbnail.jpeg"
                  alt="Detective at work"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Morrow Foundry credit */}
        <section className="mt-20 pt-10 border-t border-[#C9A227]/15">
          <div className="text-center">
            <div className="text-[10px] tracking-[0.45em] text-[#C9A227] uppercase">
              — A Game By —
            </div>
            <div
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8EDF2] mt-4 tracking-wide"
              style={{ fontFamily: "Georgia, serif" }}
            >
              MORROW FOUNDRY
            </div>
            <div className="mt-3 text-xs text-[#8993A1] tracking-wider">
              Half Moon Bay, United States
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function MenuLink({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 px-4 py-3 rounded-sm border-l-2 transition-all ${
        active
          ? "bg-[#C9A227]/10 border-[#C9A227] text-[#E8EDF2]"
          : "border-transparent text-[#8993A1] hover:bg-white/[0.03] hover:border-[#C9A227]/40 hover:text-[#E8EDF2]"
      }`}
    >
      <span
        className={`text-xs transition-transform group-hover:translate-x-1 ${
          active ? "text-[#C9A227]" : "text-[#8993A1]"
        }`}
      >
        {active ? "▶" : "›"}
      </span>
      <span className="text-sm font-semibold tracking-wider uppercase">
        {label}
      </span>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-[#C9A227] font-mono">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-[#8993A1] mt-1">
        {label}
      </div>
    </div>
  );
}