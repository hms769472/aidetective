export type Attempt = {
  caseId: string;
  correct: boolean;
  score: number;
  seconds: number;
  timestamp: number;
};

export type UserStats = {
  detectiveName: string;
  casesSolved: string[];
  attempts: Attempt[];
  bestScores: Record<string, number>;
  lastPlayedDate: string | null;
  currentStreak: number;
  longestStreak: number;
  /** Map of date (YYYY-MM-DD) -> caseId played that day (if correct) */
  dailyLog: Record<string, string>;
};

const STORAGE_KEY = "casezero_user_stats_v1";

const DEFAULT_STATS: UserStats = {
  detectiveName: "Detective",
  casesSolved: [],
  attempts: [],
  bestScores: {},
  lastPlayedDate: null,
  currentStreak: 0,
  longestStreak: 0,
  dailyLog: {},
};

export function getUserStats(): UserStats {
  if (typeof window === "undefined") return DEFAULT_STATS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATS;
    return { ...DEFAULT_STATS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {}
}

function dateKey(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function recordAttempt(input: {
  caseId: string;
  correct: boolean;
  score: number;
  seconds: number;
}): UserStats {
  const stats = getUserStats();
  const today = dateKey(0);
  const yesterday = dateKey(-1);

  stats.attempts.push({ ...input, timestamp: Date.now() });

  if (input.correct && !stats.casesSolved.includes(input.caseId)) {
    stats.casesSolved.push(input.caseId);
  }

  const currentBest = stats.bestScores[input.caseId] ?? 0;
  if (input.score > currentBest) {
    stats.bestScores[input.caseId] = input.score;
  }

  if (input.correct) {
    if (stats.lastPlayedDate === today) {
      // already counted
    } else if (stats.lastPlayedDate === yesterday) {
      stats.currentStreak += 1;
    } else {
      stats.currentStreak = 1;
    }
    stats.lastPlayedDate = today;
    if (stats.currentStreak > stats.longestStreak) {
      stats.longestStreak = stats.currentStreak;
    }
    stats.dailyLog[today] = input.caseId;
  }

  saveUserStats(stats);
  return stats;
}

export function computeAccuracy(stats: UserStats): number {
  if (stats.attempts.length === 0) return 0;
  const correct = stats.attempts.filter((a) => a.correct).length;
  return Math.round((correct / stats.attempts.length) * 100);
}

export function computeAverageTime(stats: UserStats): number {
  if (stats.attempts.length === 0) return 0;
  const total = stats.attempts.reduce((s, a) => s + a.seconds, 0);
  return Math.round(total / stats.attempts.length);
}

export function setDetectiveName(name: string): UserStats {
  const stats = getUserStats();
  stats.detectiveName = name.trim() || "Detective";
  saveUserStats(stats);
  return stats;
}

export function getDateKey(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function getRecentDays(n: number): string[] {
  const days: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    days.push(getDateKey(-i));
  }
  return days;
}
