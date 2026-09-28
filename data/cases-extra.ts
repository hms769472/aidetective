import type { Case } from "@/lib/types";

export const CASE_002: Case = {
  id: "002",
  number: 2,
  title: "The Vanishing Painting",
  difficulty: 3,
  briefing: "During the opening night of a prestigious art exhibition, gallery owner Mr. Sterling was found dead in his private office. A priceless Vermeer painting — the centerpiece — had been swapped with a forgery. Someone in the room is a killer.",
  image: "/cases/case-002.jpeg",
  suspects: [
    { id: "rebecca", name: "Rebecca Cole", role: "Gallery Curator", emoji: "👩‍🎨", description: "Curator for 6 years. Had sole access to the vault. Recently denied a raise.", statement: "I was greeting guests in the main hall the entire evening. I never went near Sterling's office." },
    { id: "victor", name: "Victor Hale", role: "Art Collector", emoji: "🧔", description: "Wealthy buyer who was negotiating to purchase the Vermeer. Known for aggressive deals.", statement: "Sterling and I met briefly at 21:00. I left the gallery at 21:30." },
    { id: "kumar", name: "Kumar Singh", role: "Security Guard", emoji: "👮", description: "On duty that night. Responsible for the vault and CCTV.", statement: "I did my rounds every 30 minutes. Nothing seemed unusual." },
    { id: "chen", name: "Mrs. Chen", role: "Rival Gallery Owner", emoji: "👩‍💼", description: "Long-time rival of Sterling. Was seen arguing with him earlier that day.", statement: "Yes, we argued. Business is business. But I didn't kill him." },
    { id: "alex", name: "Alex Sterling", role: "Nephew & Heir", emoji: "🧑", description: "Sterling's only living relative. Deep in gambling debt.", statement: "I arrived late. By the time I got there, he was already dead." }
  ],
  evidence: [
    { id: "ev-002-cctv-1", title: "Gallery CCTV", type: "cctv", icon: "📹", isKey: true, content: ["20:42 — Rebecca enters vault room alone", "20:55 — Rebecca exits vault, looks nervous", "21:12 — Victor enters Sterling's office", "21:24 — Victor exits", "21:47 — Alex Sterling arrives"] },
    { id: "ev-002-paint", title: "Paint Analysis Report", type: "document", icon: "🧪", isKey: true, content: ["Forgery uses modern titanium white", "Vermeer originals never use titanium white", "Canvas from same era", "Pigment matches paint found on Rebecca's apron"] },
    { id: "ev-002-vault", title: "Vault Access Log", type: "document", icon: "🔐", isKey: true, content: ["20:42 — Rebecca Cole (badge 0442)", "21:56 — Kumar Singh (badge 0113)", "Access only possible with curator or security badge"] },
    { id: "ev-002-bank", title: "Bank Records", type: "bank", icon: "💳", isKey: true, content: ["Unknown $180,000 deposited to Rebecca's offshore account", "Deposit made 5 days before the exhibition", "Sender: Account traced to a known art forger"] },
    { id: "ev-002-phone", title: "Sterling's Last Messages", type: "phone", icon: "📱", isKey: true, content: ["To Rebecca (21:30): 'I know the Vermeer was swapped. Meet me in my office.'", "To Rebecca (21:35): 'I'll give you one chance to explain.'", "No reply."] },
    { id: "ev-002-doc", title: "Sterling's Will", type: "document", icon: "📄", isKey: false, content: ["Sterling's estate was in debt", "Alex was to inherit nothing", "Rebecca was promised a stake in the gallery"] },
    { id: "ev-002-statement-kumar", title: "Kumar's Statement", type: "witness", icon: "📝", isKey: false, content: ["'I checked the vault at 21:56. Everything was locked and normal.'", "CCTV from 20:42-21:00 was 'accidentally' overwritten."] },
    { id: "ev-002-statement-chen", title: "Mrs. Chen's Statement", type: "witness", icon: "📝", isKey: false, content: ["'I left at 20:30 sharp.'", "Several guests confirm seeing her leave."] },
    { id: "ev-002-forensic", title: "Forensic Report", type: "document", icon: "🔬", isKey: false, content: ["Cause of death: blunt force trauma", "Weapon: bronze sculpture from the office", "No fingerprints on weapon (wiped clean)"] },
    { id: "ev-002-cctv-2", title: "Back Corridor Camera", type: "cctv", icon: "📹", isKey: false, content: ["21:50 — Female figure in dark clothes walks toward back exit", "Face not visible", "Carries a large portfolio case"] }
  ],
  timeline: [
    { time: "19:00", event: "Exhibition opening begins" },
    { time: "20:30", event: "Mrs. Chen leaves gallery" },
    { time: "20:42", event: "Rebecca enters vault room" },
    { time: "20:55", event: "Rebecca exits vault, visibly nervous" },
    { time: "21:00", event: "Victor meets Sterling briefly" },
    { time: "21:12", event: "Victor enters Sterling's office" },
    { time: "21:24", event: "Victor exits office" },
    { time: "21:30", event: "Sterling texts Rebecca" },
    { time: "21:47", event: "Alex Sterling arrives" },
    { time: "22:15", event: "Body discovered by guard Kumar" }
  ],
  solution: {
    culpritId: "rebecca",
    motive: "Rebecca had secretly swapped the Vermeer with a forgery and arranged an offshore payment. Sterling discovered the swap and summoned her. She panicked, killed him with the office sculpture, then fled through the back corridor carrying the real painting in a portfolio case.",
    keyEvidenceIds: ["ev-002-cctv-1", "ev-002-paint", "ev-002-vault", "ev-002-bank", "ev-002-phone"]
  }
};

