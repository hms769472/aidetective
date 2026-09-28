export type ScoreInput = {
  isCulpritCorrect: boolean;
  isMotiveCorrect: boolean;
  selectedEvidenceIds: string[];
  keyEvidenceIds: string[];
  discoveredEvidenceCount: number;
  totalEvidenceCount: number;
  contradictionsFound: number;
  totalContradictions: number;
  hintPenalty: number;
  secondsTaken: number;
};

export type ScoreResult = {
  total: number;
  breakdown: { label: string; value: number }[];
};

export function calculateScore(input: ScoreInput): ScoreResult {
  const breakdown: { label: string; value: number }[] = [];

  if (input.isCulpritCorrect) breakdown.push({ label: "Correct culprit", value: 500 });
  else breakdown.push({ label: "Wrong culprit", value: -200 });

  if (input.isCulpritCorrect && input.isMotiveCorrect)
    breakdown.push({ label: "Correct motive", value: 200 });

  const correctEvidence = input.selectedEvidenceIds.filter((id) =>
    input.keyEvidenceIds.includes(id)
  ).length;
  const wrongEvidence = input.selectedEvidenceIds.length - correctEvidence;
  breakdown.push({ label: `Key evidence matched (${correctEvidence})`, value: correctEvidence * 100 });
  if (wrongEvidence > 0)
    breakdown.push({ label: `Wrong evidence (${wrongEvidence})`, value: wrongEvidence * -20 });

  breakdown.push({
    label: `Evidence discovered (${input.discoveredEvidenceCount}/${input.totalEvidenceCount})`,
    value: input.discoveredEvidenceCount * 10,
  });

  if (input.totalContradictions > 0) {
    breakdown.push({
      label: `Contradictions found (${input.contradictionsFound}/${input.totalContradictions})`,
      value: input.contradictionsFound * 50,
    });
  }

  const timeBonus = Math.max(0, 300 - Math.floor(input.secondsTaken / 2));
  breakdown.push({ label: "Speed bonus", value: timeBonus });

  if (input.hintPenalty > 0) {
    breakdown.push({ label: "Hints used", value: -input.hintPenalty });
  }

  const total = breakdown.reduce((s, b) => s + b.value, 0);
  return { total, breakdown };
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}