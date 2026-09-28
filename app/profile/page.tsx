"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import {
  getUserStats,
  computeAccuracy,
  computeAverageTime,
  setDetectiveName,
  type UserStats,
} from "@/lib/storage";
import { ALL_CASES } from "@/data/cases";
import { formatTime } from "@/lib/scoring";

export default function ProfilePage() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [editing, setEditing] = useState(false);
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    const s = getUserStats();
    setStats(s);
    setNameInput(s.detectiveName);
  }, []);

  if (!stats) {
    return (
      <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] flex items-center justify-center">
        <div className="text-[#8993A1]">Loading profile...</div>
      </main>
    );
  }

  const accuracy = computeAccuracy(stats);
  const avgTime = computeAverageTime(stats);
  const perfectCases = Object.values(stats.bestScores).filter((s) => s >= 900).length;
  const rank = getRank(stats.casesSolved.length);

  const saveName = () => {
    const updated = setDetectiveName(nameInput);
    setStats(updated);
    setEditing(false);
  };

  return (
    <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <BackButton fallback="/" label="Back to Home" />
        <div className="text-[10px] sm:text-xs tracking-[0.3em] text-[#C9A227]">
          DETECTIVE PROFILE
        </div>

        {editing ? (
          <div className="mt-2 flex flex-col sm:flex-row gap-2">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              maxLength={20}
              className="text-2xl sm:text-3xl font-bold bg-transparent border-b-2 border-[#C9A227] outline-none text-[#E8EDF2] flex-1 py-1"
              autoFocus
            />
            <button
              onClick={saveName}
              className="px-4 py-2 rounded-lg bg-[#C9A227] text-black font-semibold text-sm"
            >
              Save
            </button>
          </div>
        ) : (
          <h1
            className="text-2xl sm:text-3xl font-bold mt-1 cursor-pointer hover:text-[#C9A227] transition inline-flex items-center gap-2"
            onClick={() => setEditing(true)}
            title="Click to rename"
          >
            {stats.detectiveName}
            <span className="text-sm text-[#8993A1]">✎</span>
          </h1>
        )}

        <div className="text-[#8993A1] mt-2 text-sm">
          Rank: <span className="text-[#C9A227] font-semibold">{rank}</span>
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          <Stat label="Cases Solved" value={`${stats.casesSolved.length}/${ALL_CASES.length}`} />
          <Stat label="Accuracy" value={`${accuracy}%`} />
          <Stat label="Avg Time" value={avgTime ? formatTime(avgTime) : "--:--"} />
          <Stat label="Streak" value={`${stats.currentStreak}d`} />
        </div>

        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          <Stat label="Attempts" value={String(stats.attempts.length)} />
          <Stat label="Perfect (900+)" value={String(perfectCases)} />
          <Stat label="Longest Streak" value={`${stats.longestStreak}d`} />
          <Stat label="Achievements" value={String(getAchievements(stats).length)} />
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="text-xs uppercase tracking-wider text-[#8993A1] mb-3">
            Achievements
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
            {ACHIEVEMENTS.map((a) => {
              const unlocked = a.check(stats);
              return (
                <div
                  key={a.id}
                  className={`p-3 sm:p-4 rounded-lg border ${
                    unlocked
                      ? "border-[#C9A227]/50 bg-[#C9A227]/10"
                      : "border-white/10 bg-[#11161D] opacity-50"
                  }`}
                >
                  <div className="text-xl sm:text-2xl">{a.icon}</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#E8EDF2] mt-1">
                    {a.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#8993A1] mt-1">
                    {a.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/play"
            className="flex-1 text-center py-3 rounded-lg bg-[#C9A227] text-black font-semibold hover:bg-[#d8b13a] transition"
          >
            Play Today&apos;s Case
          </Link>
          <Link
            href="/archive"
            className="flex-1 text-center py-3 rounded-lg border border-white/10 hover:border-white/30"
          >
            Case Archive
          </Link>
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 sm:p-4 rounded-lg bg-[#11161D] border border-white/10">
      <div className="text-lg sm:text-xl font-bold text-[#C9A227]">{value}</div>
      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8993A1] mt-1">
        {label}
      </div>
    </div>
  );
}

function getRank(solved: number): string {
  if (solved >= 20) return "Chief Investigator";
  if (solved >= 10) return "Inspector";
  if (solved >= 5) return "Senior Detective";
  if (solved >= 3) return "Detective";
  if (solved >= 1) return "Investigator";
  return "Rookie";
}

const ACHIEVEMENTS = [
  { id: "first", icon: "🔍", label: "First Case", description: "Solve your first case", check: (s: UserStats) => s.casesSolved.length >= 1 },
  { id: "five", icon: "🧠", label: "5 Cases Solved", description: "Solve 5 cases", check: (s: UserStats) => s.casesSolved.length >= 5 },
  { id: "perfect", icon: "🎯", label: "Perfect Investigation", description: "Score 900+ in any case", check: (s: UserStats) => Object.values(s.bestScores).some((v) => v >= 900) },
  { id: "streak3", icon: "🔥", label: "3 Day Streak", description: "Solve cases 3 days in a row", check: (s: UserStats) => s.longestStreak >= 3 },
  { id: "streak7", icon: "⚡", label: "7 Day Streak", description: "Solve cases 7 days in a row", check: (s: UserStats) => s.longestStreak >= 7 },
  { id: "all", icon: "🏆", label: "Case Master", description: "Solve all available cases", check: (s: UserStats) => s.casesSolved.length >= 5 },
] as const;

function getAchievements(stats: UserStats) {
  return ACHIEVEMENTS.filter((a) => a.check(stats));
}