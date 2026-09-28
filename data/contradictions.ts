import type { Contradiction } from "@/lib/types";

export const CONTRADICTIONS: Record<string, Contradiction[]> = {
  "001": [
    {
      suspectId: "marcus",
      evidenceId: "ev-statement-marcus",
      explanation:
        "Marcus claims he never left the security room, but the logbook shows the security room door opened at 21:53.",
    },
    {
      suspectId: "marcus",
      evidenceId: "ev-cctv-1",
      explanation:
        "Marcus said he stayed at his post, but CCTV shows the security camera going offline at 21:52 — during his claimed watch.",
    },
    {
      suspectId: "ryan",
      evidenceId: "ev-phone-1",
      explanation:
        "Ryan said he left at 21:50 without seeing anyone, but his phone was active near the office at 21:47 and he had argued with Victor.",
    },
    {
      suspectId: "ryan",
      evidenceId: "ev-doc-2",
      explanation:
        "Ryan is the junior accountant, yet $47,000 is missing from the ledger and all discrepancies trace to his accounts.",
    },
    {
      suspectId: "daniel",
      evidenceId: "ev-statement-daniel",
      explanation:
        "Daniel claims he left at 21:00, but the restaurant receipt only confirms arrival at 21:25 — a 25 minute gap.",
    },
  ],
  "002": [
    {
      suspectId: "rebecca",
      evidenceId: "ev-002-cctv-1",
      explanation:
        "Rebecca said she never went near Sterling's office, but CCTV shows her entering the vault room alone at 20:42.",
    },
    {
      suspectId: "rebecca",
      evidenceId: "ev-002-vault",
      explanation:
        "Rebecca claimed she was greeting guests, yet the vault access log shows her badge used at 20:42.",
    },
    {
      suspectId: "rebecca",
      evidenceId: "ev-002-bank",
      explanation:
        "Rebecca had $180,000 deposited to her offshore account 5 days before the swap — traced to a known art forger.",
    },
    {
      suspectId: "rebecca",
      evidenceId: "ev-002-phone",
      explanation:
        "Sterling's last messages to Rebecca show he knew about the swap and summoned her to his office.",
    },
    {
      suspectId: "kumar",
      evidenceId: "ev-002-statement-kumar",
      explanation:
        "Kumar claims the vault was normal at 21:56, but CCTV from 20:42-21:00 was 'accidentally' overwritten during his shift.",
    },
    {
      suspectId: "victor",
      evidenceId: "ev-002-cctv-1",
      explanation:
        "Victor said he left at 21:30, but CCTV shows him exiting Sterling's office at 21:24 — before Sterling texted Rebecca at 21:30.",
    },
  ],
  "003": [
    {
      suspectId: "dr-patel",
      evidenceId: "ev-003-badge",
      explanation:
        "Dr. Patel said he never entered the room after 2 AM, but badge log shows his badge entering the ICU at 03:08.",
    },
    {
      suspectId: "dr-patel",
      evidenceId: "ev-003-phone",
      explanation:
        "Dr. Patel received a 4-minute call from Kenji Nakamura at 02:50 — 18 minutes before the machine was switched off.",
    },
    {
      suspectId: "dr-patel",
      evidenceId: "ev-003-machine",
      explanation:
        "The machine was manually switched off at 03:12 — exactly when Dr. Patel's badge was inside the ICU.",
    },
    {
      suspectId: "kenji",
      evidenceId: "ev-003-hotel",
      explanation:
        "Kenji claims he was asleep at the hotel, but the phone call to Dr. Patel at 02:50 contradicts 'no activity after 23:30'.",
    },
    {
      suspectId: "kenji",
      evidenceId: "ev-003-will",
      explanation:
        "Kenji was removed as sole heir 3 days before the murder — a clear motive to act quickly.",
    },
    {
      suspectId: "nurse-rose",
      evidenceId: "ev-003-badge",
      explanation:
        "Nurse Rose claims to have checked at 02:30, but she stayed until 02:45 — 15 minutes inside for a 'routine check'.",
    },
  ],
  "004": [
    {
      suspectId: "nadia",
      evidenceId: "ev-004-cabin",
      explanation:
        "Nadia claims she was asleep, but the cabin door log shows it opened twice with a master key during her claimed sleep window.",
    },
    {
      suspectId: "nadia",
      evidenceId: "ev-004-phone",
      explanation:
        "Aisha texted Nadia at 02:50 asking her to bring the documents — Nadia's phone was off, contradicting 'I fell asleep early'.",
    },
    {
      suspectId: "nadia",
      evidenceId: "ev-004-nadia-financial",
      explanation:
        "Nadia received $50,000 from an offshore shell company 2 days ago — traced to Sameer's boss.",
    },
    {
      suspectId: "nadia",
      evidenceId: "ev-004-luggage",
      explanation:
        "Nadia's bag contained $45,000 undeclared cash — inconsistent with a journalist's assistant.",
    },
    {
      suspectId: "tariq",
      evidenceId: "ev-004-cabin",
      explanation:
        "Tariq says he only used the master key at 1 AM and 4 AM, but the log shows 02:58 and 03:22.",
    },
    {
      suspectId: "sameer",
      evidenceId: "ev-004-dining",
      explanation:
        "Sameer claims he went to bed after 2 AM, but CCTV shows him arguing with Aisha at 01:45 and storming off.",
    },
  ],
  "005": [
    {
      suspectId: "ayesha",
      evidenceId: "ev-005-badge",
      explanation:
        "Ayesha said she was at home 20 km away, but her badge entered the building at 22:30 and exited at 22:47.",
    },
    {
      suspectId: "ayesha",
      evidenceId: "ev-005-cctv",
      explanation:
        "Ayesha's car was captured arriving at 22:28 and speeding away at 22:50 — matching the fire timeline.",
    },
    {
      suspectId: "ayesha",
      evidenceId: "ev-005-phone",
      explanation:
        "Ayesha agreed to meet Raza at 10:30 PM, contradicting her claim of being home.",
    },
    {
      suspectId: "ayesha",
      evidenceId: "ev-005-patent",
      explanation:
        "Ayesha had been removed from the $12M patent 2 weeks ago — a clear motive to confront Raza.",
    },
    {
      suspectId: "sana",
      evidenceId: "ev-005-ethanol",
      explanation:
        "Sana claims nobody should have been in the lab after 8 PM, yet 4 liters of ethanol went missing on her watch.",
    },
    {
      suspectId: "daniyal",
      evidenceId: "ev-005-daniyal",
      explanation:
        "Daniyal says he stayed in his dorm — his keycard log actually confirms this, but he had motive (accused of falsifying data).",
    },
  ],
};

export function getContradictions(caseId: string): Contradiction[] {
  return CONTRADICTIONS[caseId] ?? [];
}