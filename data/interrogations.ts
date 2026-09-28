import type { Case, Suspect } from "@/lib/types";
import type { SuspectInterrogation } from "@/lib/interrogation";

/**
 * Custom interrogations for cases with hand-written Q&A.
 * Key: caseId, Value: map of suspectId -> interrogation
 */
const CUSTOM: Record<string, Record<string, SuspectInterrogation>> = {
  "001": {
    daniel: {
      suspectId: "daniel",
      intro: "I already told the police everything. What do you want?",
      fallback: "I don't know anything about that. I was at the restaurant.",
      qa: [
        {
          keywords: ["where", "21:00", "9 pm", "nine", "leave", "left"],
          answer:
            "I left the office at 21:00. Straight to Vito's restaurant. The receipt shows I arrived at 21:25.",
        },
        {
          keywords: ["restaurant", "vito", "receipt", "25 minutes"],
          answer:
            "Traffic was heavy. 25 minutes in rush hour is normal. I don't see why that matters.",
        },
        {
          keywords: ["inherit", "company", "control", "will"],
          answer:
            "Yes, Victor's shares would come to me. But I didn't need Victor dead — we had a deal in progress.",
        },
        {
          keywords: ["victor", "relationship", "fight", "argument"],
          answer:
            "We disagreed on business. Not enough to kill him. Victor was my partner for 8 years.",
        },
        {
          keywords: ["ryan", "employee", "audit", "money"],
          answer:
            "Ryan was a junior accountant. If Victor was auditing him, that's Victor's business — not mine.",
        },
        {
          keywords: ["emily", "wife", "19:42", "call"],
          answer:
            "Emily called me at 19:42. She wanted to know where Victor was. I told her what I knew.",
        },
      ],
    },
    emily: {
      suspectId: "emily",
      intro: "This is horrible. I don't know why you're talking to me.",
      fallback: "I was at home. I already told you.",
      qa: [
        {
          keywords: ["where", "home", "that night", "evening"],
          answer: "I was home the entire evening. I called Daniel at 19:42 to ask about Victor.",
        },
        {
          keywords: ["call", "daniel", "19:42", "phone"],
          answer:
            "Yes, I called Daniel. Victor wasn't picking up his phone. I was worried. That's all.",
        },
        {
          keywords: ["marriage", "relationship", "marriage", "strain"],
          answer:
            "Victor and I had our issues. Every marriage does. But I loved him. I wouldn't hurt him.",
        },
        {
          keywords: ["affair", "cheating", "another"],
          answer: "(long pause) That's not relevant to the investigation.",
        },
        {
          keywords: ["money", "insurance", "inherit"],
          answer:
            "Victor had life insurance. Yes, I'd receive it. But that's not why I married him.",
        },
      ],
    },
    marcus: {
      suspectId: "marcus",
      intro: "I did my job. Whatever happened up there, it wasn't on my watch.",
      fallback: "I don't know anything about that. I stayed at my post.",
      qa: [
        {
          keywords: ["where", "security", "post", "room"],
          answer: "I never left the security room that night. Not once.",
        },
        {
          keywords: ["cctv", "camera", "offline", "21:52"],
          answer:
            "Cameras glitch sometimes. Equipment is old. That's not my fault.",
        },
        {
          keywords: ["logbook", "door", "opened", "21:53"],
          answer:
            "The door swings open on its own — bad hinge. I noted it in the log to cover myself.",
        },
        {
          keywords: ["left", "walk", "round", "patrol"],
          answer: "I did my rounds by camera, not on foot. Standard procedure.",
        },
        {
          keywords: ["ryan", "daniel", "saw anyone"],
          answer: "I saw Daniel leave around 21:00. Ryan I didn't see leave at all.",
        },
      ],
    },
    ryan: {
      suspectId: "ryan",
      intro: "Look, I know how this looks. But I swear I didn't do this.",
      fallback: "I don't want to talk about that right now.",
      qa: [
        {
          keywords: ["where", "21:50", "leave", "left"],
          answer: "I left at 21:50. I went straight home. Didn't see anyone.",
        },
        {
          keywords: ["victor", "message", "text", "phone", "talk"],
          answer:
            "Victor and I had argued earlier. About work stuff. He was going to fire me — I knew that.",
        },
        {
          keywords: ["audit", "money", "47", "ledger", "embezzle"],
          answer:
            "That's a lie. The ledger discrepancies weren't me. Someone else used my login.",
        },
        {
          keywords: ["email", "resignation", "q3"],
          answer: "(long pause) ... I got that email. Yes. But I didn't kill him over a job.",
        },
        {
          keywords: ["bank", "transfer", "18,500", "18500"],
          answer:
            "I don't know anything about a transfer. I don't have access to Victor's accounts.",
        },
        {
          keywords: ["phone", "activity", "tower", "21:47"],
          answer:
            "My phone pinged near the office because I was leaving the parking lot at 21:47. That's normal.",
        },
      ],
    },
    sarah: {
      suspectId: "sarah",
      intro: "I'm a journalist. I don't kill sources — I expose them.",
      fallback: "That's off the record.",
      qa: [
        {
          keywords: ["where", "source", "meeting"],
          answer:
            "I was meeting a confidential source across town. They can confirm — though they won't want to be named.",
        },
        {
          keywords: ["victor", "investigation", "expose", "story"],
          answer:
            "Yes, I was investigating Victor. Financial irregularities. That doesn't make me a murderer.",
        },
        {
          keywords: ["building", "seen", "near", "earlier"],
          answer:
            "I drove past the building on my way to the meeting. Google Maps will show the route.",
        },
        {
          keywords: ["witness", "proof"],
          answer: "I have witnesses. Give me 24 hours and I'll give you names.",
        },
      ],
    },
  },

  "002": {
    rebecca: {
      suspectId: "rebecca",
      intro: "This is a tragedy. Sterling was brilliant.",
      fallback: "I was in the main hall the entire time. Ask anyone.",
      qa: [
        {
          keywords: ["where", "vault", "20:42", "main hall"],
          answer: "I was greeting guests. I may have stepped away briefly — I don't recall when.",
        },
        {
          keywords: ["vault", "log", "badge", "20:42"],
          answer: "(pause) The badge log must be wrong. Someone else could have used my badge.",
        },
        {
          keywords: ["paint", "apron", "titanium", "pigment"],
          answer: "I work with pigments every day. Finding paint on my apron is not evidence.",
        },
        {
          keywords: ["bank", "180,000", "offshore", "forger"],
          answer:
            "That money is from a legitimate private sale. I don't have to explain my finances to you.",
        },
        {
          keywords: ["sterling", "messages", "text", "swap", "know"],
          answer: "(long silence) Sterling was paranoid at the end. He accused everyone of everything.",
        },
        {
          keywords: ["vermeer", "painting", "forgery", "fake"],
          answer:
            "The Vermeer is authentic. I checked it myself the day before. There's no forgery.",
        },
      ],
    },
    kumar: {
      suspectId: "kumar",
      intro: "I've been guarding that gallery for 12 years. Nothing like this has ever happened.",
      fallback: "Everything was normal on my watch. That's all I can say.",
      qa: [
        {
          keywords: ["where", "rounds", "check"],
          answer: "I did my rounds every 30 minutes. Nothing unusual.",
        },
        {
          keywords: ["cctv", "overwritten", "20:42", "21:00"],
          answer: "Cameras sometimes auto-overwrite. I don't control that.",
        },
        {
          keywords: ["vault", "21:56", "lock"],
          answer: "I checked the vault at 21:56. Locked. Undisturbed.",
        },
        {
          keywords: ["rebecca", "curator", "saw"],
          answer: "Rebecca was in the main hall. I didn't see her go into the vault.",
        },
      ],
    },
    victor: {
      suspectId: "victor",
      intro: "I was a potential buyer. Nothing more.",
      fallback: "I left at 21:30. Business as usual.",
      qa: [
        {
          keywords: ["where", "21:30", "leave", "left"],
          answer: "Sterling and I met briefly at 21:00, then I left at 21:30. Nothing more.",
        },
        {
          keywords: ["office", "21:12", "21:24", "entered"],
          answer:
            "Wait — I said 21:00. (pause) Perhaps I'm misremembering the timing. It's been a long night.",
        },
        {
          keywords: ["deal", "buy", "vermeer", "negotiate"],
          answer: "We were negotiating. Aggressively, yes, but professionally.",
        },
        {
          keywords: ["sterling", "relationship", "rival"],
          answer: "Sterling and I respected each other. We were not enemies.",
        },
      ],
    },
    chen: {
      suspectId: "chen",
      intro: "I'm here voluntarily. I have nothing to hide.",
      fallback: "I left at 20:30. Several guests saw me.",
      qa: [
        {
          keywords: ["where", "leave", "20:30"],
          answer: "I left at 20:30 sharp. Several guests confirmed it.",
        },
        {
          keywords: ["argument", "fight", "sterling", "rival"],
          answer:
            "We argued earlier in the day about a shared exhibit. Business. Not personal.",
        },
        {
          keywords: ["sterling", "relationship"],
          answer: "We've been rivals for a decade. That doesn't make me a killer.",
        },
      ],
    },
    alex: {
      suspectId: "alex",
      intro: "My uncle was the only family I had. I didn't do this.",
      fallback: "I arrived late. He was already dead.",
      qa: [
        {
          keywords: ["where", "arrive", "21:47"],
          answer: "I arrived at 21:47. By then, he was already dead in his office.",
        },
        {
          keywords: ["gambling", "debt", "money"],
          answer: "I have gambling debts. Yes. But I loved my uncle. Money was never the issue.",
        },
        {
          keywords: ["will", "inherit", "estate"],
          answer: "The estate is broke. I wasn't getting anything. Nobody inherits debts.",
        },
      ],
    },
  },

  "003": {
    "dr-patel": {
      suspectId: "dr-patel",
      intro: "I'm a physician. I take that oath seriously. This is a terrible loss.",
      fallback: "I was on the 4th floor. I already told the nurses.",
      qa: [
        {
          keywords: ["where", "2 am", "after", "4th floor"],
          answer: "I was handling a cardiac emergency on the 4th floor. I never went to his room.",
        },
        {
          keywords: ["badge", "icu", "03:08", "03:15"],
          answer:
            "(pause) My badge... I must have... someone could have borrowed it. That's possible.",
        },
        {
          keywords: ["call", "kenji", "02:50", "phone"],
          answer:
            "Kenji called me about his father's condition. A concerned son. That's all.",
        },
        {
          keywords: ["complaint", "medical board", "license"],
          answer: "(silence) Yes. Nakamura filed a complaint. But that doesn't mean I killed him.",
        },
        {
          keywords: ["machine", "switch off", "life support"],
          answer:
            "That machine does not switch off on its own. Whoever did it knew exactly what they were doing.",
        },
      ],
    },
    kenji: {
      suspectId: "kenji",
      intro: "I'm grieving. Whatever you need, make it quick.",
      fallback: "I was at the hotel. My receipt proves it.",
      qa: [
        {
          keywords: ["where", "hotel", "alibi"],
          answer: "I checked into the hotel at 22:40. My room service receipt shows 23:15.",
        },
        {
          keywords: ["call", "dr patel", "02:50"],
          answer:
            "I called Dr. Patel to check on my father. Any son would do the same.",
        },
        {
          keywords: ["will", "inherit", "removed"],
          answer: "(pause) The will... I hadn't seen the new version. My father and I had disagreements, but—",
        },
        {
          keywords: ["argument", "father", "public", "fight"],
          answer: "We argued. Families argue. It doesn't mean I killed him.",
        },
        {
          keywords: ["money", "400 million", "empire"],
          answer: "I would have inherited eventually anyway. Killing him was never necessary.",
        },
      ],
    },
    "nurse-rose": {
      suspectId: "nurse-rose",
      intro: "I cared for Mr. Nakamura for months. This is devastating.",
      fallback: "I did my rounds exactly on schedule.",
      qa: [
        {
          keywords: ["where", "check", "02:30"],
          answer: "I checked on him at 02:30. He was stable. Vitals normal.",
        },
        {
          keywords: ["left", "02:45", "icu", "badge"],
          answer: "I was in the ICU for 15 minutes. That's standard for a full check.",
        },
        {
          keywords: ["reprimand", "reprimanded", "error"],
          answer: "He corrected me once. Minor medication timing. Not a reason to kill anyone.",
        },
        {
          keywords: ["yuki", "visitor", "tea"],
          answer: "I saw Yuki leaving around 01:50. She seemed calm.",
        },
      ],
    },
    yuki: {
      suspectId: "yuki",
      intro: "I came from Tokyo to see him. This is unbearable.",
      fallback: "I brought him tea. Then I left.",
      qa: [
        {
          keywords: ["where", "01:45", "tea"],
          answer: "I brought him tea at 01:45. He was asleep. I left quietly at 01:50.",
        },
        {
          keywords: ["business", "funding", "money"],
          answer:
            "Yes, my father-in-law funded my company. We had a small disagreement recently. Nothing serious.",
        },
        {
          keywords: ["leave", "01:50", "nurse"],
          answer: "Nurse Rose saw me leave. Ask her.",
        },
      ],
    },
    "admin": {
      suspectId: "admin",
      intro: "This is a nightmare for the hospital. We want answers as much as you do.",
      fallback: "I was in my office on the ground floor.",
      qa: [
        {
          keywords: ["where", "office", "paperwork"],
          answer: "I was on the ground floor. Paperwork all night. Boring but true.",
        },
        {
          keywords: ["donation", "2 million", "funding"],
          answer:
            "Yes, Nakamura was going to donate $2M. His death complicates that. But I wouldn't kill a donor.",
        },
        {
          keywords: ["bonus", "financial", "hospital"],
          answer: "My bonus depends on our fundraising. That's true of any administrator.",
        },
      ],
    },
  },
  "008": {
    marie: {
      suspectId: "marie",
      intro: "I've been Antoine's wife for 15 years. I'm devastated.",
      fallback: "I don't have anything else to say about that.",
      qa: [
        { keywords: ["where", "front", "house", "greet"], answer: "I was at the front of house greeting guests. You can ask any of them." },
        { keywords: ["kitchen", "21:08", "entered", "went"], answer: "(pause) I stepped back for just a moment. To check on service. That's normal for a co-owner." },
        { keywords: ["divorce", "lawyer", "papers"], answer: "Yes, Antoine was leaving me. I won't deny it. But killing him wouldn't have changed that." },
        { keywords: ["luca", "affair", "relationship"], answer: "(long silence) ... that's not relevant to his death." },
        { keywords: ["antione", "husband", "love"], answer: "15 years of marriage. Whatever happened between us, I didn't want him dead." }
      ]
    },
    luca: {
      suspectId: "luca",
      intro: "Antoine was my mentor. I owe him everything.",
      fallback: "I don't know what you're getting at.",
      qa: [
        { keywords: ["where", "plating", "station", "21:12"], answer: "I was plating desserts all evening. My station is right there. Anyone could have seen me." },
        { keywords: ["alone", "90 seconds", "cctv", "camera"], answer: "(pause) 90 seconds? That's how long it takes to plate a dish. I don't understand the accusation." },
        { keywords: ["antione", "fired", "text", "19:00"], answer: "Antoine and I had a disagreement. About the menu. Nothing more." },
        { keywords: ["cyanide", "poison", "spice", "cabinet"], answer: "The spice cabinet is used by everyone. Every chef has touched it." },
        { keywords: ["marie", "affair"], answer: "(silence) ... You should ask her that question." },
        { keywords: ["plate", "fingerprint", "underside"], answer: "(long pause) I... I must have touched it while plating. That's all." }
      ]
    },
    yuki: {
      suspectId: "yuki",
      intro: "I only started here three months ago. This is a nightmare.",
      fallback: "I don't know anything about that.",
      qa: [
        { keywords: ["where", "station", "pastry"], answer: "I never left my station. The pastry assistant saw me the whole time." },
        { keywords: ["21:14", "walk", "past", "plate"], answer: "(pause) I walked past his plate to get to the walk-in. That's the only route. It doesn't mean anything." },
        { keywords: ["fired", "mistake", "threatened"], answer: "Antoine was hard on everyone. He threatened to fire me twice. I didn't take it personally." },
        { keywords: ["antione", "relationship"], answer: "He was a brilliant chef but a difficult man. I respected his talent." }
      ]
    },
    paul: {
      suspectId: "paul",
      intro: "I'm a food critic. I write about food, not kill chefs.",
      fallback: "That's off the record.",
      qa: [
        { keywords: ["where", "table", "seated"], answer: "At my table the entire evening. The waiters will confirm." },
        { keywords: ["review", "draft", "scathing", "fraud", "bully"], answer: "(pause) My review was critical, yes. But that's my job. Critics don't murder chefs." },
        { keywords: ["antione", "humiliated", "prior"], answer: "Antoine humiliated me at an event last year. He was drunk. I moved on." }
      ]
    },
    sophie: {
      suspectId: "sophie",
      intro: "I've run this restaurant's front of house for 10 years.",
      fallback: "I don't have any information about that.",
      qa: [
        { keywords: ["where", "dining", "front"], answer: "I was managing the dining room. I never entered the kitchen tonight." },
        { keywords: ["sale", "antione", "sell", "restaurant"], answer: "The sale was news to me. Antoine didn't tell me anything." },
        { keywords: ["consulting fee", "50", "money", "bank"], answer: "(long pause) That was legitimate consulting work for the buyer. Nothing more." },
        { keywords: ["fired", "prosecuted", "discovered"], answer: "Antoine hadn't discovered anything. You're reaching." }
      ]
    }
  },

  "009": {
    commander: {
      suspectId: "commander",
      intro: "I've commanded 6 missions. This is the worst day of my career.",
      fallback: "My logs will confirm everything I say.",
      qa: [
        { keywords: ["where", "command", "checklist", "02:45"], answer: "I was in the command module running pre-return tests. Continuous video log confirms it." },
        { keywords: ["hugo", "relationship", "criticized"], answer: "Hugo criticized my leadership publicly. That's insulting, not motive for murder." },
        { keywords: ["air valve", "override", "life support"], answer: "Only the engineer's console can trigger that override. I don't have those credentials." }
      ]
    },
    "dr-okafor": {
      suspectId: "dr-okafor",
      intro: "I've kept this crew alive for 8 months. I would never harm anyone.",
      fallback: "My medical logs are open for inspection.",
      qa: [
        { keywords: ["where", "medical", "bay", "03:00"], answer: "I was in the medical bay. I logged Hugo's vitals at 03:00 — normal. Then I stayed there recording notes until 04:15." },
        { keywords: ["hugo", "medical advice", "ignored"], answer: "Hugo ignored my medical advice for weeks. It frustrated me, but patients have that right." },
        { keywords: ["vitals", "check", "last"], answer: "Last check at 03:00. All normal. His next scheduled check was 05:00 — that's when I found him." }
      ]
    },
    engineer: {
      suspectId: "engineer",
      intro: "I maintain the life-support systems. If something failed, it's on me.",
      fallback: "I don't know anything about that.",
      qa: [
        { keywords: ["where", "water", "reclamation", "maintenance"], answer: "I was working on water reclamation. Standard overnight maintenance." },
        { keywords: ["life support", "panel", "03:10", "detour"], answer: "(pause) I checked the life support panel briefly on my way. Standard practice." },
        { keywords: ["override", "credentials", "card", "03:14"], answer: "(long silence) My credentials are... I must have misplaced my card. Anyone could have taken it." },
        { keywords: ["toolkit", "wrench", "hidden", "keycard"], answer: "(pause) That's not... I don't know how that got there." },
        { keywords: ["complaint", "hugo", "license"], answer: "Hugo's complaint was baseless. My record is spotless. The hearing would have cleared me." },
        { keywords: ["air valve", "closed", "killed", "hugo"], answer: "I did not kill Hugo Vance. Someone used my credentials without my knowledge." }
      ]
    },
    pilot: {
      suspectId: "pilot",
      intro: "I'm the youngest pilot on this mission. I'm here to fly, not to fight.",
      fallback: "I don't have anything to add.",
      qa: [
        { keywords: ["where", "cupola", "photos", "camera"], answer: "In the cupola taking Earth photos. 23 shots timestamped between 02:50 and 03:40." },
        { keywords: ["hugo", "advances", "inappropriate"], answer: "(pause) Hugo made... comments. I reported him. Command was handling it. That doesn't make me a killer." },
        { keywords: ["air valve", "life support"], answer: "I don't have access to life support systems. That's the engineer's domain." }
      ]
    },
    journalist: {
      suspectId: "journalist",
      intro: "I was documenting Hugo's last expedition. Now I'm documenting his death.",
      fallback: "That's not in my footage.",
      qa: [
        { keywords: ["where", "common", "area", "camera"], answer: "In the common area reviewing footage. My camera was rolling the entire time. 6 hours continuous." },
        { keywords: ["hugo", "crimes", "tell", "all"], answer: "Yes, I was investigating Hugo's business practices. That's journalism, not murder." },
        { keywords: ["audio", "click", "03:14"], answer: "Yes — my camera picked up a distant 'click' at 03:14. Consistent with a valve closing. That's when I realized something was wrong." },
        { keywords: ["suspect", "who", "think"], answer: "I don't speculate on camera. But whoever did this knew exactly which override to use." }
      ]
    }
  },

  "010": {
    charles: {
      suspectId: "charles",
      intro: "My mother and I had our differences, but I loved her.",
      fallback: "I don't know anything about that.",
      qa: [
        { keywords: ["where", "garden", "cigarette", "06:30"], answer: "I was in the garden having a cigarette. Couldn't sleep. Stayed there until 07:15." },
        { keywords: ["gardener", "saw", "confirm"], answer: "The gardener saw me the whole time. Ask him." },
        { keywords: ["money", "debt", "3.2", "creditors"], answer: "(pause) I have debts. Many people do. That doesn't mean I killed my mother." },
        { keywords: ["will", "inheritance", "disinherited"], answer: "I didn't know about the new will. Mother kept her affairs private." },
        { keywords: ["mother", "relationship", "call"], answer: "I called her three times yesterday. She didn't answer. I assumed she was resting." }
      ]
    },
    diana: {
      suspectId: "diana",
      intro: "I came home to make peace. I never imagined this.",
      fallback: "I'd rather not discuss that.",
      qa: [
        { keywords: ["where", "room", "reading"], answer: "In my room reading. The staff can confirm I didn't come down until the shouting started." },
        { keywords: ["estranged", "10 years", "reconcile"], answer: "We hadn't spoken in 10 years. I wanted to change that. I bought a book on reconciliation." },
        { keywords: ["digitalis", "book", "pharmacist", "reference"], answer: "(pause) I... I researched heart medications. Mother had a condition. I wanted to understand it." },
        { keywords: ["mother", "will", "inheritance"], answer: "I didn't come for the money. I have my own life in Boston." }
      ]
    },
    eleanor: {
      suspectId: "eleanor",
      intro: "I've run Margaret's foundation for 8 years. This is unbearable.",
      fallback: "I've told you what I know.",
      qa: [
        { keywords: ["where", "breakfast", "tray", "06:30"], answer: "I prepared the breakfast tray at 06:30. The cook was with me the whole time." },
        { keywords: ["tea", "nurse", "took", "06:45"], answer: "Nurse Helen took the tray upstairs at 06:45. I stayed in the kitchen." },
        { keywords: ["foundation", "funds", "skimming"], answer: "(pause) The foundation finances are complex. Everything is documented." },
        { keywords: ["charles", "husband", "relationship"], answer: "Charles is my husband. We have our problems, but we don't discuss his mother's affairs." }
      ]
    },
    frank: {
      suspectId: "frank",
      intro: "I've handled Margaret's estate for 30 years. This is a tragedy.",
      fallback: "That's privileged information.",
      qa: [
        { keywords: ["where", "study", "arrived", "07:30"], answer: "I arrived at 07:30. The butler showed me to the study. I waited for Margaret to come down." },
        { keywords: ["will", "old", "brought"], answer: "I brought the will she signed 10 years ago. As far as I knew, that was the current will." },
        { keywords: ["usb", "draft", "new", "rewrite"], answer: "(long pause) I... I received an email with a draft. But she hadn't formally signed it. So it wasn't technically the will." },
        { keywords: ["margaret", "last", "spoke"], answer: "I last spoke with her three days ago. She seemed energized. Said she had finally made a decision she should have made years ago." }
      ]
    },
    nurse: {
      suspectId: "nurse",
      intro: "I cared for Margaret for three years. She was like family to me.",
      fallback: "I've told the police everything I know.",
      qa: [
        { keywords: ["where", "morning", "06:00", "check"], answer: "I checked on her at 06:00 — normal vitals. Then at 06:45 I brought her tea." },
        { keywords: ["tea", "serve", "pot", "cup"], answer: "I served the tea myself. She liked it a specific way. Two sugars." },
        { keywords: ["medication", "digitalis", "heart"], answer: "I gave her her heart medication at 07:00. Standard dose. Nothing unusual." },
        { keywords: ["bag", "medical bag", "powder", "crushed"], answer: "(pause) The powder was for... quick administration. For emergencies. That's standard nursing practice." },
        { keywords: ["will", "inherit", "left everything"], answer: "(long pause) Yes, she changed her will. She wanted to thank me for my care. I didn't ask her to." },
        { keywords: ["safe", "missing", "took", "stole"], answer: "I don't have access to her personal safe. That's absurd." },
        { keywords: ["alone", "06:45", "07:15", "poison window"], answer: "I was with her from 06:45 to 07:15. Preparing her bath after. That's my routine every single morning." }
      ]
    }
  },};

