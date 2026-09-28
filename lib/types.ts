export type EvidenceType = "cctv" | "phone" | "bank" | "document" | "witness";

export type Suspect = {
  id: string;
  name: string;
  role: string;
  emoji: string;
  description: string;
  statement: string;
};

export type Evidence = {
  id: string;
  title: string;
  type: EvidenceType;
  icon: string;
  content: string[];
  isKey: boolean;
};

export type TimelineEvent = {
  time: string;
  event: string;
  suspectId?: string;
};

export type Contradiction = {
  suspectId: string;
  evidenceId: string;
  explanation: string;
};

export type CaseSolution = {
  culpritId: string;
  motive: string;
  keyEvidenceIds: string[];
};

export type Case = {
  id: string;
  number: number;
  title: string;
  difficulty: number;
  briefing: string;
  suspects: Suspect[];
  evidence: Evidence[];
  timeline: TimelineEvent[];
  contradictions?: Contradiction[];
  solution: CaseSolution;
};