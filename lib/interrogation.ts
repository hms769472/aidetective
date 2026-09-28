import type { Suspect } from "./types";

export type QA = {
  /** Keywords that trigger this answer (lowercase) */
  keywords: string[];
  /** The answer the suspect gives */
  answer: string;
};

export type SuspectInterrogation = {
  suspectId: string;
  /** Intro shown when chat opens */
  intro: string;
  /** Fallback when nothing matches */
  fallback: string;
  /** Topic-based Q&A */
  qa: QA[];
};

export function matchAnswer(
  interrogation: SuspectInterrogation,
  question: string
): string {
  const q = question.toLowerCase().trim();
  if (!q) return interrogation.fallback;

  let bestMatch: QA | null = null;
  let bestScore = 0;

  for (const qa of interrogation.qa) {
    let score = 0;
    for (const kw of qa.keywords) {
      if (q.includes(kw.toLowerCase())) {
        score += kw.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = qa;
    }
  }

  return bestMatch ? bestMatch.answer : interrogation.fallback;
}

export function getSuggestedQuestions(
  interrogation: SuspectInterrogation,
  count = 4
): string[] {
  const suggestions: string[] = [];
  for (const qa of interrogation.qa) {
    if (qa.keywords.length > 0) {
      const kw = qa.keywords[0];
      suggestions.push(capitalize(kw));
    }
    if (suggestions.length >= count) break;
  }
  return suggestions;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}