export const CASE_003: Case = {
  id: "003",
  number: 3,
  title: "The Silent Ward",
  difficulty: 4,
  briefing: "In a private hospital's ICU, a wealthy elderly patient, Mr. Nakamura, was found dead at 3:15 AM. His life-support machine had been manually switched off. Only four people had access to his room that night. The hospital wants it ruled as natural causes — but the evidence says otherwise.",
  image: "/cases/case-003.jpeg",
  suspects: [
    { id: "dr-patel", name: "Dr. Anil Patel", role: "Attending Physician", emoji: "👨‍⚕️", description: "Mr. Nakamura's doctor for 3 years. Was overruled by Nakamura about a risky surgery.", statement: "I was on the 4th floor handling another emergency. I never entered his room after 2 AM." },
    { id: "nurse-rose", name: "Nurse Rose Miller", role: "Night Shift Nurse", emoji: "👩‍⚕️", description: "Assigned to Nakamura's ward. Recently reprimanded by him for a minor error.", statement: "I checked on him at 2:30. He was stable. Then I went on my rounds." },
    { id: "kenji", name: "Kenji Nakamura", role: "Son & Business Heir", emoji: "🧑‍💼", description: "Stands to inherit a $400M empire. Had a public argument with his father last week.", statement: "I wasn't at the hospital that night. I was at a hotel across town." },
    { id: "yuki", name: "Yuki Nakamura", role: "Daughter-in-law", emoji: "👩", description: "Was visiting from Tokyo. Her business was secretly funded by Mr. Nakamura — until recently.", statement: "I brought him tea at 1:45. He was asleep. I left quietly." },
    { id: "admin", name: "Mr. Hughes", role: "Hospital Administrator", emoji: "👔", description: "Had been negotiating with Nakamura to keep the hospital's funding alive.", statement: "I was in my office on the ground floor doing paperwork." }
  ],
  evidence: [
    { id: "ev-003-machine", title: "Life-Support Machine Log", type: "document", icon: "🩺", isKey: true, content: ["02:58 — Normal vitals", "03:12 — Machine manually switched OFF", "03:13 — Flatline begins", "03:15 — Alarm triggers"] },
    { id: "ev-003-cctv", title: "ICU Corridor CCTV", type: "cctv", icon: "📹", isKey: true, content: ["02:55 — Nurse Rose walks past ICU door (outside)", "03:08 — Figure in scrubs enters ICU", "03:14 — Same figure exits, walks fast", "Face unclear due to cap and mask"] },
    { id: "ev-003-badge", title: "Badge Access Log", type: "document", icon: "🔐", isKey: true, content: ["02:30 — Nurse Rose (entered ICU)", "02:45 — Nurse Rose (exited ICU)", "03:08 — Dr. Patel's badge (entered ICU)", "03:15 — Dr. Patel's badge (exited ICU)"] },
    { id: "ev-003-hotel", title: "Hotel Receipt — Kenji", type: "bank", icon: "🧾", isKey: true, content: ["Kenji checked in at 22:40", "Room service at 23:15", "No activity after 23:30", "Hotel is 4 km from hospital"] },
    { id: "ev-003-will", title: "Updated Will", type: "document", icon: "📄", isKey: true, content: ["Will changed 3 days ago", "Kenji removed as sole heir", "Yuki's company removed from trust", "$200M redirected to a foundation"] },
    { id: "ev-003-witness-yuki", title: "Yuki's Statement (Corroborated)", type: "witness", icon: "📝", isKey: false, content: ["'I brought him tea at 1:45.'", "Nurse Rose confirms seeing her leave at 1:50", "No further visits"] },
    { id: "ev-003-nurselog", title: "Nurse Rose's Notes", type: "document", icon: "📋", isKey: false, content: ["02:30 — Patient stable", "02:35 — Administered routine meds", "Nothing after 02:35"] },
    { id: "ev-003-phone", title: "Dr. Patel's Phone Calls", type: "phone", icon: "📱", isKey: true, content: ["02:50 — Call from an unlisted number", "Duration: 4 minutes", "Caller traced to Kenji Nakamura"] },
    { id: "ev-003-motive-doc", title: "Medical Board Complaint", type: "document", icon: "📄", isKey: false, content: ["Dr. Patel faced disciplinary hearing", "Nakamura had filed a formal complaint", "Potential loss of license"] },
    { id: "ev-003-hughes", title: "Hospital Financial Records", type: "bank", icon: "💳", isKey: false, content: ["$2M donation from Nakamura pending", "Contract unsigned as of the night of death", "Hughes's bonus depends on it"] }
  ],
  timeline: [
    { time: "22:40", event: "Kenji checks into hotel" },
    { time: "23:30", event: "Kenji's room becomes inactive" },
    { time: "01:45", event: "Yuki brings tea to Nakamura" },
    { time: "01:50", event: "Yuki leaves hospital" },
    { time: "02:30", event: "Nurse Rose enters ICU for check" },
    { time: "02:35", event: "Nurse Rose administers meds, leaves" },
    { time: "02:50", event: "Kenji calls Dr. Patel" },
    { time: "03:08", event: "Dr. Patel's badge enters ICU" },
    { time: "03:12", event: "Life-support machine switched off" },
    { time: "03:15", event: "Alarm triggers, staff rushes in" }
  ],
  solution: {
    culpritId: "dr-patel",
    motive: "Dr. Patel was facing a disciplinary hearing filed by Nakamura — his license was at risk. Kenji, about to be disinherited, offered Dr. Patel a large sum if he ended his father's life. Patel used his badge to enter the ICU, switched off the machine, and left.",
    keyEvidenceIds: ["ev-003-machine", "ev-003-cctv", "ev-003-badge", "ev-003-phone", "ev-003-will"]
  }
};

