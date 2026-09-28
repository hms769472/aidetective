import type { UserStats } from "./storage";

export type Achievement = {
  id: string;
  icon: string;
  label: string;
  description: string;
  check: (s: UserStats) => boolean;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first",
    icon: "🔍",
    label: "First Case",
    description: "Solve your first case",
    check: (s) => s.casesSolved.length >= 1,
  },
  {
    id: "three",
    icon: "🧠",
    label: "3 Cases Solved",
    description: "Solve 3 cases",
    check: (s) => s.casesSolved.length >= 3,
  },
  {
    id: "five",
    icon: "🎓",
    label: "5 Cases Solved",
    description: "Solve 5 cases",
    check: (s) => s.casesSolved.length >= 5,
  },
  {
    id: "perfect",
    icon: "🎯",
    label: "Perfect Investigation",
    description: "Score 900+ in any case",
    check: (s) => Object.values(s.bestScores).some((v) => v >= 900),
  },
  {
    id: "streak3",
    icon: "🔥",
    label: "3 Day Streak",
    description: "Solve cases 3 days in a row",
    check: (s) => s.longestStreak >= 3,
  },
  {
    id: "streak7",
    icon: "⚡",
    label: "7 Day Streak",
    description: "Solve cases 7 days in a row",
    check: (s) => s.longestStreak >= 7,
  },
  {
    id: "speed",
    icon: "⏱️",
    label: "Speed Demon",
    description: "Solve a case in under 3 minutes",
    check: (s) => s.attempts.some((a) => a.correct && a.seconds < 180),
  },
  {
    id: "master",
    icon: "🏆",
    label: "Case Master",
    description: "Solve all available cases",
    check: (s) => s.casesSolved.length >= 5,
  },
];

export function getUnlockedAchievements(stats: UserStats): Achievement[] {
  return ACHIEVEMENTS.filter((a) => a.check(stats));
}

export function getNewlyUnlocked(
  before: UserStats,
  after: UserStats
): Achievement[] {
  return ACHIEVEMENTS.filter((a) => !a.check(before) && a.check(after));
}