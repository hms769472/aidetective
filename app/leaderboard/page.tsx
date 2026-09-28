"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { getUserStats, type UserStats } from "@/lib/storage";
import { ALL_CASES } from "@/data/cases";
import { formatTime } from "@/lib/scoring";

type Row = {
  rank: number;
  name: string;
  time: string;
  score: number;
  isYou?: boolean;
};

export default function LeaderboardPage() {
  const [stats, setStats] = useState<UserStats | null>(null);

  useEffect(() => {
    setStats(getUserStats());
  }, []);

  const yourBestScore = stats
    ? Math.max(0, ...Object.values(stats.bestScores))
    : 0;
  const yourBestTime = stats
    ? Math.min(
        ...stats.attempts.filter((a) => a.correct).map((a) => a.seconds),
        Number.POSITIVE_INFINITY
      )
    : Number.POSITIVE_INFINITY;

  const yourName = stats?.detectiveName ?? "You";

  const baseRows: Row[] = [
    { rank: 1, name: "Detective_91", time: "03:42", score: 1280 },
    { rank: 2, name: "ShadowFox", time: "04:11", score: 1210 },
    { rank: 3, name: "CaseHunter", time: "04:28", score: 1150 },
    { rank: 4, name: "Ahmed", time: "05:17", score: 1090 },
    { rank: 5, name: "Sarah", time: "06:44", score: 1020 },
  ];

  const yourRow: Row | null =
    stats && stats.attempts.length > 0
      ? {
          rank: 0, // filled in below
          name: yourName,
          time: Number.isFinite(yourBestTime) ? formatTime(yourBestTime) : "--:--",
          score: yourBestScore,
          isYou: true,
        }
      : null;

  const combined: Row[] = yourRow
    ? [...baseRows, yourRow].sort((a, b) => b.score - a.score)
    : baseRows;

  combined.forEach((r, i) => {
    r.rank = i + 1;
  });

  return (
    <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <BackButton fallback="/" label="Back to Home" />
        <div className="text-xs tracking-[0.3em] text-[#C9A227]">GLOBAL RANKING</div>
        <h1 className="text-3xl font-bold mt-1">Leaderboard</h1>
        <p className="text-sm text-[#8993A1] mt-2">
          Scores are based on culprit, motive, evidence, contradictions and speed.
        </p>

        {stats && stats.attempts.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Stat label="Your Cases" value={`${stats.casesSolved.length}/${ALL_CASES.length}`} />
            <Stat label="Best Score" value={String(yourBestScore)} />
            <Stat label="Streak" value={`${stats.currentStreak} day${stats.currentStreak === 1 ? "" : "s"}`} />
          </div>
        )}

        <div className="mt-8 rounded-xl border border-white/10 bg-[#11161D] divide-y divide-white/5">
          {combined.map((r) => (
            <div
              key={r.name + r.rank}
              className={`p-4 flex items-center justify-between ${
                r.isYou ? "bg-[#C9A227]/10" : ""
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="w-8 text-[#C9A227] font-mono shrink-0">
                  #{r.rank}
                </span>
                <span className={`font-semibold truncate ${r.isYou ? "text-[#C9A227]" : ""}`}>
                  {r.isYou ? `${r.name} (you)` : r.name}
                </span>
              </div>
              <div className="flex gap-6 text-sm shrink-0 ml-4">
                <span className="text-[#8993A1] font-mono">{r.time}</span>
                <span className="text-[#C9A227] font-mono">{r.score}</span>
              </div>
            </div>
          ))}
        </div>

        {(!stats || stats.attempts.length === 0) && (
          <div className="mt-6 text-center text-sm text-[#8993A1]">
            Solve a case to appear on the leaderboard.{" "}
            <Link href="/play" className="text-[#C9A227] underline">
              Play now →
            </Link>
          </div>
        )}

        <div className="mt-8 flex gap-3">
          <Link
            href="/play"
            className="flex-1 text-center py-3 rounded-lg bg-[#C9A227] text-black font-semibold hover:bg-[#d8b13a] transition"
          >
            Play Today&apos;s Case
          </Link>
          <Link
            href="/profile"
            className="flex-1 text-center py-3 rounded-lg border border-white/10 hover:border-white/30"
          >
            View Profile
          </Link>
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-lg bg-[#11161D] border border-white/10">
      <div className="text-xl font-bold text-[#C9A227]">{value}</div>
      <div className="text-xs uppercase tracking-wider text-[#8993A1] mt-1">{label}</div>
    </div>
  );
}