export const CASE_004: Case = {
  id: "004",
  number: 4,
  title: "The Midnight Express",
  difficulty: 4,
  briefing: "On the overnight train from Karachi to Lahore, a prominent journalist, Ms. Aisha Khan, was found dead in her sleeper cabin at 5:40 AM. She was investigating a corruption scandal and was carrying leaked documents. The documents are gone. Five passengers were in the same coach.",
  image: "/cases/case-004.jpeg",
  suspects: [
    { id: "zafar", name: "Zafar Malik", role: "Businessman", emoji: "👨‍💼", description: "Was the subject of Aisha's investigation. Powerful, connected, and desperate.", statement: "I was asleep in my cabin from 11 PM. I didn't even know her." },
    { id: "sameer", name: "Sameer Qureshi", role: "Government Aide", emoji: "🧑‍💼", description: "Senior aide to a minister named in the leaks. Traveling under a false name.", statement: "I was in the dining car until 2 AM. Then I went to bed." },
    { id: "farah", name: "Farah Naz", role: "Fellow Journalist", emoji: "👩‍💻", description: "Rival journalist. Rumored to have wanted Aisha's sources.", statement: "I heard Aisha arguing with a man around 3 AM. I stayed in my cabin." },
    { id: "tariq", name: "Tariq Hussain", role: "Train Attendant", emoji: "👨‍✈️", description: "Sole staff member in the coach. Has master key to all cabins.", statement: "I did my rounds at 1 AM and 4 AM. Everything was normal." },
    { id: "nadia", name: "Nadia Sheikh", role: "Aisha's Assistant", emoji: "👩", description: "Traveling with Aisha. Had access to the documents.", statement: "I fell asleep early. When I woke up at 5:30, I found her like this." }
  ],
  evidence: [
    { id: "ev-004-autopsy", title: "Autopsy Report", type: "document", icon: "🔬", isKey: true, content: ["Time of death: between 03:00 and 04:00", "Cause: strangulation", "No defensive wounds — victim likely knew killer", "Traces of whiskey in her system"] },
    { id: "ev-004-cabin", title: "Cabin Door Log", type: "document", icon: "🔐", isKey: true, content: ["Electronic lock records:", "02:58 — Cabin opened (master key)", "03:22 — Cabin opened again (master key)", "Only Tariq has master key"] },
    { id: "ev-004-dining", title: "Dining Car CCTV", type: "cctv", icon: "📹", isKey: true, content: ["01:45 — Sameer and Aisha arguing", "02:00 — Sameer leaves, angry", "02:05 — Nadia watches them, then follows Sameer", "No footage after 02:15 (camera glitch)"] },
    { id: "ev-004-phone", title: "Aisha's Last Messages", type: "phone", icon: "📱", isKey: true, content: ["To Nadia (02:50): 'Come to my cabin. Bring the documents.'", "No reply", "Nadia's phone off 02:45-03:30"] },
    { id: "ev-004-luggage", title: "Luggage Search", type: "document", icon: "🧳", isKey: true, content: ["Nadia's bag: $45,000 cash (undeclared)", "Zafar's bag: only clothes and a laptop", "Sameer's bag: forged ID card", "Farah's bag: recording device with Aisha's voice notes"] },
    { id: "ev-004-whiskey", title: "Whiskey Glass Fingerprints", type: "document", icon: "🥃", isKey: false, content: ["Aisha's fingerprints + Nadia's fingerprints", "Third partial print — unidentified"] },
    { id: "ev-004-farah", title: "Farah's Recording", type: "phone", icon: "🎙️", isKey: false, content: ["Audio of Aisha: 'If anything happens to me, the documents are with my sister in Islamabad.'", "Recorded 2 days before the trip"] },
    { id: "ev-004-tariq", title: "Tariq's Statement (Refuted)", type: "witness", icon: "📝", isKey: false, content: ["'I only used master key at 1 AM and 4 AM rounds.'", "Log contradicts: 02:58 and 03:22"] },
    { id: "ev-004-nadia-financial", title: "Nadia's Bank Records", type: "bank", icon: "💳", isKey: true, content: ["$50,000 deposited 2 days ago", "Sender: An offshore shell company", "Traced to a minister's aide — Sameer's boss"] },
    { id: "ev-004-zipper", title: "Forensic Fiber", type: "document", icon: "🔬", isKey: false, content: ["Fiber found under Aisha's nails: blue silk", "Nadia's scarf is blue silk"] }
  ],
  timeline: [
    { time: "22:00", event: "Train departs Karachi" },
    { time: "01:45", event: "Sameer and Aisha argue in dining car" },
    { time: "02:00", event: "Sameer storms off" },
    { time: "02:05", event: "Nadia follows Sameer" },
    { time: "02:45", event: "Nadia's phone goes off" },
    { time: "02:50", event: "Aisha texts Nadia asking her to bring documents" },
    { time: "02:58", event: "Aisha's cabin opened with master key" },
    { time: "03:00-04:00", event: "Aisha strangled" },
    { time: "03:22", event: "Cabin opened again with master key" },
    { time: "05:30", event: "Nadia discovers body" }
  ],
  solution: {
    culpritId: "nadia",
    motive: "Nadia was secretly paid $50,000 by a minister's aide (Sameer's boss) to steal Aisha's leaked documents. When Aisha summoned her to bring the documents, Nadia saw an opportunity. She drugged Aisha's whiskey, waited until she was unconscious, used Tariq's master key (which she had stolen earlier), and strangled her. She took the documents and left.",
    keyEvidenceIds: ["ev-004-autopsy", "ev-004-cabin", "ev-004-phone", "ev-004-nadia-financial", "ev-004-luggage"]
  }
};

