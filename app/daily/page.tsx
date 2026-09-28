"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { getDailyCase } from "@/data/cases";
import {
  getUserStats,
  getRecentDays,
  computeAccuracy,
  type UserStats,
} from "@/lib/storage";
import { formatTime } from "@/lib/scoring";

export default function DailyPage() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const daily = getDailyCase();
  const todayKey = getRecentDays(1)[0];
  const playedToday = stats?.dailyLog[todayKey] === daily.id;

  useEffect(() => {
    setStats(getUserStats());
  }, []);

  if (!stats) {
    return (
      <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] flex items-center justify-center">
        <div className="text-[#8993A1]">Loading daily hub...</div>
      </main>
    );
  }

  const last30 = getRecentDays(30);
  const accuracy = computeAccuracy(stats);

  return (
    <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <BackButton fallback="/" label="Back to Home" />
        <div className="text-[10px] sm:text-xs tracking-[0.3em] text-[#C9A227]">
          DAILY HUB
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mt-1">Today&apos;s Case</h1>

        {/* Today's case card */}
        <div className="mt-6 p-5 sm:p-6 rounded-xl bg-[#11161D] border border-white/10">
          <div className="flex items-center justify-between">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] text-[#C9A227]">
              CASE #{String(daily.number).padStart(3, "0")}
            </div>
            <div className="text-xs text-[#8993A1]">
              {"⭐".repeat(daily.difficulty)}
            </div>
          </div>
          <div className="mt-2 text-xl sm:text-2xl font-bold">{daily.title}</div>
          <p className="mt-3 text-sm text-[#8993A1] leading-relaxed line-clamp-3">
            {daily.briefing}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#8993A1]">
            <span>👥 {daily.suspects.length} suspects</span>
            <span>📁 {daily.evidence.length} evidence</span>
            <span>⏱ 15-20 min</span>
          </div>

          {playedToday ? (
            <div className="mt-6 p-4 rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/40">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <div className="text-sm font-semibold text-[#C9A227]">
                    Solved today
                  </div>
                  <div className="text-xs text-[#8993A1]">
                    Best score: {stats.bestScores[daily.id] ?? 0} —{" "}
                    <Link href={`/case/${daily.id}`} className="underline">
                      play again
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              href={`/case/${daily.id}`}
              className="mt-6 block text-center px-6 py-3 rounded-lg bg-[#C9A227] text-black font-bold hover:bg-[#d8b13a] transition active:scale-[0.99]"
            >
              START TODAY&apos;S CASE →
            </Link>
          )}
        </div>

        {/* Streak stats */}
        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
          <Stat label="Current Streak" value={`🔥 ${stats.currentStreak}d`} />
          <Stat label="Longest Streak" value={`⚡ ${stats.longestStreak}d`} />
          <Stat label="Accuracy" value={`🎯 ${accuracy}%`} />
        </div>

        {/* 30-day calendar */}
        <div className="mt-8">
          <div className="text-xs uppercase tracking-wider text-[#8993A1] mb-3">
            Last 30 Days
          </div>
          <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
            {last30.map((day) => {
              const played = stats.dailyLog[day];
              const isToday = day === todayKey;
              return (
                <div
                  key={day}
                  title={day + (played ? " ✓" : "")}
                  className={`aspect-square rounded-md border transition ${
                    played
                      ? "bg-[#C9A227] border-[#C9A227]"
                      : "bg-[#11161D] border-white/10"
                  } ${isToday ? "ring-2 ring-[#C9A227]/60" : ""}`}
                />
              );
            })}
          </div>
          <div className="mt-3 flex items-center gap-4 text-[10px] text-[#8993A1]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#C9A227]" />
              <span>Solved</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#11161D] border border-white/10" />
              <span>Missed</span>
            </div>
          </div>
        </div>

        {/* Recent attempts */}
        {stats.attempts.length > 0 && (
          <div className="mt-8">
            <div className="text-xs uppercase tracking-wider text-[#8993A1] mb-3">
              Recent Attempts
            </div>
            <div className="rounded-xl bg-[#11161D] border border-white/10 divide-y divide-white/5">
              {stats.attempts
                .slice()
                .reverse()
                .slice(0, 5)
                .map((a, i) => {
                  const c = getCaseNum(a.caseId);
                  return (
                    <div
                      key={i}
                      className="p-3 sm:p-4 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="text-xs text-[#8993A1]">
                          CASE #{c}
                        </div>
                        <div
                          className={`text-sm font-semibold truncate ${
                            a.correct ? "text-[#C9A227]" : "text-red-400"
                          }`}
                        >
                          {a.correct ? "Solved" : "Failed"} · {a.score} pts
                        </div>
                      </div>
                      <div className="text-xs text-[#8993A1] font-mono shrink-0">
                        {formatTime(a.seconds)}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/archive"
            className="flex-1 text-center py-3 rounded-lg border border-white/10 hover:border-white/30"
          >
            📂 All Cases
          </Link>
          <Link
            href="/profile"
            className="flex-1 text-center py-3 rounded-lg border border-white/10 hover:border-white/30"
          >
            👤 Profile
          </Link>
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 sm:p-4 rounded-lg bg-[#11161D] border border-white/10 text-center">
      <div className="text-base sm:text-lg font-bold text-[#C9A227]">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-[#8993A1] mt-1">
        {label}
      </div>
    </div>
  );
}

function getCaseNum(caseId: string): string {
  return caseId.padStart(3, "0");
}