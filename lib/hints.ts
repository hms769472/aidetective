import type { Case } from "./types";

export type Hint = {
  level: 1 | 2 | 3;
  text: string;
  cost: number;
};

/**
 * Generate 3 progressive hints from case data.
 * Level 1 = general direction (cheap, -30 pts)
 * Level 2 = suspect hint     (medium, -80 pts)
 * Level 3 = direct reveal    (expensive, -200 pts)
 */
export function getHints(caseData: Case): Hint[] {
  const contradictions = caseData.contradictions ?? [];

  // ---------- Level 1: Direction ----------
  const culpritContradictions = contradictions.filter(
    (c) => c.suspectId === caseData.solution.culpritId
  );
  const totalSuspects = caseData.suspects.length;

  const level1 = culpritContradictions.length > 0
    ? `Focus on contradictions. ${culpritContradictions.length} of them point to the killer — check each suspect's statement against the evidence board.`
    : `Re-examine the timeline carefully. The killer was present during the ${caseData.timeline[Math.floor(caseData.timeline.length / 2)]?.time ?? "critical window"} gap.`;

  // ---------- Level 2: Suspect ----------
  const culprit = caseData.suspects.find((s) => s.id === caseData.solution.culpritId);
  const initials = culprit ? culprit.name.charAt(0) : "?";
  const roleHint = culprit?.role ?? "";

  const level2 = culprit
    ? `The killer's name starts with "${initials}" — they are the ${roleHint}. Look closely at their alibi.`
    : `The killer is among the ${totalSuspects} suspects. Their alibi does not match the timeline.`;

  // ---------- Level 3: Direct reveal ----------
  const keyEvTitles = caseData.evidence
    .filter((e) => caseData.solution.keyEvidenceIds.includes(e.id))
    .map((e) => e.icon + " " + e.title)
    .slice(0, 4)
    .join("\n  ");

  const level3 = culprit
    ? `The killer is ${culprit.name}.\n\nKey evidence to select:\n  ${keyEvTitles}`
    : `Focus on the key evidence items.`;

  return [
    { level: 1, text: level1, cost: 30 },
    { level: 2, text: level2, cost: 80 },
    { level: 3, text: level3, cost: 200 },
  ];
}