export const CASE_005: Case = {
  id: "005",
  number: 5,
  title: "The Campus Fire",
  difficulty: 5,
  briefing: "A university research lab caught fire at 11:20 PM. In the debris, the body of Professor Raza — head of the chemistry department — was found. The fire was deliberate. A breakthrough patent worth millions was set to be filed next week, and the professor had recently changed the names on the patent. Someone wanted it stopped — or wanted it for themselves.",
  image: "/cases/case-005.jpeg",
  suspects: [
    { id: "ayesha", name: "Dr. Ayesha Raza", role: "Ex-Wife & Co-Researcher", emoji: "👩‍🔬", description: "Co-author of the research. Divorced 6 months ago; patent listed only Professor Raza.", statement: "I was at home, 20 km away. The divorce was final — I had no reason to hurt him." },
    { id: "daniyal", name: "Daniyal Khan", role: "PhD Student", emoji: "🧑‍🎓", description: "Raza's student. Raza had recently accused him of falsifying data.", statement: "I was in the dorm room. I didn't leave." },
    { id: "sana", name: "Sana Iqbal", role: "Lab Assistant", emoji: "👩‍🔧", description: "Had keys to the lab. Was supposed to lock up at 8 PM.", statement: "I locked the lab at 8 PM sharp. Nobody else should have been there." },
    { id: "professor-ali", name: "Prof. Ali Haider", role: "Rival Researcher", emoji: "👨‍🏫", description: "Raza's long-time rival in the department. Was passed over for the patent.", statement: "I was presenting at a conference in Islamabad. I have proof." },
    { id: "guard", name: "Mr. Yousuf", role: "Night Security Guard", emoji: "👴", description: "On patrol that night. Raza's office was on his route.", statement: "I smelled smoke at 11:15 and called the fire brigade. By then it was too late." }
  ],
  evidence: [
    { id: "ev-005-fire", title: "Fire Investigation Report", type: "document", icon: "🔥", isKey: true, content: ["Fire started at 10:55 PM", "Accelerant: industrial ethanol (lab stock)", "Point of origin: Professor Raza's private office", "Not an electrical fault"] },
    { id: "ev-005-badge", title: "Building Entry Log", type: "document", icon: "🔐", isKey: true, content: ["19:45 — Sana Iqbal (exit)", "20:00 — Sana Iqbal (exit again after locking)", "22:30 — Dr. Ayesha Raza (entry)", "22:47 — Dr. Ayesha Raza (exit)"] },
    { id: "ev-005-cctv", title: "Parking Lot CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:28 — Car arrives (plates match Ayesha's)", "22:50 — Same car leaves fast", "23:05 — Smoke visible from 3rd floor window"] },
    { id: "ev-005-phone", title: "Raza's Last Messages", type: "phone", icon: "📱", isKey: true, content: ["To Ayesha (20:15): 'The patent is in my name only. That was never the plan.'", "To Ayesha (21:00): 'Come by tonight. We should talk.'", "Ayesha replied (21:02): 'I will. 10:30.'"] },
    { id: "ev-005-patent", title: "Patent Documents (Recovered)", type: "document", icon: "📜", isKey: true, content: ["Original filing: Raza + Ayesha (co-inventors)", "Amended filing (2 weeks ago): Raza only", "Ayesha removed without notice", "Worth est. $12M in licensing"] },
    { id: "ev-005-ethanol", title: "Lab Chemical Log", type: "document", icon: "🧪", isKey: false, content: ["Ethanol stock: 4 liters missing", "Last check-in by Sana at 19:30", "Sana's fingerprints on the container"] },
    { id: "ev-005-daniyal", title: "Daniyal's Dorm Log", type: "document", icon: "🏠", isKey: false, content: ["Daniyal's keycard used to enter dorm at 21:00", "No exit until 01:00 (confirmed by roommate)"] },
    { id: "ev-005-ali", title: "Conference Proof", type: "document", icon: "🎤", isKey: false, content: ["Prof. Ali presented at 22:00 in Islamabad", "Live-streamed and recorded", "Cannot have been at the lab"] },
    { id: "ev-005-witness-yousuf", title: "Yousuf's Statement", type: "witness", icon: "📝", isKey: false, content: ["'I saw a car in the lot at 22:30. Didn't think much of it.'", "Plate partially visible: matches Ayesha's car"] },
    { id: "ev-005-divorce", title: "Divorce Settlement", type: "document", icon: "📄", isKey: false, content: ["Ayesha received $0 from the settlement", "She had waived all claims — except shared IP", "Patent was her only remaining asset claim"] }
  ],
  timeline: [
    { time: "19:30", event: "Sana does final chemical check" },
    { time: "20:00", event: "Sana locks the lab and leaves" },
    { time: "20:15", event: "Raza texts Ayesha about the patent" },
    { time: "21:00", event: "Raza asks Ayesha to visit" },
    { time: "22:28", event: "Ayesha's car arrives at campus" },
    { time: "22:30", event: "Ayesha enters the building" },
    { time: "22:47", event: "Ayesha exits (visibly rushed)" },
    { time: "22:50", event: "Ayesha's car speeds off" },
    { time: "22:55", event: "Fire starts in Raza's office" },
    { time: "23:15", event: "Guard Yousuf calls fire brigade" },
    { time: "23:45", event: "Fire controlled; body discovered" }
  ],
  solution: {
    culpritId: "ayesha",
    motive: "Ayesha had been quietly removed from the patent worth $12M. When Raza summoned her to 'talk', she realized he had no intention of restoring her name. In a fit of rage, she struck him, then poured lab ethanol over his office and set it ablaze to destroy evidence of the murder and the patent documents. But she didn't know Raza had already emailed a copy of the original filing to his lawyer.",
    keyEvidenceIds: ["ev-005-fire", "ev-005-badge", "ev-005-cctv", "ev-005-phone", "ev-005-patent"]
  }
};
export const CASE_006: Case = {
  id: "006",
  number: 6,
  title: "The Locked Study",
  difficulty: 3,
  briefing: "Bestselling novelist Marcus Vane was found dead in his locked study at his countryside estate. The door was bolted from the inside. Window closed. A single gunshot wound. Classic locked-room mystery — except the pistol is missing. Five people were staying at the estate that weekend.",
  image: "/cases/case-006.jpeg",
  suspects: [
    { id: "elena", name: "Elena Vane", role: "Wife", emoji: "👩", description: "Married 12 years. Marcus was about to file for divorce.", statement: "I was in the garden reading. I heard the shot and ran inside. The door was locked." },
    { id: "julian", name: "Julian Cross", role: "Literary Agent", emoji: "🧑‍💼", description: "Marcus's agent for 10 years. He was being replaced next month.", statement: "I was in my room reviewing contracts. I didn't hear anything until the scream." },
    { id: "priya", name: "Dr. Priya Anand", role: "Houseguest & Old Friend", emoji: "👩‍⚕️", description: "Childhood friend. Was helping Marcus with research on a medical thriller.", statement: "I was in the kitchen making tea. The staff can confirm." },
    { id: "tobias", name: "Tobias Vane", role: "Brother & Rival Author", emoji: "👨", description: "Also a writer. Lived in Marcus's shadow for years.", statement: "I was walking in the woods. Alone. I know how that sounds." },
    { id: "hannah", name: "Hannah Brooks", role: "Housekeeper", emoji: "👩‍🍳", description: "Worked for Marcus for 8 years. Knew all his secrets.", statement: "I was in the laundry room. I heard the shot and stayed put until someone called me." }
  ],
  evidence: [
    { id: "ev-006-study", title: "Study Door Analysis", type: "document", icon: "🚪", isKey: true, content: ["Door bolted from inside with a heavy iron bolt", "Bolt handle had traces of a thin wire", "Wire marks suggest a string was pulled through the gap", "Classic locked-room technique"] },
    { id: "ev-006-gun", title: "Missing Pistol", type: "document", icon: "🔫", isKey: true, content: ["Registered to Marcus Vane", "Kept in a locked drawer in the study", "Drawer opened with correct key (no force)", "Pistol and key both missing"] },
    { id: "ev-006-window", title: "Window Sill Scratches", type: "document", icon: "🔬", isKey: true, content: ["Fresh scratches on outer sill", "Consistent with a thin object being pulled through", "Window was unlocked but closed", "Rain started at 14:30; sill was dry inside"] },
    { id: "ev-006-phone", title: "Marcus's Last Call", type: "phone", icon: "📱", isKey: true, content: ["To his lawyer (13:15): 'Proceed with the divorce and the will changes. I'm done.'", "Length: 3 minutes", "No calls after that"] },
    { id: "ev-006-will", title: "Updated Will Draft", type: "document", icon: "📄", isKey: true, content: ["Drafted 2 days ago", "Elena removed entirely", "Everything to charity", "Hannah named as witness to the new will"] },
    { id: "ev-006-kitchen", title: "Kitchen Log", type: "witness", icon: "📝", isKey: false, content: ["Hannah saw Priya in the kitchen 13:30-13:50", "Priya poured tea, then went to the library", "Confirmed by cook"] },
    { id: "ev-006-woods", title: "Groundskeeper's Note", type: "witness", icon: "📝", isKey: false, content: ["Tobias was seen entering the woods at 13:00", "Returned at 14:15", "Muddy boots consistent with the walk"] },
    { id: "ev-006-agent", title: "Agent's Emails", type: "phone", icon: "📧", isKey: false, content: ["Marcus to Julian: 'I'm signing with a new agency. Effective next month.'", "Julian's response: 'You'll regret this.'"] },
    { id: "ev-006-hannah", title: "Hannah's Bank Records", type: "bank", icon: "💳", isKey: false, content: ["$15,000 deposited into her account 5 days ago", "Sender: Elena Vane" ] },
    { id: "ev-006-fingerprints", title: "Fingerprint Report", type: "document", icon: "🔬", isKey: false, content: ["Bolt handle: wiped clean", "Window sill outer edge: Elena Vane's partial print", "Study desk: only Marcus's prints"] }
  ],
  timeline: [
    { time: "13:00", event: "Tobias enters the woods" },
    { time: "13:15", event: "Marcus calls lawyer about divorce and will" },
    { time: "13:30", event: "Priya seen in the kitchen" },
    { time: "13:50", event: "Priya leaves kitchen, heads to library" },
    { time: "14:10", event: "Estimated time of death" },
    { time: "14:15", event: "Tobias returns from woods" },
    { time: "14:20", event: "Elena screams — discovers body outside study door" },
    { time: "14:22", event: "Door forced open by Julian and Tobias" }
  ],
  solution: {
    culpritId: "elena",
    motive: "Elena learned from Hannah (whom she bribed with $15,000) that Marcus had drafted a new will cutting her out completely. She confronted him, shot him with his own pistol, then staged the locked-room illusion using a wire through the bolt and window. Her partial print on the window sill betrayed her.",
    keyEvidenceIds: ["ev-006-study", "ev-006-gun", "ev-006-window", "ev-006-phone", "ev-006-will", "ev-006-hannah"]
  }
};

