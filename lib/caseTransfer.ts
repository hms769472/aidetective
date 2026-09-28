import type { Case } from "./types";
import { getUserCases, saveUserCase } from "./userCases";

export type ExportBundle = {
  version: 1;
  exportedAt: string;
  cases: Case[];
};

export function exportAllCases(): string {
  const cases = getUserCases();
  const bundle: ExportBundle = {
    version: 1,
    exportedAt: new Date().toISOString(),
    cases,
  };
  return JSON.stringify(bundle, null, 2);
}

export function exportSingleCase(c: Case): string {
  const bundle: ExportBundle = {
    version: 1,
    exportedAt: new Date().toISOString(),
    cases: [c],
  };
  return JSON.stringify(bundle, null, 2);
}

export type ImportResult =
  | { ok: true; imported: number; skipped: number; errors: string[] }
  | { ok: false; error: string };

export function importCasesFromJSON(jsonText: string): ImportResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    return { ok: false, error: "Invalid JSON format." };
  }

  if (!parsed || typeof parsed !== "object") {
    return { ok: false, error: "File must contain an object." };
  }

  const obj = parsed as Record<string, unknown>;

  // Accept either a bundle { version, cases } or a raw array or a single case
  let casesToImport: unknown[] = [];
  if (Array.isArray(obj.cases)) {
    casesToImport = obj.cases;
  } else if (Array.isArray(parsed)) {
    casesToImport = parsed;
  } else if (typeof obj.id === "string" && typeof obj.title === "string") {
    casesToImport = [obj];
  } else {
    return { ok: false, error: "No 'cases' array found in file." };
  }

  const errors: string[] = [];
  let imported = 0;
  let skipped = 0;

  const existing = getUserCases();
  const existingIds = new Set(existing.map((c) => c.id));

  for (let i = 0; i < casesToImport.length; i++) {
    const raw = casesToImport[i];
    const validation = validateCase(raw);
    if (!validation.ok) {
      errors.push(`Case #${i + 1}: ${validation.error}`);
      continue;
    }
    const c = validation.case;
    if (existingIds.has(c.id)) {
      // Regenerate ID to avoid collision
      const newId = generateFreshId(existing, c);
      const renamed = { ...c, id: newId };
      saveUserCase(renamed);
      existingIds.add(newId);
      imported++;
    } else {
      saveUserCase(c);
      existingIds.add(c.id);
      imported++;
    }
  }

  return { ok: true, imported, skipped, errors };
}

function generateFreshId(existing: Case[], incoming: Case): string {
  const usedNums = new Set(existing.map((c) => c.number));
  let n = Math.max(incoming.number, 11);
  while (usedNums.has(n)) n++;
  return String(n).padStart(3, "0");
}

type ValidationResult =
  | { ok: true; case: Case }
  | { ok: false; error: string };

function validateCase(raw: unknown): ValidationResult {
  if (!raw || typeof raw !== "object") return { ok: false, error: "not an object" };
  const o = raw as Record<string, unknown>;

  const requiredStrings = ["id", "title", "briefing"];
  for (const key of requiredStrings) {
    if (typeof o[key] !== "string" || !(o[key] as string).trim()) {
      return { ok: false, error: `missing or invalid '${key}'` };
    }
  }
  if (typeof o.number !== "number") return { ok: false, error: "missing 'number'" };
  if (typeof o.difficulty !== "number") return { ok: false, error: "missing 'difficulty'" };
  if (!Array.isArray(o.suspects) || (o.suspects as unknown[]).length < 3)
    return { ok: false, error: "need at least 3 suspects" };
  if (!Array.isArray(o.evidence) || (o.evidence as unknown[]).length < 3)
    return { ok: false, error: "need at least 3 evidence" };
  if (!Array.isArray(o.timeline) || (o.timeline as unknown[]).length < 2)
    return { ok: false, error: "need at least 2 timeline events" };
  if (!o.solution || typeof o.solution !== "object")
    return { ok: false, error: "missing 'solution'" };

  const sol = o.solution as Record<string, unknown>;
  if (typeof sol.culpritId !== "string") return { ok: false, error: "missing culpritId" };
  if (typeof sol.motive !== "string") return { ok: false, error: "missing motive" };
  if (!Array.isArray(sol.keyEvidenceIds) || (sol.keyEvidenceIds as unknown[]).length < 2)
    return { ok: false, error: "need at least 2 keyEvidenceIds" };

  return { ok: true, case: raw as Case };
}