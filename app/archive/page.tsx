"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { getAllCasesClient } from "@/lib/userCases";
import type { Case } from "@/lib/types";
import { getUserStats, type UserStats } from "@/lib/storage";

export default function ArchivePage() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    setStats(getUserStats());
    setCases(getAllCasesClient());
  }, []);

  return (
    <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <BackButton fallback="/" label="Back to Home" />
        <div className="text-[10px] sm:text-xs tracking-[0.3em] text-[#C9A227]">
          CASE ARCHIVE
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mt-1">All Cases</h1>

        {stats && (
          <div className="mt-3 text-xs sm:text-sm text-[#8993A1]">
            Solved:{" "}
            <span className="text-[#C9A227]">{stats.casesSolved.length}</span> /{" "}
            {cases.length}
          </div>
        )}

        <div className="mt-6 sm:mt-8 grid gap-2 sm:gap-3">
          {cases.map((c) => {
            const solved = stats?.casesSolved.includes(c.id) ?? false;
            const best = stats?.bestScores[c.id] ?? 0;
            const isCustom = c.number >= 11;
            return (
              <Link
                key={c.id}
                href={`/case/${c.id}`}
                className={`p-4 rounded-xl bg-[#11161D] border transition flex justify-between items-center gap-3 ${
                  solved
                    ? "border-[#C9A227]/50 hover:border-[#C9A227]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-[#8993A1] flex items-center gap-2 flex-wrap">
                    CASE #{String(c.number).padStart(3, "0")}
                    {solved && <span className="text-[#C9A227]">✓ SOLVED</span>}
                    {isCustom && <span className="text-[#8993A1]">· CUSTOM</span>}
                  </div>
                  <div className="font-bold text-sm sm:text-base truncate">{c.title}</div>
                  {solved && best > 0 && (
                    <div className="text-[10px] sm:text-xs text-[#C9A227] mt-1">
                      Best score: {best}
                    </div>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[#C9A227] text-xs sm:text-sm">
                    {"⭐".repeat(c.difficulty)}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/play"
            className="flex-1 text-center py-3 rounded-lg bg-[#C9A227] text-black font-semibold hover:bg-[#d8b13a] transition"
          >
            Play Today&apos;s Case
          </Link>
          <Link
            href="/admin"
            className="flex-1 text-center py-3 rounded-lg border border-white/10 hover:border-[#C9A227]/50"
          >
            ⚙️ Case Builder
          </Link>
        </div>
      </div>
    </main>
  );
}