export const CASE_007: Case = {
  id: "007",
  number: 7,
  title: "The Crypto Billionaire",
  difficulty: 5,
  briefing: "Crypto billionaire Aiden Zhou was found dead in his penthouse at 4:00 AM, apparently from an overdose. His personal laptop — containing private keys to a $2B wallet — was missing. Four people had access to the penthouse that night. The police want to rule it as suicide, but his sister insists he was murdered.",
  image: "/cases/case-007.jpeg",
  suspects: [
    { id: "mira", name: "Mira Zhou", role: "Sister", emoji: "👩", description: "Aiden's only sibling. Was set to inherit his entire crypto empire.", statement: "I was on a video call with my fiancé in Berlin until 3 AM. I have logs." },
    { id: "kai", name: "Kai Tanaka", role: "Head of Security", emoji: "🧑‍✈️", description: "Ex-military. Managed all of Aiden's physical and digital security.", statement: "I was in the security room on the 3rd floor. Cameras glitched around 2 AM — I went to check." },
    { id: "lena", name: "Dr. Lena Fischer", role: "Personal Physician", emoji: "👩‍⚕️", description: "Prescribed Aiden his anxiety medication. Had full access to his prescriptions.", statement: "I last saw Aiden at 9 PM. He seemed fine. Nothing unusual." },
    { id: "omar", name: "Omar Haddad", role: "Business Partner", emoji: "🧔", description: "Co-founder of the crypto exchange. They were in a legal dispute over ownership.", statement: "I was at my own apartment across town. Security footage will confirm." },
    { id: "zara", name: "Zara Malik", role: "Aiden's Girlfriend", emoji: "👩‍🦰", description: "Dated Aiden for 4 months. Recently discovered he was going to leave her.", statement: "I left at midnight. We argued, but I'd never hurt him." }
  ],
  evidence: [
    { id: "ev-007-toxicology", title: "Toxicology Report", type: "document", icon: "🔬", isKey: true, content: ["Cause of death: respiratory failure", "Found: 4x normal dose of alprazolam", "Zero alcohol in blood — unusual for Aiden (he always drank)", "Time of death: 02:00-02:30"] },
    { id: "ev-007-bottle", title: "Medication Bottle", type: "document", icon: "💊", isKey: true, content: ["Prescription for 30 pills filled 3 days ago", "Only 8 pills remaining — 22 missing", "Bottle wiped clean of fingerprints", "Prescriber: Dr. Lena Fischer"] },
    { id: "ev-007-laptop", title: "Missing Laptop", type: "document", icon: "💻", isKey: true, content: ["MacBook Pro with hardware wallet", "Contained private keys to $2B wallet", "Last backup: 3 days ago at 11 PM", "Physical location: unknown"] },
    { id: "ev-007-cctv", title: "Penthouse Corridor Camera", type: "cctv", icon: "📹", isKey: true, content: ["01:55 — Camera goes offline (2 min gap)", "02:05 — Camera back online", "02:20 — Kai walks past (checking, per his statement)", "Nobody else seen after midnight"] },
    { id: "ev-007-crypto", title: "Blockchain Wallet Activity", type: "bank", icon: "💰", isKey: true, content: ["Wallet emptied at 03:14 AM", "Funds moved to a mixer", "Mixer output went to a wallet linked to a KYC account", "KYC account registered to: Kai Tanaka"] },
    { id: "ev-007-video", title: "Mira's Video Call Log", type: "phone", icon: "📱", isKey: false, content: ["Call started 22:15, ended 03:05", "Duration: 4h 50m", "Both parties active throughout (movement detected)", "Mira is clear"] },
    { id: "ev-007-omar", title: "Omar's Alibi", type: "document", icon: "🏠", isKey: false, content: ["Condo CCTV: arrived 22:00, never left", "Matches phone GPS", "Omar is clear"] },
    { id: "ev-007-zara", title: "Zara's Text Messages", type: "phone", icon: "💬", isKey: false, content: ["Aiden to Zara (23:45): 'This isn't working. I'm ending it.'", "Zara: 'You'll regret this.'", "Zara left at midnight (confirmed by doorman)"] },
    { id: "ev-007-lena", title: "Lena's Prescription History", type: "document", icon: "📄", isKey: false, content: ["Lena had been overprescribing Aiden for months", "Aiden complained to a friend about it", "Lena risked losing medical license if exposed"] },
    { id: "ev-007-bug", title: "Hidden Microphone (Sister's)", type: "phone", icon: "🎙️", isKey: false, content: ["Mira had secretly planted a mic in Aiden's office (privacy dispute)", "Audio recorded at 02:00: 'You shouldn't be here... put that down.'", "Voice identified as Aiden, then a muffled thud"] }
  ],
  timeline: [
    { time: "22:00", event: "Omar arrives home (alibi locks)" },
    { time: "23:45", event: "Aiden texts Zara that he's ending things" },
    { time: "00:00", event: "Zara leaves the penthouse" },
    { time: "01:55", event: "Penthouse corridor camera goes offline" },
    { time: "02:00", event: "Hidden mic captures Aiden's last words" },
    { time: "02:05", event: "Camera back online" },
    { time: "02:20", event: "Kai walks past camera (checking) — first appearance" },
    { time: "03:05", event: "Mira's video call ends" },
    { time: "03:14", event: "Aiden's crypto wallet emptied" },
    { time: "04:00", event: "Body discovered by housekeeping" }
  ],
  solution: {
    culpritId: "kai",
    motive: "Kai, the head of security, had physical access to the penthouse and controlled the cameras. He waited until 01:55, took the cameras offline for 10 minutes, entered the penthouse, and forced Aiden to take an overdose of his own medication after a physical struggle. He stole the laptop, moved the crypto wallet to his own KYC account at 03:14, then 'checked' the corridor at 02:20 to give himself a witness alibi. The blockchain tracing and the hidden microphone recording betrayed him.",
    keyEvidenceIds: ["ev-007-toxicology", "ev-007-bottle", "ev-007-laptop", "ev-007-cctv", "ev-007-crypto"]
  }
};

