import type { Case } from "@/lib/types";
import { CASE_002, CASE_003, CASE_004, CASE_005, CASE_006, CASE_007, CASE_008, CASE_009, CASE_010 } from "./cases-extra";

export const CASE_001: Case = {
  id: "001",
  number: 1,
  title: "The Last Call",
  difficulty: 3,
  briefing:
    "A businessman, Victor Hayes, was found dead in his office at 10:42 PM. Five people had access to the building that night. One of them is lying.",
  image: "/cases/case-001.jpeg",
  suspects: [
    { id: "daniel", name: "Daniel Reed", role: "Business Partner", emoji: "👨", description: "Victor's business partner for 8 years. Stands to inherit full control of the company.", statement: "I left the office at 21:00. Went to a restaurant. I have nothing to hide." },
    { id: "emily", name: "Emily Reed", role: "Wife of Victor", emoji: "👩", description: "Married to Victor for 5 years. Their relationship had been strained recently.", statement: "I was at home the entire evening. I called Daniel at 19:42 to ask about Victor." },
    { id: "marcus", name: "Marcus Cole", role: "Security Guard", emoji: "👮", description: "On duty that night. Claims he stayed at his post the whole time.", statement: "I never left the security room that night." },
    { id: "ryan", name: "Ryan Blake", role: "Employee", emoji: "🧑‍💼", description: "Junior accountant. Recently passed over for a promotion.", statement: "I left at 21:50. Didn't see anyone on my way out." },
    { id: "sarah", name: "Sarah Mills", role: "Journalist", emoji: "👩‍💼", description: "Investigating Victor for a financial exposé. Was seen near the building earlier.", statement: "I was meeting a source across town. I have witnesses." }
  ],
  evidence: [
    { id: "ev-cctv-1", title: "CCTV Footage — Main Entrance", type: "cctv", icon: "📹", isKey: true, content: ["21:14 — Daniel Reed enters the building", "21:37 — Ryan Blake enters the building", "21:52 — Security camera goes offline", "22:06 — Someone leaves through the back entrance"] },
    { id: "ev-phone-1", title: "Phone Messages", type: "phone", icon: "📱", isKey: true, content: ["Ryan: 'We need to talk.'", "Victor: 'Not tonight.'", "Ryan: 'You don't understand what I found.'", "Victor: 'Then it can wait till morning.'"] },
    { id: "ev-bank-1", title: "Bank Transfer Record", type: "bank", icon: "💳", isKey: true, content: ["21:48 — $18,500 transferred", "From: Victor Hayes (CEO personal account)", "To: Unknown offshore account (Cayman Islands)", "Initiated from: Victor's office laptop"] },
    { id: "ev-doc-1", title: "Email from Victor", type: "document", icon: "📧", isKey: true, content: ["To: Ryan Blake", "Subject: Audit Findings", "'I went through the Q3 ledger. I know exactly what you did. Meeting tomorrow, 9 AM. Bring your resignation.'"] },
    { id: "ev-cctv-2", title: "Back Entrance Camera", type: "cctv", icon: "📹", isKey: false, content: ["22:06 — Figure in dark hoodie exits", "Height: approx. 5ft 11in", "Face not visible", "Walks toward parking lot"] },
    { id: "ev-statement-marcus", title: "Marcus's Statement (Official)", type: "witness", icon: "📝", isKey: false, content: ["'I never left the security room that night.'", "Logbook however shows: security room door opened at 21:53."] },
    { id: "ev-statement-emily", title: "Emily's Statement", type: "witness", icon: "📝", isKey: false, content: ["'I was home. Called Daniel at 19:42.'", "Phone records confirm call at 19:42, duration 4 minutes."] },
    { id: "ev-statement-daniel", title: "Daniel's Statement", type: "witness", icon: "📝", isKey: false, content: ["'Left office at 21:00. Was at a restaurant.'", "Restaurant receipt confirms arrival at 21:25."] },
    { id: "ev-phone-ryan", title: "Ryan's Phone Activity", type: "phone", icon: "📱", isKey: false, content: ["21:34 — phone active (tower near office)", "21:41 — phone active (tower near office)", "21:47 — phone active (tower near office)", "Note: Victor's phone disconnected at 21:41"] },
    { id: "ev-doc-2", title: "Company Financial Report", type: "document", icon: "📄", isKey: false, content: ["Q3 ledger shows $47,000 missing.", "All discrepancies trace to Ryan Blake's accounts.", "Victor had requested a private audit."] }
  ],
  timeline: [
    { time: "19:00", event: "Victor Hayes arrives at office" },
    { time: "19:14", event: "Daniel Reed enters building" },
    { time: "19:42", event: "Emily calls Daniel" },
    { time: "20:15", event: "Ryan Blake enters building" },
    { time: "21:17", event: "Argument heard on 3rd floor" },
    { time: "21:41", event: "Victor's phone disconnects" },
    { time: "21:48", event: "$18,500 transferred from Victor's account" },
    { time: "21:52", event: "CCTV goes offline" },
    { time: "22:06", event: "Person leaves via back entrance" },
    { time: "22:42", event: "Body discovered by cleaning staff" }
  ],
  solution: {
    culpritId: "ryan",
    motive: "Ryan was embezzling money from the company. Victor discovered it and sent him an email demanding his resignation. Ryan confronted Victor, killed him, then used Victor's laptop to transfer money to an offshore account.",
    keyEvidenceIds: ["ev-cctv-1", "ev-phone-1", "ev-bank-1", "ev-doc-1"]
  }
};

export const ALL_CASES: Case[] = [CASE_001, CASE_002, CASE_003, CASE_004, CASE_005, CASE_006, CASE_007, CASE_008, CASE_009, CASE_010];

export function getCaseById(id: string): Case | undefined {
  return ALL_CASES.find((c) => c.id === id);
}

/**
 * Returns today's daily case. Rotates deterministically by date.
 * Every player worldwide gets the same case on the same day.
 */
export function getDailyCase(): Case {
  const now = new Date();
  const dayIndex = Math.floor(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) /
      (1000 * 60 * 60 * 24)
  );
  const index = dayIndex % ALL_CASES.length;
  return ALL_CASES[index];
}