/**
 * Generic interrogation builder — used for cases without hand-written Q&A.
 */
function buildGenericInterrogation(
  suspect: Suspect,
  caseData: Case
): SuspectInterrogation {
  const keyEvidence = caseData.evidence.filter((e) => e.isKey);

  const qa = [
    {
      keywords: ["where", "alibi", "that night", "when"],
      answer: suspect.statement,
    },
    {
      keywords: ["kill", "murder", "did you"],
      answer: `I did not kill anyone. You're wasting your time with me.`,
    },
    {
      keywords: ["evidence", "proof", "against"],
      answer:
        "I don't know what evidence you think you have. I've told you the truth.",
    },
    ...keyEvidence.slice(0, 3).map((ev) => ({
      keywords: ev.title
        .toLowerCase()
        .split(/[\s—–-]+/)
        .filter((w) => w.length > 4)
        .slice(0, 2),
      answer: `I can't explain that. But I'm telling you — I had nothing to do with it.`,
    })),
  ];

  return {
    suspectId: suspect.id,
    intro: `I'm ${suspect.name}. ${suspect.role}. Ask what you want.`,
    fallback:
      "I don't have anything else to say about that. Is there something specific you want to ask?",
    qa,
  };
}

export function getInterrogation(
  caseId: string,
  suspect: Suspect,
  caseData: Case
): SuspectInterrogation {
  const custom = CUSTOM[caseId]?.[suspect.id];
  if (custom) return custom;
  return buildGenericInterrogation(suspect, caseData);
}