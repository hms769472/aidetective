import type { Case } from "./types";
import { ALL_CASES as STATIC_CASES } from "@/data/cases";

const STORAGE_KEY = "casezero_user_cases_v1";

export function getUserCases(): Case[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveUserCase(c: Case): void {
  if (typeof window === "undefined") return;
  const all = getUserCases();
  const existingIdx = all.findIndex((x) => x.id === c.id);
  if (existingIdx >= 0) all[existingIdx] = c;
  else all.push(c);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function deleteUserCase(id: string): void {
  if (typeof window === "undefined") return;
  const all = getUserCases().filter((c) => c.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function getAllCasesClient(): Case[] {
  return [...STATIC_CASES, ...getUserCases()];
}

export function getCaseByIdClient(id: string): Case | undefined {
  const staticMatch = STATIC_CASES.find((c) => c.id === id);
  if (staticMatch) return staticMatch;
  return getUserCases().find((c) => c.id === id);
}

export function getNextCustomCaseId(): string {
  const userCases = getUserCases();
  const usedNumbers = new Set<number>();
  for (const c of [...STATIC_CASES, ...userCases]) {
    usedNumbers.add(c.number);
  }
  let n = 11;
  while (usedNumbers.has(n)) n++;
  return String(n).padStart(3, "0");
}