export const CASE_008: Case = {
  id: "008",
  number: 8,
  title: "The Chef's Last Meal",
  difficulty: 4,
  briefing: "Michelin-starred chef Antoine Laurent collapsed and died during his own restaurant's anniversary dinner. The cause: cyanide poisoning — but only his plate was contaminated. Five people were in the kitchen that night. The dinner was being filmed for a documentary.",
  image: "/cases/case-008.jpeg",
  suspects: [
    { id: "marie", name: "Marie Laurent", role: "Wife & Co-Owner", emoji: "👩‍🍳", description: "Married 15 years. Antoine was leaving her for his sous-chef.", statement: "I was at the front of house greeting guests. I only went back to the kitchen once, briefly." },
    { id: "luca", name: "Luca Romano", role: "Sous Chef", emoji: "👨‍🍳", description: "Antoine's protege for 8 years. Was secretly in a relationship with Marie.", statement: "I was plating desserts all evening. Antoine and I barely spoke tonight." },
    { id: "yuki", name: "Yuki Tanaka", role: "Pastry Chef", emoji: "👩‍🍳", description: "Recently hired. Antoine had threatened to fire her over a mistake.", statement: "I was at my station the entire night. Everyone saw me." },
    { id: "paul", name: "Paul Girard", role: "Food Critic", emoji: "🧔", description: "Was writing a scathing review. Antoine had humiliated him at a prior event.", statement: "I was at my table. I don't even know where the kitchen is." },
    { id: "sophie", name: "Sophie Marchand", role: "Restaurant Manager", emoji: "👩‍💼", description: "Ran the front of house. Antoine was about to sell the restaurant without her knowledge.", statement: "I was managing the dining room. I never entered the kitchen tonight." }
  ],
  evidence: [
    { id: "ev-008-toxicology", title: "Toxicology Report", type: "document", icon: "🔬", isKey: true, content: ["Cause of death: potassium cyanide", "Only Antoine's plate showed contamination", "Wine glass clean — poison was on the food", "Time of ingestion: 21:15-21:20"] },
    { id: "ev-008-cctv", title: "Kitchen Camera", type: "cctv", icon: "📹", isKey: true, content: ["21:08 — Marie enters kitchen briefly", "21:10 — Marie exits", "21:12 — Luca at plating station alone for 90 seconds", "21:14 — Yuki walks past Antoine's plate"] },
    { id: "ev-008-plate", title: "Plate Fingerprints", type: "document", icon: "🔬", isKey: true, content: ["Antoine's prints on the plate edge", "Luca's prints on the underside", "No other prints — plate was wiped except Luca's"] },
    { id: "ev-008-cyanide", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["Cyanide found in a small vial in the spice cabinet", "Cabinet accessible to all kitchen staff", "Vial wiped clean", "Same compound used in almond extract (bitter almonds)"] },
    { id: "ev-008-phone", title: "Antoine's Last Texts", type: "phone", icon: "📱", isKey: true, content: ["To Marie (18:30): 'I'm done. The lawyer has the papers.'", "To Luca (19:00): 'You're out of the kitchen after tonight. And out of her life.'", "To Sophie (20:00): 'The sale closes Friday. Don't bother coming in next week.'"] },
    { id: "ev-008-marie", title: "Marie's Statement", type: "witness", icon: "📝", isKey: false, content: ["'I was at the front of house.'", "Three guests confirm seeing her at 21:00", "But her position was near the kitchen door at 21:08"] },
    { id: "ev-008-luca", title: "Luca's Statement", type: "witness", icon: "📝", isKey: false, content: ["'I was plating desserts all evening.'", "Sous chef's station is 3 meters from Antoine's plate", "No one directly saw Luca for 90 seconds at 21:12"] },
    { id: "ev-008-yuki", title: "Yuki's Statement", type: "witness", icon: "📝", isKey: false, content: ["'I never left my station.'", "Confirmed by pastry assistant", "But camera shows her walking past Antoine's plate at 21:14"] },
    { id: "ev-008-paul", title: "Paul's Review Draft", type: "document", icon: "📄", isKey: false, content: ["Scathing review found in his bag", "Called Antoine 'a fraud' and 'a bully'", "But Paul was seated the entire evening — waiters confirm"] },
    { id: "ev-008-sophie", title: "Sophie's Financial Records", type: "bank", icon: "💳", isKey: false, content: ["Sophie had secretly taken a $50k 'consulting fee' from the buyer", "Antoine had just discovered this", "She was about to be fired AND prosecuted"] }
  ],
  timeline: [
    { time: "18:30", event: "Antoine texts Marie about divorce" },
    { time: "19:00", event: "Antoine texts Luca about firing" },
    { time: "20:00", event: "Antoine texts Sophie about the sale" },
    { time: "21:00", event: "Anniversary dinner begins" },
    { time: "21:08", event: "Marie enters kitchen briefly" },
    { time: "21:10", event: "Marie exits" },
    { time: "21:12", event: "Luca alone at plating station for 90 seconds" },
    { time: "21:14", event: "Yuki walks past Antoine's plate" },
    { time: "21:15", event: "Antoine eats the poisoned dish" },
    { time: "21:22", event: "Antoine collapses at the table" }
  ],
  solution: {
    culpritId: "luca",
    motive: "Luca was Antoine's protege AND Marie's secret lover. When Antoine discovered the affair, he fired Luca and threatened to expose them both. Luca stole cyanide from the spice cabinet during the chaos of service and laced Antoine's plate during a 90-second window at the plating station. He wiped the plate but missed the underside where his prints remained.",
    keyEvidenceIds: ["ev-008-toxicology", "ev-008-cctv", "ev-008-plate", "ev-008-phone"]
  }
};
export const CASE_009: Case = {
  id: "009",
  number: 9,
  title: "The Space Tourist",
  difficulty: 5,
  briefing: "Billionaire space tourist Hugo Vance was found dead in his private space station module hours before returning to Earth. The station had a crew of 5. Air supply cut to his module — suffocation. Someone wanted him to never come back.",
  image: "/cases/case-009.jpeg",
  suspects: [
    { id: "commander", name: "Commander Irina Volkov", role: "Mission Commander", emoji: "👩‍🚀", description: "Veteran cosmonaut. Hugo had publicly criticized her leadership during the mission.", statement: "I was in the command module running the pre-return checklist. All systems were green." },
    { id: "dr-okafor", name: "Dr. Chidi Okafor", role: "Flight Surgeon", emoji: "👨‍⚕️", description: "Responsible for crew health. Hugo had ignored his medical advice for weeks.", statement: "I was monitoring vital signs from the medical bay. I last checked Hugo at 03:00." },
    { id: "engineer", name: "Yusuf Rahman", role: "Systems Engineer", emoji: "🧑‍🔧", description: "Managed life support. Hugo had filed a complaint against him for negligence.", statement: "I was doing maintenance on the water reclamation system. Nowhere near his module." },
    { id: "pilot", name: "Anna Berg", role: "Pilot", emoji: "👩‍✈️", description: "Youngest pilot on the mission. Hugo had made inappropriate advances toward her.", statement: "I was in the cupola taking Earth photos. I have a timestamp on every shot." },
    { id: "journalist", name: "Marco Deluca", role: "Documentary Journalist", emoji: "🎥", description: "Embedded journalist. Was filming a tell-all about Hugo's business crimes.", statement: "I was in the common area reviewing footage. My camera was rolling all night." }
  ],
  evidence: [
    { id: "ev-009-air", title: "Air Supply Log", type: "document", icon: "🌬️", isKey: true, content: ["03:14 — Hugo's module air valve closed remotely", "03:14 — Manual override triggered from engineer's console", "Engineer's credentials used", "Override code is unique to each crew member"] },
    { id: "ev-009-cctv", title: "Corridor Camera", type: "cctv", icon: "📹", isKey: true, content: ["02:55 — Dr. Okafor walks toward medical bay", "03:05 — Yusuf walks toward water reclamation", "03:10 — Yusuf makes a detour toward life support panel", "03:13 — Yusuf at life support panel — out of camera frame", "03:16 — Yusuf continues to water reclamation"] },
    { id: "ev-009-body", title: "Autopsy Report", type: "document", icon: "🔬", isKey: true, content: ["Cause: hypoxia (oxygen deprivation)", "No signs of struggle", "Hugo was sleeping when air was cut", "Time of death: 03:20-03:30"] },
    { id: "ev-009-complaint", title: "Hugo's Filed Complaint", type: "document", icon: "📄", isKey: true, content: ["Formal complaint against Yusuf for 'life support negligence'", "Filed 4 days before death", "If proven, Yusuf would lose space agency license permanently", "Hearing was scheduled for day after return"] },
    { id: "ev-009-will", title: "Hugo's Updated Will", type: "document", icon: "📄", isKey: false, content: ["Signed before launch", "All assets to his foundation", "Crew members would receive $500k each upon safe return", "But $0 if he died during the mission"] },
    { id: "ev-009-commander", title: "Commander's Checklist", type: "document", icon: "📝", isKey: false, content: ["Command module log 02:45-03:30", "Commander was running sequential tests", "Continuous video log confirms her presence"] },
    { id: "ev-009-doctor", title: "Medical Bay Log", type: "document", icon: "📝", isKey: false, content: ["Dr. Okafor entered at 03:00", "Logged Hugo's vitals: normal at 03:00", "Next scheduled check: 05:00", "Was recording notes until 04:15"] },
    { id: "ev-009-pilot", title: "Pilot's Photos", type: "document", icon: "📷", isKey: false, content: ["23 photos timestamped 02:50-03:40", "Earth visible in all shots — confirms cupola position", "No gaps in timestamps"] },
    { id: "ev-009-journalist", title: "Journalist's Footage", type: "cctv", icon: "🎥", isKey: false, content: ["Continuous 6-hour recording", "Marco visible in common area throughout", "Audio captures distant 'click' at 03:14 — consistent with valve closing"] },
    { id: "ev-009-toolkit", title: "Engineer's Toolkit", type: "document", icon: "🔧", isKey: true, content: ["Found in Yusuf's locker after the incident", "Override keycard hidden inside a wrench handle", "Card had Yusuf's ID number etched on it", "Card showed one recent use at 03:14"] }
  ],
  timeline: [
    { time: "02:45", event: "Commander starts pre-return checklist" },
    { time: "02:50", event: "Anna begins taking Earth photos in cupola" },
    { time: "02:55", event: "Dr. Okafor heads to medical bay" },
    { time: "03:00", event: "Dr. Okafor logs Hugo's vitals as normal" },
    { time: "03:05", event: "Yusuf walks toward water reclamation" },
    { time: "03:10", event: "Yusuf detours toward life support panel" },
    { time: "03:14", event: "Air valve to Hugo's module closed remotely" },
    { time: "03:16", event: "Yusuf continues to water reclamation" },
    { time: "03:30", event: "Estimated time of death" },
    { time: "05:00", event: "Dr. Okafor discovers Hugo dead" }
  ],
  solution: {
    culpritId: "engineer",
    motive: "Hugo had filed a formal complaint accusing Yusuf of life-support negligence. A hearing was scheduled for the day after return, and if proven, Yusuf would lose his space agency license permanently. Facing career destruction, Yusuf used his override keycard (hidden in his toolkit) to remotely close the air valve to Hugo's module during his 'water reclamation' walk, then continued on his route to establish an alibi.",
    keyEvidenceIds: ["ev-009-air", "ev-009-cctv", "ev-009-complaint", "ev-009-toolkit"]
  }
};
export const CASE_010: Case = {
  id: "010",
  number: 10,
  title: "The Inheritance Game",
  difficulty: 5,
  briefing: "Reclusive millionaire Margaret Ashworth was found dead in her mansion library on the morning of her 80th birthday. Her entire family had gathered for the celebration. The family lawyer was supposed to read the will at noon — but Margaret was poisoned before breakfast. The revised will is missing.",
  image: "/cases/case-010.jpeg",
  suspects: [
    { id: "charles", name: "Charles Ashworth", role: "Eldest Son", emoji: "🧔", description: "Ran the family business into the ground. Was about to be cut from the will.", statement: "I was in the garden having a cigarette. I couldn't sleep." },
    { id: "diana", name: "Diana Ashworth", role: "Daughter", emoji: "👩", description: "Estranged for 10 years. Suddenly appeared last week 'to reconcile'.", statement: "I was in my room reading. I hadn't spoken to Mother in years — I wanted to make amends." },
    { id: "eleanor", name: "Eleanor Ashworth", role: "Daughter-in-law", emoji: "👩‍🦰", description: "Charles's wife. Ran Margaret's charitable foundation. Had been skimming funds.", statement: "I was preparing the birthday breakfast. The cook can confirm." },
    { id: "frank", name: "Frank Morrison", role: "Family Lawyer", emoji: "👨‍💼", description: "Handled Margaret's estate for 30 years. Was being replaced by a younger firm.", statement: "I arrived at 7:30 AM. I was in the study waiting for Margaret to come down." },
    { id: "nurse", name: "Nurse Helen Boyd", role: "Live-in Nurse", emoji: "👩‍⚕️", description: "Cared for Margaret for 3 years. Margaret had recently changed her will to include Helen.", statement: "I gave Margaret her morning medication at 7:00. She was fine. I went to prepare her bath." }
  ],
  evidence: [
    { id: "ev-010-toxicology", title: "Toxicology Report", type: "document", icon: "🔬", isKey: true, content: ["Cause of death: digitalis poisoning", "Found in her morning tea", "Tea served at 06:45", "Time of death: 07:15-07:30"] },
    { id: "ev-010-tea", title: "Tea Service Analysis", type: "document", icon: "🫖", isKey: true, content: ["Tea pot contained traces of digitalis", "Tea cup: Margaret's prints + Nurse Helen's prints", "No other prints on the pot", "Sugar bowl had digitalis residue on the inner lid"] },
    { id: "ev-010-digitalis", title: "Digitalis Source", type: "document", icon: "💊", isKey: true, content: ["Digitalis found in Nurse Helen's medical bag", "Prescription was for Margaret's heart condition", "Bottle was almost full — only 2 pills missing", "Pills were crushed into powder — not prescribed form"] },
    { id: "ev-010-will", title: "Missing Will", type: "document", icon: "📄", isKey: true, content: ["Margaret rewrote her will 5 days ago", "New will: cuts Charles and Diana out entirely", "New will: leaves everything to Nurse Helen and the foundation", "Will was stored in Margaret's personal safe — now empty"] },
    { id: "ev-010-lawyer", title: "Frank's Documents", type: "document", icon: "📄", isKey: true, content: ["Frank brought the OLD will (10 years old)", "He was unaware of the rewrite", "But his briefcase had a USB drive containing the NEW will draft", "Timestamp on file: 3 days ago" ] },
    { id: "ev-010-garden", title: "Gardener's Testimony", type: "witness", icon: "📝", isKey: false, content: ["Charles was in the garden 06:30-07:15", "Smoked 4 cigarettes", "Did not enter the house during that time"] },
    { id: "ev-010-cook", title: "Cook's Testimony", type: "witness", icon: "📝", isKey: false, content: ["Eleanor prepared the breakfast tray at 06:30", "Nurse Helen took the tray upstairs at 06:45", "Eleanor did not go upstairs"] },
    { id: "ev-010-nurse-log", title: "Nurse Helen's Log", type: "document", icon: "📝", isKey: false, content: ["06:00 — Margaret woke up, normal vitals", "06:45 — Tea delivered", "07:00 — Morning medication given", "07:15 — Went to prepare bath", "07:30 — Returned, found Margaret unresponsive" ] },
    { id: "ev-010-diana", title: "Diana's Receipts", type: "bank", icon: "🧾", isKey: false, content: ["Diana arrived 4 days before the birthday", "Bought a book on 'reconciliation with aging parents'", "Also bought 'Digitalis: A Reference Guide for Pharmacists'", "But she was in her room reading at time of death — staff confirm"] },
    { id: "ev-010-charles", title: "Charles's Financial Records", type: "bank", icon: "💳", isKey: false, content: ["Charles owes $3.2M to creditors", "Was disinherited 5 days ago", "Called Margaret 3 times yesterday — she didn't answer"] }
  ],
  timeline: [
    { time: "06:00", event: "Nurse Helen checks Margaret — normal" },
    { time: "06:30", event: "Eleanor prepares breakfast tray" },
    { time: "06:30", event: "Charles goes to the garden for a cigarette" },
    { time: "06:45", event: "Nurse Helen takes tea to Margaret" },
    { time: "07:00", event: "Nurse Helen gives Margaret her morning meds" },
    { time: "07:15", event: "Nurse Helen leaves to prepare bath" },
    { time: "07:15", event: "Charles returns from garden" },
    { time: "07:30", event: "Nurse Helen returns — Margaret dead" },
    { time: "07:30", event: "Frank arrived at 07:30 — waits in study" },
    { time: "08:00", event: "Body discovered officially" }
  ],
  solution: {
    culpritId: "nurse",
    motive: "Nurse Helen had spent 3 years earning Margaret's trust, and 5 days ago she succeeded — Margaret rewrote her will to leave everything to Helen and the foundation. But Helen knew the family would contest the will. So she used Margaret's own heart medication (digitalis) to poison her tea, then took the new will from the safe to make it disappear. She didn't know Frank had already received an emailed copy of the draft — which he'd saved to a USB drive.",
    keyEvidenceIds: ["ev-010-toxicology", "ev-010-tea", "ev-010-digitalis", "ev-010-will", "ev-010-lawyer"]
  }
};