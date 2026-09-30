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

export const CASE_011: Case = {
  id: "011", number: 11, title: "The Bank Vault Heist", difficulty: 4,
  briefing: "On Monday morning, the Central Trust vault was found open. $8M in cash missing. No alarms, no forced entry. The night manager is dead. Three employees had access to the vault that weekend.",
  image: "/cases/case-011.jpeg",
  suspects: [
    { id: "s011a", name: "Vikram Shah", role: "Night Manager", emoji: "👨‍💼", description: "Had the only master key. Found dead in the vault room.", statement: "I locked up at 8 PM Friday. That was the last time I was there." },
    { id: "s011b", name: "Priya Kapoor", role: "Senior Teller", emoji: "👩‍💼", description: "Knew vault codes. Gambling debts rumored.", statement: "I was out of town. Hotel receipts prove it." },
    { id: "s011c", name: "Ali Hassan", role: "Security Guard", emoji: "👮", description: "Worked Friday night. Cameras malfunctioned on his shift.", statement: "Cameras glitch. I did my rounds." },
    { id: "s011d", name: "Ramesh Iyer", role: "Vault Technician", emoji: "🧑‍🔧", description: "Recently serviced vault. Knew internals.", statement: "I fixed the lock last month. Fully tested." },
    { id: "s011e", name: "Ms. Fernandes", role: "Branch Manager", emoji: "👩‍💼", description: "Under investigation for accounting irregularities.", statement: "I was home with family." }
  ],
  evidence: [
    { id: "ev-011-1", title: "Vault Door Log", type: "document", icon: "🔐", isKey: true, content: ["23:14 Fri — Vault opened with valid code","Owner: Ramesh's service code","Not flagged — still on approved list"] },
    { id: "ev-011-2", title: "Security Camera Log", type: "cctv", icon: "📹", isKey: true, content: ["00:05 Sat — Camera 4 dark","00:47 — back online","02:10 — Camera 2 dark","02:55 — back online"] },
    { id: "ev-011-3", title: "Phone Records — Ali", type: "phone", icon: "📱", isKey: true, content: ["01:30 — Call from unlisted","45 seconds","Location ping: inside bank","Caller: known criminal associate"] },
    { id: "ev-011-4", title: "Autopsy — Vikram", type: "document", icon: "🔬", isKey: true, content: ["Time of death: 01:30-02:00 Sat","Cause: blunt force trauma","Skin under nails — matches Ramesh"] },
    { id: "ev-011-5", title: "Hotel Receipts — Priya", type: "bank", icon: "🧾", isKey: true, content: ["Check-in 21:00 Fri","Check-out 09:00 Sun","Card used at bar Sat night","Priya cleared"] },
    { id: "ev-011-6", title: "Vault Internal Mechanics", type: "document", icon: "⚙️", isKey: false, content: ["Serviced by Ramesh 3 weeks ago","Had access to test codes","Codes not rotated after"] },
    { id: "ev-011-7", title: "Missing Cash Weight", type: "document", icon: "💰", isKey: false, content: ["$8M in $100s = ~80kg","Required 2+ people or cart","Load marks on floor"] },
    { id: "ev-011-8", title: "Fernandes Alibi", type: "witness", icon: "🏠", isKey: false, content: ["Sister confirms stayed home","Ring camera timestamp"] },
    { id: "ev-011-9", title: "Ramesh Financials", type: "bank", icon: "💳", isKey: true, content: ["$3.5M deposited Mon to shell company","Shell registered 2 weeks ago","Ramesh sole director"] },
    { id: "ev-011-10", title: "Texts — Ali & Ramesh", type: "phone", icon: "💬", isKey: true, content: ["Fri 22:00 Ramesh: 'Everything in place.'","Fri 22:05 Ali: 'Cameras 4 & 2 on schedule.'","Sat 03:00 Ramesh: 'Done.'"] }
  ],
  timeline: [
    { time: "20:00 Fri", event: "Vikram locks the vault" },
    { time: "22:00 Fri", event: "Ramesh texts Ali" },
    { time: "23:14 Fri", event: "Vault opened with Ramesh code" },
    { time: "00:05 Sat", event: "Camera 4 dark" },
    { time: "01:30 Sat", event: "Vikram returns, call from unlisted to Ali" },
    { time: "01:45 Sat", event: "Vikram killed in vault" },
    { time: "02:10 Sat", event: "Camera 2 dark" },
    { time: "03:00 Sat", event: "Ramesh: 'Done'" },
    { time: "09:00 Mon", event: "Body discovered" }
  ],
  solution: { culpritId: "s011d", motive: "Ramesh had vault test codes. Recruited Ali to disable cameras. Vikram arrived unexpectedly and was killed.", keyEvidenceIds: ["ev-011-1","ev-011-3","ev-011-4","ev-011-9","ev-011-10"] }
};

export const CASE_012: Case = {
  id: "012", number: 12, title: "The Reunion Murder", difficulty: 3,
  briefing: "At a 20-year high school reunion, former class president Nikhil Mehta was found dead in the hotel bathroom. Poisoned drink. Five classmates had motive.",
  image: "/cases/case-012.jpeg",
  suspects: [
    { id: "s012a", name: "Anjali Sharma", role: "Bullying Victim", emoji: "👩", description: "Nikhil made her life hell. Now a surgeon.", statement: "I came to show them how far I've come." },
    { id: "s012b", name: "Rohit Verma", role: "Ex-Best Friend", emoji: "🧑", description: "Nikhil stole his girlfriend in senior year.", statement: "Old grudges fade." },
    { id: "s012c", name: "Sunita Rao", role: "Former Classmate", emoji: "👩‍🦰", description: "Nikhil got her suspended over false cheating accusation.", statement: "I run a bakery now." },
    { id: "s012d", name: "Arjun Kapoor", role: "Rival Athlete", emoji: "🏃", description: "Nikhil's false doping accusation cost him scholarship.", statement: "I'm over it." },
    { id: "s012e", name: "Maya Iyer", role: "Event Organizer", emoji: "👩‍🎤", description: "Nikhil was threatening to expose her hidden past.", statement: "I was coordinating the event." }
  ],
  evidence: [
    { id: "ev-012-1", title: "Toxicology Report", type: "document", icon: "🔬", isKey: true, content: ["Cause: cyanide","Ingestion: 22:15","Only his glass poisoned","Source: industrial solvent"] },
    { id: "ev-012-2", title: "Bar CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:05 Anjali at bar","22:10 Rohit at bar","22:13 Maya at bar","22:14 Sunita walks past table","22:16 Nikhil drinks"] },
    { id: "ev-012-3", title: "Fingerprints on Glass", type: "document", icon: "🖐️", isKey: true, content: ["Nikhil's prints","Partial second print — matches Sunita"] },
    { id: "ev-012-4", title: "Anjali's Purse", type: "document", icon: "👜", isKey: false, content: ["Sealed vial with cyanide residue","Clinic reported missing vial"] },
    { id: "ev-012-5", title: "Sunita's Bakery Van", type: "cctv", icon: "🚚", isKey: true, content: ["Parked outside 21:30","Rear door open 22:00-22:20","Apron has cyanide","Solvent used to clean bakery equipment"] },
    { id: "ev-012-6", title: "Rohit's Phone", type: "phone", icon: "📱", isKey: false, content: ["Text 22:00: 'He's going down tonight'","22:30: 'Someone beat me to it'"] },
    { id: "ev-012-7", title: "Maya's Emails", type: "document", icon: "📧", isKey: false, content: ["Nikhil threatening to expose her past","Sent 2 days before"] },
    { id: "ev-012-8", title: "Arjun's Log", type: "witness", icon: "📝", isKey: false, content: ["On terrace smoking","Two friends confirm"] },
    { id: "ev-012-9", title: "Cyanide Vial", type: "document", icon: "🧪", isKey: false, content: ["Found in hotel kitchen trash","Cleaned with bakery-grade solvent"] },
    { id: "ev-012-10", title: "Hotel Staff Statement", type: "witness", icon: "📝", isKey: false, content: ["Sunita asked where Nikhil's table was","Walked past it twice","Seemed nervous"] }
  ],
  timeline: [
    { time: "19:00", event: "Reunion begins" },
    { time: "21:30", event: "Sunita's van parked" },
    { time: "22:00", event: "Rohit texts ex-wife" },
    { time: "22:05", event: "Anjali at bar" },
    { time: "22:14", event: "Sunita walks past table" },
    { time: "22:16", event: "Nikhil drinks, collapses" },
    { time: "22:30", event: "Body found" },
    { time: "22:45", event: "Police called" }
  ],
  solution: { culpritId: "s012c", motive: "Sunita never forgave Nikhil. Used bakery solvent in a flask, poured it in his drink.", keyEvidenceIds: ["ev-012-2","ev-012-3","ev-012-5","ev-012-10"] }
};

export const CASE_013: Case = {
  id: "013", number: 13, title: "The Cruise Ship Killing", difficulty: 4,
  briefing: "Mid-Atlantic. Luxury liner Serenade. A wealthy passenger was pushed overboard from Deck 12 at 2 AM. Cabin door was locked from inside. Five passengers had access.",
  image: "/cases/case-013.jpeg",
  suspects: [
    { id: "s013a", name: "Captain Reyes", role: "Ship Captain", emoji: "👨‍✈️", description: "Would lose command if incident made headlines.", statement: "I was on the bridge." },
    { id: "s013b", name: "Helena Cross", role: "Ex-Wife", emoji: "👩", description: "Divorced 6 months ago, no settlement.", statement: "I wanted closure." },
    { id: "s013c", name: "Luca Bianchi", role: "Business Partner", emoji: "🧑‍💼", description: "Victim discovered his $2M embezzlement.", statement: "I was at the casino." },
    { id: "s013d", name: "Sofia Reyes", role: "Captain's Daughter", emoji: "👩‍🦱", description: "Having affair with victim.", statement: "I was in my cabin, crying." },
    { id: "s013e", name: "Mr. Patel", role: "Ship Doctor", emoji: "👨‍⚕️", description: "Victim reported him for malpractice.", statement: "I was on medical standby." }
  ],
  evidence: [
    { id: "ev-013-1", title: "Deck 12 Access Log", type: "document", icon: "🔐", isKey: true, content: ["01:40 Helena entry","01:55 Luca entry","02:10 Sofia entry","02:15 Fall detected"] },
    { id: "ev-013-2", title: "Bridge Camera", type: "cctv", icon: "📹", isKey: false, content: ["Captain on bridge 01:00-03:30"] },
    { id: "ev-013-3", title: "Casino Footage", type: "cctv", icon: "🎰", isKey: false, content: ["Luca at poker until 03:00"] },
    { id: "ev-013-4", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Drowning after fall","Female DNA under nails","Matches Sofia","Bruising on arms"] },
    { id: "ev-013-5", title: "Helena's Diary", type: "document", icon: "📔", isKey: true, content: ["2 days ago: 'If he won't pay, I'll make him pay.'","1 day ago: 'Tomorrow it ends.'"] },
    { id: "ev-013-6", title: "Cabin Steward Statement", type: "witness", icon: "📝", isKey: true, content: ["Argument at 02:00","Male + female voices","'Please don't' — victim","'You should have thought of that' — female"] },
    { id: "ev-013-7", title: "Sofia's Phone", type: "phone", icon: "📱", isKey: true, content: ["Voice memo 01:55: 'You ended us. I'll end YOU.'","Text 01:30: 'Deck 12. Now.'"] },
    { id: "ev-013-8", title: "Victim's Cabin", type: "document", icon: "🚪", isKey: false, content: ["Locked inside","Balcony door unlocked"] },
    { id: "ev-013-9", title: "Doctor's Log", type: "document", icon: "📋", isKey: false, content: ["Medical bay 01:30-04:00","Nurse confirms"] },
    { id: "ev-013-10", title: "Sofia's Dress", type: "document", icon: "👗", isKey: true, content: ["Salt water stains","Wet when found","Sofia claimed she hadn't been on deck"] }
  ],
  timeline: [
    { time: "01:00", event: "Captain on bridge" },
    { time: "01:30", event: "Sofia texts victim" },
    { time: "01:40", event: "Helena enters Deck 12" },
    { time: "01:55", event: "Sofia voice memo" },
    { time: "01:55", event: "Luca enters Deck 12" },
    { time: "02:00", event: "Argument heard" },
    { time: "02:10", event: "Sofia enters Deck 12" },
    { time: "02:15", event: "Fall detected" }
  ],
  solution: { culpritId: "s013d", motive: "Sofia's affair ended. She lured him to Deck 12 and pushed him.", keyEvidenceIds: ["ev-013-1","ev-013-4","ev-013-6","ev-013-7","ev-013-10"] }
};

export const CASE_014: Case = {
  id: "014", number: 14, title: "The Silent Monastery", difficulty: 5,
  briefing: "Remote mountain monastery. Abbott found dead in chapel at dawn. Strangled with a rosary. Five monks inside. Gate was snowed shut.",
  image: "/cases/case-014.jpeg",
  suspects: [
    { id: "s014a", name: "Brother Michael", role: "Cellarer", emoji: "🧔", description: "Managed finances. Accused of skimming.", statement: "I was in the wine cellar." },
    { id: "s014b", name: "Brother Paul", role: "Novice Master", emoji: "🧑", description: "Youngest monk. Being expelled.", statement: "I was in the chapel praying." },
    { id: "s014c", name: "Brother Andrew", role: "Infirmarian", emoji: "👨‍⚕️", description: "Had access to poisons.", statement: "I was with a sick monk." },
    { id: "s014d", name: "Brother Francis", role: "Guest Master", emoji: "👴", description: "Had public argument with victim.", statement: "I sleep deeply." },
    { id: "s014e", name: "Brother Simon", role: "Choir Director", emoji: "🎼", description: "Victim took away his choir privileges.", statement: "I was in the bell tower." }
  ],
  evidence: [
    { id: "ev-014-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Strangulation with rosary","Time: 02:00-03:00","No defensive wounds","Traces of incense"] },
    { id: "ev-014-2", title: "Wine Cellar Log", type: "document", icon: "🍷", isKey: true, content: ["Michael in 22:00, out 05:30","Log written in one sitting (ink analysis)"] },
    { id: "ev-014-3", title: "Chapel Door Sensor", type: "cctv", icon: "📹", isKey: true, content: ["No CCTV (sacred)","02:15 door opened","02:40 door opened again"] },
    { id: "ev-014-4", title: "Bell Tower Log", type: "document", icon: "🔔", isKey: true, content: ["Bell rang at 03:00 for matins","Exactly on time","Simon must have been at ropes"] },
    { id: "ev-014-5", title: "Infirmary Records", type: "document", icon: "📋", isKey: false, content: ["Sick monk confirms Andrew present 01:00-04:00"] },
    { id: "ev-014-6", title: "Michael's Quarters", type: "document", icon: "🛏️", isKey: true, content: ["Accounting papers showing missing revenue","Letter from abbott: 'Confess or leave. Weekend deadline.'"] },
    { id: "ev-014-7", title: "Rosary", type: "document", icon: "📿", isKey: true, content: ["Victim's rosary","One bead missing — found under altar","Partial fingerprint: Michael"] },
    { id: "ev-014-8", title: "Snow on Grounds", type: "document", icon: "❄️", isKey: false, content: ["Fresh snow at 23:00","No footprints between buildings"] },
    { id: "ev-014-9", title: "Old Monk Statement", type: "witness", icon: "📝", isKey: false, content: ["Heard chapel door at 02:15","Footsteps toward altar","Then silence"] },
    { id: "ev-014-10", title: "Paul's Diary", type: "document", icon: "📔", isKey: false, content: ["'Abbott will expel me tomorrow.'","Written 2 days before"] }
  ],
  timeline: [
    { time: "22:00", event: "Michael enters wine cellar" },
    { time: "23:00", event: "Snow begins" },
    { time: "01:00", event: "Andrew in infirmary" },
    { time: "02:00", event: "Abbott strangled in chapel" },
    { time: "02:15", event: "Chapel door opened" },
    { time: "02:40", event: "Chapel door opened again" },
    { time: "03:00", event: "Matins bell rings" },
    { time: "05:30", event: "Michael leaves cellar" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s014a", motive: "Michael was skimming wine revenue. Abbott gave him last chance. He killed to hide the crime.", keyEvidenceIds: ["ev-014-1","ev-014-2","ev-014-6","ev-014-7"] }
};

export const CASE_015: Case = {
  id: "015", number: 15, title: "The Tech Startup Death", difficulty: 3,
  briefing: "Silicon Valley founder found dead in his office the night before a $500M acquisition. Laptop showed signs of forced delete. Five employees were in the building.",
  image: "/cases/case-015.jpeg",
  suspects: [
    { id: "s015a", name: "Aarav Mehta", role: "CTO", emoji: "👨‍💻", description: "Was about to be replaced.", statement: "I was debugging code in the server room." },
    { id: "s015b", name: "Zoe Chen", role: "Head of Product", emoji: "👩‍💼", description: "Victim publicly humiliated her.", statement: "I left at 10 PM." },
    { id: "s015c", name: "Jamal Carter", role: "Senior Engineer", emoji: "🧑‍💻", description: "Victim was going to cut his equity.", statement: "I was on a call with Tokyo." },
    { id: "s015d", name: "Rachel Kim", role: "Chief of Staff", emoji: "👩", description: "Knew illegal secrets.", statement: "I was home. Live alone." },
    { id: "s015e", name: "Diego Santos", role: "Security", emoji: "👮", description: "Recently demoted.", statement: "I was on rounds." }
  ],
  evidence: [
    { id: "ev-015-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Cardiac arrest","Potassium chloride in blood","Time: 01:30-02:00","No struggle"] },
    { id: "ev-015-2", title: "Laptop Forensics", type: "document", icon: "💻", isKey: true, content: ["Files deleted at 01:50","Admin account: Aarav Mehta","From server room terminal"] },
    { id: "ev-015-3", title: "Server Room Access Log", type: "document", icon: "🔐", isKey: true, content: ["01:20 Aarav entry","01:25 terminal login","02:10 exit","Commands 01:25-02:00"] },
    { id: "ev-015-4", title: "Zoe's Uber Receipt", type: "bank", icon: "🚗", isKey: false, content: ["Pickup 22:05, drop 22:50"] },
    { id: "ev-015-5", title: "Jamal's Call Log", type: "phone", icon: "📞", isKey: false, content: ["Tokyo call 22:00-01:00"] },
    { id: "ev-015-6", title: "Security Guard App", type: "document", icon: "📱", isKey: false, content: ["Diego checkpoints logged","GPS tracks physical location"] },
    { id: "ev-015-7", title: "KCl Source", type: "document", icon: "🧪", isKey: true, content: ["Company lab ordered for testing","Signed out by Aarav","20g missing"] },
    { id: "ev-015-8", title: "Rachel's Diary", type: "document", icon: "📔", isKey: false, content: ["'He'll take everyone down with him.'"] },
    { id: "ev-015-9", title: "Acquisition Docs", type: "document", icon: "📄", isKey: false, content: ["Aarav equity cut 90%","New CTO already hired"] },
    { id: "ev-015-10", title: "Coffee Mug", type: "document", icon: "☕", isKey: true, content: ["Traces of KCl","Fingerprint: Aarav"] }
  ],
  timeline: [
    { time: "22:00", event: "Jamal on Tokyo call" },
    { time: "22:05", event: "Zoe leaves" },
    { time: "00:30", event: "Diego checkpoint 1" },
    { time: "01:00", event: "Jamal call ends" },
    { time: "01:20", event: "Aarav enters server room" },
    { time: "01:25", event: "Aarav terminal login" },
    { time: "01:45", event: "Diego checkpoint 3" },
    { time: "01:50", event: "Files deleted" },
    { time: "02:00", event: "Time of death" },
    { time: "02:10", event: "Aarav leaves" }
  ],
  solution: { culpritId: "s015a", motive: "Aarav poisoned coffee with KCl after learning he'd be replaced with equity cut 90%.", keyEvidenceIds: ["ev-015-1","ev-015-2","ev-015-3","ev-015-7","ev-015-10"] }
};

export const CASE_016: Case = {
  id: "016", number: 16, title: "The Poisoned Vineyard", difficulty: 4,
  briefing: "A Napa Valley winery owner collapses during the annual wine tasting. Ricin in his private reserve. Four guests had access to the bottle during the ceremony.",
  image: "/cases/case-016.jpeg",
  suspects: [
    { id: "s016a", name: "Elena Moretti", role: "Head Winemaker", emoji: "👩‍🍷", description: "Owner was selling to corporate buyer; would lose her job.", statement: "I was pouring other tastings." },
    { id: "s016b", name: "Jean-Luc Dubois", role: "Rival Vintner", emoji: "🧔", description: "Victim publicly mocked his vintage.", statement: "I was at the vineyard's edge smoking." },
    { id: "s016c", name: "Priya Whitfield", role: "Estate Manager", emoji: "👩‍💼", description: "Owner discovered her affair with his son.", statement: "I was greeting guests at the entrance." },
    { id: "s016d", name: "Thomas Whitfield", role: "Victim's Son", emoji: "🧑", description: "Was being disinherited.", statement: "I was on the terrace with my mother." },
    { id: "s016e", name: "Chef Marcel", role: "Estate Chef", emoji: "👨‍🍳", description: "Owner cut his budget by 70%.", statement: "I was in the kitchen preparing canapés." }
  ],
  evidence: [
    { id: "ev-016-1", title: "Toxicology Report", type: "document", icon: "🔬", isKey: true, content: ["Ricin poisoning","Ingested via reserve bottle","No other glass contaminated"] },
    { id: "ev-016-2", title: "Tasting Area CCTV", type: "cctv", icon: "📹", isKey: true, content: ["16:10 Elena at main table","16:15 Jean-Luc near reserve shelf","16:22 Priya walks past reserve","16:28 Thomas at bar","16:30 victim pours himself"] },
    { id: "ev-016-3", title: "Reserve Bottle Print", type: "document", icon: "🖐️", isKey: true, content: ["Victim prints on glass","Partial print on cork — Elena Moretti"] },
    { id: "ev-016-4", title: "Elena's Emails", type: "document", icon: "📧", isKey: true, content: ["'If he sells, my 20 years here are gone.'","Sent to sister 3 days before"] },
    { id: "ev-016-5", title: "Wine Cellar Log", type: "document", icon: "🍷", isKey: true, content: ["Reserve bottle moved at 15:45","Only Elena had key to cellar"] },
    { id: "ev-016-6", title: "Jean-Luc's Cigarettes", type: "witness", icon: "🚬", isKey: false, content: ["Butler confirms smoking at edge","Full time 16:00-16:45"] },
    { id: "ev-016-7", title: "Priya's Text", type: "phone", icon: "📱", isKey: false, content: ["16:00 to son: 'He knows about us.'","Panicked tone"] },
    { id: "ev-016-8", title: "Thomas's Log", type: "witness", icon: "📝", isKey: false, content: ["Two guests saw him with mother on terrace","Never left terrace"] },
    { id: "ev-016-9", title: "Chef Marcel's Kitchen Log", type: "witness", icon: "📝", isKey: false, content: ["Cook and two waiters confirm","Never left kitchen"] },
    { id: "ev-016-10", title: "Ricin Source", type: "document", icon: "🧪", isKey: true, content: ["Traces found in wine cellar sink","Same type as castor bean processing","Elena recently researched ricin online"] }
  ],
  timeline: [
    { time: "15:45", event: "Reserve bottle moved in cellar" },
    { time: "16:00", event: "Priya texts son" },
    { time: "16:10", event: "Elena at main table" },
    { time: "16:15", event: "Jean-Luc at vineyard edge" },
    { time: "16:22", event: "Priya walks past reserve" },
    { time: "16:28", event: "Thomas on terrace" },
    { time: "16:30", event: "Victim pours reserve" },
    { time: "16:35", event: "Victim collapses" }
  ],
  solution: { culpritId: "s016a", motive: "Elena's 20-year career would end when the winery sold. She poisoned the reserve to kill the owner and stop the sale.", keyEvidenceIds: ["ev-016-1","ev-016-2","ev-016-3","ev-016-4","ev-016-5"] }
};

export const CASE_017: Case = {
  id: "017", number: 17, title: "The Bookstore Body", difficulty: 3,
  briefing: "A rare-book dealer is found dead in the back room of his antique bookstore. Blunt force trauma. A 500-year-old illuminated manuscript is missing. Four collectors visited that day.",
  image: "/cases/case-017.jpeg",
  suspects: [
    { id: "s017a", name: "Professor Ashford", role: "Oxford Don", emoji: "👨‍🏫", description: "Was outbid on a priceless first edition.", statement: "I was browsing the front shelves." },
    { id: "s017b", name: "Ms. Blackwood", role: "Private Collector", emoji: "👩‍🦰", description: "Victim exposed her as a forger.", statement: "I came to buy, not to fight." },
    { id: "s017c", name: "David Chen", role: "Bookbinder", emoji: "🧑‍🔧", description: "Owed victim £50,000.", statement: "I was delivering finished bindings." },
    { id: "s017d", name: "Rebecca Hale", role: "Former Employee", emoji: "👩", description: "Fired for stealing last month.", statement: "I came to apologize and get my job back." },
    { id: "s017e", name: "Mr. Okafor", role: "Antiquities Dealer", emoji: "🧔🏿", description: "Rival shop; wanted the manuscript for himself.", statement: "I was interested in a different item." }
  ],
  evidence: [
    { id: "ev-017-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Blunt force trauma","Time: 18:15","Weapon: heavy book corner","No defensive wounds"] },
    { id: "ev-017-2", title: "Store CCTV", type: "cctv", icon: "📹", isKey: true, content: ["17:30 Ashford enters","17:45 Chen enters","18:00 Blackwood enters","18:10 Okafor enters","18:12 Rebecca Hale enters back door"] },
    { id: "ev-017-3", title: "Back Room Fingerprints", type: "document", icon: "🖐️", isKey: true, content: ["Victim prints on desk","Bloody partial print — Rebecca Hale"] },
    { id: "ev-017-4", title: "Missing Manuscript Log", type: "document", icon: "📜", isKey: true, content: ["Last inventoried at 17:00","Gone after 18:15","Insurance value: £2M"] },
    { id: "ev-017-5", title: "Rebecca's Text", type: "phone", icon: "📱", isKey: true, content: ["18:05 to friend: 'He'll never forgive me.'","18:08: 'I need to end this.'"] },
    { id: "ev-017-6", title: "Ashford's Purchase History", type: "document", icon: "📄", isKey: false, content: ["Outbid on first edition last month","Publicly criticized victim"] },
    { id: "ev-017-7", title: "Blackwood's Forgery Evidence", type: "document", icon: "📄", isKey: false, content: ["Victim had proof she forged 3 antique maps","Was about to expose her"] },
    { id: "ev-017-8", title: "Chen's Debt Record", type: "document", icon: "💳", isKey: false, content: ["Owed victim £50,000","Payment plan was ending"] },
    { id: "ev-017-9", title: "Okafor's Rival Note", type: "document", icon: "📄", isKey: false, content: ["Victim refused to sell him the manuscript","Had made threats"] },
    { id: "ev-017-10", title: "Store Back Door Log", type: "document", icon: "🚪", isKey: true, content: ["18:12 opened (Rebecca)","18:20 opened again (exit)","Only Rebecca used back door that day"] }
  ],
  timeline: [
    { time: "17:30", event: "Ashford enters" },
    { time: "17:45", event: "Chen enters" },
    { time: "18:00", event: "Blackwood enters" },
    { time: "18:10", event: "Okafor enters" },
    { time: "18:12", event: "Rebecca enters through back door" },
    { time: "18:15", event: "Murder in back room" },
    { time: "18:20", event: "Rebecca exits (with manuscript)" },
    { time: "19:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s017d", motive: "Rebecca came to ask for her job back. Victim refused and humiliated her. In a rage, she struck him and fled with the manuscript to sell it.", keyEvidenceIds: ["ev-017-1","ev-017-2","ev-017-3","ev-017-4","ev-017-10"] }
};

export const CASE_018: Case = {
  id: "018", number: 18, title: "The Ski Lodge Incident", difficulty: 4,
  briefing: "A billionaire is found dead in his snowed-in ski lodge during a blizzard. Gunshot wound. The gun is missing. Five guests were stranded together.",
  image: "/cases/case-018.jpeg",
  suspects: [
    { id: "s018a", name: "Victoria Sterling", role: "Ex-Fiancée", emoji: "👩‍🦰", description: "He cancelled the wedding 3 days before.", statement: "I was in my room, packing." },
    { id: "s018b", name: "Anton Volkov", role: "Business Rival", emoji: "🧔", description: "Victim was buying his company against his will.", statement: "I was by the fireplace." },
    { id: "s018c", name: "Dr. Rachel Kim", role: "Personal Physician", emoji: "👩‍⚕️", description: "Victim planned to sue her for malpractice.", statement: "I was checking supplies in the medical room." },
    { id: "s018d", name: "Marcus Bell", role: "Bodyguard", emoji: "💪", description: "Recently fired for failing a job.", statement: "I was on patrol on the south side." },
    { id: "s018e", name: "Nadia Petrov", role: "Housekeeper", emoji: "👩‍🍳", description: "Owed years of unpaid wages.", statement: "I was preparing dinner in the kitchen." }
  ],
  evidence: [
    { id: "ev-018-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Single gunshot wound to chest","Time: 22:30","No defensive wounds","Point blank range"] },
    { id: "ev-018-2", title: "Missing Gun", type: "document", icon: "🔫", isKey: true, content: ["Registered to victim","Kept in nightstand","Drawer open, gun gone"] },
    { id: "ev-018-3", title: "Snow Prints", type: "document", icon: "❄️", isKey: true, content: ["Fresh tracks from south side to victim's window","Size 11 boots","Marcus Bell wears size 11"] },
    { id: "ev-018-4", title: "Guest Testimony — Victoria", type: "witness", icon: "📝", isKey: false, content: ["Maid saw her in her room 22:00-23:00","Packing boxes visible"] },
    { id: "ev-018-5", title: "Guest Testimony — Anton", type: "witness", icon: "📝", isKey: false, content: ["Cook confirms by fireplace all evening","Saw nothing unusual"] },
    { id: "ev-018-6", title: "Doctor's Inventory Log", type: "document", icon: "📋", isKey: false, content: ["Rachel logged medical supplies at 22:15","Consistent with her story"] },
    { id: "ev-018-7", title: "Marcus's Phone", type: "phone", icon: "📱", isKey: true, content: ["22:15 text to unknown number: 'Tonight.'","22:35 text: 'Done. Payment due.'"] },
    { id: "ev-018-8", title: "Kitchen Staff Log", type: "witness", icon: "📝", isKey: false, content: ["Nadia in kitchen 21:00-23:00","Two helpers confirm"] },
    { id: "ev-018-9", title: "Fired Records", type: "document", icon: "📄", isKey: true, content: ["Marcus fired 2 weeks ago","Victim had made him sign NDA","Marcus threatened during exit interview"] },
    { id: "ev-018-10", title: "Boot Room Camera", type: "cctv", icon: "📹", isKey: true, content: ["22:20 Marcus grabs snow boots","22:22 exits via side door","22:50 returns with boots wet"] }
  ],
  timeline: [
    { time: "21:00", event: "Blizzard intensifies" },
    { time: "22:00", event: "Victoria in her room" },
    { time: "22:15", event: "Marcus sends 'Tonight' text" },
    { time: "22:20", event: "Marcus grabs snow boots" },
    { time: "22:30", event: "Murder in victim's room" },
    { time: "22:35", event: "Marcus texts 'Done'" },
    { time: "22:50", event: "Marcus returns wet boots" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s018d", motive: "Marcus was fired and humiliated. He hired someone to supply a second gun and killed the victim in revenge, promising payment from the victim's safe.", keyEvidenceIds: ["ev-018-1","ev-018-3","ev-018-7","ev-018-9","ev-018-10"] }
};

export const CASE_019: Case = {
  id: "019", number: 19, title: "The Theatre Premiere", difficulty: 3,
  briefing: "During the opening night of a Broadway revival, the lead actor collapses on stage in front of 800 people. Poison in his prop glass. Five people backstage had motive.",
  image: "/cases/case-019.jpeg",
  suspects: [
    { id: "s019a", name: "Director Marcus Webb", role: "Director", emoji: "🎬", description: "Actor was sabotaging the production.", statement: "I was in the wings watching the performance." },
    { id: "s019b", name: "Lisa Monroe", role: "Co-star", emoji: "👩‍🎤", description: "Actor got her blacklisted at another theatre.", statement: "I was in my dressing room between scenes." },
    { id: "s019c", name: "Raj Patel", role: "Stage Manager", emoji: "🎭", description: "Actor humiliated him in front of crew.", statement: "I was at the stage manager's desk." },
    { id: "s019d", name: "Diana Cross", role: "Producer", emoji: "👩‍💼", description: "Actor demanded 40% raise or he'd quit.", statement: "I was in the audience greeting VIPs." },
    { id: "s019e", name: "James Reed", role: "Playwright", emoji: "✍️", description: "Actor had been rewriting his script nightly.", statement: "I was watching from the back of the house." }
  ],
  evidence: [
    { id: "ev-019-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Potassium cyanide","Ingested via prop glass","Only his glass poisoned"] },
    { id: "ev-019-2", title: "Backstage CCTV", type: "cctv", icon: "📹", isKey: true, content: ["20:35 Lisa enters stage left","20:40 Raj passes prop table","20:45 Marcus walks past","20:50 James at stage door"] },
    { id: "ev-019-3", title: "Prop Glass Fingerprints", type: "document", icon: "🖐️", isKey: true, content: ["Actor's prints","Partial print — Raj Patel"] },
    { id: "ev-019-4", title: "Raj's Notes", type: "document", icon: "📝", isKey: true, content: ["Detailed schedule of prop handling","Actor's glass not on rotation list that night"] },
    { id: "ev-019-5", title: "Lisa's Dressing Room", type: "document", icon: "💄", isKey: false, content: ["Two witnesses saw her there","Costume change at 20:42"] },
    { id: "ev-019-6", title: "Marcus's Director Notes", type: "document", icon: "📓", isKey: false, content: ["Actor had rewritten Act 2 twice","Threatened to walk before opening"] },
    { id: "ev-019-7", title: "Producer Emails", type: "document", icon: "📧", isKey: false, content: ["Insurance policy would pay out $5M","If actor died during performance"] },
    { id: "ev-019-8", title: "James's Notebook", type: "document", icon: "📔", isKey: false, content: ["Actor had been changing the ending","James was furious"] },
    { id: "ev-019-9", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["Used in theatre for special effects","Stored in stage manager's cabinet","Raj had keys"] },
    { id: "ev-019-10", title: "Actor's Water Bottle", type: "document", icon: "🍶", isKey: false, content: ["Clean","Not touched by anyone backstage"] }
  ],
  timeline: [
    { time: "19:30", event: "Curtain up" },
    { time: "20:35", event: "Lisa exits stage left" },
    { time: "20:40", event: "Raj passes prop table" },
    { time: "20:42", event: "Lisa changes costume" },
    { time: "20:45", event: "Marcus in wings" },
    { time: "20:50", event: "James at stage door" },
    { time: "20:52", event: "Actor drinks from glass" },
    { time: "20:53", event: "Actor collapses" }
  ],
  solution: { culpritId: "s019c", motive: "Raj had been publicly humiliated by the actor multiple times. He used his access to the cyanide cabinet and poisoned the actor's prop glass during a scene change.", keyEvidenceIds: ["ev-019-1","ev-019-2","ev-019-3","ev-019-4","ev-019-9"] }
};

export const CASE_020: Case = {
  id: "020", number: 20, title: "The Desert Convoy", difficulty: 4,
  briefing: "A humanitarian aid convoy crossing the Sahara stops for the night. At dawn, the convoy leader is found dead in his truck. Overdose of morphine from the medical supplies.",
  image: "/cases/case-020.jpeg",
  suspects: [
    { id: "s020a", name: "Dr. Fatima Aziz", role: "Mission Doctor", emoji: "👩‍⚕️", description: "Had access to morphine.", statement: "I was in my tent writing reports." },
    { id: "s020b", name: "Yusuf Rahman", role: "Truck Driver", emoji: "🚛", description: "Leader had reported him for stealing supplies.", statement: "I was asleep in truck #2." },
    { id: "s020c", name: "Anna Kowalski", role: "Logistics Coordinator", emoji: "👩‍💼", description: "Leader was replacing her next mission.", statement: "I was checking inventory in the supply truck." },
    { id: "s020d", name: "Omar Benali", role: "Local Guide", emoji: "🧔", description: "Leader had refused to pay agreed wages.", statement: "I was on watch duty all night." },
    { id: "s020e", name: "Carlos Mendes", role: "Security Contractor", emoji: "💪", description: "Leader caught him smuggling.", statement: "I was patrolling the perimeter." }
  ],
  evidence: [
    { id: "ev-020-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Morphine overdose","Time: 02:00-04:00","No injection marks — ingested"] },
    { id: "ev-020-2", title: "Medical Supplies Log", type: "document", icon: "📋", isKey: true, content: ["Morphine vials counted at 22:00","One vial missing at 06:00","Only Dr. Aziz and leader had keys"] },
    { id: "ev-020-3", title: "Campsite Footprints", type: "document", icon: "👣", isKey: true, content: ["Prints from Dr. Aziz's tent to leader's truck","Size 6 boots","Dr. Aziz wears size 6"] },
    { id: "ev-020-4", title: "Yusuf's Tent", type: "witness", icon: "📝", isKey: false, content: ["Second driver confirms Yusuf asleep","Snores loudly"] },
    { id: "ev-020-5", title: "Supply Truck Log", type: "document", icon: "📋", isKey: false, content: ["Anna signed in at 22:30","Signed out at 23:30","Stayed in supply truck"] },
    { id: "ev-020-6", title: "Watch Schedule", type: "document", icon: "📝", isKey: false, content: ["Omar on watch from 23:00-03:00","Logged himself every 15 minutes"] },
    { id: "ev-020-7", title: "Perimeter Log", type: "document", icon: "📝", isKey: false, content: ["Carlos logged rounds","Checked tent area at 01:00"] },
    { id: "ev-020-8", title: "Dr. Aziz's Notes", type: "phone", icon: "📱", isKey: true, content: ["Text to HQ 22:45: 'Leader is stealing from the mission. Reporting tomorrow.'"] },
    { id: "ev-020-9", title: "Leader's Coffee Cup", type: "document", icon: "☕", isKey: true, content: ["Traces of morphine","Dr. Aziz's fingerprint on cup"] },
    { id: "ev-020-10", title: "Doctor's Kit", type: "document", icon: "💊", isKey: false, content: ["Morphine vial missing","Kit locked but accessible to Dr. Aziz"] }
  ],
  timeline: [
    { time: "22:00", event: "Medical supplies counted" },
    { time: "22:30", event: "Anna in supply truck" },
    { time: "22:45", event: "Dr. Aziz texts HQ" },
    { time: "23:00", event: "Omar begins watch" },
    { time: "01:00", event: "Carlos rounds tent area" },
    { time: "02:00", event: "Leader drinks coffee" },
    { time: "03:00", event: "Omar's watch ends" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s020a", motive: "Dr. Aziz discovered the leader was stealing aid supplies and selling them. She reported it to HQ but feared he would retaliate before they acted. She poisoned his coffee with morphine from her kit.", keyEvidenceIds: ["ev-020-1","ev-020-2","ev-020-3","ev-020-8","ev-020-9"] }
};

export const CASE_021: Case = {
  id: "021", number: 21, title: "The Yacht Party", difficulty: 4,
  briefing: "A hedge fund manager is found dead on his yacht during a sunset party in Monaco. Overboard, but the current would have carried a body away — his was tied to the anchor. Five guests were aboard.",
  image: "/cases/case-021.jpeg",
  suspects: [
    { id: "s021a", name: "Isabelle Laurent", role: "Ex-Wife", emoji: "👩", description: "Owed €3M settlement from the divorce.", statement: "I was at the bow with a cocktail." },
    { id: "s021b", name: "Raj Malhotra", role: "Business Partner", emoji: "🧑‍💼", description: "Caught embezzling funds.", statement: "I was on the aft deck with investors." },
    { id: "s021c", name: "Captain Moreau", role: "Yacht Captain", emoji: "👨‍✈️", description: "Victim threatened to expose his smuggling.", statement: "I was at the helm, monitoring the route." },
    { id: "s021d", name: "Zara Khalil", role: "Personal Assistant", emoji: "👩‍💼", description: "Recently fired without cause.", statement: "I was serving drinks to guests on the main deck." },
    { id: "s021e", name: "David Sterling", role: "Rival Fund Manager", emoji: "🧔", description: "Victim stole his biggest client.", statement: "I was at the stern smoking a cigar." }
  ],
  evidence: [
    { id: "ev-021-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Cause: asphyxiation (drowning)","Skull fracture pre-mortem","Time: 19:30-20:00"] },
    { id: "ev-021-2", title: "Deck CCTV", type: "cctv", icon: "📹", isKey: true, content: ["19:15 Isabelle at bow","19:30 Raj disappears from view","19:45 Captain at helm","19:55 Zara with drinks"] },
    { id: "ev-021-3", title: "Anchor Rope Fiber", type: "document", icon: "🪢", isKey: true, content: ["Nautical rope tied around body","Same brand as captain's spare line","Line missing from captain's store"] },
    { id: "ev-021-4", title: "Isabelle's Settlement Docs", type: "document", icon: "📄", isKey: true, content: ["Victim refused to pay €3M","Court date set for next week","Isabelle would lose everything"] },
    { id: "ev-021-5", title: "Raj's Emails", type: "document", icon: "📧", isKey: false, content: ["Embezzlement discovered by victim","Was about to be reported to SEC"] },
    { id: "ev-021-6", title: "Captain's Log", type: "document", icon: "📖", isKey: false, content: ["Logged at helm every 15 min","Consistent with crew testimony"] },
    { id: "ev-021-7", title: "Zara's Phone", type: "phone", icon: "📱", isKey: false, content: ["Text at 19:20: 'You'll regret firing me.'","Delivered, no reply"] },
    { id: "ev-021-8", title: "Sterling's Alibi", type: "witness", icon: "📝", isKey: false, content: ["Two guests confirm he was at stern","Smoking continuously 19:00-20:30"] },
    { id: "ev-021-9", title: "Forensic Report — Wounds", type: "document", icon: "🔬", isKey: true, content: ["Blunt force to back of head","Weapon consistent with brass deck fitting","Deck fitting missing from helm area"] },
    { id: "ev-021-10", title: "Blood on Helm", type: "document", icon: "🩸", isKey: true, content: ["Traces of blood near helm","Wiped but detectable","DNA matches victim"] }
  ],
  timeline: [
    { time: "19:15", event: "Isabelle seen at bow" },
    { time: "19:20", event: "Zara sends angry text" },
    { time: "19:30", event: "Raj disappears from CCTV view" },
    { time: "19:45", event: "Victim struck near helm" },
    { time: "19:55", event: "Body thrown overboard with anchor" },
    { time: "20:00", event: "Guests notice victim missing" },
    { time: "20:30", event: "Body recovered by coast guard" }
  ],
  solution: { culpritId: "s021c", motive: "Victim discovered Captain Moreau was smuggling luxury goods through his yacht. When the victim threatened to report him, Moreau killed him to silence him.", keyEvidenceIds: ["ev-021-1","ev-021-3","ev-021-9","ev-021-10"] }
};

export const CASE_022: Case = {
  id: "022", number: 22, title: "The Art Auction", difficulty: 4,
  briefing: "At a high-profile art auction in Dubai, a famous collector collapses after sipping champagne. Ricin. The painting he was about to bid on — a $50M Picasso — disappears during the chaos.",
  image: "/cases/case-022.jpeg",
  suspects: [
    { id: "s022a", name: "Sheikh Al-Rashid", role: "Auction Host", emoji: "👳", description: "Owner of the auction house.", statement: "I was on stage introducing the next lot." },
    { id: "s022b", name: "Claire Beaumont", role: "Art Authenticator", emoji: "👩‍🎨", description: "Declared the Picasso a forgery.", statement: "I was verifying a different painting." },
    { id: "s022c", name: "Hassan Karim", role: "Security Chief", emoji: "💪", description: "Victim was going to file a complaint against him.", statement: "I was monitoring the exits." },
    { id: "s022d", name: "Elena Volkov", role: "Private Collector", emoji: "👩‍🦰", description: "Repeatedly outbid by the victim.", statement: "I was at my seat in the front row." },
    { id: "s022e", name: "Jean-Paul Sartre", role: "Art Dealer", emoji: "🧔", description: "Victim ruined his reputation last year.", statement: "I was in the lounge area, making calls." }
  ],
  evidence: [
    { id: "ev-022-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Ricin poisoning","Ingested via champagne","Time: 21:15"] },
    { id: "ev-022-2", title: "Auction Hall CCTV", type: "cctv", icon: "📹", isKey: true, content: ["21:05 Claire passes champagne tray","21:08 Hassan near victim","21:10 Elena at front row","21:12 Jean-Paul enters hall briefly"] },
    { id: "ev-022-3", title: "Champagne Glass", type: "document", icon: "🍾", isKey: true, content: ["Victim's glass","Ricin residue","Fingerprints: victim + Hassan Karim"] },
    { id: "ev-022-4", title: "Missing Painting", type: "document", icon: "🖼️", isKey: true, content: ["Picasso removed from wall","Frame found in service corridor","Thief used staff access code"] },
    { id: "ev-022-5", title: "Staff Access Log", type: "document", icon: "🔐", isKey: true, content: ["Access code used at 21:20","Code belonged to Hassan Karim","Only 3 people knew Hassan's code"] },
    { id: "ev-022-6", title: "Claire's Authentication Notes", type: "document", icon: "📄", isKey: false, content: ["Declared Picasso a forgery","Said it was worth $0","Was going to expose the owner"] },
    { id: "ev-022-7", title: "Elena's Bidding History", type: "document", icon: "📄", isKey: false, content: ["Lost 12 major auctions to victim","Had publicly threatened him"] },
    { id: "ev-022-8", title: "Sheikh's Speech Notes", type: "witness", icon: "📝", isKey: false, content: ["Staff confirm he was on stage","Continuous audio recording"] },
    { id: "ev-022-9", title: "Jean-Paul's Calls", type: "phone", icon: "📱", isKey: false, content: ["Called a gallery in Zurich","Was not planning a theft"] },
    { id: "ev-022-10", title: "Ricin Source", type: "document", icon: "🧪", isKey: true, content: ["Found in security office cupboard","Same batch as lab in Karim's hometown"] }
  ],
  timeline: [
    { time: "21:05", event: "Claire passes champagne tray" },
    { time: "21:08", event: "Hassan near victim" },
    { time: "21:10", event: "Elena at front row" },
    { time: "21:12", event: "Jean-Paul briefly enters" },
    { time: "21:15", event: "Victim drinks poisoned champagne" },
    { time: "21:20", event: "Painting stolen via staff code" },
    { time: "21:22", event: "Victim collapses" },
    { time: "21:45", event: "Painting reported missing" }
  ],
  solution: { culpritId: "s022c", motive: "Victim was going to file a formal complaint against Hassan Karim for harassment. Hassan poisoned the champagne and used the chaos to steal the painting for a buyer he owed money to.", keyEvidenceIds: ["ev-022-1","ev-022-3","ev-022-4","ev-022-5","ev-022-10"] }
};

export const CASE_023: Case = {
  id: "023", number: 23, title: "The Newspaper Editor", difficulty: 3,
  briefing: "An investigative newspaper editor is found dead in his office. Gunshot to the head. His latest exposé — about a political figure — is missing from his safe. Five journalists had access.",
  image: "/cases/case-023.jpeg",
  suspects: [
    { id: "s023a", name: "Sarah Mitchell", role: "Senior Reporter", emoji: "👩‍💼", description: "Story was going to be given to someone else.", statement: "I was in the newsroom filing my column." },
    { id: "s023b", name: "Ahmed Hassan", role: "Political Editor", emoji: "🧔", description: "Story would expose his brother.", statement: "I was at home with my family." },
    { id: "s023c", name: "Jessica Wong", role: "Junior Reporter", emoji: "👩", description: "Editor had rejected her story.", statement: "I was at my desk, editing photos." },
    { id: "s023d", name: "Robert Klein", role: "IT Manager", emoji: "👨‍💻", description: "Editor discovered he was selling info.", statement: "I was in the server room doing maintenance." },
    { id: "s023e", name: "Priya Sharma", role: "Photographer", emoji: "📷", description: "Editor was going to sue her for a photo scandal.", statement: "I was out on assignment." }
  ],
  evidence: [
    { id: "ev-023-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Single gunshot to head","Time: 23:15","No defensive wounds","Point blank range"] },
    { id: "ev-023-2", title: "Office CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:45 Sarah passes hallway","23:00 Klein enters server room","23:10 Ahmed returns to office","23:14 Klein seen near victim's office"] },
    { id: "ev-023-3", title: "Missing Exposé File", type: "document", icon: "📄", isKey: true, content: ["Safe opened","Only exposé file missing","Safe code known by 3 people"] },
    { id: "ev-023-4", title: "Gun on Scene", type: "document", icon: "🔫", isKey: true, content: ["Unregistered 9mm","Found in trash bin","Fingerprints wiped clean"] },
    { id: "ev-023-5", title: "Ahmed's Family Alibi", type: "witness", icon: "📝", isKey: false, content: ["Wife confirms he was home until 22:30","Returned to office at 23:10 for forgotten phone"] },
    { id: "ev-023-6", title: "Sarah's Column Draft", type: "document", icon: "📝", isKey: false, content: ["Timestamped 22:55","Consistent with her story"] },
    { id: "ev-023-7", title: "Jessica's Work Log", type: "document", icon: "📋", isKey: false, content: ["Login at 22:00","Continuous activity until 23:30"] },
    { id: "ev-023-8", title: "Klein's Emails", type: "document", icon: "📧", isKey: true, content: ["Sold internal info to politicians","Editor had discovered last week","Editor scheduled meeting with board Monday"] },
    { id: "ev-023-9", title: "Priya's Assignment Log", type: "document", icon: "📄", isKey: false, content: ["At city hall event until 23:45","Photographer colleague confirms"] },
    { id: "ev-023-10", title: "Server Room Access", type: "document", icon: "🔐", isKey: true, content: ["Klein logged in at 23:00","Exited at 23:20","Room is 20 feet from victim's office"] }
  ],
  timeline: [
    { time: "22:00", event: "Jessica logs in" },
    { time: "22:45", event: "Sarah passes hallway" },
    { time: "22:55", event: "Sarah files her column" },
    { time: "23:00", event: "Klein enters server room" },
    { time: "23:10", event: "Ahmed returns to office" },
    { time: "23:14", event: "Klein seen near victim's office" },
    { time: "23:15", event: "Murder" },
    { time: "23:20", event: "Klein exits server room" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s023d", motive: "Editor had discovered Klein was selling internal information to politicians. Klein killed him and stole the exposé file before the Monday board meeting.", keyEvidenceIds: ["ev-023-1","ev-023-2","ev-023-3","ev-023-8","ev-023-10"] }
};

export const CASE_024: Case = {
  id: "024", number: 24, title: "The Winery Inheritance", difficulty: 4,
  briefing: "The patriarch of a French wine dynasty dies during a family dinner. Arsenic in his wine. The estate is worth €200M. His will was being changed next week.",
  image: "/cases/case-024.jpeg",
  suspects: [
    { id: "s024a", name: "Antoine Dubois", role: "Eldest Son", emoji: "🧑‍💼", description: "Being disinherited in the new will.", statement: "I was in the dining room with everyone." },
    { id: "s024b", name: "Marie Dubois", role: "Daughter", emoji: "👩", description: "Estranged 12 years. Sudden return.", statement: "I was helping Mother in the kitchen." },
    { id: "s024c", name: "Chef Pierre", role: "Family Chef", emoji: "👨‍🍳", description: "Was being fired after 30 years.", statement: "I was cooking and plating all evening." },
    { id: "s024d", name: "Solicitor Benoit", role: "Family Lawyer", emoji: "👨‍⚖️", description: "Embezzling from the estate.", statement: "I was at the table, discussing the will." },
    { id: "s024e", name: "Claire Durand", role: "Live-in Nurse", emoji: "👩‍⚕️", description: "Patriarch was going to expose her affair with Antoine.", statement: "I was tending to him before dinner." }
  ],
  evidence: [
    { id: "ev-024-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Arsenic poisoning","Ingested via red wine","Only victim's glass contaminated"] },
    { id: "ev-024-2", title: "Dining Room CCTV", type: "cctv", icon: "📹", isKey: true, content: ["19:30 everyone seated","20:00 Claire leans over victim","20:15 Chef Pierre serves main course","20:30 Antoine refills victim's glass"] },
    { id: "ev-024-3", title: "Wine Bottle Analysis", type: "document", icon: "🍷", isKey: true, content: ["Victim's private reserve","Arsenic in bottle itself, not glass","Bottle handled by Claire"] },
    { id: "ev-024-4", title: "New Will Draft", type: "document", icon: "📄", isKey: true, content: ["Dated 2 days ago","Cuts Antoine and Marie out","Gives entire estate to charity and Claire"] },
    { id: "ev-024-5", title: "Benoit's Financial Records", type: "bank", icon: "💳", isKey: false, content: ["Embezzled €2M over 5 years","Victim was going to report him"] },
    { id: "ev-024-6", title: "Chef Pierre's Log", type: "witness", icon: "📝", isKey: false, content: ["Two kitchen staff confirm presence","Never left kitchen"] },
    { id: "ev-024-7", title: "Marie's Hotel Receipt", type: "document", icon: "🧾", isKey: false, content: ["Stayed at local inn until 19:00","Arrived at estate 19:15"] },
    { id: "ev-024-8", title: "Antoine's Financials", type: "bank", icon: "💳", isKey: false, content: ["Business failing","€5M debts coming due"] },
    { id: "ev-024-9", title: "Claire's Phone", type: "phone", icon: "📱", isKey: true, content: ["Text to Antoine 19:00: 'He told me he knows. I'll fix this.'","Delivered"] },
    { id: "ev-024-10", title: "Arsenic Source", type: "document", icon: "🧪", isKey: true, content: ["Traces in Claire's medical bag","She had access to arsenic for rat poison"] }
  ],
  timeline: [
    { time: "19:00", event: "Claire texts Antoine" },
    { time: "19:15", event: "Marie arrives" },
    { time: "19:30", event: "Everyone seated for dinner" },
    { time: "20:00", event: "Claire leans over victim" },
    { time: "20:15", event: "Chef serves main course" },
    { time: "20:30", event: "Antoine refills victim's glass" },
    { time: "20:45", event: "Victim collapses" },
    { time: "21:00", event: "Ambulance called" }
  ],
  solution: { culpritId: "s024e", motive: "Patriarch discovered Claire's affair with Antoine and was going to disinherit Antoine entirely. Claire poisoned the wine to protect the new will that named her, then hoped the family would be blamed.", keyEvidenceIds: ["ev-024-1","ev-024-3","ev-024-4","ev-024-9","ev-024-10"] }
};

export const CASE_025: Case = {
  id: "025", number: 25, title: "The Submarine Incident", difficulty: 5,
  briefing: "A nuclear submarine is docked for maintenance. A senior officer is found dead in the engine room. Sabotage suspected — but no one has left the sub. Five crew members were aboard.",
  image: "/cases/case-025.jpeg",
  suspects: [
    { id: "s025a", name: "Commander Wells", role: "Executive Officer", emoji: "🎖️", description: "Officer was going to report his abuse.", statement: "I was in the command module doing paperwork." },
    { id: "s025b", name: "Lt. Chen", role: "Weapons Officer", emoji: "🧑‍✈️", description: "Officer blocked his promotion.", statement: "I was in the weapons bay checking torpedoes." },
    { id: "s025c", name: "Chief Engineer Patel", role: "Chief Engineer", emoji: "🔧", description: "Officer was going to court-martial him.", statement: "I was on the bridge reviewing logs." },
    { id: "s025d", name: "Ensign Rodriguez", role: "Junior Officer", emoji: "👨‍✈️", description: "Officer was blackmailing him over past incident.", statement: "I was in the crew quarters studying." },
    { id: "s025e", name: "Chief Petty Officer Blake", role: "CPO", emoji: "👨‍🔧", description: "Officer had an affair with his wife.", statement: "I was in the mess hall eating dinner." }
  ],
  evidence: [
    { id: "ev-025-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Cause: blunt force trauma","Time: 02:00-02:30","No defensive wounds","Tool wound pattern: pipe wrench"] },
    { id: "ev-025-2", title: "Submarine CCTV", type: "cctv", icon: "📹", isKey: true, content: ["01:45 Wells exits command module","02:00 Chen enters engine room area","02:05 Patel near engine room","02:15 Wells returns to command module"] },
    { id: "ev-025-3", title: "Pipe Wrench", type: "document", icon: "🔧", isKey: true, content: ["Found in engineering locker","Blood on wrench","Wiped but traces remain","Tool belongs to engineering department"] },
    { id: "ev-025-4", title: "Wells' Abuse Report", type: "document", icon: "📄", isKey: true, content: ["Officer filed report 3 days ago","Would end Wells' career","HR review scheduled Monday"] },
    { id: "ev-025-5", title: "Chen's Career File", type: "document", icon: "📄", isKey: false, content: ["Officer blocked promotion twice","Chen had threatened to file grievance"] },
    { id: "ev-025-6", title: "Patel's Court Martial", type: "document", icon: "📄", isKey: false, content: ["Officer was planning court-martial","Over minor supply violations","Career-ending if convicted"] },
    { id: "ev-025-7", title: "Rodriguez's Diary", type: "document", icon: "📔", isKey: false, content: ["Officer was blackmailing him","Revealed past DUI that would discharge him"] },
    { id: "ev-025-8", title: "Blake's Alibi", type: "witness", icon: "📝", isKey: false, content: ["Two crew confirm Blake in mess hall","Continuous presence 01:30-03:00"] },
    { id: "ev-025-9", title: "Engine Room Access Log", type: "document", icon: "🔐", isKey: true, content: ["02:00 Wells badge (unlogged)","02:04 Chen badge","02:06 Patel badge","System shows Wells entered covertly"] },
    { id: "ev-025-10", title: "Command Module Log", type: "document", icon: "📋", isKey: true, content: ["Wells logged OUT at 01:45","Logged IN again at 02:15","Gap of 30 minutes unaccounted"] }
  ],
  timeline: [
    { time: "01:45", event: "Wells exits command module" },
    { time: "02:00", event: "Wells badge used at engine room (unlogged)" },
    { time: "02:05", event: "Chen enters engine room area" },
    { time: "02:08", event: "Patel near engine room" },
    { time: "02:10", event: "Officer killed" },
    { time: "02:15", event: "Wells returns to command module" },
    { time: "03:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s025a", motive: "The officer had filed a formal abuse report that would end Wells' command career. Wells used an engineering pipe wrench to kill him, then quietly logged out and back in.", keyEvidenceIds: ["ev-025-1","ev-025-2","ev-025-3","ev-025-4","ev-025-10"] }
};

export const CASE_026: Case = {
  id: "026", number: 26, title: "The Farmhouse Murder", difficulty: 3,
  briefing: "A reclusive farmer is found dead in his barn. Pitchfork through the chest. His land was about to be sold to a developer for $50M. Four neighbors were at his farm that morning.",
  image: "/cases/case-026.jpeg",
  suspects: [
    { id: "s026a", name: "Hank Miller", role: "Neighbor", emoji: "👨‍🌾", description: "Farm was blocking his water access.", statement: "I was at my own farm milking cows." },
    { id: "s026b", name: "Sally Jenkins", role: "Niece & Heir", emoji: "👩", description: "Sole heir to the estate.", statement: "I was in the house making breakfast." },
    { id: "s026c", name: "Tom Reynolds", role: "Developer", emoji: "💼", description: "Farmer refused to sell.", statement: "I was at the motel, waiting for the farmer's response." },
    { id: "s026d", name: "Old Man Wilson", role: "Rival Farmer", emoji: "👴", description: "40-year feud with the victim.", statement: "I was out on my tractor." },
    { id: "s026e", name: "Maria Garcia", role: "Farmhand", emoji: "👩‍🌾", description: "Unpaid for 6 months.", statement: "I was feeding the chickens." }
  ],
  evidence: [
    { id: "ev-026-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Pitchfork through chest","Time: 07:30","Single thrust","Left-handed wound angle"] },
    { id: "ev-026-2", title: "Barn Security Cam", type: "cctv", icon: "📹", isKey: true, content: ["07:15 Sally walks toward barn","07:25 figure leaves barn (left-handed)","07:45 Maria discovers body"] },
    { id: "ev-026-3", title: "Pitchfork Prints", type: "document", icon: "🖐️", isKey: true, content: ["Partial prints on handle","Match Sally Jenkins"] },
    { id: "ev-026-4", title: "Sale Contract", type: "document", icon: "📄", isKey: true, content: ["$50M offer from developer","Victim kept refusing","Sally would inherit everything"] },
    { id: "ev-026-5", title: "Sally's Text", type: "phone", icon: "📱", isKey: true, content: ["To friend last night: 'He won't sell. I have to fix this.'"] },
    { id: "ev-026-6", title: "Hank's Cow Log", type: "document", icon: "📋", isKey: false, content: ["Milking machine timestamped 07:00-08:00","Consistent with his story"] },
    { id: "ev-026-7", title: "Tom's Motel Receipt", type: "bank", icon: "🧾", isKey: false, content: ["Check-in timestamped","Two motel staff confirm he was there"] },
    { id: "ev-026-8", title: "Wilson's Tractor GPS", type: "document", icon: "🚜", isKey: false, content: ["GPS shows tractor in his own fields","Continuous activity"] },
    { id: "ev-026-9", title: "Maria's Payroll", type: "document", icon: "💵", isKey: false, content: ["6 months unpaid","She would inherit nothing"] },
    { id: "ev-026-10", title: "Blood on Sally's Jacket", type: "document", icon: "🩸", isKey: true, content: ["Jacket found in her car","Blood matches victim","She claimed it was from a cooking accident"] }
  ],
  timeline: [
    { time: "06:45", event: "Farmer goes to barn" },
    { time: "07:00", event: "Hank milking cows" },
    { time: "07:15", event: "Sally walks toward barn" },
    { time: "07:25", event: "Figure leaves barn (left-handed)" },
    { time: "07:30", event: "Time of death" },
    { time: "07:45", event: "Maria discovers body" },
    { time: "08:00", event: "Police called" }
  ],
  solution: { culpritId: "s026b", motive: "Sally knew the farm was worth $50M if sold. Her uncle refused to sell. She killed him during a morning argument and staged it as an outsider attack.", keyEvidenceIds: ["ev-026-1","ev-026-2","ev-026-3","ev-026-4","ev-026-10"] }
};

export const CASE_027: Case = {
  id: "027", number: 27, title: "The Chess Tournament", difficulty: 3,
  briefing: "During the final match of a $5M chess tournament, the grandmaster collapses at the board. Poison in his water. Five people had access to the sealed players' area.",
  image: "/cases/case-027.jpeg",
  suspects: [
    { id: "s027a", name: "Grandmaster Petrov", role: "Opponent", emoji: "♟️", description: "Victim exposed his cheating years ago.", statement: "I was at the board, in front of cameras." },
    { id: "s027b", name: "Anna Kovacs", role: "Tournament Director", emoji: "👩‍💼", description: "Victim was going to sue the federation.", statement: "I was in the organizer's box." },
    { id: "s027c", name: "David Rosen", role: "Second", emoji: "🧑", description: "Victim had fired his father.", statement: "I was reviewing games in the analysis room." },
    { id: "s027d", name: "Yuki Tanaka", role: "Coach", emoji: "👨‍🏫", description: "Victim was stealing his students.", statement: "I was in the hallway with spectators." },
    { id: "s027e", name: "Mr. Hassan", role: "Sponsor", emoji: "💼", description: "Victim was going to expose his match-fixing.", statement: "I was at the VIP table." }
  ],
  evidence: [
    { id: "ev-027-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Arsenic poisoning","Ingested via water bottle","Time: 16:30"] },
    { id: "ev-027-2", title: "Tournament CCTV", type: "cctv", icon: "📹", isKey: true, content: ["16:00 Anna approaches table","16:10 David near players area","16:15 Yuki in hallway","16:20 Mr. Hassan near VIP booth"] },
    { id: "ev-027-3", title: "Water Bottle Prints", type: "document", icon: "🖐️", isKey: true, content: ["Victim's prints","Partial print — Anna Kovacs"] },
    { id: "ev-027-4", title: "Suit Notice", type: "document", icon: "📄", isKey: true, content: ["Victim was going to sue tournament","Federation would lose $20M in sponsorships"] },
    { id: "ev-027-5", title: "Petrov's Scorecard", type: "document", icon: "📋", isKey: false, content: ["Continuous camera coverage of Petrov","Never left the board"] },
    { id: "ev-027-6", title: "David's Analysis Log", type: "document", icon: "📝", isKey: false, content: ["Recorded in analysis room","Two other seconds confirm"] },
    { id: "ev-027-7", title: "Yuki's Emails", type: "document", icon: "📧", isKey: false, content: ["Angry email to victim about stolen students","Sent 5 days before"] },
    { id: "ev-027-8", title: "Hassan's Match-Fixing Docs", type: "document", icon: "📄", isKey: false, content: ["Victim had evidence","Was about to go public"] },
    { id: "ev-027-9", title: "Arsenic Source", type: "document", icon: "🧪", isKey: true, content: ["Traces in tournament office","Stored with medical supplies","Anna had keys"] },
    { id: "ev-027-10", title: "Anna's Speech Notes", type: "document", icon: "📝", isKey: false, content: ["Scheduled announcement about victim's accusations","Never delivered"] }
  ],
  timeline: [
    { time: "15:45", event: "Final match begins" },
    { time: "16:00", event: "Anna approaches table" },
    { time: "16:10", event: "David in analysis room" },
    { time: "16:15", event: "Yuki in hallway" },
    { time: "16:20", event: "Hassan near VIP booth" },
    { time: "16:25", event: "Victim drinks water" },
    { time: "16:30", event: "Victim collapses" },
    { time: "17:00", event: "Medics called" }
  ],
  solution: { culpritId: "s027b", motive: "Victim was about to sue the federation for $20M, ending Anna's career. She poisoned his water during her official approach to the table.", keyEvidenceIds: ["ev-027-1","ev-027-2","ev-027-3","ev-027-4","ev-027-9"] }
};

export const CASE_028: Case = {
  id: "028", number: 28, title: "The Hospital Cover-up", difficulty: 4,
  briefing: "A surgeon is found dead in the hospital parking garage. Heart attack — but the autopsy reveals poison. He was about to blow the whistle on a patient-death cover-up. Five doctors had motive.",
  image: "/cases/case-028.jpeg",
  suspects: [
    { id: "s028a", name: "Dr. Reynolds", role: "Chief of Surgery", emoji: "👨‍⚕️", description: "Led the cover-up.", statement: "I was in surgery until midnight." },
    { id: "s028b", name: "Dr. Patel", role: "Anesthesiologist", emoji: "👩‍⚕️", description: "His error killed the patient.", statement: "I was in the recovery room." },
    { id: "s028c", name: "Nurse Williams", role: "Head Nurse", emoji: "👩‍⚕️", description: "Was going to be blamed.", statement: "I was at the nurses' station." },
    { id: "s028d", name: "Dr. Chen", role: "Resident", emoji: "🧑‍⚕️", description: "Victim was about to fail him.", statement: "I was studying in the library." },
    { id: "s028e", name: "Administrator Brooks", role: "CEO", emoji: "💼", description: "Bonuses depended on the cover-up.", statement: "I was in my office reviewing budgets." }
  ],
  evidence: [
    { id: "ev-028-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Potassium chloride poisoning","Time: 23:30","Mimics heart attack","No injection marks — ingested"] },
    { id: "ev-028-2", title: "Parking Garage Cam", type: "cctv", icon: "📹", isKey: true, content: ["23:00 Reynolds exits OR","23:15 Patel enters garage","23:25 Nurse Williams enters garage","23:40 Brooks exits admin building"] },
    { id: "ev-028-3", title: "Coffee Cup", type: "document", icon: "☕", isKey: true, content: ["Victim's cup","Traces of KCl","Fingerprint: Dr. Reynolds"] },
    { id: "ev-028-4", title: "Cover-up Documents", type: "document", icon: "📄", isKey: true, content: ["Patient death report falsified","Reynolds signed off","Victim was going to leak to press"] },
    { id: "ev-028-5", title: "Patel's Records", type: "document", icon: "📋", isKey: false, content: ["Anesthesia error cause of death","Reynolds pressured him to lie"] },
    { id: "ev-028-6", title: "Nurse Williams's Log", type: "document", icon: "📝", isKey: false, content: ["Continuous presence at station 23:00-00:30","Consistent with CCTV"] },
    { id: "ev-028-7", title: "Chen's Exam Results", type: "document", icon: "📄", isKey: false, content: ["Failing grade from victim","Was going to be dismissed"] },
    { id: "ev-028-8", title: "Brooks's Bonus", type: "document", icon: "💵", isKey: false, content: ["$500K bonus if hospital kept 'clean record'","Depended on cover-up"] },
    { id: "ev-028-9", title: "KCl Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Reynolds' office","From hospital pharmacy","Reynolds signed it out"] },
    { id: "ev-028-10", title: "Reynolds' Emails", type: "document", icon: "📧", isKey: true, content: ["To victim: 'If you talk, we all go down.'","Threatening tone"] }
  ],
  timeline: [
    { time: "23:00", event: "Reynolds exits OR" },
    { time: "23:10", event: "Reynolds meets victim in parking garage" },
    { time: "23:15", event: "Patel enters garage" },
    { time: "23:25", event: "Nurse Williams enters garage" },
    { time: "23:30", event: "Victim drinks poisoned coffee" },
    { time: "23:40", event: "Brooks exits admin" },
    { time: "23:45", event: "Victim collapses" },
    { time: "00:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s028a", motive: "Reynolds led the patient-death cover-up. When the victim threatened to leak the truth, Reynolds poisoned his coffee with KCl from the pharmacy.", keyEvidenceIds: ["ev-028-1","ev-028-2","ev-028-3","ev-028-4","ev-028-9"] }
};

export const CASE_029: Case = {
  id: "029", number: 29, title: "The Film Set Accident", difficulty: 3,
  briefing: "On the last day of filming a $200M blockbuster, the lead actor is killed in a stunt gone wrong. The rigging was tampered with. Five crew members had access.",
  image: "/cases/case-029.jpeg",
  suspects: [
    { id: "s029a", name: "Director Stone", role: "Director", emoji: "🎬", description: "Actor demanded him fired.", statement: "I was in the director's tent." },
    { id: "s029b", name: "Stunt Coordinator Ruiz", role: "Stunt Coordinator", emoji: "🤸", description: "Actor broke his back in a previous film.", statement: "I was demonstrating a scene to extras." },
    { id: "s029c", name: "Producer Goldstein", role: "Producer", emoji: "💼", description: "Actor was suing for contract breach.", statement: "I was on a call with the studio." },
    { id: "s029d", name: "Co-star Lee", role: "Co-star", emoji: "🎭", description: "Actor stole his role in another film.", statement: "I was in my trailer." },
    { id: "s029e", name: "Rigger O'Brien", role: "Rigging Chief", emoji: "🪢", description: "Actor publicly accused him of incompetence.", statement: "I was checking other rigs on set." }
  ],
  evidence: [
    { id: "ev-029-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Fall from height","Broken neck","Rigging failed at key moment"] },
    { id: "ev-029-2", title: "Set CCTV", type: "cctv", icon: "📹", isKey: true, content: ["14:00 O'Brien near rig","14:20 Stone in tent","14:35 Lee in trailer","14:50 rig collapses"] },
    { id: "ev-029-3", title: "Rigging Analysis", type: "document", icon: "🪢", isKey: true, content: ["Cable cut, not worn","Fresh tool marks","Cut at exactly rigging station"] },
    { id: "ev-029-4", title: "O'Brien's Toolbox", type: "document", icon: "🧰", isKey: true, content: ["Wire cutter with recent use","Metal shavings matching cable"] },
    { id: "ev-029-5", title: "Stone's Notes", type: "document", icon: "📓", isKey: false, content: ["Actor had demanded Stone's firing","Studio considering replacement"] },
    { id: "ev-029-6", title: "Ruiz's Medical Records", type: "document", icon: "📄", isKey: false, content: ["Back injury from actor's negligence","Career almost ended"] },
    { id: "ev-029-7", title: "Goldstein's Emails", type: "document", icon: "📧", isKey: false, content: ["Actor's lawsuit: $30M claim","Insurance wouldn't cover"] },
    { id: "ev-029-8", title: "Lee's Trailer Log", type: "witness", icon: "📝", isKey: false, content: ["Trailer camera confirms Lee inside","Continuous video 14:00-15:30"] },
    { id: "ev-029-9", title: "Actor's Public Statements", type: "document", icon: "📄", isKey: true, content: ["Told press O'Brien was 'too old to rig properly'","O'Brien received death threats"] },
    { id: "ev-029-10", title: "O'Brien's Phone", type: "phone", icon: "📱", isKey: true, content: ["14:10 to friend: 'Tired of being humiliated.'","14:25: 'It's handled.'"] }
  ],
  timeline: [
    { time: "14:00", event: "O'Brien near rig" },
    { time: "14:10", event: "O'Brien sends angry text" },
    { time: "14:20", event: "Stone in director tent" },
    { time: "14:25", event: "O'Brien texts 'It's handled'" },
    { time: "14:35", event: "Lee in trailer" },
    { time: "14:50", event: "Rig collapses, actor falls" },
    { time: "15:00", event: "Medics called" }
  ],
  solution: { culpritId: "s029e", motive: "Actor publicly humiliated O'Brien and got him death threats. O'Brien cut the rigging cable during a routine check, then moved away to establish an alibi.", keyEvidenceIds: ["ev-029-1","ev-029-2","ev-029-3","ev-029-4","ev-029-10"] }
};

export const CASE_030: Case = {
  id: "030", number: 30, title: "The Embassy Reception", difficulty: 4,
  briefing: "At a diplomatic reception in Washington, a foreign ambassador is found dead in his office. Poison in his whiskey. Five diplomats were at the embassy that night.",
  image: "/cases/case-030.jpeg",
  suspects: [
    { id: "s030a", name: "Deputy Ambassador Chen", role: "Deputy Ambassador", emoji: "👨‍💼", description: "Being replaced by the victim.", statement: "I was in the reception hall greeting guests." },
    { id: "s030b", name: "Political Attaché Ivanov", role: "Political Attaché", emoji: "🧑‍💼", description: "Victim discovered his espionage.", statement: "I was on the terrace smoking." },
    { id: "s030c", name: "Embassy Doctor Torres", role: "Embassy Doctor", emoji: "👨‍⚕️", description: "Victim had an affair with his wife.", statement: "I was in the medical office." },
    { id: "s030d", name: "Cultural Attaché Ahmed", role: "Cultural Attaché", emoji: "🎭", description: "Victim blocked his promotion.", statement: "I was at the bar ordering drinks." },
    { id: "s030e", name: "Security Chief Müller", role: "Security Chief", emoji: "💪", description: "Victim exposed his corruption.", statement: "I was monitoring the front gate." }
  ],
  evidence: [
    { id: "ev-030-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Ricin poisoning","Ingested via whiskey","Time: 22:15"] },
    { id: "ev-030-2", title: "Embassy CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:00 Chen walks to office","22:05 Ivanov on terrace","22:08 Torres in medical office","22:10 Ahmed at bar"] },
    { id: "ev-030-3", title: "Whiskey Glass", type: "document", icon: "🥃", isKey: true, content: ["Victim's prints","Partial print — Torres","Ricin residue"] },
    { id: "ev-030-4", title: "Espionage Evidence", type: "document", icon: "📄", isKey: true, content: ["Ivanov had classified documents","Victim planned to expose"] },
    { id: "ev-030-5", title: "Torres's Medical Records", type: "document", icon: "📄", isKey: true, content: ["Wife confirmed affair with victim","Torres recently bought ricin 'for research'"] },
    { id: "ev-030-6", title: "Chen's Transfer Papers", type: "document", icon: "📄", isKey: false, content: ["Victim had requested Chen's replacement","Chen would be demoted"] },
    { id: "ev-030-7", title: "Ahmed's Promotion File", type: "document", icon: "📄", isKey: false, content: ["Victim blocked his promotion","Two years in a row"] },
    { id: "ev-030-8", title: "Müller's Financial Records", type: "bank", icon: "💳", isKey: false, content: ["$500K unexplained deposits","Victim was investigating"] },
    { id: "ev-030-9", title: "Bar Log", type: "document", icon: "📋", isKey: false, content: ["Ahmed ordered 3 drinks","Never approached victim's office"] },
    { id: "ev-030-10", title: "Ricin Source", type: "document", icon: "🧪", isKey: true, content: ["Found in medical office cabinet","Torres had access","Ordered 2 weeks before murder"] }
  ],
  timeline: [
    { time: "21:45", event: "Reception begins" },
    { time: "22:00", event: "Chen walks toward office" },
    { time: "22:05", event: "Ivanov on terrace" },
    { time: "22:08", event: "Torres in medical office" },
    { time: "22:10", event: "Ahmed at bar" },
    { time: "22:15", event: "Victim drinks poisoned whiskey" },
    { time: "22:30", event: "Victim collapses" },
    { time: "23:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s030c", motive: "Victim had an affair with Torres's wife. Torres used ricin from his medical office to poison the whiskey during a private visit to the office.", keyEvidenceIds: ["ev-030-1","ev-030-2","ev-030-3","ev-030-5","ev-030-10"] }
};

export const CASE_031: Case = {
  id: "031", number: 31, title: "The Research Lab Fire", difficulty: 4,
  briefing: "A pharmaceutical researcher is found dead in a burned lab. The fire was arson. She was about to publish a paper that would have destroyed a rival company's product. Five scientists had keycard access.",
  image: "/cases/case-031.jpeg",
  suspects: [
    { id: "s031a", name: "Dr. Hassan", role: "Lab Partner", emoji: "👨‍🔬", description: "Paper would credit her, not him.", statement: "I was in the adjacent lab running tests." },
    { id: "s031b", name: "Dr. Lindqvist", role: "Company Scientist", emoji: "👩‍🔬", description: "Paid off by rival company.", statement: "I was at a conference in Geneva." },
    { id: "s031c", name: "Post-Doc Tanaka", role: "Post-Doc", emoji: "🧑‍🔬", description: "She rejected his romantic advances.", statement: "I was in the library writing my thesis." },
    { id: "s031d", name: "Professor Wright", role: "Mentor", emoji: "👨‍🏫", description: "Her paper would embarrass his life's work.", statement: "I was at home, working on a manuscript." },
    { id: "s031e", name: "Lab Tech Maria", role: "Lab Technician", emoji: "👩‍🔧", description: "Was fired for a lab accident.", statement: "I was at the cafeteria." }
  ],
  evidence: [
    { id: "ev-031-1", title: "Fire Investigation", type: "document", icon: "🔥", isKey: true, content: ["Arson — accelerant used","Started at her desk","Industrial ethanol","Two ignition points"] },
    { id: "ev-031-2", title: "Lab CCTV", type: "cctv", icon: "📹", isKey: true, content: ["02:30 masked figure enters floor","02:45 exits fast","Figure: 5'8\"","Wearing lab coat, no badge visible"] },
    { id: "ev-031-3", title: "Keycard Access Log", type: "document", icon: "🔐", isKey: true, content: ["02:28 Hassan badge entry","02:35 Tanaka badge entry","02:55 Wright badge entry","02:30 unidentified badge (Lindqvist's old badge)"] },
    { id: "ev-031-4", title: "Victim's Research Paper", type: "document", icon: "📄", isKey: true, content: ["Draft found on cloud server","Would expose Lindqvist's company product as dangerous","Company stood to lose $2B"] },
    { id: "ev-031-5", title: "Bank Records — Lindqvist", type: "bank", icon: "💳", isKey: true, content: ["$500K deposited 2 weeks ago","From shell company linked to rival","Unexplained"] },
    { id: "ev-031-6", title: "Hassan's Test Log", type: "document", icon: "📋", isKey: false, content: ["Continuous tests running","Timestamps consistent"] },
    { id: "ev-031-7", title: "Tanaka's Thesis File", type: "document", icon: "📄", isKey: false, content: ["Last saved 03:15","Continuous library log"] },
    { id: "ev-031-8", title: "Wright's Home Camera", type: "cctv", icon: "📹", isKey: false, content: ["Doorbell footage shows Wright at home","Continuous"] },
    { id: "ev-031-9", title: "Maria's Cafeteria Receipt", type: "bank", icon: "🧾", isKey: false, content: ["Timestamped 02:00-03:00","Two staff confirm"] },
    { id: "ev-031-10", title: "Lindqvist's Old Badge", type: "document", icon: "🪪", isKey: true, content: ["Reported missing 1 month ago","Never deactivated","Recent use at 02:30"] }
  ],
  timeline: [
    { time: "02:00", event: "Maria at cafeteria" },
    { time: "02:28", event: "Hassan enters lab" },
    { time: "02:30", event: "Unidentified figure enters floor" },
    { time: "02:35", event: "Tanaka enters building" },
    { time: "02:45", event: "Figure exits fast" },
    { time: "02:55", event: "Wright enters (mistaken time)" },
    { time: "03:00", event: "Fire alarm triggers" },
    { time: "03:15", event: "Fire brigade arrives" }
  ],
  solution: { culpritId: "s031b", motive: "Lindqvist was paid $500K to destroy the research paper. She used her old badge (never deactivated) to access the lab, set the fire, and returned to her conference in Geneva.", keyEvidenceIds: ["ev-031-1","ev-031-3","ev-031-4","ev-031-5","ev-031-10"] }
};

export const CASE_032: Case = {
  id: "032", number: 32, title: "The Hotel Suite Killing", difficulty: 3,
  briefing: "A tech CEO is found dead in her penthouse suite during a conference. Insulin overdose — she wasn't diabetic. Five people attended a private meeting with her that evening.",
  image: "/cases/case-032.jpeg",
  suspects: [
    { id: "s032a", name: "CFO Jackson", role: "CFO", emoji: "💼", description: "She was going to fire him for embezzlement.", statement: "I was in my own room preparing tomorrow's talk." },
    { id: "s032b", name: "Board Member Chen", role: "Board Member", emoji: "🧑‍💼", description: "She had evidence of his insider trading.", statement: "I was at the hotel bar." },
    { id: "s032c", name: "Assistant Emma", role: "Executive Assistant", emoji: "👩‍💼", description: "She was abusive to her staff.", statement: "I was running errands on the ground floor." },
    { id: "s032d", name: "Rival CEO Stein", role: "Rival CEO", emoji: "🧔", description: "She stole his biggest contract.", statement: "I was in my suite on another floor." },
    { id: "s032e", name: "Ex-Husband Paul", role: "Ex-Husband", emoji: "👨", description: "She was going to sue for custody.", statement: "I was home — I'm not even at the conference." }
  ],
  evidence: [
    { id: "ev-032-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Insulin overdose","Time: 22:00-22:30","No diabetes in medical history"] },
    { id: "ev-032-2", title: "Hotel Corridor CCTV", type: "cctv", icon: "📹", isKey: true, content: ["21:30 Jackson enters suite","21:45 Chen enters suite","22:00 Stein enters suite","22:15 Emma enters suite"] },
    { id: "ev-032-3", title: "Room Service Tray", type: "document", icon: "🍽️", isKey: true, content: ["Insulin vial in trash","Fingerprint: Chen","No medical reason"] },
    { id: "ev-032-4", title: "Insider Trading Evidence", type: "document", icon: "📄", isKey: true, content: ["Victim had proof of Chen's trades","Was going to file complaint Monday"] },
    { id: "ev-032-5", title: "Jackson's Financial Records", type: "bank", icon: "💳", isKey: false, content: ["$1.2M missing from company","Victim discovered 3 days ago"] },
    { id: "ev-032-6", title: "Emma's Phone", type: "phone", icon: "📱", isKey: false, content: ["Abusive texts from victim","Emma was looking for new job"] },
    { id: "ev-032-7", title: "Stein's Alibi", type: "witness", icon: "📝", isKey: false, content: ["Hotel staff confirm in his suite","Room service at 21:50"] },
    { id: "ev-032-8", title: "Paul's Location", type: "document", icon: "📄", isKey: false, content: ["GPS shows 200 miles away","Home security footage confirms"] },
    { id: "ev-032-9", title: "Hotel Pharmacy Log", type: "document", icon: "📋", isKey: true, content: ["Chen visited pharmacy 21:00","Bought insulin pen, no prescription"] },
    { id: "ev-032-10", title: "Chen's Emails", type: "document", icon: "📧", isKey: true, content: ["To broker: 'If she goes to SEC, we're both done.'","Panicked tone"] }
  ],
  timeline: [
    { time: "21:00", event: "Chen at hotel pharmacy" },
    { time: "21:30", event: "Jackson enters suite" },
    { time: "21:45", event: "Chen enters suite" },
    { time: "22:00", event: "Stein enters suite" },
    { time: "22:15", event: "Emma enters suite" },
    { time: "22:30", event: "Victim collapses" },
    { time: "23:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s032b", motive: "Victim had proof of Chen's insider trading. Chen bought insulin at the hotel pharmacy and injected it into the victim's drink during the private meeting.", keyEvidenceIds: ["ev-032-1","ev-032-2","ev-032-3","ev-032-4","ev-032-9"] }
};

export const CASE_033: Case = {
  id: "033", number: 33, title: "The Wedding Reception", difficulty: 3,
  briefing: "During the toasts at a $2M wedding, the groom collapses and dies. Cyanide in his champagne. Five people had access to the champagne tower before the toast.",
  image: "/cases/case-033.jpeg",
  suspects: [
    { id: "s033a", name: "Bride Amelia", role: "Bride", emoji: "👰", description: "He cancelled the wedding 2 weeks ago, then came back.", statement: "I was getting ready for photos." },
    { id: "s033b", name: "Best Man David", role: "Best Man", emoji: "🤵", description: "Was in love with Amelia.", statement: "I was checking the champagne tower." },
    { id: "s033c", name: "Father of Bride", role: "Father", emoji: "👨‍💼", description: "Opposed the marriage; had financial motive.", statement: "I was greeting guests at the entrance." },
    { id: "s033d", name: "Ex-Girlfriend Sophia", role: "Ex-Girlfriend", emoji: "👩", description: "Crashed the wedding.", statement: "I wasn't even invited. I was outside." },
    { id: "s033e", name: "Caterer Rossi", role: "Caterer", emoji: "👨‍🍳", description: "Groom had ruined his restaurant review.", statement: "I was in the kitchen preparing dessert." }
  ],
  evidence: [
    { id: "ev-033-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Cyanide poisoning","Ingested via champagne","Only groom's glass contaminated"] },
    { id: "ev-033-2", title: "Reception CCTV", type: "cctv", icon: "📹", isKey: true, content: ["18:50 David at champagne tower","19:05 Father at entrance","19:10 Amelia with photographer","19:15 Rossi checks dessert"] },
    { id: "ev-033-3", title: "Champagne Glass", type: "document", icon: "🥂", isKey: true, content: ["Groom's prints","Partial print — David","Cyanide residue"] },
    { id: "ev-033-4", title: "David's Phone", type: "phone", icon: "📱", isKey: true, content: ["To Amelia last night: 'You deserve better than him.'","Amelia: 'I know.'","David: 'Then let me fix it.'"] },
    { id: "ev-033-5", title: "Wedding Cancellation", type: "document", icon: "📄", isKey: true, content: ["Groom cancelled 2 weeks ago","Re-proposed 5 days ago with $5M prenup","Amelia agreed reluctantly"] },
    { id: "ev-033-6", title: "Amelia's Texts", type: "phone", icon: "📱", isKey: false, content: ["To sister: 'I can't believe I said yes again.'","Inconsolable tone"] },
    { id: "ev-033-7", title: "Father's Prenup Notes", type: "document", icon: "📄", isKey: false, content: ["Father opposed prenup","Wanted premarital agreement","No benefit from death"] },
    { id: "ev-033-8", title: "Sophia's Location", type: "document", icon: "📄", isKey: false, content: ["Outside venue entire evening","Security confirms never entered"] },
    { id: "ev-033-9", title: "Caterer's Kitchen Log", type: "document", icon: "📋", isKey: false, content: ["Never left kitchen","Six staff confirm"] },
    { id: "ev-033-10", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["Found in David's car","Industrial grade","Purchased 3 days ago"] }
  ],
  timeline: [
    { time: "18:30", event: "Reception begins" },
    { time: "18:50", event: "David at champagne tower" },
    { time: "19:05", event: "Father at entrance" },
    { time: "19:10", event: "Amelia with photographer" },
    { time: "19:15", event: "Rossi checks dessert" },
    { time: "19:20", event: "Toast begins" },
    { time: "19:22", event: "Groom drinks, collapses" },
    { time: "19:30", event: "Ambulance called" }
  ],
  solution: { culpritId: "s033b", motive: "David was in love with Amelia. He believed the groom didn't deserve her and would make her miserable. He poisoned the champagne during his 'champagne tower check.'", keyEvidenceIds: ["ev-033-1","ev-033-2","ev-033-3","ev-033-4","ev-033-10"] }
};

export const CASE_034: Case = {
  id: "034", number: 34, title: "The Prison Cell", difficulty: 5,
  briefing: "A high-profile prisoner is found dead in his cell. Overdose — but he had no access to drugs. A guard, a cellmate, and three visiting lawyers had contact with him that day.",
  image: "/cases/case-034.jpeg",
  suspects: [
    { id: "s034a", name: "Guard Thompson", role: "Prison Guard", emoji: "👮", description: "Prisoner exposed his corruption.", statement: "I was on my regular rounds." },
    { id: "s034b", name: "Big Mike", role: "Cellmate", emoji: "💪", description: "Prisoner owed him $50K.", statement: "I was in the yard all afternoon." },
    { id: "s034c", name: "Attorney Reyes", role: "Defense Attorney", emoji: "👩‍⚖️", description: "Prisoner was going to fire her.", statement: "I met with him at 14:00, left at 15:00." },
    { id: "s034d", name: "Attorney Chen", role: "Rival Firm Attorney", emoji: "👨‍⚖️", description: "Prisoner was switching to another firm.", statement: "I visited at 16:00, left at 16:45." },
    { id: "s034e", name: "Law Clerk Patel", role: "Law Clerk", emoji: "🧑‍💼", description: "Prisoner discovered her fake credentials.", statement: "I delivered documents at 17:00." }
  ],
  evidence: [
    { id: "ev-034-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Fentanyl overdose","Time: 18:00-19:00","No injection marks","Ingested"] },
    { id: "ev-034-2", title: "Cell Block CCTV", type: "cctv", icon: "📹", isKey: true, content: ["14:00 Reyes visit","16:00 Chen visit","17:00 Patel delivers docs","17:30 Guard Thompson at cell"] },
    { id: "ev-034-3", title: "Cell Search", type: "document", icon: "🔍", isKey: true, content: ["Small paper packet in toilet","Traces of fentanyl","Fingerprint — Patel"] },
    { id: "ev-034-4", title: "Prisoner's Threat Log", type: "document", icon: "📄", isKey: true, content: ["Exposed Thompson's drug smuggling","Report filed 3 days before death"] },
    { id: "ev-034-5", title: "Reyes's Meeting Notes", type: "document", icon: "📝", isKey: false, content: ["Recorded meeting 14:00-15:00","Continuous audio"] },
    { id: "ev-034-6", title: "Big Mike's Yard Log", type: "document", icon: "📋", isKey: false, content: ["In yard 13:00-18:00","Ten prisoners confirm"] },
    { id: "ev-034-7", title: "Chen's Log", type: "document", icon: "📋", isKey: false, content: ["Visit 16:00-16:45","Audio recording available"] },
    { id: "ev-034-8", title: "Patel's Credentials", type: "document", icon: "📄", isKey: true, content: ["Fake paralegal certificate","Never attended law school","Prisoner discovered 2 weeks ago"] },
    { id: "ev-034-9", title: "Paper Packet Source", type: "document", icon: "🧪", isKey: true, content: ["Fentanyl from recent prison seizure","Reported stolen from evidence locker","Thompson had access"] },
    { id: "ev-034-10", title: "Patel's Phone", type: "phone", icon: "📱", isKey: true, content: ["17:15 to unknown: 'Done. It's in his cell.'","17:50: 'Payment received.'"] }
  ],
  timeline: [
    { time: "14:00", event: "Reyes visits" },
    { time: "15:00", event: "Reyes leaves" },
    { time: "16:00", event: "Chen visits" },
    { time: "16:45", event: "Chen leaves" },
    { time: "17:00", event: "Patel delivers documents" },
    { time: "17:15", event: "Patel texts 'Done'" },
    { time: "17:30", event: "Thompson at cell (delivers packet)" },
    { time: "18:30", event: "Prisoner consumes fentanyl" },
    { time: "19:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s034a", motive: "The prisoner had filed a formal complaint exposing Thompson's drug smuggling. Thompson arranged via Patel (whom the prisoner had also threatened to expose) to slip a fentanyl packet into his cell.", keyEvidenceIds: ["ev-034-1","ev-034-3","ev-034-4","ev-034-9","ev-034-10"] }
};

export const CASE_035: Case = {
  id: "035", number: 35, title: "The Fashion Week Death", difficulty: 3,
  briefing: "During Paris Fashion Week, a top model is found dead in her dressing room. Designer drug overdose — but she never used drugs. Five people were backstage in her area.",
  image: "/cases/case-035.jpeg",
  suspects: [
    { id: "s035a", name: "Designer Moreau", role: "Designer", emoji: "👨‍🎨", description: "She was leaving his brand for a rival.", statement: "I was preparing for the runway walk." },
    { id: "s035b", name: "Model Ivanka", role: "Rival Model", emoji: "👩‍🦱", description: "She got the cover instead.", statement: "I was in my own dressing room." },
    { id: "s035c", name: "Photographer Klein", role: "Photographer", emoji: "📷", description: "She accused him of harassment.", statement: "I was setting up the backstage shots." },
    { id: "s035d", name: "Agent Sarah", role: "Agent", emoji: "👩‍💼", description: "She was going to expose her embezzlement.", statement: "I was on the phone with Milan." },
    { id: "s035e", name: "Boyfriend Lucas", role: "Boyfriend", emoji: "🧑", description: "She was going to leave him.", statement: "I was waiting in the VIP area." }
  ],
  evidence: [
    { id: "ev-035-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Designer drug (2C-B)","Ingested via water bottle","Time: 17:30"] },
    { id: "ev-035-2", title: "Backstage CCTV", type: "cctv", icon: "📹", isKey: true, content: ["17:10 Moreau walks past her room","17:15 Klein enters backstage","17:20 Ivanka passes door","17:25 Lucas in VIP area"] },
    { id: "ev-035-3", title: "Water Bottle", type: "document", icon: "💧", isKey: true, content: ["2C-B residue","Fingerprint: Agent Sarah","Only her prints and victim's"] },
    { id: "ev-035-4", title: "Agent's Emails", type: "document", icon: "📧", isKey: true, content: ["Model was leaving agency","Had proof of Sarah's embezzlement","Was going to sue"] },
    { id: "ev-035-5", title: "Designer's Contract", type: "document", icon: "📄", isKey: false, content: ["Exclusive 3-year deal","Would lose face if she left"] },
    { id: "ev-035-6", title: "Ivanka's Log", type: "document", icon: "📋", isKey: false, content: ["Dressing room cam confirms continuous presence","Never left"] },
    { id: "ev-035-7", title: "Klein's Notes", type: "document", icon: "📝", isKey: false, content: ["Was accused by victim","Recent police report filed"] },
    { id: "ev-035-8", title: "Lucas's Phone", type: "phone", icon: "📱", isKey: false, content: ["Text: 'We need to talk.'","Text: 'Don't do this.'"] },
    { id: "ev-035-9", title: "2C-B Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Sarah's handbag","Same batch as recent Paris seizure"] },
    { id: "ev-035-10", title: "Sarah's Bank Records", type: "bank", icon: "💳", isKey: true, content: ["$200K embezzled from model's earnings","Was going to be exposed"] }
  ],
  timeline: [
    { time: "17:00", event: "Backstage busy" },
    { time: "17:10", event: "Moreau walks past" },
    { time: "17:15", event: "Klein backstage" },
    { time: "17:20", event: "Ivanka passes door" },
    { time: "17:25", event: "Lucas in VIP area" },
    { time: "17:28", event: "Sarah enters dressing room" },
    { time: "17:30", event: "Model drinks water" },
    { time: "17:45", event: "Model collapses" },
    { time: "18:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s035d", motive: "Model had proof Sarah embezzled $200K from her earnings and was going to expose her. Sarah slipped 2C-B into her water bottle during a quick backstage visit.", keyEvidenceIds: ["ev-035-1","ev-035-2","ev-035-3","ev-035-4","ev-035-9"] }
};

export const CASE_036: Case = {
  id: "036", number: 36, title: "The Orphanage Fire", difficulty: 4,
  briefing: "A charitable orphanage burns down overnight. One child dies. The arson was deliberate. Four staff members and one visiting donor were present.",
  image: "/cases/case-036.jpeg",
  suspects: [
    { id: "s036a", name: "Mother Anna", role: "Director", emoji: "👩‍🦳", description: "Insurance fraud allegations.", statement: "I was in my quarters praying." },
    { id: "s036b", name: "Miguel", role: "Janitor", emoji: "🧹", description: "Being fired next week.", statement: "I was in the basement storage." },
    { id: "s036c", name: "Cook Sarah", role: "Cook", emoji: "👩‍🍳", description: "Was embezzling food funds.", statement: "I was in the kitchen washing dishes." },
    { id: "s036d", name: "Mr. Reed", role: "Donor", emoji: "💼", description: "Child was his illegitimate daughter.", statement: "I was leaving when the fire started." },
    { id: "s036e", name: "Volunteer Priya", role: "Volunteer", emoji: "👩", description: "Being investigated for abuse.", statement: "I was playing with the children in the common room." }
  ],
  evidence: [
    { id: "ev-036-1", title: "Fire Investigation", type: "document", icon: "🔥", isKey: true, content: ["Deliberate arson","Gasoline at two points","Started 01:30","Origin: children's dormitory"] },
    { id: "ev-036-2", title: "Building CCTV", type: "cctv", icon: "📹", isKey: true, content: ["01:00 Miguel enters basement","01:15 Reed exits via side door","01:20 Sarah in kitchen","01:25 Mother Anna in quarters"] },
    { id: "ev-036-3", title: "Gasoline Can", type: "document", icon: "⛽", isKey: true, content: ["Found in shed","Partial prints — Miguel","Gasoline purchase receipt in his locker"] },
    { id: "ev-036-4", title: "Miguel's Termination Letter", type: "document", icon: "📄", isKey: true, content: ["Termination effective next Monday","Dated last week","Miguel seen crying in bathroom"] },
    { id: "ev-036-5", title: "Insurance Policy", type: "document", icon: "📄", isKey: false, content: ["$2M payout","Recent policy update","Mother Anna signed"] },
    { id: "ev-036-6", title: "Kitchen Log", type: "witness", icon: "📝", isKey: false, content: ["Two volunteers confirm Sarah present","Never left kitchen"] },
    { id: "ev-036-7", title: "Priya's Common Room Log", type: "document", icon: "📋", isKey: false, content: ["Six children confirm Priya was there","Playing board games until 02:00"] },
    { id: "ev-036-8", title: "Reed's Location", type: "document", icon: "📄", isKey: false, content: ["GPS shows left 01:15","20 miles away by 01:40","Consistent with alibi"] },
    { id: "ev-036-9", title: "Mother Anna's Diary", type: "document", icon: "📔", isKey: false, content: ["Money troubles noted","'God will provide.'","No mention of arson"] },
    { id: "ev-036-10", title: "Miguel's Phone", type: "phone", icon: "📱", isKey: true, content: ["00:50 to brother: 'I can't take this anymore.'","01:00: 'I'll fix it.'"] }
  ],
  timeline: [
    { time: "00:50", event: "Miguel texts brother" },
    { time: "01:00", event: "Miguel enters basement" },
    { time: "01:15", event: "Reed leaves" },
    { time: "01:20", event: "Sarah in kitchen" },
    { time: "01:25", event: "Mother Anna in quarters" },
    { time: "01:30", event: "Fire starts" },
    { time: "01:45", event: "Alarm triggers" },
    { time: "02:00", event: "Fire brigade arrives" }
  ],
  solution: { culpritId: "s036b", motive: "Miguel was being fired after 12 years. He blamed the orphanage for his misfortunes and set the fire in the dormitory, hoping to destroy the building that ruined him.", keyEvidenceIds: ["ev-036-1","ev-036-3","ev-036-4","ev-036-10"] }
};

export const CASE_037: Case = {
  id: "037", number: 37, title: "The Golf Course Killing", difficulty: 3,
  briefing: "A wealthy investor is found dead on the 14th hole of his private golf course. Blunt force trauma — a 9-iron. Five players were in his foursome plus a caddie.",
  image: "/cases/case-037.jpeg",
  suspects: [
    { id: "s037a", name: "Business Partner Carl", role: "Business Partner", emoji: "💼", description: "Was being cut out of a deal.", statement: "I was looking for my ball in the rough." },
    { id: "s037b", name: "Nephew James", role: "Nephew", emoji: "🧑", description: "Being written out of the will.", statement: "I was at the clubhouse having drinks." },
    { id: "s037c", name: "Ex-Business Rival Ross", role: "Rival", emoji: "🧔", description: "Victim bankrupted him.", statement: "I was on the 15th green with the group ahead." },
    { id: "s037d", name: "Caddie Tim", role: "Caddie", emoji: "👦", description: "Victim was verbally abusive.", statement: "I was carrying his clubs, always with him." },
    { id: "s037e", name: "Club Pro Sarah", role: "Club Pro", emoji: "👩‍🏌️", description: "Victim got her fired from another club.", statement: "I was giving a lesson on the driving range." }
  ],
  evidence: [
    { id: "ev-037-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Blunt force trauma to skull","Time: 16:00","9-iron shaped wound"] },
    { id: "ev-037-2", title: "Course CCTV", type: "cctv", icon: "📹", isKey: true, content: ["15:30 foursome at 13th tee","15:55 Carl walks toward rough","16:10 caddie Tim with clubs","16:20 James at clubhouse"] },
    { id: "ev-037-3", title: "9-Iron", type: "document", icon: "🏌️", isKey: true, content: ["Victim's 9-iron found in bushes","Blood on clubhead","Fingerprint: Carl"] },
    { id: "ev-037-4", title: "Victim's Will", type: "document", icon: "📄", isKey: true, content: ["Carl being cut from $5M partnership","Being served papers that week"] },
    { id: "ev-037-5", title: "Caddie Tim's Statement", type: "witness", icon: "📝", isKey: false, content: ["Witnesses confirm he was with victim","Was carrying clubs continuously"] },
    { id: "ev-037-6", title: "James's Clubhouse Log", type: "document", icon: "📋", isKey: false, content: ["Bartender confirms drinks 15:30-17:00","Continuous presence"] },
    { id: "ev-037-7", title: "Ross's Group Alibi", type: "witness", icon: "📝", isKey: false, content: ["Three golfers on 15th green","Group ahead confirms continuous"] },
    { id: "ev-037-8", title: "Sarah's Lesson Log", type: "document", icon: "📋", isKey: false, content: ["Continuous lesson 15:00-17:00","Five students confirm"] },
    { id: "ev-037-9", title: "Carl's Bank Records", type: "bank", icon: "💳", isKey: true, content: ["Was about to lose $5M partnership","Recent large withdrawal $100K","Consistent with desperation"] },
    { id: "ev-037-10", title: "Blood on Carl's Shirt", type: "document", icon: "🩸", isKey: true, content: ["Jacket has victim's blood","Carl claimed it was from a nosebleed"] }
  ],
  timeline: [
    { time: "15:30", event: "Foursome at 13th tee" },
    { time: "15:55", event: "Carl walks toward rough" },
    { time: "16:00", event: "Victim struck with 9-iron" },
    { time: "16:10", event: "Caddie Tim with clubs" },
    { time: "16:20", event: "James at clubhouse" },
    { time: "16:30", event: "Body discovered by next group" }
  ],
  solution: { culpritId: "s037a", motive: "Carl was being cut out of a $5M partnership. During the round, he lured the victim to the rough under the pretense of 'looking for a ball' and killed him with his own 9-iron.", keyEvidenceIds: ["ev-037-1","ev-037-2","ev-037-3","ev-037-4","ev-037-10"] }
};

export const CASE_038: Case = {
  id: "038", number: 38, title: "The Military Base Murder", difficulty: 4,
  briefing: "A general is found dead in his quarters on a US military base. Gunshot wound. The gun is missing. Five officers were on base during the lockdown.",
  image: "/cases/case-038.jpeg",
  suspects: [
    { id: "s038a", name: "Colonel Davis", role: "Colonel", emoji: "🎖️", description: "Was being demoted by victim.", statement: "I was in the officers' mess." },
    { id: "s038b", name: "Major Chen", role: "Major", emoji: "🧑‍✈️", description: "Victim exposed his affair.", statement: "I was in the comms room." },
    { id: "s038c", name: "Captain Williams", role: "Captain", emoji: "👩‍✈️", description: "Victim blocked her promotion.", statement: "I was running drills on the parade ground." },
    { id: "s038d", name: "Sergeant Major Lee", role: "Sergeant Major", emoji: "🪖", description: "Victim destroyed his 20-year career.", statement: "I was inspecting the armory." },
    { id: "s038e", name: "MP Officer Rodriguez", role: "Military Police", emoji: "👮", description: "Victim was investigating him for smuggling.", statement: "I was on patrol of the perimeter." }
  ],
  evidence: [
    { id: "ev-038-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Single gunshot wound","Time: 23:15","9mm pistol","Point blank range"] },
    { id: "ev-038-2", title: "Base CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:45 Davis in mess hall","23:00 Chen in comms room","23:10 Lee exits armory","23:12 Chen seen near general's quarters"] },
    { id: "ev-038-3", title: "Missing 9mm", type: "document", icon: "🔫", isKey: true, content: ["Registered to base armory","Signed out under Lee's authority","Not returned"] },
    { id: "ev-038-4", title: "Victim's Report File", type: "document", icon: "📄", isKey: true, content: ["Court-martial recommendation for Chen","Filed 2 days before murder","Would end Chen's career"] },
    { id: "ev-038-5", title: "Davis's Demotion", type: "document", icon: "📄", isKey: false, content: ["Recently demoted from general","Considered motive but had alibi"] },
    { id: "ev-038-6", title: "Williams's Drill Log", type: "document", icon: "📋", isKey: false, content: ["Continuous drill with 20 soldiers","Never left parade ground"] },
    { id: "ev-038-7", title: "Lee's Armory Log", type: "document", icon: "🔐", isKey: true, content: ["Signed out 9mm at 22:30","No paperwork filed","Missing from inventory"] },
    { id: "ev-038-8", title: "Rodriguez's Patrol Log", type: "document", icon: "📋", isKey: false, content: ["GPS tracker on patrol","Continuous movement"] },
    { id: "ev-038-9", title: "Chen's Emails", type: "document", icon: "📧", isKey: true, content: ["To confidant: 'He's going to ruin me.'","'I have nothing left to lose.'"] },
    { id: "ev-038-10", title: "Gunshot Residue", type: "document", icon: "🧪", isKey: true, content: ["Traces on Chen's uniform","He claimed from shooting range","Range records show he wasn't there"] }
  ],
  timeline: [
    { time: "22:30", event: "Lee signs out 9mm" },
    { time: "22:45", event: "Davis in mess hall" },
    { time: "23:00", event: "Chen in comms room" },
    { time: "23:10", event: "Lee exits armory" },
    { time: "23:12", event: "Chen near general's quarters" },
    { time: "23:15", event: "General shot" },
    { time: "23:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s038b", motive: "Victim filed a court-martial recommendation that would end Chen's career. Chen stole the 9mm from the armory (using Lee's authority while Lee was away), then killed the general to prevent the court-martial.", keyEvidenceIds: ["ev-038-1","ev-038-2","ev-038-4","ev-038-9","ev-038-10"] }
};

export const CASE_039: Case = {
  id: "039", number: 39, title: "The Theme Park Incident", difficulty: 3,
  briefing: "A theme park owner is found dead in his office during Halloween night. Hanged — but the crime scene shows he was dead before being hung. Five employees were on-site.",
  image: "/cases/case-039.jpeg",
  suspects: [
    { id: "s039a", name: "Park Manager Stone", role: "Park Manager", emoji: "👨‍💼", description: "Owner was firing him Monday.", statement: "I was managing the Halloween parade." },
    { id: "s039b", name: "Head of Security Cole", role: "Security Chief", emoji: "💪", description: "Owner discovered his drug ring.", statement: "I was patrolling the haunted house." },
    { id: "s039c", name: "Maintenance Chief Vega", role: "Maintenance", emoji: "🔧", description: "Owner cut his budget to zero.", statement: "I was fixing a broken ride." },
    { id: "s039d", name: "Ride Engineer Chen", role: "Ride Engineer", emoji: "🧑‍🔧", description: "Owner blamed him for an accident.", statement: "I was at the control room." },
    { id: "s039e", name: "PR Director Kelly", role: "PR Director", emoji: "👩‍💼", description: "Owner was going to sue her.", statement: "I was handling press on the main stage." }
  ],
  evidence: [
    { id: "ev-039-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Cause: strangulation","Time: 22:30","Hung at 23:30 (post-mortem)","Bruising shows manual strangulation"] },
    { id: "ev-039-2", title: "Park CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:00 Stone at parade","22:15 Cole near office building","22:30 Vega at broken ride","22:35 Chen at control room"] },
    { id: "ev-039-3", title: "Office Fingerprints", type: "document", icon: "🖐️", isKey: true, content: ["Partial print on desk — Cole","Blood traces on carpet","Cleaning solution used to wipe areas"] },
    { id: "ev-039-4", title: "Drug Ring Evidence", type: "document", icon: "📄", isKey: true, content: ["Owner had photos of Cole selling drugs","Was going to police Monday","Cole had prior record"] },
    { id: "ev-039-5", title: "Stone's Termination Letter", type: "document", icon: "📄", isKey: false, content: ["Effective Monday","Reasons listed"] },
    { id: "ev-039-6", title: "Vega's Maintenance Log", type: "document", icon: "📋", isKey: false, content: ["Continuous maintenance work","Camera and radio confirm location"] },
    { id: "ev-039-7", title: "Chen's Ride Records", type: "document", icon: "📄", isKey: false, content: ["Continuous at control room","Recent accident report signed"] },
    { id: "ev-039-8", title: "Kelly's Press Log", type: "document", icon: "📋", isKey: false, content: ["Four PR staff confirm presence","Livestreamed event shows her"] },
    { id: "ev-039-9", title: "Cole's Locker", type: "document", icon: "🔍", isKey: true, content: ["Rope matching the hanging","Gloves with cleaning solution","Photos of victim's office in his phone"] },
    { id: "ev-039-10", title: "Cole's Phone", type: "phone", icon: "📱", isKey: true, content: ["22:20 text: 'Meeting him now.'","23:25: 'Done. He won't talk.'"] }
  ],
  timeline: [
    { time: "22:00", event: "Stone at parade" },
    { time: "22:15", event: "Cole near office" },
    { time: "22:20", event: "Cole texts 'Meeting him now'" },
    { time: "22:30", event: "Victim strangled" },
    { time: "22:35", event: "Chen at control room" },
    { time: "23:25", event: "Cole texts 'Done'" },
    { time: "23:30", event: "Body hung" },
    { time: "00:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s039b", motive: "Owner had photos of Cole's drug smuggling. When confronted, Cole strangled him, then hung the body to make it look like suicide.", keyEvidenceIds: ["ev-039-1","ev-039-2","ev-039-4","ev-039-9","ev-039-10"] }
};

export const CASE_040: Case = {
  id: "040", number: 40, title: "The Cooking Show Finale", difficulty: 3,
  briefing: "In the season finale of a top cooking show, one contestant collapses and dies on camera. Poison in the tasting plate. Five judges and contestants were involved in preparing the dish.",
  image: "/cases/case-040.jpeg",
  suspects: [
    { id: "s040a", name: "Judge Ramsey", role: "Judge", emoji: "👨‍🍳", description: "Contestant was going to expose his fake credentials.", statement: "I was at the judges' table." },
    { id: "s040b", name: "Contestant Maria", role: "Contestant", emoji: "👩‍🍳", description: "Finalist she couldn't beat.", statement: "I was preparing my own dish." },
    { id: "s040c", name: "Contestant David", role: "Contestant", emoji: "👨‍🍳", description: "Victim sabotaged his dish last week.", statement: "I was plating my own dish." },
    { id: "s040d", name: "Producer Chen", role: "Producer", emoji: "👩‍💼", description: "Victim threatened a lawsuit.", statement: "I was in the control booth." },
    { id: "s040e", name: "Assistant Chef James", role: "Assistant Chef", emoji: "🧑‍🍳", description: "Victim stole his recipes.", statement: "I was helping all contestants equally." }
  ],
  evidence: [
    { id: "ev-040-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Ricin poisoning","Ingested via tasting plate","Time: 19:45"] },
    { id: "ev-040-2", title: "Studio CCTV", type: "cctv", icon: "📹", isKey: true, content: ["19:15 Maria at her station","19:20 David at his station","19:25 James walks past victim's station","19:30 Ramsey at judges' table"] },
    { id: "ev-040-3", title: "Tasting Plate", type: "document", icon: "🍽️", isKey: true, content: ["Ricin residue","Fingerprints: victim and James","James's prints on the underside"] },
    { id: "ev-040-4", title: "James's Notebook", type: "document", icon: "📔", isKey: true, content: ["Recipes matching victim's signature dishes","'Taken by her' notes","Entries angry and bitter"] },
    { id: "ev-040-5", title: "Ramsey's Credentials", type: "document", icon: "📄", isKey: false, content: ["Fake culinary school diploma","Victim had proof","Was going to expose on live TV"] },
    { id: "ev-040-6", title: "Maria's Dish Log", type: "document", icon: "📋", isKey: false, content: ["Continuous station presence","Camera confirms"] },
    { id: "ev-040-7", title: "David's Dish Log", type: "document", icon: "📋", isKey: false, content: ["Continuous station presence","Camera confirms"] },
    { id: "ev-040-8", title: "Chen's Booth Log", type: "document", icon: "📋", isKey: false, content: ["Continuous control booth presence","Two staff confirm"] },
    { id: "ev-040-9", title: "Ricin Source", type: "document", icon: "🧪", isKey: true, content: ["Found in James's knife roll","Castor bean residue","Purchased 2 weeks ago"] },
    { id: "ev-040-10", title: "James's Phone", type: "phone", icon: "📱", isKey: true, content: ["Text: 'She'll pay for stealing my life's work.'","19:20: 'Plate is ready.'"] }
  ],
  timeline: [
    { time: "19:00", event: "Finale begins" },
    { time: "19:15", event: "Maria at her station" },
    { time: "19:20", event: "David at his station" },
    { time: "19:25", event: "James walks past victim's station" },
    { time: "19:30", event: "Ramsey at judges' table" },
    { time: "19:40", event: "Tasting begins" },
    { time: "19:45", event: "Victim tastes poisoned plate" },
    { time: "19:50", event: "Victim collapses" }
  ],
  solution: { culpritId: "s040e", motive: "James had spent years developing recipes that the victim stole and claimed as her own. When she was about to win the finale with his recipes, he poisoned her tasting plate.", keyEvidenceIds: ["ev-040-1","ev-040-2","ev-040-3","ev-040-4","ev-040-9","ev-040-10"] }
};

export const CASE_041: Case = {
  id: "041", number: 41, title: "The Casino Robbery", difficulty: 4,
  briefing: "A Las Vegas casino is robbed of $12M in chips during a power outage. The security chief is found dead in the control room. Five employees were on the floor that night.",
  image: "/cases/case-041.jpeg",
  suspects: [
    { id: "s041a", name: "Manager Vincent", role: "Casino Manager", emoji: "💼", description: "Was being fired for skimming.", statement: "I was in my office reviewing accounts." },
    { id: "s041b", name: "Dealer Sofia", role: "Senior Dealer", emoji: "👩‍💼", description: "Victim caught her counting cards.", statement: "I was dealing at table 4." },
    { id: "s041c", name: "Guard Marcus", role: "Security Guard", emoji: "💪", description: "Victim was going to report him.", statement: "I was patrolling the main floor." },
    { id: "s041d", name: "IT Tech Chen", role: "IT Technician", emoji: "🧑‍💻", description: "Designed the security system.", statement: "I was in the server room." },
    { id: "s041e", name: "Pit Boss Elena", role: "Pit Boss", emoji: "👩", description: "Victim exposed her affair with a player.", statement: "I was supervising the blackjack pits." }
  ],
  evidence: [
    { id: "ev-041-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Cause: blunt force trauma","Time: 02:45 AM","Weapon: fire extinguisher","No defensive wounds"] },
    { id: "ev-041-2", title: "Casino CCTV", type: "cctv", icon: "📹", isKey: true, content: ["02:30 power outage begins","02:35 Chen exits server room","02:40 Chen enters control room","02:50 Chen exits with duffel bag"] },
    { id: "ev-041-3", title: "Chip Inventory", type: "document", icon: "💰", isKey: true, content: ["$12M in high-value chips missing","Vault opened during outage","Vault code needed two keys"] },
    { id: "ev-041-4", title: "Server Room Access", type: "document", icon: "🔐", isKey: true, content: ["Chen badge entry 02:25","Disabled cameras at 02:28","System log wiped partially"] },
    { id: "ev-041-5", title: "Victim's Notebook", type: "document", icon: "📓", isKey: true, content: ["Investigating Chen's old fraud case","Filed complaint against Chen 2 days ago","Would end Chen's career"] },
    { id: "ev-041-6", title: "Vincent's Financials", type: "bank", icon: "💳", isKey: false, content: ["Skimming discovered by victim","Firing notice effective Monday"] },
    { id: "ev-041-7", title: "Sofia's Card Log", type: "document", icon: "📋", isKey: false, content: ["Continuous dealer presence","Camera confirms table activity"] },
    { id: "ev-041-8", title: "Marcus's Patrol Log", type: "document", icon: "📋", isKey: false, content: ["GPS tracker shows patrol route","Continuous movement"] },
    { id: "ev-041-9", title: "Elena's Pit Log", type: "document", icon: "📋", isKey: false, content: ["Supervising 6 dealers","Multiple witnesses confirm"] },
    { id: "ev-041-10", title: "Duffel Bag", type: "document", icon: "🎒", isKey: true, content: ["Found in Chen's car","Traces of casino chips","Victim's blood on handle"] }
  ],
  timeline: [
    { time: "02:25", event: "Chen enters server room" },
    { time: "02:28", event: "Chen disables cameras" },
    { time: "02:30", event: "Power outage begins" },
    { time: "02:40", event: "Chen enters control room" },
    { time: "02:45", event: "Security chief killed" },
    { time: "02:50", event: "Chen exits with duffel bag" },
    { time: "03:15", event: "Power restored" },
    { time: "04:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s041d", motive: "Victim had filed a formal complaint about Chen's involvement in an old fraud case. Chen staged a power outage, killed the security chief with a fire extinguisher, and stole the chips using his own disabled system.", keyEvidenceIds: ["ev-041-1","ev-041-2","ev-041-4","ev-041-5","ev-041-10"] }
};

export const CASE_042: Case = {
  id: "042", number: 42, title: "The University Lab Murder", difficulty: 4,
  briefing: "A PhD student is found dead in a research lab. Chemical poisoning. Her research would have disproven her advisor's 20-year theory. Five people had access to the lab.",
  image: "/cases/case-042.jpeg",
  suspects: [
    { id: "s042a", name: "Professor Williams", role: "Advisor", emoji: "👨‍🏫", description: "Theory being disproven by her research.", statement: "I was at home grading papers." },
    { id: "s042b", name: "Post-Doc Kumar", role: "Post-Doc", emoji: "🧑‍🔬", description: "She was going to expose his fake data.", statement: "I was in the library writing my paper." },
    { id: "s042c", name: "Lab Partner Jessica", role: "Lab Partner", emoji: "👩‍🔬", description: "She was going to get a grant Jessica needed.", statement: "I was in the instrument room." },
    { id: "s042d", name: "Lab Tech Robert", role: "Lab Technician", emoji: "🧑‍🔧", description: "She reported him for harassment.", statement: "I was at my workstation." },
    { id: "s042e", name: "Rival Student Ahmed", role: "Rival Student", emoji: "🧑‍🎓", description: "She got the fellowship he wanted.", statement: "I was in the student union." }
  ],
  evidence: [
    { id: "ev-042-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Dimethylmercury poisoning","Time: 22:00","Ingested via coffee","Extremely rare compound"] },
    { id: "ev-042-2", title: "Lab CCTV", type: "cctv", icon: "📹", isKey: true, content: ["21:30 Kumar enters lab","21:45 Jessica in instrument room","21:50 Williams passes hallway","22:00 victim drinks coffee"] },
    { id: "ev-042-3", title: "Coffee Cup", type: "document", icon: "☕", isKey: true, content: ["Dimethylmercury residue","Prints: victim and Kumar","Kumar had handled it earlier in his own research"] },
    { id: "ev-042-4", title: "Victim's Notebook", type: "document", icon: "📓", isKey: true, content: ["Kumar's data was fabricated","Victim was about to expose him","Meeting with department head scheduled Monday"] },
    { id: "ev-042-5", title: "Kumar's Research Log", type: "document", icon: "📄", isKey: true, content: ["Recently ordered dimethylmercury","Only 50g used — but 200g missing","No justification for extra"] },
    { id: "ev-042-6", title: "Williams's Home Log", type: "document", icon: "📄", isKey: false, content: ["Doorbell camera confirms at home","Was not on campus"] },
    { id: "ev-042-7", title: "Jessica's Grant Application", type: "document", icon: "📄", isKey: false, content: ["Competing for same grant","Victim ahead in committee ranking"] },
    { id: "ev-042-8", title: "Robert's Harassment Record", type: "document", icon: "📄", isKey: false, content: ["Formal complaint filed by victim","HR investigation pending"] },
    { id: "ev-042-9", title: "Ahmed's Fellowship File", type: "document", icon: "📄", isKey: false, content: ["Lost fellowship to victim","Publicly angry"] },
    { id: "ev-042-10", title: "Kumar's Emails", type: "document", icon: "📧", isKey: true, content: ["To colleague: 'She knows about my data.'","'I can't let her destroy me.'"] }
  ],
  timeline: [
    { time: "21:00", event: "Lab closes for night" },
    { time: "21:30", event: "Kumar enters lab" },
    { time: "21:45", event: "Jessica in instrument room" },
    { time: "21:50", event: "Williams passes hallway" },
    { time: "21:55", event: "Victim pours coffee" },
    { time: "22:00", event: "Victim drinks poisoned coffee" },
    { time: "22:30", event: "Victim collapses" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s042b", motive: "Victim discovered Kumar's research data was fabricated. He was about to be exposed Monday. Kumar used dimethylmercury from his own research stock to poison her coffee.", keyEvidenceIds: ["ev-042-1","ev-042-2","ev-042-3","ev-042-4","ev-042-10"] }
};

export const CASE_043: Case = {
  id: "043", number: 43, title: "The Mountain Cabin", difficulty: 3,
  briefing: "A group of friends on a mountain retreat. One of them is found dead in the snow. Hypothermia — but the autopsy shows she was already dead before being placed outside. Five friends were at the cabin.",
  image: "/cases/case-043.jpeg",
  suspects: [
    { id: "s043a", name: "Best Friend Emma", role: "Best Friend", emoji: "👩", description: "Victim was going to marry her ex.", statement: "I was in my room reading." },
    { id: "s043b", name: "College Friend Jake", role: "College Friend", emoji: "🧑", description: "Victim rejected him years ago.", statement: "I was fixing the fireplace." },
    { id: "s043c", name: "Roommate Lisa", role: "Roommate", emoji: "👩‍🦰", description: "Victim stole $20k from her.", statement: "I was making hot chocolate in the kitchen." },
    { id: "s043d", name: "Ex-Boyfriend Tom", role: "Ex-Boyfriend", emoji: "🧔", description: "Victim had a restraining order.", statement: "I was chopping firewood outside." },
    { id: "s043e", name: "New Friend Ryan", role: "New Friend", emoji: "🧑‍🦱", description: "Victim found out about his criminal record.", statement: "I was in my room listening to music." }
  ],
  evidence: [
    { id: "ev-043-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Cause: manual strangulation","Placed outside post-mortem","Time of death: 22:00","Bruising on neck"] },
    { id: "ev-043-2", title: "Cabin Log", type: "document", icon: "📋", isKey: true, content: ["Snow started at 22:30","Footprints in snow left after 23:00","Only one set of prints near body"] },
    { id: "ev-043-3", title: "Fireplace Poker", type: "document", icon: "🔥", isKey: true, content: ["Found in living room","Victim's blood on it","Wiped but traces remain"] },
    { id: "ev-043-4", title: "Emma's Diary", type: "document", icon: "📔", isKey: true, content: ["'She's marrying him next month.'","'I can't watch this happen.'","Written 2 days before trip"] },
    { id: "ev-043-5", title: "Lisa's Bank Records", type: "bank", icon: "💳", isKey: true, content: ["$20k transferred by victim","Victim admitted yesterday","Lisa refused to forgive"] },
    { id: "ev-043-6", title: "Jake's Alibi", type: "witness", icon: "📝", isKey: false, content: ["Two friends confirm fireplace work","Continuous presence"] },
    { id: "ev-043-7", title: "Tom's Restraining Order", type: "document", icon: "📄", isKey: false, content: ["Filed 6 months ago","Restraining order active","He shouldn't have been there"] },
    { id: "ev-043-8", title: "Ryan's Criminal Record", type: "document", icon: "📄", isKey: false, content: ["Assault charge 5 years ago","Victim had threatened to expose him"] },
    { id: "ev-043-9", title: "Firewood Axe", type: "document", icon: "🪓", isKey: false, content: ["Used for chopping wood","No blood traces","Consistent with Tom's alibi"] },
    { id: "ev-043-10", title: "Emma's Shoes", type: "document", icon: "👟", isKey: true, content: ["Footprints in snow match hers","Size and tread pattern","Leading to and from body location"] }
  ],
  timeline: [
    { time: "20:00", event: "Group dinner" },
    { time: "21:30", event: "Victim goes to her room" },
    { time: "22:00", event: "Victim strangled" },
    { time: "22:30", event: "Snow starts" },
    { time: "23:00", event: "Body placed outside" },
    { time: "23:15", event: "Emma returns to cabin" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s043a", motive: "Emma was in love with the victim's fiancé. Unable to watch the wedding happen, she strangled the victim during a private conversation, then placed the body outside to stage hypothermia.", keyEvidenceIds: ["ev-043-1","ev-043-2","ev-043-3","ev-043-4","ev-043-10"] }
};

export const CASE_044: Case = {
  id: "044", number: 44, title: "The Charity Gala", difficulty: 3,
  briefing: "At a $10M charity gala, the charity's founder is found dead in the coat room. Insulin overdose — she was diabetic but the dose was 10x normal. Five donors attended the private pre-gala dinner.",
  image: "/cases/case-044.jpeg",
  suspects: [
    { id: "s044a", name: "Trustee Crawford", role: "Trustee", emoji: "💼", description: "Was embezzling from the charity.", statement: "I was greeting donors at the entrance." },
    { id: "s044b", name: "Donor Mrs. Sterling", role: "Donor", emoji: "👩‍🦳", description: "Victim exposed her husband's affair.", statement: "I was at my table in the main hall." },
    { id: "s044c", name: "Director Patel", role: "Executive Director", emoji: "👨‍💼", description: "Victim discovered his fake credentials.", statement: "I was making a speech on stage." },
    { id: "s044d", name: "Heir Jonathan", role: "Nephew & Heir", emoji: "🧑", description: "Victim was disinheriting him.", statement: "I was at the bar." },
    { id: "s044e", name: "Nurse Kelly", role: "Personal Nurse", emoji: "👩‍⚕️", description: "Victim was going to fire her.", statement: "I was in the medical room with supplies." }
  ],
  evidence: [
    { id: "ev-044-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Insulin overdose (10x normal)","Time: 19:15","Injection in upper arm"] },
    { id: "ev-044-2", title: "Gala CCTV", type: "cctv", icon: "📹", isKey: true, content: ["18:45 Crawford in hallway","19:00 Sterling at table","19:05 Patel backstage","19:10 Kelly walks toward coat room"] },
    { id: "ev-044-3", title: "Insulin Syringe", type: "document", icon: "💉", isKey: true, content: ["Found in trash bin","Insulin residue","Fingerprint: Kelly"] },
    { id: "ev-044-4", title: "Nurse's Termination Letter", type: "document", icon: "📄", isKey: true, content: ["Effective next week","Victim had discovered her negligence","Would end Kelly's nursing license"] },
    { id: "ev-044-5", title: "Trustee's Financial Records", type: "bank", icon: "💳", isKey: true, content: ["$500K missing from charity","Victim discovered last week","Was going to report to board"] },
    { id: "ev-044-6", title: "Sterling's Husband Testimony", type: "witness", icon: "📝", isKey: false, content: ["Wife was at table all evening","Six donors confirm"] },
    { id: "ev-044-7", title: "Patel's Speech Recording", type: "cctv", icon: "📹", isKey: false, content: ["Continuous video feed from stage","Never left stage"] },
    { id: "ev-044-8", title: "Jonathan's Bar Tab", type: "bank", icon: "🧾", isKey: false, content: ["Signed continuously 18:30-20:00","Bartender confirms presence"] },
    { id: "ev-044-9", title: "Medical Room Log", type: "document", icon: "📋", isKey: true, content: ["Kelly signed in at 18:50","Signed out at 19:20","30 minutes unaccounted during murder window"] },
    { id: "ev-044-10", title: "Kelly's Text", type: "phone", icon: "📱", isKey: true, content: ["To friend: 'I'll lose my license.'","'Not if she can't talk.'","Sent 3 hours before gala"] }
  ],
  timeline: [
    { time: "18:30", event: "Pre-gala dinner" },
    { time: "18:45", event: "Crawford in hallway" },
    { time: "18:50", event: "Kelly in medical room" },
    { time: "19:00", event: "Sterling at table" },
    { time: "19:05", event: "Patel on stage" },
    { time: "19:10", event: "Kelly walks toward coat room" },
    { time: "19:15", event: "Victim injected" },
    { time: "19:20", event: "Kelly returns to medical room" },
    { time: "20:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s044e", motive: "Victim discovered Kelly's medical negligence and was going to fire her, which would end her nursing license. Kelly injected a lethal dose of insulin during a quiet moment in the coat room.", keyEvidenceIds: ["ev-044-1","ev-044-2","ev-044-3","ev-044-4","ev-044-10"] }
};

export const CASE_045: Case = {
  id: "045", number: 45, title: "The Archeological Dig", difficulty: 4,
  briefing: "At an Egyptian archeological dig, the lead archeologist is found dead in his tent. Scorpion venom — but no scorpion in the area. Five team members were at the site.",
  image: "/cases/case-045.jpeg",
  suspects: [
    { id: "s045a", name: "Dr. Hassan", role: "Egyptian Co-Director", emoji: "🧔", description: "Victim was claiming all credit.", statement: "I was cataloging artifacts in the main tent." },
    { id: "s045b", name: "PhD Student Emma", role: "PhD Student", emoji: "👩‍🎓", description: "Victim was blocking her thesis.", statement: "I was sifting dirt at trench 3." },
    { id: "s045c", name: "Photographer Marco", role: "Photographer", emoji: "📷", description: "Victim discovered his artifact smuggling.", statement: "I was taking photos at sunset." },
    { id: "s045d", name: "Local Guide Ahmed", role: "Local Guide", emoji: "🧑", description: "Victim refused to pay him.", statement: "I was at the dig site with the workers." },
    { id: "s045e", name: "Fundraiser Chen", role: "Fundraiser", emoji: "💼", description: "Victim exposed his fake degrees.", statement: "I was in my tent on a video call." }
  ],
  evidence: [
    { id: "ev-045-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Death by scorpion venom","Venom species: Deathstalker","Not native to the area","Injection via small puncture"] },
    { id: "ev-045-2", title: "Dig Site CCTV", type: "cctv", icon: "📹", isKey: true, content: ["18:30 Hassan in main tent","18:45 Emma at trench 3","19:00 Marco taking photos","19:15 Hassan walks to victim's tent"] },
    { id: "ev-045-3", title: "Syringe", type: "document", icon: "💉", isKey: true, content: ["Found buried near tent","Traces of scorpion venom","Fingerprint: Hassan"] },
    { id: "ev-045-4", title: "Victim's Notebook", type: "document", icon: "📓", isKey: true, content: ["Hassan claiming entire discovery","Victim documented the fraud","Would report to university"] },
    { id: "ev-045-5", title: "Hassan's Bag", type: "document", icon: "🎒", isKey: true, content: ["Small vial of scorpion venom","Purchased in Cairo 5 days ago","Receipt found in wallet"] },
    { id: "ev-045-6", title: "Emma's Trench Log", type: "document", icon: "📋", isKey: false, content: ["Continuous sifting activity","Supervisor confirmed presence"] },
    { id: "ev-045-7", title: "Marco's Photo Timestamps", type: "document", icon: "📷", isKey: false, content: ["Continuous camera activity","50+ photos timestamped"] },
    { id: "ev-045-8", title: "Ahmed's Payment Records", type: "document", icon: "📄", isKey: false, content: ["Underpaid","But two workers confirm at site"] },
    { id: "ev-045-9", title: "Chen's Video Call Log", type: "document", icon: "📱", isKey: false, content: ["Video call with donors 18:00-20:00","Continuous recording"] },
    { id: "ev-045-10", title: "Hassan's Emails", type: "document", icon: "📧", isKey: true, content: ["To university: 'The discovery is mine.'","'He's trying to steal it.'"] }
  ],
  timeline: [
    { time: "18:00", event: "Chen on video call" },
    { time: "18:30", event: "Hassan in main tent" },
    { time: "18:45", event: "Emma at trench 3" },
    { time: "19:00", event: "Marco photographing" },
    { time: "19:15", event: "Hassan walks to victim's tent" },
    { time: "19:20", event: "Victim injected with venom" },
    { time: "19:30", event: "Hassan returns to main tent" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s045a", motive: "Hassan feared losing credit for the discovery of the century. He smuggled scorpion venom from Cairo and injected the victim in his tent during the quiet sunset hour.", keyEvidenceIds: ["ev-045-1","ev-045-2","ev-045-3","ev-045-4","ev-045-5"] }
};

export const CASE_046: Case = {
  id: "046", number: 46, title: "The Ski Resort Avalanche", difficulty: 4,
  briefing: "A ski resort owner dies in an avalanche that was deliberately triggered. He was checking on his property alone. Five people knew his route that morning.",
  image: "/cases/case-046.jpeg",
  suspects: [
    { id: "s046a", name: "Resort Manager Blake", role: "Resort Manager", emoji: "💼", description: "Owner was selling to a corporation.", statement: "I was at the front desk." },
    { id: "s046b", name: "Ski Patrol Chief Rosa", role: "Ski Patrol Chief", emoji: "⛷️", description: "Owner covered up an accident last year.", statement: "I was running patrol routes on the east side." },
    { id: "s046c", name: "Ex-Wife Nicole", role: "Ex-Wife", emoji: "👩", description: "Owner refused alimony increase.", statement: "I was in my hotel room." },
    { id: "s046d", name: "Business Partner David", role: "Business Partner", emoji: "🧑‍💼", description: "Owner was cutting him out of the sale.", statement: "I was at the lodge having breakfast." },
    { id: "s046e", name: "Lift Operator Tom", role: "Lift Operator", emoji: "🧑‍🔧", description: "Owner had fired then rehired him at half pay.", statement: "I was operating the main lift." }
  ],
  evidence: [
    { id: "ev-046-1", title: "Avalanche Analysis", type: "document", icon: "❄️", isKey: true, content: ["Artificially triggered","Small explosive charge","Timed with owner's route","Location: west ridge"] },
    { id: "ev-046-2", title: "Resort CCTV", type: "cctv", icon: "📹", isKey: true, content: ["07:00 owner leaves lodge","07:15 Blake at front desk","07:30 Rosa exits ski patrol hut","07:45 David in lodge dining"] },
    { id: "ev-046-3", title: "Explosive Residue", type: "document", icon: "🧪", isKey: true, content: ["Found on east ridge marker","Commercial ski patrol explosive","Matches stock from ski patrol hut"] },
    { id: "ev-046-4", title: "Rosa's Ski Patrol Log", type: "document", icon: "📋", isKey: true, content: ["No scheduled avalanche control that morning","She signed out an explosive anyway","Log entry falsified"] },
    { id: "ev-046-5", title: "Cover-up Documents", type: "document", icon: "📄", isKey: true, content: ["Ski accident last year","Patrol chief blamed","Owner hid evidence","Rosa was about to be fired"] },
    { id: "ev-046-6", title: "Blake's Sale Documents", type: "document", icon: "📄", isKey: false, content: ["Owner selling to corporation","Blake would be replaced"] },
    { id: "ev-046-7", title: "Nicole's Divorce File", type: "document", icon: "📄", isKey: false, content: ["Alimony dispute","But no violent history"] },
    { id: "ev-046-8", title: "David's Business Contract", type: "document", icon: "📄", isKey: false, content: ["Being cut out of sale","Legally disputing"] },
    { id: "ev-046-9", title: "Tom's Work Record", type: "document", icon: "📄", isKey: false, content: ["Fired and rehired at half pay","But at lift station all morning"] },
    { id: "ev-046-10", title: "Rosa's Radio Call", type: "document", icon: "📻", isKey: true, content: ["07:40 radio call to unknown frequency","'On my way. 5 minutes.'","No official log entry"] }
  ],
  timeline: [
    { time: "07:00", event: "Owner leaves lodge" },
    { time: "07:15", event: "Blake at front desk" },
    { time: "07:30", event: "Rosa exits ski patrol hut" },
    { time: "07:40", event: "Rosa makes radio call" },
    { time: "07:45", event: "David at breakfast" },
    { time: "08:15", event: "Explosive triggered" },
    { time: "08:16", event: "Avalanche kills owner" },
    { time: "10:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s046b", motive: "Rosa was about to be fired for the cover-up the owner forced on her. She triggered a controlled avalanche on his route to make it look like an accident.", keyEvidenceIds: ["ev-046-1","ev-046-3","ev-046-4","ev-046-5","ev-046-10"] }
};

export const CASE_047: Case = {
  id: "047", number: 47, title: "The Speakeasy Murder", difficulty: 3,
  briefing: "A 1920s-themed speakeasy bar. The owner is found dead in his office. Poison in his whiskey. Five regulars had access to the private office that night.",
  image: "/cases/case-047.jpeg",
  suspects: [
    { id: "s047a", name: "Bartender Rick", role: "Bartender", emoji: "🍸", description: "Owner was skimming his tips.", statement: "I was behind the bar all night." },
    { id: "s047b", name: "Regular Marcus", role: "Regular Customer", emoji: "🧔", description: "Owner had evidence of his fraud.", statement: "I was at my corner table." },
    { id: "s047c", name: "Jazz Singer Lena", role: "Jazz Singer", emoji: "🎤", description: "Owner was going to expose her affair.", statement: "I was singing on stage." },
    { id: "s047d", name: "Rival Owner Silas", role: "Rival Bar Owner", emoji: "🧑‍💼", description: "Owner stole his best bartender.", statement: "I wasn't even here tonight." },
    { id: "s047e", name: "Manager Judy", role: "Manager", emoji: "👩‍💼", description: "Owner was going to replace her.", statement: "I was checking inventory in the back." }
  ],
  evidence: [
    { id: "ev-047-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Cyanide poisoning","Ingested via whiskey","Time: 23:30"] },
    { id: "ev-047-2", title: "Bar CCTV", type: "cctv", icon: "📹", isKey: true, content: ["23:00 Rick behind bar","23:10 Marcus at table","23:15 Judy in storage","23:25 Marcus walks toward office"] },
    { id: "ev-047-3", title: "Whiskey Glass", type: "document", icon: "🥃", isKey: true, content: ["Victim's prints","Partial print — Marcus","Cyanide residue"] },
    { id: "ev-047-4", title: "Victim's Safe", type: "document", icon: "🔐", isKey: true, content: ["Documents exposing Marcus's fraud","Photocopies made recently","Marcus's signature forged on loan documents"] },
    { id: "ev-047-5", title: "Rick's Bar Log", type: "document", icon: "📋", isKey: false, content: ["Continuous presence behind bar","Three customers confirm"] },
    { id: "ev-047-6", title: "Lena's Set List", type: "document", icon: "🎵", isKey: false, content: ["Performing 22:00-24:00","Stage camera confirms"] },
    { id: "ev-047-7", title: "Silas's Location", type: "document", icon: "📄", isKey: false, content: ["At his own bar across town","Ten witnesses"] },
    { id: "ev-047-8", title: "Judy's Inventory Sheet", type: "document", icon: "📋", isKey: false, content: ["Storage room check 23:00-23:45","Assistant manager confirms"] },
    { id: "ev-047-9", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Marcus's coat pocket","Industrial grade","Purchased 3 days ago from chemical supply"] },
    { id: "ev-047-10", title: "Marcus's Emails", type: "document", icon: "📧", isKey: true, content: ["To accountant: 'If he talks, I'm done.'","'We need to stop him.'"] }
  ],
  timeline: [
    { time: "22:00", event: "Speakeasy opens" },
    { time: "23:00", event: "Rick behind bar" },
    { time: "23:10", event: "Marcus at table" },
    { time: "23:15", event: "Judy in storage" },
    { time: "23:25", event: "Marcus walks to office" },
    { time: "23:30", event: "Victim drinks poisoned whiskey" },
    { time: "23:45", event: "Body discovered" }
  ],
  solution: { culpritId: "s047b", motive: "Victim had documents proving Marcus committed fraud using forged signatures. Marcus poisoned his whiskey during a brief visit to the office.", keyEvidenceIds: ["ev-047-1","ev-047-2","ev-047-3","ev-047-4","ev-047-9"] }
};

export const CASE_048: Case = {
  id: "048", number: 48, title: "The Zoo Incident", difficulty: 3,
  briefing: "A zookeeper is found dead in the tiger enclosure. The gate was left open. Five staff members had access to the gate controls.",
  image: "/cases/case-048.jpeg",
  suspects: [
    { id: "s048a", name: "Head Keeper Maria", role: "Head Keeper", emoji: "👩‍🌾", description: "Victim was going to report her.", statement: "I was feeding the elephants." },
    { id: "s048b", name: "Vet Dr. Patel", role: "Veterinarian", emoji: "👨‍⚕️", description: "Victim knew about his drug abuse.", statement: "I was examining a sick monkey." },
    { id: "s048c", name: "Intern Jamie", role: "Intern", emoji: "🧑‍🎓", description: "Victim was blocking his full-time position.", statement: "I was cleaning the reptile house." },
    { id: "s048d", name: "Maintenance Chief Robert", role: "Maintenance Chief", emoji: "🔧", description: "Victim witnessed him stealing equipment.", statement: "I was repairing the gift shop AC." },
    { id: "s048e", name: "Tour Guide Sofia", role: "Tour Guide", emoji: "👩‍💼", description: "Victim was harassing her.", statement: "I was leading the morning tour." }
  ],
  evidence: [
    { id: "ev-048-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Killed by tiger","Time: 06:15 AM","No defensive wounds","Attacked from behind"] },
    { id: "ev-048-2", title: "Zoo CCTV", type: "cctv", icon: "📹", isKey: true, content: ["05:45 Maria at elephant house","06:00 Patel at monkey exhibit","06:10 Jamie in reptile house","06:20 tour begins"] },
    { id: "ev-048-3", title: "Gate Control Log", type: "document", icon: "🔐", isKey: true, content: ["Tiger gate opened at 06:05","Code: Maria's access code","Logged but flagged as manual override"] },
    { id: "ev-048-4", title: "Victim's Notebook", type: "document", icon: "📓", isKey: true, content: ["Maria was mistreating animals","Filed formal complaint 3 days ago","Meeting with director scheduled"] },
    { id: "ev-048-5", title: "Maria's Emails", type: "document", icon: "📧", isKey: true, content: ["To friend: 'She's going to destroy me.'","'Not if I stop her first.'"] },
    { id: "ev-048-6", title: "Patel's Drug Test", type: "document", icon: "📄", isKey: false, content: ["Positive for opioids","Rehab scheduled","Victim had evidence"] },
    { id: "ev-048-7", title: "Jamie's Application", type: "document", icon: "📄", isKey: false, content: ["Applied for full-time position","Victim's recommendation was negative"] },
    { id: "ev-048-8", title: "Robert's Theft Report", type: "document", icon: "📄", isKey: false, content: ["Stolen equipment valued at $8K","Victim was witness"] },
    { id: "ev-048-9", title: "Sofia's Tour Log", type: "document", icon: "📋", isKey: false, content: ["Tour began 06:20","12 tourists confirm presence"] },
    { id: "ev-048-10", title: "Maria's Boots", type: "document", icon: "👢", isKey: true, content: ["Tiger enclosure mud on them","She claimed she hadn't been there","Mud analysis matches"] }
  ],
  timeline: [
    { time: "05:45", event: "Maria at elephant house" },
    { time: "06:00", event: "Patel at monkey exhibit" },
    { time: "06:05", event: "Tiger gate opened with Maria's code" },
    { time: "06:10", event: "Jamie in reptile house" },
    { time: "06:15", event: "Victim killed by tiger" },
    { time: "06:20", event: "Tour begins" },
    { time: "06:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s048a", motive: "Victim had filed a formal complaint about Maria's animal mistreatment. Facing dismissal, Maria used her access code to open the tiger gate, then lured the victim into the enclosure.", keyEvidenceIds: ["ev-048-1","ev-048-2","ev-048-3","ev-048-4","ev-048-10"] }
};

export const CASE_049: Case = {
  id: "049", number: 49, title: "The Royal Wedding", difficulty: 5,
  briefing: "At a minor royal wedding in Europe, the King's brother is found dead in his suite. Poisoned wine. Five members of the royal household were present.",
  image: "/cases/case-049.jpeg",
  suspects: [
    { id: "s049a", name: "Prince William", role: "Prince", emoji: "🤴", description: "Was going to be replaced as heir.", statement: "I was at the reception hall." },
    { id: "s049b", name: "Lady Sarah", role: "Lady-in-Waiting", emoji: "👸", description: "Victim broke off their engagement.", statement: "I was helping the bride prepare." },
    { id: "s049c", name: "Head of Security Mueller", role: "Security Chief", emoji: "💂", description: "Victim discovered his loyalty was bought.", statement: "I was coordinating security at the entrance." },
    { id: "s049d", name: "Royal Chef Antoine", role: "Royal Chef", emoji: "👨‍🍳", description: "Victim was going to dismiss him.", statement: "I was in the kitchen preparing dinner." },
    { id: "s049e", name: "Duchess Marie", role: "Duchess", emoji: "👩", description: "Victim had evidence of her affair.", statement: "I was in the ballroom with guests." }
  ],
  evidence: [
    { id: "ev-049-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Ricin poisoning","Ingested via red wine","Time: 21:15"] },
    { id: "ev-049-2", title: "Palace CCTV", type: "cctv", icon: "📹", isKey: true, content: ["20:45 William in reception","21:00 Mueller near suite door","21:05 Lady Sarah walks to suite","21:10 Marie in ballroom"] },
    { id: "ev-049-3", title: "Wine Decanter", type: "document", icon: "🍷", isKey: true, content: ["Ricin residue","Prints: victim and Mueller","Two glasses poured — one poisoned"] },
    { id: "ev-049-4", title: "Mueller's Emails", type: "document", icon: "📧", isKey: true, content: ["Foreign agents paid him $2M","Victim discovered last week","Was going to expose and arrest him"] },
    { id: "ev-049-5", title: "William's Succession File", type: "document", icon: "📄", isKey: false, content: ["Being replaced as heir by younger brother","Angry but not violent history"] },
    { id: "ev-049-6", title: "Lady Sarah's Notes", type: "document", icon: "📝", isKey: false, content: ["Recent broken engagement","Still in love with victim"] },
    { id: "ev-049-7", title: "Chef Antoine's Kitchen Log", type: "document", icon: "📋", isKey: false, content: ["Continuous dinner prep","Five staff confirm presence"] },
    { id: "ev-049-8", title: "Marie's Ballroom Log", type: "document", icon: "📋", isKey: false, content: ["Continuous presence at ballroom","Ten guests confirm"] },
    { id: "ev-049-9", title: "Ricin Source", type: "document", icon: "🧪", isKey: true, content: ["Found in security office","Mueller had access to international shipments"] },
    { id: "ev-049-10", title: "Mueller's Phone", type: "phone", icon: "📱", isKey: true, content: ["20:55 to unknown: 'It's done tonight.'","21:20: 'Package delivered.'"] }
  ],
  timeline: [
    { time: "20:30", event: "Wedding reception begins" },
    { time: "20:45", event: "William in reception hall" },
    { time: "20:55", event: "Mueller sends cryptic text" },
    { time: "21:00", event: "Mueller near suite door" },
    { time: "21:05", event: "Lady Sarah walks toward suite" },
    { time: "21:10", event: "Marie in ballroom" },
    { time: "21:15", event: "Victim drinks poisoned wine" },
    { time: "21:30", event: "Body discovered by butler" }
  ],
  solution: { culpritId: "s049c", motive: "Mueller was a double agent who had been paid $2M by foreign agents. The victim discovered his betrayal and was going to expose and arrest him at the wedding.", keyEvidenceIds: ["ev-049-1","ev-049-2","ev-049-3","ev-049-4","ev-049-10"] }
};

export const CASE_050: Case = {
  id: "050", number: 50, title: "The Space Mission", difficulty: 5,
  briefing: "On the ISS, an astronaut dies during a spacewalk. His oxygen line was deliberately cut. Five other astronauts were on the station.",
  image: "/cases/case-050.jpeg",
  suspects: [
    { id: "s050a", name: "Commander Kozlov", role: "Commander", emoji: "👨‍🚀", description: "Was being investigated for abuse.", statement: "I was in the command module." },
    { id: "s050b", name: "Flight Engineer Chen", role: "Flight Engineer", emoji: "👨‍🔧", description: "Victim exposed his falsified data.", statement: "I was in the lab conducting experiments." },
    { id: "s050c", name: "Doctor Sarah", role: "Flight Surgeon", emoji: "👩‍⚕️", description: "Victim ended their relationship.", statement: "I was in the medical bay." },
    { id: "s050d", name: "Pilot Martinez", role: "Pilot", emoji: "👩‍✈️", description: "Victim was stealing his research.", statement: "I was at the controls monitoring the walk." },
    { id: "s050e", name: "Scientist Yuki", role: "Scientist", emoji: "👩‍🔬", description: "Victim blocked his next mission.", statement: "I was in the sleep quarters." }
  ],
  evidence: [
    { id: "ev-050-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Asphyxiation in vacuum","Oxygen line cut cleanly","Tool marks consistent with flight knife","Time: 14:30 ISS time"] },
    { id: "ev-050-2", title: "Station CCTV", type: "cctv", icon: "📹", isKey: true, content: ["14:00 victim begins EVA","14:15 Kozlov in command module","14:20 Chen in lab","14:25 Chen exits lab toward EVA prep room"] },
    { id: "ev-050-3", title: "Oxygen Line", type: "document", icon: "🔧", isKey: true, content: ["Cut cleanly with tool","Flight knife found in prep room","Traces of Chen's fingerprints"] },
    { id: "ev-050-4", title: "Victim's Findings", type: "document", icon: "📄", isKey: true, content: ["Chen falsified 3 years of research data","Victim had proof","Was going to expose on return to Earth"] },
    { id: "ev-050-5", title: "Kozlov's Investigation", type: "document", icon: "📄", isKey: false, content: ["Under investigation for crew abuse","NASA was going to press charges"] },
    { id: "ev-050-6", title: "Doctor's Medical Log", type: "document", icon: "📋", isKey: false, content: ["In medical bay entire window","Nurse logs confirm"] },
    { id: "ev-050-7", title: "Pilot's Control Log", type: "document", icon: "📋", isKey: false, content: ["Continuous controls monitoring","Flight data recorder confirms"] },
    { id: "ev-050-8", title: "Yuki's Sleep Log", type: "document", icon: "📋", isKey: false, content: ["In sleep quarters","Multiple astronauts confirm"] },
    { id: "ev-050-9", title: "Prep Room Log", type: "document", icon: "🔐", isKey: true, content: ["Chen badge entry 14:20","Exit 14:28","Only Chen accessed prep room that hour"] },
    { id: "ev-050-10", title: "Chen's Message", type: "phone", icon: "📱", isKey: true, content: ["Draft message: 'If you talk, we all die in space.'","Never sent, deleted"] }
  ],
  timeline: [
    { time: "14:00", event: "Victim begins EVA" },
    { time: "14:15", event: "Kozlov in command module" },
    { time: "14:20", event: "Chen enters prep room" },
    { time: "14:25", event: "Chen exits toward EVA airlock" },
    { time: "14:30", event: "Oxygen line cut" },
    { time: "14:32", event: "Victim loses consciousness" },
    { time: "14:35", event: "Alarm triggers" }
  ],
  solution: { culpritId: "s050b", motive: "Victim discovered Chen had falsified 3 years of research data. Chen knew he'd be exposed and disgraced on return. He cut the oxygen line during a brief EVA prep-room visit, hoping to make it look like a malfunction.", keyEvidenceIds: ["ev-050-1","ev-050-2","ev-050-3","ev-050-4","ev-050-9"] }
};

export const CASE_051: Case = {
  id: "051", number: 51, title: "The Vineyard Estate", difficulty: 3,
  briefing: "An Italian vineyard owner is found dead in his wine cellar. Drowned in a wine barrel. Five family members and staff were on the estate.",
  image: "/cases/case-051.jpeg",
  suspects: [
    { id: "s051a", name: "Giovanni Rossi", role: "Son", emoji: "🧑", description: "Being disinherited.", statement: "I was in the stables tending to horses." },
    { id: "s051b", name: "Elena Rossi", role: "Daughter", emoji: "👩", description: "Victim refused to fund her business.", statement: "I was in my room making calls." },
    { id: "s051c", name: "Isabella Rossi", role: "Wife", emoji: "👩‍🦰", description: "Victim had a younger mistress.", statement: "I was cooking dinner in the kitchen." },
    { id: "s051d", name: "Paolo Bianchi", role: "Wine Master", emoji: "🧑‍🍳", description: "Victim was going to replace him.", statement: "I was in the tasting room." },
    { id: "s051e", name: "Marco Ferrari", role: "Estate Manager", emoji: "💼", description: "Victim discovered his embezzlement.", statement: "I was in my office doing paperwork." }
  ],
  evidence: [
    { id: "ev-051-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Cause: drowning in wine","Head trauma pre-mortem","Time: 21:00","Wine in lungs"] },
    { id: "ev-051-2", title: "Cellar CCTV", type: "cctv", icon: "📹", isKey: true, content: ["20:30 Giovanni to stables","20:45 Isabella in kitchen","20:50 Marco walks to cellar","21:10 body discovered by Paolo"] },
    { id: "ev-051-3", title: "Wine Barrel", type: "document", icon: "🛢️", isKey: true, content: ["Victim's body inside","Blood on rim","Fingerprint: Marco Ferrari"] },
    { id: "ev-051-4", title: "Marco's Financials", type: "bank", icon: "💳", isKey: true, content: ["€400K embezzled over 4 years","Victim discovered last week","Was going to press charges"] },
    { id: "ev-051-5", title: "Giovanni's Alibi", type: "witness", icon: "📝", isKey: false, content: ["Stable hand confirms presence","Continuous activity with horses"] },
    { id: "ev-051-6", title: "Elena's Phone Log", type: "phone", icon: "📱", isKey: false, content: ["Business call 20:30-21:30","Continuous audio recording"] },
    { id: "ev-051-7", title: "Isabella's Kitchen Log", type: "document", icon: "📋", isKey: false, content: ["Cook confirms presence","Continuous meal prep"] },
    { id: "ev-051-8", title: "Paolo's Tasting Notes", type: "document", icon: "📝", isKey: false, content: ["Recording tasting session","Found body when looking for cellar access"] },
    { id: "ev-051-9", title: "Marco's Emails", type: "document", icon: "📧", isKey: true, content: ["To sister: 'He knows. I'm finished.'","'I'll do anything to stop him.'"] },
    { id: "ev-051-10", title: "Cellar Keys", type: "document", icon: "🔑", isKey: true, content: ["Only 3 keys exist","Marco had one","Others in victim's safe"] }
  ],
  timeline: [
    { time: "20:30", event: "Giovanni to stables" },
    { time: "20:45", event: "Isabella in kitchen" },
    { time: "20:50", event: "Marco walks to cellar" },
    { time: "21:00", event: "Victim killed in wine cellar" },
    { time: "21:10", event: "Body discovered by Paolo" },
    { time: "21:30", event: "Police called" }
  ],
  solution: { culpritId: "s051e", motive: "Marco embezzled €400K. When victim discovered it and threatened charges, Marco used his cellar key to confront him, then drowned him in a wine barrel to make it look like an accident.", keyEvidenceIds: ["ev-051-1","ev-051-2","ev-051-3","ev-051-4","ev-051-9"] }
};

export const CASE_052: Case = {
  id: "052", number: 52, title: "The Airline Crash", difficulty: 5,
  briefing: "A private jet crashes in the Alps. The pilot is the only survivor — and the crash was deliberate. He claims a bomb. Investigators suspect sabotage from within.",
  image: "/cases/case-052.jpeg",
  suspects: [
    { id: "s052a", name: "Pilot Anton", role: "Pilot", emoji: "👨‍✈️", description: "Only survivor.", statement: "A bomb went off. I barely survived." },
    { id: "s052b", name: "Co-Pilot Silva", role: "Co-Pilot", emoji: "👨‍✈️", description: "Found dead at scene.", statement: "I was flying — cannot respond." },
    { id: "s052c", name: "Mechanic Diego", role: "Aircraft Mechanic", emoji: "🔧", description: "Last serviced the plane.", statement: "I serviced it 3 days ago. Perfect condition." },
    { id: "s052d", name: "Brother Karl", role: "Owner's Brother", emoji: "🧑", description: "Was set to inherit.", statement: "I was home in Munich." },
    { id: "s052e", name: "Attendant Vera", role: "Flight Attendant", emoji: "👩‍✈️", description: "Had access to the galley.", statement: "I was preparing coffee when it happened." }
  ],
  evidence: [
    { id: "ev-052-1", title: "Crash Analysis", type: "document", icon: "✈️", isKey: true, content: ["Explosion in cargo bay","Not a bomb — C4 military grade","Detonated remotely","30 seconds after takeoff"] },
    { id: "ev-052-2", title: "Black Box Audio", type: "cctv", icon: "🎙️", isKey: true, content: ["06:42 takeoff","06:42:30 explosion","06:42:35 Anton: 'What the—'","06:42:40 Silva: 'Anton, what did you do?'"] },
    { id: "ev-052-3", title: "C4 Source", type: "document", icon: "🧪", isKey: true, content: ["Military grade C4","Serial matches batch stolen from German army base","Purchase traced to fake ID"] },
    { id: "ev-052-4", title: "Fake ID", type: "document", icon: "📄", isKey: true, content: ["Used to buy C4","Photo matches Anton","Printing shop confirms"] },
    { id: "ev-052-5", title: "Anton's Debts", type: "bank", icon: "💳", isKey: true, content: ["€300K gambling debt","Life insurance payout on crash: €2M","Named beneficiary"] },
    { id: "ev-052-6", title: "Diego's Service Log", type: "document", icon: "📋", isKey: false, content: ["Continuous service documented","Two technicians confirm"] },
    { id: "ev-052-7", title: "Karl's Alibi", type: "document", icon: "📄", isKey: false, content: ["Home security footage confirms","Home entire evening"] },
    { id: "ev-052-8", title: "Vera's Position", type: "document", icon: "📋", isKey: false, content: ["In galley during takeoff","Cockpit voice recorder confirms"] },
    { id: "ev-052-9", title: "Anton's Phone", type: "phone", icon: "📱", isKey: true, content: ["06:40 outbound text to burner phone","Deleted but recovered","Text: 'Now.'"] },
    { id: "ev-052-10", title: "Cargo Bay Access", type: "document", icon: "🔐", isKey: true, content: ["Access log: Anton at 05:30 AM","Not part of his pre-flight duties","Cargo door log falsified"] }
  ],
  timeline: [
    { time: "05:30", event: "Anton accesses cargo bay" },
    { time: "06:40", event: "Anton sends 'Now' text" },
    { time: "06:42:00", event: "Takeoff" },
    { time: "06:42:30", event: "C4 explosion" },
    { time: "06:42:40", event: "Silva yells at Anton" },
    { time: "06:43:00", event: "Crash" },
    { time: "08:00", event: "Rescue team finds Anton" }
  ],
  solution: { culpritId: "s052a", motive: "Anton had €300K gambling debts. He placed military-grade C4 in the cargo bay to kill everyone on board and collect €2M in life insurance as the sole survivor.", keyEvidenceIds: ["ev-052-1","ev-052-2","ev-052-3","ev-052-4","ev-052-9","ev-052-10"] }
};

export const CASE_053: Case = {
  id: "053", number: 53, title: "The Fishing Village", difficulty: 3,
  briefing: "A fishing village elder is found dead on his boat. Stabbed with a fishing knife. Five villagers were at the docks that night.",
  image: "/cases/case-053.jpeg",
  suspects: [
    { id: "s053a", name: "Jacob Larsen", role: "Fisherman", emoji: "🎣", description: "Elder was blocking his permit.", statement: "I was mending nets in my shed." },
    { id: "s053b", name: "Henrik Berg", role: "Boat Builder", emoji: "🛠️", description: "Elder owed him 200K.", statement: "I was working on a hull in the yard." },
    { id: "s053c", name: "Sofia Dahl", role: "Shopkeeper", emoji: "🛒", description: "Elder exposed her smuggling.", statement: "I was closing up the shop." },
    { id: "s053d", name: "Erik Nilsen", role: "Nephew", emoji: "🧑", description: "Being cut from the will.", statement: "I was drinking at the pub." },
    { id: "s053e", name: "Lars Petersen", role: "Rival Fisherman", emoji: "⛵", description: "Elder stole his best fishing spot.", statement: "I was on my own boat." }
  ],
  evidence: [
    { id: "ev-053-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Stabbed 3 times","Time: 23:30","Fishing knife wound","Left-handed attacker"] },
    { id: "ev-053-2", title: "Docks CCTV", type: "cctv", icon: "📹", isKey: true, content: ["23:00 Jacob leaves shed","23:10 Henrik in yard","23:20 Sofia closes shop","23:25 Jacob walks toward elder's boat"] },
    { id: "ev-053-3", title: "Fishing Knife", type: "document", icon: "🔪", isKey: true, content: ["Found in water near dock","Blood matches victim","Fingerprint: Jacob Larsen"] },
    { id: "ev-053-4", title: "Permit Dispute", type: "document", icon: "📄", isKey: true, content: ["Elder blocked Jacob's fishing permit","Without permit Jacob loses livelihood","Decision final next week"] },
    { id: "ev-053-5", title: "Henrik's Debt Log", type: "document", icon: "📋", isKey: false, content: ["Elder owed 200K","Debt documented","No threats"] },
    { id: "ev-053-6", title: "Sofia's Smuggling Evidence", type: "document", icon: "📄", isKey: false, content: ["Elder had photos","Was going to report","But Sofia at shop until 23:40"] },
    { id: "ev-053-7", title: "Erik's Pub Log", type: "witness", icon: "📝", isKey: false, content: ["Bartender confirms presence","Continuous drinking 22:00-01:00"] },
    { id: "ev-053-8", title: "Lars's GPS Log", type: "document", icon: "📡", isKey: false, content: ["Boat GPS shows position","3 miles offshore at 23:30"] },
    { id: "ev-053-9", title: "Jacob's Shed", type: "document", icon: "🏚️", isKey: true, content: ["Wet boots and jacket","Salt water from recent immersion","Blood traces on jacket sleeve"] },
    { id: "ev-053-10", title: "Jacob's Text", type: "phone", icon: "📱", isKey: true, content: ["To wife 22:45: 'I'll fix this. He won't stop me again.'"] }
  ],
  timeline: [
    { time: "22:00", event: "Village night begins" },
    { time: "23:00", event: "Jacob leaves shed" },
    { time: "23:10", event: "Henrik in yard" },
    { time: "23:20", event: "Sofia closes shop" },
    { time: "23:25", event: "Jacob walks to elder's boat" },
    { time: "23:30", event: "Elder stabbed" },
    { time: "23:45", event: "Body discovered" }
  ],
  solution: { culpritId: "s053a", motive: "Elder blocked Jacob's permit, which would end his fishing career. Jacob confronted him on the boat and killed him with a fishing knife, then threw it into the sea.", keyEvidenceIds: ["ev-053-1","ev-053-2","ev-053-3","ev-053-4","ev-053-10"] }
};

export const CASE_054: Case = {
  id: "054", number: 54, title: "The Blind Musician", difficulty: 3,
  briefing: "A blind jazz pianist is found dead in his apartment. Overdose of sleeping pills — but they weren't prescribed. Five people visited him that day.",
  image: "/cases/case-054.jpeg",
  suspects: [
    { id: "s054a", name: "Manager David", role: "Manager", emoji: "💼", description: "Musician was firing him.", statement: "I was at my office all day." },
    { id: "s054b", name: "Ex-Wife Nicole", role: "Ex-Wife", emoji: "👩", description: "Musician was suing for custody.", statement: "I was at my apartment." },
    { id: "s054c", name: "Landlord Chen", role: "Landlord", emoji: "🧑‍💼", description: "Musician was suing over repairs.", statement: "I was collecting rent from other tenants." },
    { id: "s054d", name: "Bandmate Marcus", role: "Bandmate", emoji: "🎸", description: "Musician was stealing his songs.", statement: "I was at rehearsal with the band." },
    { id: "s054e", name: "Fan Olivia", role: "Fan", emoji: "👩‍🎤", description: "Musician had filed a restraining order.", statement: "I was outside the building, hoping to see him." }
  ],
  evidence: [
    { id: "ev-054-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Sleeping pill overdose","8x normal dose","Time: 20:00","Prescribed to someone else"] },
    { id: "ev-054-2", title: "Apartment CCTV", type: "cctv", icon: "📹", isKey: true, content: ["15:00 David visits","16:00 Nicole visits","17:00 Chen visits","19:30 Marcus visits"] },
    { id: "ev-054-3", title: "Pill Bottle", type: "document", icon: "💊", isKey: true, content: ["Prescription: David's name","David had sleep issues","Bottle found in victim's trash"] },
    { id: "ev-054-4", title: "Victim's Journal", type: "document", icon: "📔", isKey: true, content: ["David was skimming earnings","Victim had proof","Firing David next week"] },
    { id: "ev-054-5", title: "Nicole's Custody File", type: "document", icon: "📄", isKey: false, content: ["Dispute over daughter","But peaceful history"] },
    { id: "ev-054-6", title: "Chen's Court Notice", type: "document", icon: "📄", isKey: false, content: ["Being sued over repairs","Small claims only"] },
    { id: "ev-054-7", title: "Marcus's Rehearsal Log", type: "witness", icon: "📝", isKey: false, content: ["Bandmates confirm presence","Continuous rehearsal 19:00-23:00"] },
    { id: "ev-054-8", title: "Olivia's Location", type: "document", icon: "📄", isKey: false, content: ["GPS outside building","Never entered — doorman confirms"] },
    { id: "ev-054-9", title: "David's Emails", type: "document", icon: "📧", isKey: true, content: ["To accountant: 'He knows everything.'","'My career is over if this gets out.'"] },
    { id: "ev-054-10", title: "David's Phone", type: "phone", icon: "📱", isKey: true, content: ["Text at 14:30: 'I'll drop by at 3.'","15:45: 'He's sleeping. Job done.'"] }
  ],
  timeline: [
    { time: "15:00", event: "David visits" },
    { time: "16:00", event: "Nicole visits" },
    { time: "17:00", event: "Chen visits" },
    { time: "19:30", event: "Marcus visits" },
    { time: "20:00", event: "Victim overdoses" },
    { time: "22:00", event: "Body discovered by housekeeper" }
  ],
  solution: { culpritId: "s054a", motive: "David had been skimming earnings from the musician for years. When victim discovered it and was about to fire him, David used his own sleeping pills to kill him, hoping to make it look like suicide.", keyEvidenceIds: ["ev-054-1","ev-054-2","ev-054-3","ev-054-4","ev-054-10"] }
};

export const CASE_055: Case = {
  id: "055", number: 55, title: "The Antique Shop", difficulty: 3,
  briefing: "An antique shop owner is found dead in his store. Beaten with a candlestick. A 400-year-old jeweled chalice is missing. Five customers were in the shop that day.",
  image: "/cases/case-055.jpeg",
  suspects: [
    { id: "s055a", name: "Mr. Rothschild", role: "Collector", emoji: "🎩", description: "Owner outbid him at auction.", statement: "I was browsing the display cases." },
    { id: "s055b", name: "Ms. Van Dijk", role: "Private Collector", emoji: "👩‍🦰", description: "Owner exposed her forgeries.", statement: "I was negotiating for a painting." },
    { id: "s055c", name: "Professor Lee", role: "Historian", emoji: "👨‍🏫", description: "Owner refused to sell him an artifact.", statement: "I was examining manuscripts." },
    { id: "s055d", name: "Peter Wallace", role: "Handyman", emoji: "🔧", description: "Owner refused to pay him.", statement: "I was fixing a shelf in the back." },
    { id: "s055e", name: "Henry Brooks", role: "Nephew", emoji: "🧑", description: "Uncle refused to fund his debts.", statement: "I was at the front desk looking at books." }
  ],
  evidence: [
    { id: "ev-055-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Blunt force trauma to skull","Time: 18:30","Weapon: brass candlestick","Multiple blows"] },
    { id: "ev-055-2", title: "Store CCTV", type: "cctv", icon: "📹", isKey: true, content: ["17:30 Rothschild enters","17:45 Van Dijk enters","18:00 Peter in back area","18:15 Henry near front desk"] },
    { id: "ev-055-3", title: "Candlestick", type: "document", icon: "🕯️", isKey: true, content: ["Victim's blood on it","Partial print — Henry Brooks","Found in back room"] },
    { id: "ev-055-4", title: "Missing Chalice", type: "document", icon: "🏆", isKey: true, content: ["15th-century jeweled chalice","Value: $2M","Taken during murder"] },
    { id: "ev-055-5", title: "Rothschild's Auction Loss", type: "document", icon: "📄", isKey: false, content: ["Outbid last month","Publicly angry","But alibi confirmed by driver"] },
    { id: "ev-055-6", title: "Van Dijk Forgery Evidence", type: "document", icon: "📄", isKey: true, content: ["Victim had proof","Was going to expose to auction houses","Ending her career"] },
    { id: "ev-055-7", title: "Peter's Work Log", type: "document", icon: "📋", isKey: false, content: ["Continuous work documented","Shelf repair confirmed by materials used"] },
    { id: "ev-055-8", title: "Professor Lee's Notes", type: "document", icon: "📝", isKey: false, content: ["Researching manuscripts","Continuous note-taking"] },
    { id: "ev-055-9", title: "Henry's Debts", type: "bank", icon: "💳", isKey: true, content: ["$80K gambling debt","Uncle refused help","Would inherit everything"] },
    { id: "ev-055-10", title: "Henry's Backpack", type: "document", icon: "🎒", isKey: true, content: ["Found at his apartment","Contains jeweled chalice","Prints match victim's blood"] }
  ],
  timeline: [
    { time: "17:30", event: "Rothschild enters" },
    { time: "17:45", event: "Van Dijk enters" },
    { time: "18:00", event: "Peter in back" },
    { time: "18:15", event: "Henry near front desk" },
    { time: "18:30", event: "Victim attacked" },
    { time: "18:45", event: "Henry exits with backpack" },
    { time: "19:00", event: "Peter discovers body" }
  ],
  solution: { culpritId: "s055e", motive: "Henry had $80K in gambling debts. His uncle refused to help. Henry confronted him, killed him with a candlestick, and stole the jeweled chalice to pay off his debts.", keyEvidenceIds: ["ev-055-1","ev-055-3","ev-055-4","ev-055-9","ev-055-10"] }
};

export const CASE_056: Case = {
  id: "056", number: 56, title: "The Marathon Death", difficulty: 4,
  briefing: "During the Boston Marathon, an elite runner collapses at mile 22 and dies. Poison — but he only drank from official water stations. Five people had access to his bottle.",
  image: "/cases/case-056.jpeg",
  suspects: [
    { id: "s056a", name: "Coach Bennett", role: "Coach", emoji: "🏃", description: "Runner was leaving for another coach.", statement: "I was at the finish line waiting." },
    { id: "s056b", name: "Runner Wang", role: "Rival Runner", emoji: "🏃‍♂️", description: "Runner beat him every race.", statement: "I was running the race." },
    { id: "s056c", name: "Physio Maria", role: "Physiotherapist", emoji: "💆", description: "Runner accused her of harassment.", statement: "I was at the medical tent." },
    { id: "s056d", name: "Sponsor Rep David", role: "Sponsor Rep", emoji: "💼", description: "Runner broke his contract.", statement: "I was at the VIP tent." },
    { id: "s056e", name: "Agent Stone", role: "Sports Agent", emoji: "🧑‍💼", description: "Runner was leaving his agency.", statement: "I was in the VIP area." }
  ],
  evidence: [
    { id: "ev-056-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Cyanide poisoning","Ingested via water","Time: 12:45 PM"] },
    { id: "ev-056-2", title: "Water Station CCTV", type: "cctv", icon: "📹", isKey: true, content: ["12:30 Coach Bennett at mile 20 station","12:35 Physio Maria at medical tent","12:40 Bennett walks to runner's bottle","12:45 runner collapses"] },
    { id: "ev-056-3", title: "Water Bottle", type: "document", icon: "💧", isKey: true, content: ["Cyanide residue","Prints: runner and Bennett","Bennett handled bottle multiple times"] },
    { id: "ev-056-4", title: "Bennett's Emails", type: "document", icon: "📧", isKey: true, content: ["Runner was leaving for rival coach","Bennett's career would end","'I can't let him go.'"] },
    { id: "ev-056-5", title: "Wang's Race Log", type: "document", icon: "📋", isKey: false, content: ["Continuous running","Race chip confirms position"] },
    { id: "ev-056-6", title: "Maria's Medical Log", type: "document", icon: "📋", isKey: false, content: ["At medical tent entire race","Five medics confirm"] },
    { id: "ev-056-7", title: "David's Contract Dispute", type: "document", icon: "📄", isKey: false, content: ["Broken contract","Legal dispute"] },
    { id: "ev-056-8", title: "Stone's Agency Notice", type: "document", icon: "📄", isKey: true, content: ["Runner leaving agency","Agent would lose 15% of future earnings","$3M in commissions gone"] },
    { id: "ev-056-9", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Bennett's hotel room","Purchased 2 days ago","Receipt in his luggage"] },
    { id: "ev-056-10", title: "Bennett's Phone", type: "phone", icon: "📱", isKey: true, content: ["12:20 to burner: 'Ready.'","12:50: 'Done.'"] }
  ],
  timeline: [
    { time: "12:20", event: "Bennett sends cryptic text" },
    { time: "12:30", event: "Bennett at mile 20 station" },
    { time: "12:35", event: "Maria at medical tent" },
    { time: "12:40", event: "Bennett spikes runner's bottle" },
    { time: "12:45", event: "Runner drinks, collapses" },
    { time: "12:50", event: "Bennett texts 'Done'" },
    { time: "13:00", event: "Runner pronounced dead" }
  ],
  solution: { culpritId: "s056a", motive: "Runner was about to leave Bennett's coaching, ending his career. Bennett poisoned his water bottle at mile 20's station during the race.", keyEvidenceIds: ["ev-056-1","ev-056-2","ev-056-3","ev-056-4","ev-056-9"] }
};

export const CASE_057: Case = {
  id: "057", number: 57, title: "The Video Game Studio", difficulty: 3,
  briefing: "The lead developer of a $100M video game is found dead in his office. Poison in his coffee. He was about to delay the launch — costing investors millions.",
  image: "/cases/case-057.jpeg",
  suspects: [
    { id: "s057a", name: "CEO Nakamura", role: "CEO", emoji: "💼", description: "Delay would tank the stock.", statement: "I was in the boardroom preparing for investors." },
    { id: "s057b", name: "Co-Developer Lisa", role: "Co-Developer", emoji: "👩‍💻", description: "He was taking all the credit.", statement: "I was in the dev pit coding." },
    { id: "s057c", name: "Publisher Rep Frank", role: "Publisher Rep", emoji: "🧑‍💼", description: "Delay would break his contract.", statement: "I was at the publisher's office downtown." },
    { id: "s057d", name: "Lead Artist Chen", role: "Lead Artist", emoji: "🎨", description: "He was firing her.", statement: "I was in the art studio." },
    { id: "s057e", name: "Junior Dev Ahmed", role: "Junior Developer", emoji: "👨‍💻", description: "He stole his work.", statement: "I was in the server room." }
  ],
  evidence: [
    { id: "ev-057-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Arsenic poisoning","Ingested via coffee","Time: 09:30 AM"] },
    { id: "ev-057-2", title: "Studio CCTV", type: "cctv", icon: "📹", isKey: true, content: ["09:00 Lisa enters dev pit","09:15 Chen in art studio","09:20 Nakamura on way to office","09:25 Chen enters dev pit briefly"] },
    { id: "ev-057-3", title: "Coffee Cup", type: "document", icon: "☕", isKey: true, content: ["Arsenic residue","Fingerprint: Chen","Prints on cup handle"] },
    { id: "ev-057-4", title: "Termination Letter", type: "document", icon: "📄", isKey: true, content: ["Chen being fired","Effective Monday","Reason: 'creative differences'","She had 8 years at studio"] },
    { id: "ev-057-5", title: "Nakamura's Investor Notes", type: "document", icon: "📄", isKey: false, content: ["Delay would cost $500M in stock value","But he had alibi"] },
    { id: "ev-057-6", title: "Lisa's Code Log", type: "document", icon: "📋", isKey: false, content: ["Continuous coding session","Version control confirms timestamps"] },
    { id: "ev-057-7", title: "Frank's Location", type: "document", icon: "📄", isKey: false, content: ["Publisher's office security confirms","Downtown location"] },
    { id: "ev-057-8", title: "Ahmed's Work Claims", type: "document", icon: "📄", isKey: false, content: ["Victim stole his code","But Ahmed in server room"] },
    { id: "ev-057-9", title: "Arsenic Source", type: "document", icon: "🧪", isKey: true, content: ["Found in art studio supply cabinet","Used for photographic developing","Chen had access"] },
    { id: "ev-057-10", title: "Chen's Emails", type: "document", icon: "📧", isKey: true, content: ["To sister: 'Eight years wasted.'","'I'll make him pay.'"] }
  ],
  timeline: [
    { time: "09:00", event: "Lisa in dev pit" },
    { time: "09:15", event: "Chen in art studio" },
    { time: "09:20", event: "Nakamura en route" },
    { time: "09:25", event: "Chen enters dev pit" },
    { time: "09:28", event: "Chen poisons coffee" },
    { time: "09:30", event: "Victim drinks" },
    { time: "10:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s057d", motive: "Chen was being fired after 8 years at the studio — a decision made by the victim. She poisoned his coffee with arsenic from the art studio supply cabinet.", keyEvidenceIds: ["ev-057-1","ev-057-2","ev-057-3","ev-057-4","ev-057-10"] }
};

export const CASE_058: Case = {
  id: "058", number: 58, title: "The Symphony Orchestra", difficulty: 4,
  briefing: "During a symphony rehearsal, the conductor collapses on the podium. Poison in his baton grip. Five musicians had access to his personal effects.",
  image: "/cases/case-058.jpeg",
  suspects: [
    { id: "s058a", name: "First Violin Sarah", role: "First Violin", emoji: "🎻", description: "He was blocking her solo career.", statement: "I was in my seat, first chair." },
    { id: "s058b", name: "Pianist Dmitri", role: "Pianist", emoji: "🎹", description: "He publicly humiliated him.", statement: "I was at the piano." },
    { id: "s058c", name: "Cellist Anna", role: "Cellist", emoji: "🎼", description: "He had an affair with her husband.", statement: "I was in the cello section." },
    { id: "s058d", name: "Manager Paul", role: "Orchestra Manager", emoji: "💼", description: "He was going to fire him.", statement: "I was in the manager's box." },
    { id: "s058e", name: "Composer James", role: "Composer", emoji: "🎵", description: "He ruined his debut.", statement: "I was watching from the audience." }
  ],
  evidence: [
    { id: "ev-058-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Tetrodotoxin (puffer fish venom)","Absorbed through skin","Time: 15:00"] },
    { id: "ev-058-2", title: "Rehearsal CCTV", type: "cctv", icon: "📹", isKey: true, content: ["14:30 Dmitri at piano","14:40 Anna in cello section","14:45 Paul in manager's box","14:50 Sarah near conductor's podium"] },
    { id: "ev-058-3", title: "Baton", type: "document", icon: "🎼", isKey: true, content: ["TTX on grip","Prints: conductor's and Sarah's","Sarah had handled baton during morning rehearsal"] },
    { id: "ev-058-4", title: "Sarah's Contract", type: "document", icon: "📄", isKey: true, content: ["Conductor blocked her solo album","Recent email denied her request","Was considering leaving orchestra"] },
    { id: "ev-058-5", title: "Dmitri's Performance Review", type: "document", icon: "📄", isKey: false, content: ["Publicly humiliated at last concert","But was at piano continuously"] },
    { id: "ev-058-6", title: "Anna's Marriage Records", type: "document", icon: "📄", isKey: false, content: ["Affair discovered","Divorce pending"] },
    { id: "ev-058-7", title: "Paul's Firing Notice", type: "document", icon: "📄", isKey: false, content: ["Being dismissed","Board decision pending"] },
    { id: "ev-058-8", title: "James's Debut Reviews", type: "document", icon: "📄", isKey: false, content: ["Debut ruined by conductor","Critics were brutal"] },
    { id: "ev-058-9", title: "TTX Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Sarah's instrument case","Imported from Japan","Purchased 1 week ago"] },
    { id: "ev-058-10", title: "Sarah's Emails", type: "document", icon: "📧", isKey: true, content: ["To brother: 'He ruined my career.'","'One way or another, this ends.'"] }
  ],
  timeline: [
    { time: "14:00", event: "Rehearsal begins" },
    { time: "14:30", event: "Dmitri at piano" },
    { time: "14:40", event: "Anna in cello section" },
    { time: "14:50", event: "Sarah near podium" },
    { time: "14:55", event: "Sarah applies TTX to baton" },
    { time: "15:00", event: "Conductor picks up baton" },
    { time: "15:05", event: "Conductor collapses" }
  ],
  solution: { culpritId: "s058a", motive: "Conductor blocked Sarah's solo career. She imported tetrodotoxin and applied it to his baton during a routine rehearsal break.", keyEvidenceIds: ["ev-058-1","ev-058-2","ev-058-3","ev-058-4","ev-058-9"] }
};

export const CASE_059: Case = {
  id: "059", number: 59, title: "The Desert Dig", difficulty: 4,
  briefing: "At an oil excavation site in Saudi Arabia, an American engineer is found dead. Snake venom — but the area has no venomous snakes. Five workers were present.",
  image: "/cases/case-059.jpeg",
  suspects: [
    { id: "s059a", name: "Site Manager Abdullah", role: "Site Manager", emoji: "🧔", description: "Engineer was going to report safety violations.", statement: "I was in my trailer reviewing reports." },
    { id: "s059b", name: "Rig Worker Raj", role: "Rig Worker", emoji: "🔧", description: "Engineer got his brother fired.", statement: "I was on the rig floor." },
    { id: "s059c", name: "Local Guide Khalid", role: "Local Guide", emoji: "🧑", description: "Engineer refused to pay agreed wages.", statement: "I was at the entrance checkpoint." },
    { id: "s059d", name: "Company Rep Johnson", role: "Company Representative", emoji: "💼", description: "Engineer found his kickbacks.", statement: "I was in my office making calls." },
    { id: "s059e", name: "Cook Fatima", role: "Cook", emoji: "👩‍🍳", description: "Engineer had reported her for stealing food.", statement: "I was preparing the evening meal." }
  ],
  evidence: [
    { id: "ev-059-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Death by snake venom","Species: Saw-scaled viper","Not native to area","Injection via small cut"] },
    { id: "ev-059-2", title: "Site CCTV", type: "cctv", icon: "📹", isKey: true, content: ["16:00 Abdullah in trailer","16:15 Raj on rig floor","16:30 Khalid at checkpoint","16:35 Abdullah walks toward engineer's cabin"] },
    { id: "ev-059-3", title: "Venom Vial", type: "document", icon: "🧪", isKey: true, content: ["Found buried near site","Saw-scaled viper venom","Fingerprint: Abdullah"] },
    { id: "ev-059-4", title: "Safety Report", type: "document", icon: "📄", isKey: true, content: ["Engineer's 20-page report","Multiple serious violations","Would shut site down","Abdullah would be fired"] },
    { id: "ev-059-5", title: "Raj's Grievance", type: "document", icon: "📄", isKey: false, content: ["Brother fired by engineer","But Raj on rig floor continuously"] },
    { id: "ev-059-6", title: "Khalid's Payment Log", type: "document", icon: "📄", isKey: false, content: ["Underpaid wages","But at checkpoint continuously"] },
    { id: "ev-059-7", title: "Johnson's Kickback Records", type: "document", icon: "💳", isKey: false, content: ["$200K in kickbacks","Engineer discovered"] },
    { id: "ev-059-8", title: "Fatima's Kitchen Log", type: "witness", icon: "📝", isKey: false, content: ["Continuous meal prep","Two helpers confirm"] },
    { id: "ev-059-9", title: "Abdullah's Emails", type: "document", icon: "📧", isKey: true, content: ["To corporate: 'The engineer is a problem.'","'I'll handle it locally.'"] },
    { id: "ev-059-10", title: "Venom Purchase", type: "document", icon: "🧾", isKey: true, content: ["Purchased from black market in Riyadh","Receipt in Abdullah's safe","3 days before murder"] }
  ],
  timeline: [
    { time: "16:00", event: "Abdullah in trailer" },
    { time: "16:15", event: "Raj on rig floor" },
    { time: "16:30", event: "Khalid at checkpoint" },
    { time: "16:35", event: "Abdullah to engineer's cabin" },
    { time: "16:45", event: "Engineer injected with venom" },
    { time: "17:00", event: "Abdullah returns to trailer" },
    { time: "18:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s059a", motive: "Engineer's safety report would have shut down the site and ended Abdullah's career. He purchased snake venom on the black market and injected the engineer during a private visit.", keyEvidenceIds: ["ev-059-1","ev-059-2","ev-059-3","ev-059-4","ev-059-9"] }
};

export const CASE_060: Case = {
  id: "060", number: 60, title: "The Ice Hotel", difficulty: 4,
  briefing: "At a Swedish ice hotel, a guest is found dead in his ice room. Frozen — but the temperature was normal until morning. Five guests were staying nearby.",
  image: "/cases/case-060.jpeg",
  suspects: [
    { id: "s060a", name: "Businessman Larsson", role: "Businessman", emoji: "💼", description: "Victim was going to expose him.", statement: "I was in the sauna." },
    { id: "s060b", name: "Photographer Anna", role: "Photographer", emoji: "📷", description: "Victim stole her work.", statement: "I was shooting northern lights." },
    { id: "s060c", name: "Ex-Girlfriend Eva", role: "Ex-Girlfriend", emoji: "👩", description: "Victim was blackmailing her.", statement: "I was in my own ice room." },
    { id: "s060d", name: "Hotel Owner Anders", role: "Hotel Owner", emoji: "🧔", description: "Victim was suing the hotel.", statement: "I was at the front desk." },
    { id: "s060e", name: "Guide Nils", role: "Guide", emoji: "🧑‍🏔️", description: "Victim got his brother fired.", statement: "I was leading a snowmobile tour." }
  ],
  evidence: [
    { id: "ev-060-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Cause: hypothermia","But body temp not consistent with ambient","Sedated before death","Time: 02:00-03:00"] },
    { id: "ev-060-2", title: "Hotel CCTV", type: "cctv", icon: "📹", isKey: true, content: ["01:30 Larsson exits sauna","01:45 Anna returns from photos","02:00 Eva near victim's room","02:10 Anders at front desk"] },
    { id: "ev-060-3", title: "Sedative Bottle", type: "document", icon: "💊", isKey: true, content: ["Found in trash","Traces in victim's system","Fingerprint: Eva"] },
    { id: "ev-060-4", title: "Victim's Blackmail Evidence", type: "document", icon: "📄", isKey: true, content: ["Photos of Eva with married politician","Demanding €500K","Eva faced ruin"] },
    { id: "ev-060-5", title: "Larsson's Fraud Records", type: "document", icon: "📄", isKey: false, content: ["Victim was going to expose","But sauna logs confirm presence"] },
    { id: "ev-060-6", title: "Anna's Photo Log", type: "document", icon: "📷", isKey: false, content: ["Timestamps 01:30-02:30","Continuous aurora photos"] },
    { id: "ev-060-7", title: "Anders's Front Desk Log", type: "document", icon: "📋", isKey: false, content: ["Continuous desk presence","Two guests confirm"] },
    { id: "ev-060-8", title: "Nils's Tour Log", type: "document", icon: "📋", isKey: false, content: ["Snowmobile tour 01:00-03:00","Six guests confirm"] },
    { id: "ev-060-9", title: "Room Temperature Log", type: "document", icon: "🌡️", isKey: true, content: ["Normal until 01:50","Dropped to -25°C at 02:00","Cooling controlled from panel outside victim's room"] },
    { id: "ev-060-10", title: "Eva's Phone", type: "phone", icon: "📱", isKey: true, content: ["01:50 to accomplice: 'He's out.'","02:30: 'Done.'"] }
  ],
  timeline: [
    { time: "01:30", event: "Larsson exits sauna" },
    { time: "01:45", event: "Anna returns from photos" },
    { time: "01:50", event: "Eva drugs victim" },
    { time: "02:00", event: "Eva lowers room temperature" },
    { time: "02:00-03:00", event: "Victim freezes to death" },
    { time: "02:10", event: "Anders at desk" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s060c", motive: "Victim was blackmailing Eva with photos of her affair with a married politician, demanding €500K. She drugged him and lowered his room temperature to freeze him, staging it as an accident.", keyEvidenceIds: ["ev-060-1","ev-060-2","ev-060-3","ev-060-4","ev-060-9","ev-060-10"] }
};

export const CASE_061: Case = {
  id: "061", number: 61, title: "The Opera House", difficulty: 3,
  briefing: "During a performance of Carmen, the lead soprano is found dead in her dressing room. Poison in her throat spray. Five people were backstage.",
  image: "/cases/case-061.jpeg",
  suspects: [
    { id: "s061a", name: "Understudy Maria", role: "Understudy", emoji: "🎭", description: "Would take her role.", statement: "I was in my own dressing room." },
    { id: "s061b", name: "Director Rossi", role: "Director", emoji: "🎬", description: "Soprano was publicly criticizing him.", statement: "I was in the wings watching the performance." },
    { id: "s061c", name: "Tenor Marco", role: "Tenor", emoji: "🎤", description: "She rejected his advances.", statement: "I was on stage in the second act." },
    { id: "s061d", name: "Wardrobe Head Elena", role: "Wardrobe Head", emoji: "👗", description: "She got her sister fired.", statement: "I was in the costume room." },
    { id: "s061e", name: "Agent Sterling", role: "Agent", emoji: "💼", description: "She was leaving his agency.", statement: "I was at the front of house greeting VIPs." }
  ],
  evidence: [
    { id: "ev-061-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Cyanide poisoning","Absorbed through throat spray","Time: 21:00 (intermission)"] },
    { id: "ev-061-2", title: "Backstage CCTV", type: "cctv", icon: "📹", isKey: true, content: ["20:45 Marco exits stage","20:50 Maria walks near dressing room","20:55 Elena passes with costumes","21:00 soprano uses spray"] },
    { id: "ev-061-3", title: "Throat Spray", type: "document", icon: "🧴", isKey: true, content: ["Cyanide residue","Fingerprint: Maria","Only Maria's and soprano's prints"] },
    { id: "ev-061-4", title: "Maria's Contract", type: "document", icon: "📄", isKey: true, content: ["Understudy for 4 years","Never given lead role","Would take over if soprano ill"] },
    { id: "ev-061-5", title: "Rossi's Notes", type: "document", icon: "📝", isKey: false, content: ["Soprano critical of his direction","But Rossi in wings with witnesses"] },
    { id: "ev-061-6", title: "Marco's Stage Log", type: "document", icon: "📋", isKey: false, content: ["On stage during Act 2","Camera confirms presence"] },
    { id: "ev-061-7", title: "Elena's Costume Log", type: "document", icon: "📋", isKey: false, content: ["Continuous costume changes","Three assistants confirm"] },
    { id: "ev-061-8", title: "Sterling's Front House Log", type: "document", icon: "📋", isKey: false, content: ["Greeting VIPs throughout","Multiple witnesses"] },
    { id: "ev-061-9", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Maria's makeup kit","Used for theatrical effects","Same batch"] },
    { id: "ev-061-10", title: "Maria's Diary", type: "document", icon: "📔", isKey: true, content: ["'Four years. I deserve this.'","'She won't be singing tomorrow.'","Written 2 days before"] }
  ],
  timeline: [
    { time: "20:45", event: "Marco exits stage" },
    { time: "20:50", event: "Maria near dressing room" },
    { time: "20:55", event: "Elena with costumes" },
    { time: "21:00", event: "Soprano uses spray, collapses" },
    { time: "21:05", event: "Body discovered" }
  ],
  solution: { culpritId: "s061a", motive: "Maria spent 4 years as understudy, never getting the lead. She poisoned the soprano's throat spray during intermission.", keyEvidenceIds: ["ev-061-1","ev-061-2","ev-061-3","ev-061-4","ev-061-10"] }
};

export const CASE_062: Case = {
  id: "062", number: 62, title: "The Silicon Valley Hackathon", difficulty: 3,
  briefing: "During a 48-hour hackathon, a team leader is found dead in the server room. Electrocution — deliberate. Five teammates were in the building.",
  image: "/cases/case-062.jpeg",
  suspects: [
    { id: "s062a", name: "Dev Priya", role: "Developer", emoji: "👩‍💻", description: "He was stealing her code.", statement: "I was at my workstation coding." },
    { id: "s062b", name: "Designer Marco", role: "Designer", emoji: "🎨", description: "He was taking all the credit.", statement: "I was in the design corner." },
    { id: "s062c", name: "Rival Lead Sarah", role: "Rival Team Lead", emoji: "👩‍💼", description: "His team was going to win.", statement: "I was with my own team on the other side." },
    { id: "s062d", name: "Sponsor Rep Chen", role: "Sponsor Rep", emoji: "💼", description: "His product was going to be exposed.", statement: "I was in the VIP lounge." },
    { id: "s062e", name: "Teammate Jake", role: "Teammate", emoji: "🧑‍💻", description: "He was going to fire him.", statement: "I was in the break room getting coffee." }
  ],
  evidence: [
    { id: "ev-062-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Electrocution","Time: 03:00 AM","Tampered server wiring","No defensive wounds"] },
    { id: "ev-062-2", title: "Server Room CCTV", type: "cctv", icon: "📹", isKey: true, content: ["02:30 Jake in break room","02:45 Sarah on other side","02:50 Priya walks toward server room","03:00 victim enters"] },
    { id: "ev-062-3", title: "Server Wiring", type: "document", icon: "🔌", isKey: true, content: ["Live wire exposed","Deliberately tampered","Priya's fingerprints on wire cutters"] },
    { id: "ev-062-4", title: "Victim's Emails", type: "document", icon: "📧", isKey: true, content: ["Claiming Priya's code as his own","Priya discovered 2 days before","Was going to sue"] },
    { id: "ev-062-5", title: "Marco's Design Files", type: "document", icon: "📄", isKey: false, content: ["Continuous design work","Version history confirms"] },
    { id: "ev-062-6", title: "Sarah's Team Log", type: "document", icon: "📋", isKey: false, content: ["Continuous presence on other side","Five teammates confirm"] },
    { id: "ev-062-7", title: "Chen's Sponsor Log", type: "document", icon: "📋", isKey: false, content: ["In VIP lounge continuously","Two witnesses"] },
    { id: "ev-062-8", title: "Jake's Break Room Log", type: "document", icon: "📋", isKey: false, content: ["Continuous coffee machine activity","Automatic log confirms"] },
    { id: "ev-062-9", title: "Wire Cutters", type: "document", icon: "✂️", isKey: true, content: ["Found in Priya's bag","Metal shavings match server wire","Recent use"] },
    { id: "ev-062-10", title: "Priya's Text", type: "phone", icon: "📱", isKey: true, content: ["02:40 to friend: 'He'll never steal again.'"] }
  ],
  timeline: [
    { time: "02:30", event: "Jake in break room" },
    { time: "02:45", event: "Sarah on other side" },
    { time: "02:50", event: "Priya walks to server room" },
    { time: "02:55", event: "Priya tampers with wiring" },
    { time: "03:00", event: "Victim enters, electrocuted" },
    { time: "03:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s062a", motive: "Victim stole Priya's entire codebase and claimed it as his own. Facing losing everything, she tampered with server wiring to kill him.", keyEvidenceIds: ["ev-062-1","ev-062-2","ev-062-3","ev-062-4","ev-062-9"] }
};

export const CASE_063: Case = {
  id: "063", number: 63, title: "The Lighthouse", difficulty: 4,
  briefing: "A lighthouse keeper on a remote Scottish island is found dead at the top of the tower. Blunt force trauma. Only four people are on the island — all stuck due to storm.",
  image: "/cases/case-063.jpeg",
  suspects: [
    { id: "s063a", name: "Assistant Keeper Liam", role: "Assistant Keeper", emoji: "👨‍🔧", description: "Was being replaced.", statement: "I was in the kitchen making tea." },
    { id: "s063b", name: "Researcher Dr. Ross", role: "Researcher", emoji: "👩‍🔬", description: "Keeper blocked her access to research site.", statement: "I was in my room taking notes." },
    { id: "s063c", name: "Boat Captain Ian", role: "Boat Captain", emoji: "⛵", description: "Keeper reported him for smuggling.", statement: "I was securing my boat before the storm." },
    { id: "s063d", name: "Journalist Emma", role: "Journalist", emoji: "📰", description: "Keeper refused an interview.", statement: "I was in the common room writing." }
  ],
  evidence: [
    { id: "ev-063-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Blunt force trauma to back of head","Time: 20:30","Weapon: brass lantern"] },
    { id: "ev-063-2", title: "Lighthouse CCTV", type: "cctv", icon: "📹", isKey: true, content: ["20:00 Liam in kitchen","20:15 Ross in her room","20:20 Ian walks toward lighthouse","20:25 Ian enters tower"] },
    { id: "ev-063-3", title: "Brass Lantern", type: "document", icon: "🏮", isKey: true, content: ["Keeper's blood on it","Ian's fingerprints","Found at scene"] },
    { id: "ev-063-4", title: "Smuggling Report", type: "document", icon: "📄", isKey: true, content: ["Keeper reported Ian to coast guard","Evidence of 3 illegal trips","Ian facing prison"] },
    { id: "ev-063-5", title: "Liam's Kitchen Log", type: "document", icon: "📋", isKey: false, content: ["Continuous tea prep","Tea kettle whistling heard by Ross"] },
    { id: "ev-063-6", title: "Ross's Research Notes", type: "document", icon: "📝", isKey: false, content: ["Continuous note-taking","Timestamped 19:00-21:00"] },
    { id: "ev-063-7", title: "Emma's Article Draft", type: "document", icon: "📄", isKey: false, content: ["Continuous writing","Version history confirms"] },
    { id: "ev-063-8", title: "Ian's Boat", type: "document", icon: "⛵", isKey: true, content: ["Salt water on boots (fresh)","Smuggling cargo partially hidden","Compass pointing east"] },
    { id: "ev-063-9", title: "Storm Timing", type: "document", icon: "⛈️", isKey: false, content: ["Storm started 20:00","Winds prevented escape by boat"] },
    { id: "ev-063-10", title: "Ian's Text", type: "phone", icon: "📱", isKey: true, content: ["19:45 to associate: 'He won't talk again.'"] }
  ],
  timeline: [
    { time: "20:00", event: "Liam in kitchen" },
    { time: "20:15", event: "Ross in her room" },
    { time: "20:20", event: "Ian walks to lighthouse" },
    { time: "20:30", event: "Keeper killed with lantern" },
    { time: "20:45", event: "Ian returns to boat" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s063c", motive: "Keeper reported Ian's smuggling operation to the coast guard. Facing prison, Ian killed him during the storm and staged it as an accident.", keyEvidenceIds: ["ev-063-1","ev-063-2","ev-063-3","ev-063-4","ev-063-10"] }
};

export const CASE_064: Case = {
  id: "064", number: 64, title: "The Space Station Commander", difficulty: 5,
  briefing: "On a Mars simulation mission in the Utah desert, the commander dies from carbon dioxide poisoning. The CO2 scrubber was deliberately disabled. Five crew members were inside.",
  image: "/cases/case-064.jpeg",
  suspects: [
    { id: "s064a", name: "Engineer Carlos", role: "Engineer", emoji: "🔧", description: "Commander was going to fail him.", statement: "I was in the maintenance bay." },
    { id: "s064b", name: "Doctor Yuki", role: "Mission Doctor", emoji: "👩‍⚕️", description: "Commander was blocking her research.", statement: "I was in the medical bay." },
    { id: "s064c", name: "Scientist Ahmed", role: "Scientist", emoji: "🧑‍🔬", description: "Commander stole his discovery.", statement: "I was in the lab running tests." },
    { id: "s064d", name: "Pilot Rachel", role: "Pilot", emoji: "👩‍✈️", description: "Commander filed a harassment complaint.", statement: "I was at the control station." },
    { id: "s064e", name: "Journalist Tom", role: "Journalist", emoji: "📷", description: "Commander cut his access.", statement: "I was in my quarters." }
  ],
  evidence: [
    { id: "ev-064-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["CO2 poisoning","Time: 04:00 AM","Scrubber disabled 3 hours earlier"] },
    { id: "ev-064-2", title: "Habitat CCTV", type: "cctv", icon: "📹", isKey: true, content: ["01:00 Carlos in maintenance bay","01:15 Yuki in medical bay","01:20 Carlos walks toward scrubber panel","01:25 scrubber disabled"] },
    { id: "ev-064-3", title: "Scrubber Panel", type: "document", icon: "⚙️", isKey: true, content: ["Manually disabled","Carlos's access code used","Carlos's fingerprints on panel"] },
    { id: "ev-064-4", title: "Commander's Report", type: "document", icon: "📄", isKey: true, content: ["Prepared to fail Carlos's evaluation","Would end his career","Filed 2 days before"] },
    { id: "ev-064-5", title: "Yuki's Research Notes", type: "document", icon: "📝", isKey: false, content: ["Commander blocked her access","But Yuki in medical bay"] },
    { id: "ev-064-6", title: "Ahmed's Lab Log", type: "document", icon: "📋", isKey: false, content: ["Continuous lab work","Version log confirms"] },
    { id: "ev-064-7", title: "Rachel's Control Log", type: "document", icon: "📋", isKey: false, content: ["Continuous control presence","Audio recording"] },
    { id: "ev-064-8", title: "Tom's Diary", type: "document", icon: "📔", isKey: false, content: ["Access cut recently","No violent tone"] },
    { id: "ev-064-9", title: "Carlos's Emails", type: "document", icon: "📧", isKey: true, content: ["To brother: 'He's ending my career.'","'He won't leave this simulation.'"] },
    { id: "ev-064-10", title: "Maintenance Log", type: "document", icon: "📋", isKey: true, content: ["Carlos signed in 00:45","Signed out at 04:30","Extended session no reason given"] }
  ],
  timeline: [
    { time: "00:45", event: "Carlos signs into maintenance" },
    { time: "01:00", event: "Yuki in medical bay" },
    { time: "01:20", event: "Carlos at scrubber panel" },
    { time: "01:25", event: "Scrubber disabled" },
    { time: "04:00", event: "Commander dies" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s064a", motive: "Commander's pending evaluation would end Carlos's career. He disabled the CO2 scrubber during a maintenance session, timing it to kill the commander overnight.", keyEvidenceIds: ["ev-064-1","ev-064-2","ev-064-3","ev-064-4","ev-064-9"] }
};

export const CASE_065: Case = {
  id: "065", number: 65, title: "The Yoga Retreat", difficulty: 3,
  briefing: "At a luxury yoga retreat in Bali, a wellness influencer is found dead during morning meditation. Poison in her herbal tea. Five guests were up early.",
  image: "/cases/case-065.jpeg",
  suspects: [
    { id: "s065a", name: "Rival Influencer Chloe", role: "Rival Influencer", emoji: "👩‍🦰", description: "Lost a major brand deal to her.", statement: "I was doing my own meditation." },
    { id: "s065b", name: "Ex-Boyfriend Jake", role: "Ex-Boyfriend", emoji: "🧑", description: "She was going to expose him.", statement: "I was doing yoga on the deck." },
    { id: "s065c", name: "Assistant Sofia", role: "Personal Assistant", emoji: "👩‍💼", description: "She was abusive to her.", statement: "I was preparing breakfast." },
    { id: "s065d", name: "Yoga Teacher Ravi", role: "Yoga Teacher", emoji: "🧘", description: "She accused him of harassment.", statement: "I was leading the class." },
    { id: "s065e", name: "Guest Marcus", role: "Guest", emoji: "🧔", description: "She was blackmailing him.", statement: "I was in my villa." }
  ],
  evidence: [
    { id: "ev-065-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Aconite poisoning","Ingested via herbal tea","Time: 06:30"] },
    { id: "ev-065-2", title: "Retreat CCTV", type: "cctv", icon: "📹", isKey: true, content: ["06:00 Chloe leaves her villa","06:15 Ravi leads class","06:20 Jake on deck","06:25 Chloe returns to villa"] },
    { id: "ev-065-3", title: "Tea Cup", type: "document", icon: "🍵", isKey: true, content: ["Aconite residue","Partial print — Chloe","Only Chloe's and victim's prints"] },
    { id: "ev-065-4", title: "Brand Deal", type: "document", icon: "📄", isKey: true, content: ["Chloe lost $500K brand deal to victim","Was financially desperate","Recent social media feud"] },
    { id: "ev-065-5", title: "Jake's Evidence", type: "document", icon: "📄", isKey: false, content: ["Victim was going to expose his affairs","But Jake on deck continuously"] },
    { id: "ev-065-6", title: "Sofia's Breakfast Log", type: "document", icon: "📋", isKey: false, content: ["Continuous meal prep","Kitchen staff confirm"] },
    { id: "ev-065-7", title: "Ravi's Class Log", type: "document", icon: "📋", isKey: false, content: ["Leading meditation continuously","Video recording"] },
    { id: "ev-065-8", title: "Marcus's Blackmail File", type: "document", icon: "📄", isKey: false, content: ["Victim had photos of his affair","But Marcus in villa"] },
    { id: "ev-065-9", title: "Aconite Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Chloe's toiletries bag","Purchased online as 'herbal remedy'","Delivery confirmation"] },
    { id: "ev-065-10", title: "Chloe's Messages", type: "phone", icon: "📱", isKey: true, content: ["To friend: 'I'll get that deal back.'","'One way or another.'"] }
  ],
  timeline: [
    { time: "06:00", event: "Chloe leaves villa" },
    { time: "06:15", event: "Ravi leads class" },
    { time: "06:20", event: "Chloe at tea station" },
    { time: "06:25", event: "Chloe returns to villa" },
    { time: "06:30", event: "Victim drinks poisoned tea" },
    { time: "06:45", event: "Body discovered" }
  ],
  solution: { culpritId: "s065a", motive: "Chloe lost a $500K brand deal to the victim and was financially desperate. She poisoned her tea with aconite during a brief moment at the tea station.", keyEvidenceIds: ["ev-065-1","ev-065-2","ev-065-3","ev-065-4","ev-065-9"] }
};

export const CASE_066: Case = {
  id: "066", number: 66, title: "The Fire Station", difficulty: 3,
  briefing: "A firefighter is found dead in the fire station during a night shift. Smoke inhalation — but there was no fire. Five firefighters were on duty.",
  image: "/cases/case-066.jpeg",
  suspects: [
    { id: "s066a", name: "Captain Harris", role: "Captain", emoji: "👨‍🚒", description: "Victim was going to report his drinking.", statement: "I was in my office." },
    { id: "s066b", name: "Firefighter Russo", role: "Firefighter", emoji: "🧑‍🚒", description: "Victim was dating his ex-wife.", statement: "I was in the bunk room." },
    { id: "s066c", name: "Recruit Chen", role: "Recruit", emoji: "👨‍🚒", description: "Victim was hazing him.", statement: "I was cleaning the trucks." },
    { id: "s066d", name: "EMT Sarah", role: "EMT", emoji: "👩‍⚕️", description: "Victim filed a complaint against her.", statement: "I was restocking the ambulance." },
    { id: "s066e", name: "Dispatcher Mike", role: "Dispatcher", emoji: "🎧", description: "Victim exposed his affair.", statement: "I was at the dispatch desk." }
  ],
  evidence: [
    { id: "ev-066-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Smoke inhalation","Time: 03:00 AM","No fire at station","Source: fire extinguisher"] },
    { id: "ev-066-2", title: "Station CCTV", type: "cctv", icon: "📹", isKey: true, content: ["02:30 Chen cleaning trucks","02:45 Russo in bunk room","02:50 Chen walks toward victim's bunk","03:00 victim found"] },
    { id: "ev-066-3", title: "Fire Extinguisher", type: "document", icon: "🧯", isKey: true, content: ["Discharged in victim's bunk","Fingerprint: Chen","Empty canister"] },
    { id: "ev-066-4", title: "Hazing Documentation", type: "document", icon: "📄", isKey: true, content: ["Victim hazing Chen for months","Documented incidents","Chen filed formal complaint"] },
    { id: "ev-066-5", title: "Harris's Office Log", type: "document", icon: "📋", isKey: false, content: ["Continuous office presence","Video call recording"] },
    { id: "ev-066-6", title: "Russo's Bunk Log", type: "document", icon: "📋", isKey: false, content: ["Continuous bunk presence","CCTV confirms"] },
    { id: "ev-066-7", title: "Sarah's Ambulance Log", type: "document", icon: "📋", isKey: false, content: ["Restocking continuously","Inventory timestamps"] },
    { id: "ev-066-8", title: "Mike's Dispatch Log", type: "document", icon: "📋", isKey: false, content: ["Continuous dispatch presence","Call recordings"] },
    { id: "ev-066-9", title: "Chen's Diary", type: "document", icon: "📔", isKey: true, content: ["'He won't stop.'","'If nothing changes, I'll make it stop.'"] },
    { id: "ev-066-10", title: "Chen's Phone", type: "phone", icon: "📱", isKey: true, content: ["02:45 to girlfriend: 'It's happening tonight.'"] }
  ],
  timeline: [
    { time: "02:30", event: "Chen cleaning trucks" },
    { time: "02:45", event: "Russo in bunk room" },
    { time: "02:50", event: "Chen walks to victim's bunk" },
    { time: "02:55", event: "Chen discharges extinguisher" },
    { time: "03:00", event: "Victim dies" },
    { time: "04:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s066c", motive: "Victim had been hazing Chen for months. When the complaint went nowhere, Chen used a fire extinguisher to suffocate the victim in his sleep.", keyEvidenceIds: ["ev-066-1","ev-066-2","ev-066-3","ev-066-4","ev-066-10"] }
};

export const CASE_067: Case = {
  id: "067", number: 67, title: "The Vatican Library", difficulty: 5,
  briefing: "A Vatican archivist is found dead in the restricted section. Poison — absorbed through his gloves. He was about to publish an explosive historical document. Five people had access.",
  image: "/cases/case-067.jpeg",
  suspects: [
    { id: "s067a", name: "Cardinal Rossi", role: "Cardinal", emoji: "⛪", description: "Document would embarrass the Church.", statement: "I was at evening mass." },
    { id: "s067b", name: "Sister Maria", role: "Fellow Archivist", emoji: "👩‍🦳", description: "He was taking all the credit.", statement: "I was cataloging in another room." },
    { id: "s067c", name: "Professor Klein", role: "Historian", emoji: "👨‍🏫", description: "He was blocking his research.", statement: "I was in the reading room." },
    { id: "s067d", name: "Security Chief Moretti", role: "Security Chief", emoji: "💪", description: "Archivist discovered his theft.", statement: "I was monitoring cameras." },
    { id: "s067e", name: "Professor Lee", role: "Translator", emoji: "👩‍🏫", description: "He was going to publish her translation as his own.", statement: "I was in the translation office." }
  ],
  evidence: [
    { id: "ev-067-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Ricin poisoning","Absorbed through gloves","Time: 14:00"] },
    { id: "ev-067-2", title: "Library CCTV", type: "cctv", icon: "📹", isKey: true, content: ["13:30 Rossi at mass","13:45 Lee in translation office","13:50 Moretti at security desk","13:55 Sister Maria enters restricted"] },
    { id: "ev-067-3", title: "Gloves", type: "document", icon: "🧤", isKey: true, content: ["Ricin residue","Sister Maria's prints on inside","Victim's prints on outside"] },
    { id: "ev-067-4", title: "Document Draft", type: "document", icon: "📄", isKey: true, content: ["14th-century letters refuting papal authority","Victim about to publish","Sister Maria would lose 20 years of work"] },
    { id: "ev-067-5", title: "Rossi's Schedule", type: "document", icon: "📄", isKey: false, content: ["Evening mass attendance confirmed","Multiple witnesses"] },
    { id: "ev-067-6", title: "Klein's Reading Room Log", type: "document", icon: "📋", isKey: false, content: ["Continuous reading","Timestamped"] },
    { id: "ev-067-7", title: "Moretti's Camera Log", type: "document", icon: "📋", isKey: false, content: ["Continuous monitoring","Video shows him at desk"] },
    { id: "ev-067-8", title: "Lee's Translation Files", type: "document", icon: "📄", isKey: false, content: ["Continuous work documented","Version history"] },
    { id: "ev-067-9", title: "Ricin Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Sister Maria's work station","From her herb garden supplies","Recent preparation"] },
    { id: "ev-067-10", title: "Sister Maria's Diary", type: "document", icon: "📔", isKey: true, content: ["'20 years of work, and he takes it all.'","'This cannot happen.'"] }
  ],
  timeline: [
    { time: "13:30", event: "Rossi at mass" },
    { time: "13:45", event: "Lee in translation office" },
    { time: "13:50", event: "Moretti at desk" },
    { time: "13:55", event: "Sister Maria enters restricted section" },
    { time: "14:00", event: "Victim poisoned through gloves" },
    { time: "16:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s067b", motive: "Victim was about to publish Sister Maria's 20-year translation work as his own, alongside a document that would destroy her career. She poisoned his gloves with ricin.", keyEvidenceIds: ["ev-067-1","ev-067-2","ev-067-3","ev-067-4","ev-067-10"] }
};

export const CASE_068: Case = {
  id: "068", number: 68, title: "The Cooking School", difficulty: 3,
  briefing: "At a famous cooking school in Paris, the head chef is found dead in the walk-in freezer. Hypothermia — but the freezer was locked from the outside. Five students were at the school.",
  image: "/cases/case-068.jpeg",
  suspects: [
    { id: "s068a", name: "Student Marie", role: "Student", emoji: "👩‍🍳", description: "Chef was failing her.", statement: "I was in the practice kitchen." },
    { id: "s068b", name: "Instructor Pierre", role: "Instructor", emoji: "👨‍🍳", description: "Chef was replacing him.", statement: "I was teaching pastry class." },
    { id: "s068c", name: "Sous-Chef Anne", role: "Sous-Chef", emoji: "👩‍🍳", description: "Chef stole her recipes.", statement: "I was prepping ingredients." },
    { id: "s068d", name: "Investor Mr. Belanger", role: "Investor", emoji: "💼", description: "Chef was going to expose him.", statement: "I was in the front office." },
    { id: "s068e", name: "Student Kevin", role: "Student", emoji: "🧑‍🍳", description: "Chef destroyed his career prospects.", statement: "I was in the locker room." }
  ],
  evidence: [
    { id: "ev-068-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Hypothermia","Time: 23:30","Locked inside freezer","No defensive wounds"] },
    { id: "ev-068-2", title: "Kitchen CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:45 Marie in practice kitchen","23:00 Anne prepping","23:10 Pierre in pastry class","23:15 Kevin near freezer area"] },
    { id: "ev-068-3", title: "Freezer Lock", type: "document", icon: "🔒", isKey: true, content: ["Exterior lock engaged","Kevin's fingerprints","Only Kevin had access to that key"] },
    { id: "ev-068-4", title: "Chef's Records", type: "document", icon: "📄", isKey: true, content: ["Chef destroyed Kevin's career prospects","Sent blacklist letter to 5 restaurants","Kevin had no job offers"] },
    { id: "ev-068-5", title: "Marie's Practice Log", type: "document", icon: "📋", isKey: false, content: ["Continuous practice work","Camera confirms"] },
    { id: "ev-068-6", title: "Anne's Prep Log", type: "document", icon: "📋", isKey: false, content: ["Continuous food prep","Two assistants confirm"] },
    { id: "ev-068-7", title: "Pierre's Class Log", type: "document", icon: "📋", isKey: false, content: ["Teaching continuously","Twelve students present"] },
    { id: "ev-068-8", title: "Belanger's Office Log", type: "document", icon: "📋", isKey: false, content: ["Continuous office work","Secretary confirms"] },
    { id: "ev-068-9", title: "Kevin's Emails", type: "document", icon: "📧", isKey: true, content: ["To sister: 'He's ruined me.'","'I have nothing left.'"] },
    { id: "ev-068-10", title: "Kevin's Phone", type: "phone", icon: "📱", isKey: true, content: ["23:10 to girlfriend: 'It's done.'","23:15 deleted text 'Freezer.'"] }
  ],
  timeline: [
    { time: "22:45", event: "Marie in practice kitchen" },
    { time: "23:00", event: "Anne prepping" },
    { time: "23:10", event: "Pierre in pastry class" },
    { time: "23:15", event: "Kevin locks freezer" },
    { time: "23:30", event: "Chef dies of hypothermia" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s068e", motive: "Chef blacklisted Kevin across the culinary world, ending his career before it began. Kevin lured him into the freezer and locked him in.", keyEvidenceIds: ["ev-068-1","ev-068-2","ev-068-3","ev-068-4","ev-068-10"] }
};

export const CASE_069: Case = {
  id: "069", number: 69, title: "The Arctic Research Station", difficulty: 4,
  briefing: "At an Arctic research station, a scientist is found dead in the snow. Exposure — but there was a blizzard and she was an experienced researcher. Five scientists were at the base.",
  image: "/cases/case-069.jpeg",
  suspects: [
    { id: "s069a", name: "Dr. Larsen", role: "Senior Researcher", emoji: "👨‍🔬", description: "She was publishing a paper that would ruin him.", statement: "I was in the lab analyzing samples." },
    { id: "s069b", name: "Dr. Petrov", role: "Researcher", emoji: "🧑‍🔬", description: "She exposed his fake data.", statement: "I was in my quarters sleeping." },
    { id: "s069c", name: "Tech Sam", role: "Lab Technician", emoji: "🔧", description: "She reported him for harassment.", statement: "I was fixing the heating system." },
    { id: "s069d", name: "Cook Elena", role: "Cook", emoji: "👩‍🍳", description: "She caught her stealing supplies.", statement: "I was in the kitchen preparing meals." },
    { id: "s069e", name: "Base Leader Johnson", role: "Base Leader", emoji: "👨‍✈️", description: "She was going to report his incompetence.", statement: "I was in the command room." }
  ],
  evidence: [
    { id: "ev-069-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Hypothermia","Time: 02:00 AM","Signs of struggle","Bruising on arms"] },
    { id: "ev-069-2", title: "Base CCTV", type: "cctv", icon: "📹", isKey: true, content: ["01:30 Larsen exits lab","01:45 Petrov walks past victim's quarters","01:50 Larsen toward exterior door","02:00 exterior door opened"] },
    { id: "ev-069-3", title: "Exterior Door Log", type: "document", icon: "🔐", isKey: true, content: ["Opened at 01:50","Larsen's access code used","No log entry — override"] },
    { id: "ev-069-4", title: "Victim's Paper", type: "document", icon: "📄", isKey: true, content: ["Would expose Larsen's 10-year fraud","Scheduled for publication","Larsen would lose everything"] },
    { id: "ev-069-5", title: "Petrov's Alibi", type: "witness", icon: "📝", isKey: false, content: ["Two researchers confirm sleeping","Continuous presence"] },
    { id: "ev-069-6", title: "Sam's Heating Log", type: "document", icon: "📋", isKey: false, content: ["Continuous maintenance","Automated system logs"] },
    { id: "ev-069-7", title: "Elena's Kitchen Log", type: "document", icon: "📋", isKey: false, content: ["Continuous meal prep","Timestamped 23:00-03:00"] },
    { id: "ev-069-8", title: "Johnson's Command Log", type: "document", icon: "📋", isKey: false, content: ["Continuous monitoring","Two operators confirm"] },
    { id: "ev-069-9", title: "Larsen's Boots", type: "document", icon: "👢", isKey: true, content: ["Snow melt on boots","Fresh snow from outside","She had been indoors all night"] },
    { id: "ev-069-10", title: "Larsen's Emails", type: "document", icon: "📧", isKey: true, content: ["To dean: 'She must be stopped.'","'Before the paper publishes.'"] }
  ],
  timeline: [
    { time: "01:30", event: "Larsen exits lab" },
    { time: "01:45", event: "Petrov past victim's quarters" },
    { time: "01:50", event: "Exterior door opened" },
    { time: "02:00", event: "Victim forced outside" },
    { time: "02:30", event: "Victim dies of exposure" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s069a", motive: "Victim's paper would expose Larsen's 10-year data fabrication. He forced her outside during the blizzard to make it look like an accident.", keyEvidenceIds: ["ev-069-1","ev-069-2","ev-069-3","ev-069-4","ev-069-9"] }
};

export const CASE_070: Case = {
  id: "070", number: 70, title: "The Film Festival", difficulty: 3,
  briefing: "At the Cannes Film Festival, a famous director is found dead in his hotel room. Overdose — but he never used drugs. Five people attended his private party.",
  image: "/cases/case-070.jpeg",
  suspects: [
    { id: "s070a", name: "Actress Sophia", role: "Actress", emoji: "👩‍🎤", description: "He cut her role.", statement: "I was at the party all night." },
    { id: "s070b", name: "Producer Klein", role: "Producer", emoji: "💼", description: "He was leaving for another producer.", statement: "I was at the bar." },
    { id: "s070c", name: "Director Bertolucci", role: "Rival Director", emoji: "🎬", description: "He stole his script.", statement: "I was at my own hotel." },
    { id: "s070d", name: "Ex-Wife Charlotte", role: "Ex-Wife", emoji: "👩", description: "He owed her millions.", statement: "I wasn't even in Cannes." },
    { id: "s070e", name: "Agent Bernard", role: "Agent", emoji: "🧑‍💼", description: "He was firing him.", statement: "I was at the party greeting guests." }
  ],
  evidence: [
    { id: "ev-070-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Fentanyl overdose","Time: 03:00 AM","Never used drugs","Pure fentanyl — not street grade"] },
    { id: "ev-070-2", title: "Hotel CCTV", type: "cctv", icon: "📹", isKey: true, content: ["02:00 Sophia at party","02:15 Klein at bar","02:30 Bernard with guests","02:45 Sophia walks toward director's suite"] },
    { id: "ev-070-3", title: "Fentanyl Source", type: "document", icon: "💊", isKey: true, content: ["Found in Sophia's purse","Same batch as hospital theft","She had nurse friend"] },
    { id: "ev-070-4", title: "Director's New Script", type: "document", icon: "📄", isKey: true, content: ["Cut Sophia's role entirely","Reduced to cameo","She lost $2M contract"] },
    { id: "ev-070-5", title: "Klein's Contract", type: "document", icon: "📄", isKey: false, content: ["Being replaced","But at bar continuously"] },
    { id: "ev-070-6", title: "Bertolucci's Alibi", type: "document", icon: "📄", isKey: false, content: ["Different hotel","Staff confirm"] },
    { id: "ev-070-7", title: "Charlotte's Location", type: "document", icon: "📄", isKey: false, content: ["In Paris","GPS confirms"] },
    { id: "ev-070-8", title: "Bernard's Guest Log", type: "document", icon: "📋", isKey: false, content: ["Greeting guests all night","Ten witnesses"] },
    { id: "ev-070-9", title: "Sophia's Emails", type: "document", icon: "📧", isKey: true, content: ["To agent: 'He's ruining me.'","'I'll ruin him first.'"] },
    { id: "ev-070-10", title: "Sophia's Phone", type: "phone", icon: "📱", isKey: true, content: ["02:40 to nurse friend: 'Thanks for the stuff.'","02:50: 'Meeting him now.'"] }
  ],
  timeline: [
    { time: "02:00", event: "Sophia at party" },
    { time: "02:15", event: "Klein at bar" },
    { time: "02:30", event: "Bernard with guests" },
    { time: "02:45", event: "Sophia walks to suite" },
    { time: "02:55", event: "Sophia slips fentanyl" },
    { time: "03:00", event: "Director dies" },
    { time: "09:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s070a", motive: "Director cut Sophia's role entirely, costing her a $2M contract. She obtained fentanyl from a nurse friend and slipped it into his drink during a private meeting.", keyEvidenceIds: ["ev-070-1","ev-070-2","ev-070-3","ev-070-4","ev-070-10"] }
};

export const CASE_071: Case = {
  id: "071", number: 71, title: "The Cattle Ranch", difficulty: 3,
  briefing: "A Texas cattle ranch owner is found dead in his barn. Trampled by a bull — but the bull was sedated. Five ranch hands were on the property.",
  image: "/cases/case-071.jpeg",
  suspects: [
    { id: "s071a", name: "Foreman Hank", role: "Foreman", emoji: "👨‍🌾", description: "Was going to be replaced.", statement: "I was in the east pasture." },
    { id: "s071b", name: "Ranch Hand Miguel", role: "Ranch Hand", emoji: "🧑‍🌾", description: "Owner refused to pay his son's medical bills.", statement: "I was fixing the fence." },
    { id: "s071c", name: "Neighbor Sam", role: "Neighbor", emoji: "🧔", description: "Owner was blocking his water access.", statement: "I was at my own ranch." },
    { id: "s071d", name: "Nephew Billy", role: "Nephew", emoji: "🧑", description: "Owner was going to sell the ranch.", statement: "I was in the main house." },
    { id: "s071e", name: "Vet Dr. Chen", role: "Veterinarian", emoji: "👩‍⚕️", description: "Owner was going to sue her.", statement: "I was at the clinic in town." }
  ],
  evidence: [
    { id: "ev-071-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Trampled by bull","Time: 06:30 AM","Pre-existing bruising on head","Bull was sedated"] },
    { id: "ev-071-2", title: "Barn CCTV", type: "cctv", icon: "📹", isKey: true, content: ["06:00 Miguel at fence","06:15 Billy near barn","06:20 Miguel walks to barn","06:25 barn camera blocked briefly"] },
    { id: "ev-071-3", title: "Sedative Bottle", type: "document", icon: "💊", isKey: true, content: ["Found near barn","Etorphine (large animal sedative)","Fingerprint: Miguel"] },
    { id: "ev-071-4", title: "Medical Bills", type: "document", icon: "📄", isKey: true, content: ["Miguel's son needed $200K surgery","Owner refused to help despite years of loyalty","Miguel desperate"] },
    { id: "ev-071-5", title: "Hank's Pasture Log", type: "document", icon: "📋", isKey: false, content: ["Continuous work","GPS tracker confirms"] },
    { id: "ev-071-6", title: "Sam's Alibi", type: "document", icon: "📄", isKey: false, content: ["Home security footage","Continuous presence"] },
    { id: "ev-071-7", title: "Billy's House Log", type: "document", icon: "📋", isKey: false, content: ["In main house until 06:15","But then walks toward barn"] },
    { id: "ev-071-8", title: "Dr. Chen's Clinic Log", type: "document", icon: "📋", isKey: false, content: ["At clinic in town","Receptionist confirms"] },
    { id: "ev-071-9", title: "Sedative Source", type: "document", icon: "🧪", isKey: true, content: ["Stolen from vet clinic 3 days ago","Break-in reported","Chen's log shows inventory missing"] },
    { id: "ev-071-10", title: "Miguel's Text", type: "phone", icon: "📱", isKey: true, content: ["06:10 to wife: 'I'll get the money. One way or another.'"] }
  ],
  timeline: [
    { time: "06:00", event: "Miguel at fence" },
    { time: "06:10", event: "Miguel sends text" },
    { time: "06:15", event: "Billy near barn" },
    { time: "06:20", event: "Miguel walks to barn" },
    { time: "06:25", event: "Camera blocked" },
    { time: "06:30", event: "Owner trampled" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s071b", motive: "Miguel's son needed $200K surgery. The owner refused to help despite years of loyal service. Miguel sedated the bull, lured the owner into the barn, and staged a trampling accident.", keyEvidenceIds: ["ev-071-1","ev-071-2","ev-071-3","ev-071-4","ev-071-10"] }
};

export const CASE_072: Case = {
  id: "072", number: 72, title: "The Diplomatic Summit", difficulty: 5,
  briefing: "At a G20 summit, a key negotiator is found dead in his hotel room. Cyanide in his toothpaste. Five delegates had access to the floor.",
  image: "/cases/case-072.jpeg",
  suspects: [
    { id: "s072a", name: "Delegate Ivanov", role: "Russian Delegate", emoji: "🧔", description: "Negotiator was blocking his country's deal.", statement: "I was at the summit hall." },
    { id: "s072b", name: "Aide Chen", role: "Chinese Aide", emoji: "🧑‍💼", description: "Negotiator discovered his espionage.", statement: "I was preparing briefing documents." },
    { id: "s072c", name: "Translator Sarah", role: "Translator", emoji: "👩‍💼", description: "He was going to fire her.", statement: "I was at the translators' booth." },
    { id: "s072d", name: "Security Chief Patel", role: "Security Chief", emoji: "💪", description: "He was going to expose his corruption.", statement: "I was at the security command center." },
    { id: "s072e", name: "Ambassador Rodriguez", role: "Ambassador", emoji: "🧑‍💼", description: "He was blocking his promotion.", statement: "I was at the evening reception." }
  ],
  evidence: [
    { id: "ev-072-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Cyanide poisoning","Ingested via toothpaste","Time: 22:00"] },
    { id: "ev-072-2", title: "Hotel Floor CCTV", type: "cctv", icon: "📹", isKey: true, content: ["21:30 Aide Chen walks to room service","21:45 Chen seen near victim's door","21:55 Patel at security desk","22:00 victim uses bathroom"] },
    { id: "ev-072-3", title: "Toothpaste Tube", type: "document", icon: "🪥", isKey: true, content: ["Cyanide inside tube","Fingerprint: Chen","Tube replaced with identical brand"] },
    { id: "ev-072-4", title: "Espionage Evidence", type: "document", icon: "📄", isKey: true, content: ["Aide Chen was passing classified info","Victim had proof","Was going to expose at morning session"] },
    { id: "ev-072-5", title: "Ivanov's Deal Documents", type: "document", icon: "📄", isKey: false, content: ["Negotiator blocking deal","But at summit hall continuously"] },
    { id: "ev-072-6", title: "Sarah's Booth Log", type: "document", icon: "📋", isKey: false, content: ["Continuous translation","Recording confirms"] },
    { id: "ev-072-7", title: "Patel's Security Log", type: "document", icon: "📋", isKey: false, content: ["Continuous monitoring","Two staff confirm"] },
    { id: "ev-072-8", title: "Rodriguez's Reception Log", type: "document", icon: "📋", isKey: false, content: ["At reception all evening","Ten delegates confirm"] },
    { id: "ev-072-9", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Chen's briefcase","From China in diplomatic pouch","Recently arrived"] },
    { id: "ev-072-10", title: "Chen's Emails", type: "document", icon: "📧", isKey: true, content: ["To handler: 'He knows everything.'","'I'll handle it tonight.'"] }
  ],
  timeline: [
    { time: "21:30", event: "Chen orders room service" },
    { time: "21:45", event: "Chen near victim's door" },
    { time: "21:55", event: "Patel at desk" },
    { time: "21:50", event: "Chen replaces toothpaste" },
    { time: "22:00", event: "Victim uses poisoned toothpaste" },
    { time: "22:15", event: "Victim collapses" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s072b", motive: "Victim had proof Chen was passing classified information to China. Facing exposure, Chen replaced the toothpaste with a poisoned version during a brief visit.", keyEvidenceIds: ["ev-072-1","ev-072-2","ev-072-3","ev-072-4","ev-072-10"] }
};

export const CASE_073: Case = {
  id: "073", number: 73, title: "The Alpine Chalet", difficulty: 4,
  briefing: "At a luxury Alpine chalet, a wealthy banker is found dead in his study. Broken neck. The chalet was snowed in — no one could have entered or left. Five guests were staying.",
  image: "/cases/case-073.jpeg",
  suspects: [
    { id: "s073a", name: "Business Partner Klaus", role: "Business Partner", emoji: "💼", description: "Banker was cutting him out.", statement: "I was in the wine cellar." },
    { id: "s073b", name: "Ex-Wife Helga", role: "Ex-Wife", emoji: "👩", description: "Banker stopped paying alimony.", statement: "I was in my room reading." },
    { id: "s073c", name: "Ski Instructor Erik", role: "Ski Instructor", emoji: "⛷️", description: "Banker exposed his affair.", statement: "I was in the sauna." },
    { id: "s073d", name: "Chef Isabella", role: "Chef", emoji: "👩‍🍳", description: "Banker was going to fire her.", statement: "I was in the kitchen preparing dinner." },
    { id: "s073e", name: "Nephew Gustav", role: "Nephew", emoji: "🧑", description: "Banker was disinheriting him.", statement: "I was in the living room with others." }
  ],
  evidence: [
    { id: "ev-073-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Broken neck","Time: 22:00","No defensive wounds","Killed by strong twist"] },
    { id: "ev-073-2", title: "Chalet CCTV", type: "cctv", icon: "📹", isKey: true, content: ["21:30 Klaus in cellar","21:45 Isabella in kitchen","21:50 Erik exits sauna","21:55 Erik walks toward study"] },
    { id: "ev-073-3", title: "Study Door", type: "document", icon: "🚪", isKey: true, content: ["Locked from inside","Key found in victim's pocket","No signs of forced entry"] },
    { id: "ev-073-4", title: "Erik's Texts", type: "phone", icon: "📱", isKey: true, content: ["To wife: 'If he talks, my marriage is over.'","'I'll handle him.'","Sent day before"] },
    { id: "ev-073-5", title: "Klaus's Business Documents", type: "document", icon: "📄", isKey: false, content: ["Being cut out of partnership","But in cellar continuously"] },
    { id: "ev-073-6", title: "Helga's Reading Log", type: "witness", icon: "📝", isKey: false, content: ["Maid confirms presence","Continuous reading"] },
    { id: "ev-073-7", title: "Isabella's Kitchen Log", type: "document", icon: "📋", isKey: false, content: ["Continuous cooking","Sous chef confirms"] },
    { id: "ev-073-8", title: "Gustav's Living Room Log", type: "witness", icon: "📝", isKey: false, content: ["Three guests confirm presence","Continuous card game"] },
    { id: "ev-073-9", title: "Erik's Ski Gear", type: "document", icon: "🎿", isKey: true, content: ["Ski boots left wet by front door","Fresh snow — but he claimed sauna","Contradicts his alibi"] },
    { id: "ev-073-10", title: "Banker's Diary", type: "document", icon: "📔", isKey: true, content: ["Notes about Erik's affair","'I'll tell his wife tomorrow.'"] }
  ],
  timeline: [
    { time: "21:30", event: "Klaus in cellar" },
    { time: "21:45", event: "Isabella in kitchen" },
    { time: "21:50", event: "Erik exits sauna" },
    { time: "21:55", event: "Erik walks to study" },
    { time: "22:00", event: "Victim killed" },
    { time: "22:15", event: "Erik returns via side door" },
    { time: "08:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s073c", motive: "Banker discovered Erik's affair and was going to tell his wife. Erik entered through a side door (leaving ski tracks in fresh snow), snapped the banker's neck, and returned via the same route.", keyEvidenceIds: ["ev-073-1","ev-073-2","ev-073-4","ev-073-9","ev-073-10"] }
};

export const CASE_074: Case = {
  id: "074", number: 74, title: "The Animal Sanctuary", difficulty: 3,
  briefing: "At a big cat sanctuary, the founder is found dead in the lion enclosure. Gate was opened remotely. Five staff members had access to the controls.",
  image: "/cases/case-074.jpeg",
  suspects: [
    { id: "s074a", name: "Head Keeper Raj", role: "Head Keeper", emoji: "🦁", description: "Founder was going to fire him.", statement: "I was feeding the tigers." },
    { id: "s074b", name: "Vet Dr. Marie", role: "Veterinarian", emoji: "👩‍⚕️", description: "Founder accused her of negligence.", statement: "I was examining a sick serval." },
    { id: "s074c", name: "Volunteer Sofia", role: "Volunteer", emoji: "👩", description: "Founder discovered her illegal activities.", statement: "I was cleaning the visitor center." },
    { id: "s074d", name: "Security Chief David", role: "Security Chief", emoji: "💪", description: "Founder found his theft.", statement: "I was at the main gate." },
    { id: "s074e", name: "Donor Mr. Sterling", role: "Donor", emoji: "💼", description: "Founder was going to expose him.", statement: "I was in the donor lounge." }
  ],
  evidence: [
    { id: "ev-074-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Mauled by lion","Time: 06:00 AM","No defensive wounds","Prey behavior"] },
    { id: "ev-074-2", title: "Sanctuary CCTV", type: "cctv", icon: "📹", isKey: true, content: ["05:30 Raj feeding tigers","05:45 Marie examining serval","05:50 Sofia near control room","05:55 Sofia enters control room"] },
    { id: "ev-074-3", title: "Gate Control Log", type: "document", icon: "🔐", isKey: true, content: ["Lion gate opened at 05:55","Used Sofia's access code","Manual override"] },
    { id: "ev-074-4", title: "Founder's Notebook", type: "document", icon: "📓", isKey: true, content: ["Sofia was stealing donations","$80K over 2 years","Was going to press charges"] },
    { id: "ev-074-5", title: "Raj's Feeding Log", type: "document", icon: "📋", isKey: false, content: ["Continuous feeding rounds","Three keepers confirm"] },
    { id: "ev-074-6", title: "Marie's Medical Log", type: "document", icon: "📋", isKey: false, content: ["Continuous examination","Serval medical records"] },
    { id: "ev-074-7", title: "David's Gate Log", type: "document", icon: "📋", isKey: false, content: ["Continuous gate monitoring","Two visitors confirm"] },
    { id: "ev-074-8", title: "Sterling's Lounge Log", type: "witness", icon: "📝", isKey: false, content: ["Continuous donor lounge presence","Staff confirms"] },
    { id: "ev-074-9", title: "Sofia's Financial Records", type: "bank", icon: "💳", isKey: true, content: ["$80K matching stolen donations","Deposited in small amounts","Recent large withdrawal"] },
    { id: "ev-074-10", title: "Sofia's Emails", type: "document", icon: "📧", isKey: true, content: ["To boyfriend: 'If he reports me, I'm done.'","'I'll stop him first.'"] }
  ],
  timeline: [
    { time: "05:30", event: "Raj feeding tigers" },
    { time: "05:45", event: "Marie examining serval" },
    { time: "05:50", event: "Sofia near control room" },
    { time: "05:55", event: "Sofia opens lion gate remotely" },
    { time: "05:58", event: "Founder lured to enclosure" },
    { time: "06:00", event: "Founder killed" },
    { time: "07:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s074c", motive: "Founder discovered Sofia was stealing $80K in donations. Facing criminal charges, Sofia opened the lion gate remotely and lured the founder into the enclosure.", keyEvidenceIds: ["ev-074-1","ev-074-2","ev-074-3","ev-074-4","ev-074-9"] }
};

export const CASE_075: Case = {
  id: "075", number: 75, title: "The Hostage Crisis", difficulty: 5,
  briefing: "During a hostage situation at a bank, a police negotiator is found dead outside the building. Shot by a sniper — but no sniper was present. Five officers were on the scene.",
  image: "/cases/case-075.jpeg",
  suspects: [
    { id: "s075a", name: "Commander Reyes", role: "SWAT Leader", emoji: "🎖️", description: "Negotiator was going to report his tactics.", statement: "I was coordinating at the command post." },
    { id: "s075b", name: "Officer Chen", role: "Police Officer", emoji: "👮", description: "Negotiator was having an affair with his wife.", statement: "I was at the perimeter." },
    { id: "s075c", name: "Detective Walker", role: "Detective", emoji: "🕵️", description: "Negotiator was blocking his promotion.", statement: "I was interviewing witnesses." },
    { id: "s075d", name: "Chief Morrison", role: "Police Chief", emoji: "👨‍✈️", description: "Negotiator had evidence of his corruption.", statement: "I was at city hall monitoring remotely." },
    { id: "s075e", name: "Sniper Jones", role: "Police Sniper", emoji: "🎯", description: "Negotiator had him fired once.", statement: "I was positioned on the roof across the street." }
  ],
  evidence: [
    { id: "ev-075-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Single gunshot to chest","Time: 14:30","Rifle round","Angle suggests elevated position"] },
    { id: "ev-075-2", title: "Scene CCTV", type: "cctv", icon: "📹", isKey: true, content: ["14:00 Jones on roof","14:15 Chen at perimeter","14:20 Walker interviewing","14:25 shot fired"] },
    { id: "ev-075-3", title: "Bullet Analysis", type: "document", icon: "🔫", isKey: true, content: ["Match to SWAT sniper rifle","Serial number: Jones's backup","Recently fired"] },
    { id: "ev-075-4", title: "Jones's Firing Record", type: "document", icon: "📄", isKey: true, content: ["Fired 3 years ago","Reinstated by victim's recommendation","But grudge held"] },
    { id: "ev-075-5", title: "Reyes's Command Log", type: "document", icon: "📋", isKey: false, content: ["Continuous command post presence","Radio logs confirm"] },
    { id: "ev-075-6", title: "Chen's Perimeter Log", type: "document", icon: "📋", isKey: false, content: ["Continuous perimeter","Two officers confirm"] },
    { id: "ev-075-7", title: "Walker's Interview Notes", type: "document", icon: "📝", isKey: false, content: ["Continuous interviews","Witnesses confirm"] },
    { id: "ev-075-8", title: "Morrison's Location", type: "document", icon: "📄", isKey: false, content: ["At city hall","Video call records"] },
    { id: "ev-075-9", title: "Jones's Emails", type: "document", icon: "📧", isKey: true, content: ["To brother: 'He ruined my career.'","'I'll never forgive him.'"] },
    { id: "ev-075-10", title: "Jones's Rifle", type: "document", icon: "🎯", isKey: true, content: ["Found in his case","One round missing","Powder residue on his gloves"] }
  ],
  timeline: [
    { time: "13:00", event: "Hostage situation begins" },
    { time: "14:00", event: "Jones on roof position" },
    { time: "14:15", event: "Chen at perimeter" },
    { time: "14:20", event: "Walker interviewing" },
    { time: "14:25", event: "Jones fires shot" },
    { time: "14:30", event: "Negotiator dies" },
    { time: "15:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s075e", motive: "Jones held a grudge against the negotiator for having him fired 3 years ago. During the chaos of the hostage crisis, he used his sniper position to kill the negotiator, staging it as a sniper attack from the hostage taker.", keyEvidenceIds: ["ev-075-1","ev-075-2","ev-075-3","ev-075-4","ev-075-10"] }
};

export const CASE_076: Case = {
  id: "076", number: 76, title: "The Florist Shop", difficulty: 3,
  briefing: "A florist is found dead in her shop. Pricked by a poisoned rose thorn. Five customers had visited that day.",
  image: "/cases/case-076.jpeg",
  suspects: [
    { id: "s076a", name: "Rival Florist Lisa", role: "Rival Florist", emoji: "💐", description: "She was stealing her designs.", statement: "I was at my own shop." },
    { id: "s076b", name: "Ex-Husband David", role: "Ex-Husband", emoji: "🧔", description: "She was going to expose his abuse.", statement: "I was at work." },
    { id: "s076c", name: "Bride-to-be Sarah", role: "Customer", emoji: "👰", description: "Florist ruined her wedding.", statement: "I was picking up my order." },
    { id: "s076d", name: "Business Partner Mark", role: "Business Partner", emoji: "💼", description: "She was dissolving the partnership.", statement: "I was in the back office." },
    { id: "s076e", name: "Neighbor Emma", role: "Neighbor", emoji: "👩", description: "She reported her for illegal activity.", statement: "I was next door in my apartment." }
  ],
  evidence: [
    { id: "ev-076-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Ricin poisoning","Entry point: right index finger","Time: 15:30"] },
    { id: "ev-076-2", title: "Shop CCTV", type: "cctv", icon: "📹", isKey: true, content: ["14:30 Sarah enters","15:00 Mark in back office","15:20 Sarah walks near display roses","15:25 victim pricks finger"] },
    { id: "ev-076-3", title: "Rose Stem", type: "document", icon: "🌹", isKey: true, content: ["Ricin on thorn","Part of Sarah's wedding bouquet order","Wrapped by Sarah earlier"] },
    { id: "ev-076-4", title: "Sarah's Wedding File", type: "document", icon: "📄", isKey: true, content: ["Florist delivered dead flowers to her wedding","Ruin documented","Sarah lost $50K deposit"] },
    { id: "ev-076-5", title: "Lisa's Shop Log", type: "document", icon: "📋", isKey: false, content: ["Continuous presence at own shop","Employee confirms"] },
    { id: "ev-076-6", title: "David's Work Records", type: "document", icon: "📄", isKey: false, content: ["At workplace all day","Badge swipe logs"] },
    { id: "ev-076-7", title: "Mark's Office Log", type: "document", icon: "📋", isKey: false, content: ["Continuous back office work","Call logs confirm"] },
    { id: "ev-076-8", title: "Emma's Apartment Log", type: "document", icon: "🏠", isKey: false, content: ["At apartment","Ring camera shows no exit"] },
    { id: "ev-076-9", title: "Ricin Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Sarah's purse","Castor bean residue","Purchased online"] },
    { id: "ev-076-10", title: "Sarah's Text", type: "phone", icon: "📱", isKey: true, content: ["To sister: 'I'll make her pay.'","'She ruined the most important day of my life.'"] }
  ],
  timeline: [
    { time: "14:30", event: "Sarah enters shop" },
    { time: "15:00", event: "Mark in back office" },
    { time: "15:20", event: "Sarah walks near roses" },
    { time: "15:25", event: "Victim pricks finger" },
    { time: "15:30", event: "Victim collapses" },
    { time: "16:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s076c", motive: "The florist delivered dead flowers to Sarah's wedding, ruining it and costing her $50K. Sarah poisoned a rose thorn with ricin and arranged for it to prick the florist during the shop visit.", keyEvidenceIds: ["ev-076-1","ev-076-2","ev-076-3","ev-076-4","ev-076-10"] }
};

export const CASE_077: Case = {
  id: "077", number: 77, title: "The Boxing Match", difficulty: 3,
  briefing: "During a boxing title fight, a boxer collapses in round 8 and dies. Poison in his water bottle. Five people had access to the corner.",
  image: "/cases/case-077.jpeg",
  suspects: [
    { id: "s077a", name: "Trainer Mike", role: "Trainer", emoji: "🥊", description: "Boxer was leaving him.", statement: "I was in the corner coaching." },
    { id: "s077b", name: "Rival Boxer James", role: "Rival Boxer", emoji: "🥊", description: "Was losing the fight.", statement: "I was in the ring." },
    { id: "s077c", name: "Promoter Klein", role: "Promoter", emoji: "💼", description: "Boxer was suing him.", statement: "I was ringside." },
    { id: "s077d", name: "Cutman Sanchez", role: "Cutman", emoji: "🩹", description: "Boxer had humiliated him.", statement: "I was at the corner between rounds." },
    { id: "s077e", name: "Referee Wilson", role: "Referee", emoji: "👨‍⚖️", description: "Boxer had exposed his rigged matches.", statement: "I was in the ring refereeing." }
  ],
  evidence: [
    { id: "ev-077-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Ricin poisoning","Ingested via water bottle","Time: Round 7 break"] },
    { id: "ev-077-2", title: "Ringside CCTV", type: "cctv", icon: "📹", isKey: true, content: ["Round 6 end Mike in corner","Round 7 break Sanchez at stool","Round 7 break Mike returns","Round 8 boxer collapses"] },
    { id: "ev-077-3", title: "Water Bottle", type: "document", icon: "💧", isKey: true, content: ["Ricin residue","Fingerprint: Sanchez","Handle also handled by Mike"] },
    { id: "ev-077-4", title: "Sanchez's Grudge", type: "document", icon: "📄", isKey: true, content: ["Boxer publicly humiliated him","Fired Sanchez from his team","Sanchez had lost $200K in fees"] },
    { id: "ev-077-5", title: "Mike's Corner Log", type: "document", icon: "📋", isKey: false, content: ["Continuous corner work","Two assistants confirm"] },
    { id: "ev-077-6", title: "James's Corner Log", type: "document", icon: "📋", isKey: false, content: ["In own corner continuously","Camera confirms"] },
    { id: "ev-077-7", title: "Klein's Ringside Log", type: "document", icon: "📋", isKey: false, content: ["Continuous ringside presence","Press photos confirm"] },
    { id: "ev-077-8", title: "Wilson's Referee Log", type: "document", icon: "📋", isKey: false, content: ["In ring continuously","TV coverage confirms"] },
    { id: "ev-077-9", title: "Ricin Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Sanchez's kit bag","Castor bean residue","Purchased 2 weeks ago"] },
    { id: "ev-077-10", title: "Sanchez's Emails", type: "document", icon: "📧", isKey: true, content: ["To friend: 'He ruined my life.'","'He won't win another fight.'"] }
  ],
  timeline: [
    { time: "Round 6", event: "Mike in corner" },
    { time: "Round 7 break", event: "Sanchez at stool" },
    { time: "Round 7 break", event: "Sanchez poisons water" },
    { time: "Round 7 break", event: "Mike returns to corner" },
    { time: "Round 8", event: "Boxer drinks, collapses" },
    { time: "Round 8", event: "Boxer dies in ring" }
  ],
  solution: { culpritId: "s077d", motive: "Boxer publicly humiliated Sanchez and fired him, costing him $200K in fees. During a between-rounds break, Sanchez slipped ricin into the water bottle.", keyEvidenceIds: ["ev-077-1","ev-077-2","ev-077-3","ev-077-4","ev-077-10"] }
};

export const CASE_078: Case = {
  id: "078", number: 78, title: "The Old Folks Home", difficulty: 3,
  briefing: "At an upscale retirement home, a wealthy resident is found dead in her room. Insulin overdose — but she wasn't diabetic. Five staff members were on her floor.",
  image: "/cases/case-078.jpeg",
  suspects: [
    { id: "s078a", name: "Nurse Patel", role: "Nurse", emoji: "👩‍⚕️", description: "Resident complained about her.", statement: "I was at the nurses' station." },
    { id: "s078b", name: "Son Richard", role: "Son", emoji: "🧑", description: "Impatient for his inheritance.", statement: "I was visiting another resident." },
    { id: "s078c", name: "Daughter Margaret", role: "Daughter", emoji: "👩", description: "Being written out of the will.", statement: "I was in the lobby making calls." },
    { id: "s078d", name: "Staff Carlos", role: "Maintenance", emoji: "🔧", description: "Resident accused him of theft.", statement: "I was fixing a broken lock on floor 2." },
    { id: "s078e", name: "Doctor Rosenberg", role: "Doctor", emoji: "👨‍⚕️", description: "Resident was going to report him.", statement: "I was in my office." }
  ],
  evidence: [
    { id: "ev-078-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Insulin overdose","10x normal dose","Time: 07:00 AM"] },
    { id: "ev-078-2", title: "Floor CCTV", type: "cctv", icon: "📹", isKey: true, content: ["06:30 Patel at nurses' station","06:45 Richard walks past room","06:50 Patel walks to resident's room","06:55 Patel exits"] },
    { id: "ev-078-3", title: "Insulin Syringe", type: "document", icon: "💉", isKey: true, content: ["Found in trash","Insulin residue","Fingerprint: Patel"] },
    { id: "ev-078-4", title: "Patel's Suspension File", type: "document", icon: "📄", isKey: true, content: ["Resident filed formal complaint","Nurse Patel suspended","Would lose license if confirmed"] },
    { id: "ev-078-5", title: "Richard's Will File", type: "document", icon: "📄", isKey: false, content: ["Son in will for $5M","But visiting another resident at time of murder"] },
    { id: "ev-078-6", title: "Margaret's Call Log", type: "phone", icon: "📱", isKey: false, content: ["Continuous calls from lobby","Timestamps confirm"] },
    { id: "ev-078-7", title: "Carlos's Work Log", type: "document", icon: "📋", isKey: false, content: ["Continuous lock repair","Two staff confirm"] },
    { id: "ev-078-8", title: "Rosenberg's Office Log", type: "document", icon: "📋", isKey: false, content: ["Continuous office presence","Secretary confirms"] },
    { id: "ev-078-9", title: "Insulin Source", type: "document", icon: "🧪", isKey: true, content: ["From floor medical cabinet","Patel's access code used at 06:45","Not on her shift rotation"] },
    { id: "ev-078-10", title: "Patel's Emails", type: "document", icon: "📧", isKey: true, content: ["To friend: 'She's ruining my career.'","'She won't testify.'"] }
  ],
  timeline: [
    { time: "06:30", event: "Patel at nurses' station" },
    { time: "06:45", event: "Richard walks past" },
    { time: "06:50", event: "Patel enters resident's room" },
    { time: "06:55", event: "Patel exits" },
    { time: "07:00", event: "Resident dies" },
    { time: "08:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s078a", motive: "Resident filed a complaint against Patel that would end her nursing license. Patel used her medical access to retrieve insulin and administered a lethal dose.", keyEvidenceIds: ["ev-078-1","ev-078-2","ev-078-3","ev-078-4","ev-078-10"] }
};

export const CASE_079: Case = {
  id: "079", number: 79, title: "The Haunted Mansion", difficulty: 3,
  briefing: "At a Halloween haunted house attraction, the owner is found dead in the basement. Stabbed with a prop knife that had been sharpened. Five actors were in the house.",
  image: "/cases/case-079.jpeg",
  suspects: [
    { id: "s079a", name: "Actor Jake", role: "Actor", emoji: "🎭", description: "Owner was firing him.", statement: "I was scaring guests in the attic." },
    { id: "s079b", name: "Actor Maria", role: "Actor", emoji: "👻", description: "Owner was harassing her.", statement: "I was in the hallway scene." },
    { id: "s079c", name: "Manager Steve", role: "Manager", emoji: "💼", description: "Owner was selling the attraction.", statement: "I was at the ticket booth." },
    { id: "s079d", name: "Set Designer Chen", role: "Set Designer", emoji: "🔨", description: "Owner owed him $30K.", statement: "I was fixing the entrance." },
    { id: "s079e", name: "Rival Operator Stone", role: "Rival Operator", emoji: "🧔", description: "Owner stole his ideas.", statement: "I was running my own attraction across town." }
  ],
  evidence: [
    { id: "ev-079-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Stab wound to chest","Time: 22:30","Weapon: sharpened prop knife","Single blow"] },
    { id: "ev-079-2", title: "Mansion CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:00 Jake in attic","22:15 Maria in hallway","22:20 Chen fixing entrance","22:25 Chen walks toward basement"] },
    { id: "ev-079-3", title: "Prop Knife", type: "document", icon: "🔪", isKey: true, content: ["Victim's blood","Recent sharpening marks","Chen's prints on sharpening tool"] },
    { id: "ev-079-4", title: "Unpaid Invoice", type: "document", icon: "📄", isKey: true, content: ["Chen owed $30K for set design work","6 months unpaid","Recent threats by Chen"] },
    { id: "ev-079-5", title: "Jake's Attic Log", type: "document", icon: "📋", isKey: false, content: ["Continuous scaring","Guest video confirms"] },
    { id: "ev-079-6", title: "Maria's Hallway Log", type: "document", icon: "📋", isKey: false, content: ["Continuous hallway","Guest accounts confirm"] },
    { id: "ev-079-7", title: "Steve's Ticket Log", type: "document", icon: "📋", isKey: false, content: ["Continuous ticket sales","Register timestamps"] },
    { id: "ev-079-8", title: "Stone's Location", type: "document", icon: "📄", isKey: false, content: ["At rival attraction","Employee confirmations"] },
    { id: "ev-079-9", title: "Chen's Emails", type: "document", icon: "📧", isKey: true, content: ["To owner: 'I need my money.'","'You'll regret this.'","Sent 3 days before"] },
    { id: "ev-079-10", title: "Sharpening Tool", type: "document", icon: "🗡️", isKey: true, content: ["Found in Chen's toolkit","Recent use","Matches knife's sharpening pattern"] }
  ],
  timeline: [
    { time: "22:00", event: "Jake in attic" },
    { time: "22:15", event: "Maria in hallway" },
    { time: "22:20", event: "Chen at entrance" },
    { time: "22:25", event: "Chen walks to basement" },
    { time: "22:30", event: "Owner killed" },
    { time: "23:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s079d", motive: "Owner owed Chen $30K for set design work for 6 months. After repeated requests and threats, Chen sharpened a prop knife and used it to kill the owner in the basement.", keyEvidenceIds: ["ev-079-1","ev-079-2","ev-079-3","ev-079-4","ev-079-9"] }
};

export const CASE_080: Case = {
  id: "080", number: 80, title: "The Embassy Ball", difficulty: 4,
  briefing: "At a British Embassy ball in Moscow, a UK diplomat is found dead on the balcony. Poison in his champagne. Five guests and staff were present.",
  image: "/cases/case-080.jpeg",
  suspects: [
    { id: "s080a", name: "Russian Official Volkov", role: "Russian Official", emoji: "🧔", description: "Diplomat was blocking a deal.", statement: "I was in the main hall." },
    { id: "s080b", name: "MI6 Agent Sarah", role: "MI6 Agent", emoji: "🕵️‍♀️", description: "Diplomat discovered her cover.", statement: "I was at the bar." },
    { id: "s080c", name: "Ambassador Hughes", role: "UK Ambassador", emoji: "👨‍💼", description: "Diplomat was going to replace him.", statement: "I was greeting guests at the entrance." },
    { id: "s080d", name: "Assistant James", role: "Diplomat's Assistant", emoji: "🧑‍💼", description: "Diplomat was firing him.", statement: "I was delivering a message." },
    { id: "s080e", name: "Journalist Anna", role: "Journalist", emoji: "📰", description: "Diplomat exposed her sources.", statement: "I was in the press area." }
  ],
  evidence: [
    { id: "ev-080-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Ricin poisoning","Ingested via champagne","Time: 21:00"] },
    { id: "ev-080-2", title: "Embassy CCTV", type: "cctv", icon: "📹", isKey: true, content: ["20:30 Volkov in main hall","20:45 Hughes at entrance","20:50 Assistant walks to balcony area","20:55 Assistant returns"] },
    { id: "ev-080-3", title: "Champagne Glass", type: "document", icon: "🥂", isKey: true, content: ["Ricin residue","Fingerprints: victim and Assistant","Assistant handled glass earlier"] },
    { id: "ev-080-4", title: "Diplomat's Termination Letter", type: "document", icon: "📄", isKey: true, content: ["Assistant being fired","Reason: security leak","Assistant would lose diplomatic immunity"] },
    { id: "ev-080-5", title: "Volkov's Deal Notes", type: "document", icon: "📄", isKey: false, content: ["Diplomat blocking Russian deal","But in main hall continuously"] },
    { id: "ev-080-6", title: "Sarah's Cover Documents", type: "document", icon: "📄", isKey: false, content: ["Cover about to be blown","But at bar all evening"] },
    { id: "ev-080-7", title: "Hughes's Entrance Log", type: "document", icon: "📋", isKey: false, content: ["Continuous greetings at entrance","Multiple witnesses"] },
    { id: "ev-080-8", title: "Anna's Press Area Log", type: "document", icon: "📋", isKey: false, content: ["Continuous press area presence","Two journalists confirm"] },
    { id: "ev-080-9", title: "Ricin Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Assistant's room","Castor bean residue","Purchased 1 week ago"] },
    { id: "ev-080-10", title: "Assistant's Emails", type: "document", icon: "📧", isKey: true, content: ["To sibling: 'He's ending my career.'","'I'll end his first.'"] }
  ],
  timeline: [
    { time: "20:30", event: "Volkov in main hall" },
    { time: "20:45", event: "Hughes at entrance" },
    { time: "20:50", event: "Assistant walks to balcony" },
    { time: "20:52", event: "Assistant poisons champagne" },
    { time: "20:55", event: "Assistant returns" },
    { time: "21:00", event: "Victim drinks" },
    { time: "21:15", event: "Body discovered" }
  ],
  solution: { culpritId: "s080d", motive: "Diplomat was firing his assistant for a security leak, which would cost him his diplomatic immunity and leave him vulnerable. The assistant poisoned the champagne during a brief balcony visit.", keyEvidenceIds: ["ev-080-1","ev-080-2","ev-080-3","ev-080-4","ev-080-9"] }
};

export const CASE_081: Case = {
  id: "081", number: 81, title: "The Submarine Cable", difficulty: 4,
  briefing: "A technician maintaining an undersea cable is found dead in his cabin aboard the repair ship. Electrocuted — but the equipment was off. Five crew members were aboard.",
  image: "/cases/case-081.jpeg",
  suspects: [
    { id: "s081a", name: "Captain Reynolds", role: "Captain", emoji: "👨‍✈️", description: "Technician was going to report his negligence.", statement: "I was on the bridge." },
    { id: "s081b", name: "Engineer Patel", role: "Engineer", emoji: "🔧", description: "Technician exposed his fake credentials.", statement: "I was in the engine room." },
    { id: "s081c", name: "Diver Marcus", role: "Diver", emoji: "🤿", description: "Technician was blocking his promotion.", statement: "I was in the equipment bay." },
    { id: "s081d", name: "Cook Elena", role: "Cook", emoji: "👩‍🍳", description: "Technician reported her smuggling.", statement: "I was in the galley." },
    { id: "s081e", name: "First Mate Chen", role: "First Mate", emoji: "🧑‍✈️", description: "Technician was having an affair with his wife.", statement: "I was on the deck." }
  ],
  evidence: [
    { id: "ev-081-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Electrocution","Time: 02:30 AM","Manually rigged wire","Not equipment malfunction"] },
    { id: "ev-081-2", title: "Ship CCTV", type: "cctv", icon: "📹", isKey: true, content: ["02:00 Chen on deck","02:10 Chen walks toward technician's cabin","02:25 Chen exits","02:30 victim found"] },
    { id: "ev-081-3", title: "Rigged Wire", type: "document", icon: "🔌", isKey: true, content: ["Live wire to cabin door handle","Cut with ship's wire cutters","Chen's fingerprints on cutters"] },
    { id: "ev-081-4", title: "Chen's Emails", type: "document", icon: "📧", isKey: true, content: ["Wife confessed affair with technician","Marriage destroyed","Chen sent threatening email"] },
    { id: "ev-081-5", title: "Reynolds's Bridge Log", type: "document", icon: "📋", isKey: false, content: ["Continuous bridge presence","Officer confirms"] },
    { id: "ev-081-6", title: "Patel's Engine Log", type: "document", icon: "📋", isKey: false, content: ["Continuous engine monitoring","Automated logs"] },
    { id: "ev-081-7", title: "Marcus's Equipment Log", type: "document", icon: "📋", isKey: false, content: ["Continuous equipment check","Dive gear timestamps"] },
    { id: "ev-081-8", title: "Elena's Galley Log", type: "document", icon: "📋", isKey: false, content: ["Continuous cooking","Two crew confirm"] },
    { id: "ev-081-9", title: "Chen's Phone", type: "phone", icon: "📱", isKey: true, content: ["02:05 to friend: 'He's gone tonight.'"] },
    { id: "ev-081-10", title: "Wire Cutters", type: "document", icon: "✂️", isKey: true, content: ["Found in Chen's quarters","Metal shavings match wire","Recent use"] }
  ],
  timeline: [
    { time: "02:00", event: "Chen on deck" },
    { time: "02:05", event: "Chen sends text" },
    { time: "02:10", event: "Chen near technician's cabin" },
    { time: "02:20", event: "Chen rigs wire" },
    { time: "02:25", event: "Chen exits" },
    { time: "02:30", event: "Victim electrocuted" },
    { time: "05:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s081e", motive: "Chen's wife confessed to having an affair with the technician. Consumed by rage, Chen rigged a live wire to the technician's door handle, electrocuting him when he returned to his cabin.", keyEvidenceIds: ["ev-081-1","ev-081-2","ev-081-3","ev-081-4","ev-081-9"] }
};

export const CASE_082: Case = {
  id: "082", number: 82, title: "The Paper Mill", difficulty: 3,
  briefing: "At a remote paper mill, the factory owner is found dead in the pulp vat. Blunt force trauma — body placed there after. Five workers were on the night shift.",
  image: "/cases/case-082.jpeg",
  suspects: [
    { id: "s082a", name: "Foreman Olson", role: "Foreman", emoji: "👨‍🏭", description: "Owner was closing the mill.", statement: "I was in the control room." },
    { id: "s082b", name: "Union Rep Kowalski", role: "Union Rep", emoji: "🧔", description: "Owner was going to fire him.", statement: "I was at my desk in the union office." },
    { id: "s082c", name: "Accountant Sarah", role: "Accountant", emoji: "👩‍💼", description: "Owner discovered her embezzlement.", statement: "I was in the accounts office." },
    { id: "s082d", name: "Worker Patel", role: "Worker", emoji: "🧑‍🏭", description: "Owner refused to pay for his injury.", statement: "I was on the assembly line." },
    { id: "s082e", name: "Rival Owner Bergman", role: "Rival Owner", emoji: "💼", description: "Owner wouldn't sell the mill.", statement: "I was at my own mill across town." }
  ],
  evidence: [
    { id: "ev-082-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Blunt force trauma to head","Time: 22:30","Body placed in vat at 23:00","Killed with paper cutter"] },
    { id: "ev-082-2", title: "Mill CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:00 Olson in control room","22:15 Sarah at accounts office","22:20 Sarah walks toward loading dock","22:40 Sarah returns"] },
    { id: "ev-082-3", title: "Paper Cutter", type: "document", icon: "📄", isKey: true, content: ["Victim's blood on blade","Sarah's prints","Found in loading dock"] },
    { id: "ev-082-4", title: "Embezzlement Documents", type: "document", icon: "📄", isKey: true, content: ["Sarah embezzled $800K over 3 years","Owner discovered audit trail","Was going to press charges Monday"] },
    { id: "ev-082-5", title: "Olson's Control Log", type: "document", icon: "📋", isKey: false, content: ["Continuous control room","Video feed confirms"] },
    { id: "ev-082-6", title: "Kowalski's Office Log", type: "document", icon: "📋", isKey: false, content: ["Continuous union office work","Phone logs"] },
    { id: "ev-082-7", title: "Patel's Line Log", type: "document", icon: "📋", isKey: false, content: ["Continuous line work","Two workers confirm"] },
    { id: "ev-082-8", title: "Bergman's Location", type: "document", icon: "📄", isKey: false, content: ["At own mill","Security footage confirms"] },
    { id: "ev-082-9", title: "Sarah's Bank Records", type: "bank", icon: "💳", isKey: true, content: ["$800K in offshore account","Matches embezzlement","Recent attempts to move money"] },
    { id: "ev-082-10", title: "Sarah's Emails", type: "document", icon: "📧", isKey: true, content: ["To accomplice: 'The audit's complete.'","'I can't go to prison.'"] }
  ],
  timeline: [
    { time: "22:00", event: "Olson in control room" },
    { time: "22:15", event: "Sarah at accounts office" },
    { time: "22:20", event: "Sarah walks to loading dock" },
    { time: "22:30", event: "Owner killed with paper cutter" },
    { time: "22:45", event: "Body placed in vat" },
    { time: "22:40", event: "Sarah returns to office" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s082c", motive: "Sarah embezzled $800K over 3 years. Owner's audit discovered the trail and was going to press charges Monday. Sarah killed him with a paper cutter and dumped the body in the pulp vat.", keyEvidenceIds: ["ev-082-1","ev-082-2","ev-082-3","ev-082-4","ev-082-9"] }
};

export const CASE_083: Case = {
  id: "083", number: 83, title: "The Samurai Dojo", difficulty: 4,
  briefing: "At a traditional dojo in Kyoto, the grandmaster is found dead in the meditation room. Poison in his tea. Five students were present for the dawn ceremony.",
  image: "/cases/case-083.jpeg",
  suspects: [
    { id: "s083a", name: "Hiroshi Tanaka", role: "Senior Student", emoji: "🥋", description: "Being passed over as successor.", statement: "I was in the main dojo training." },
    { id: "s083b", name: "James Wilson", role: "American Student", emoji: "🧔", description: "Grandmaster was going to expel him.", statement: "I was in my quarters." },
    { id: "s083c", name: "Yuki Nakamura", role: "Daughter", emoji: "👩", description: "Grandmaster refused her inheritance.", statement: "I was preparing the tea ceremony." },
    { id: "s083d", name: "Master Tanaka", role: "Rival Master", emoji: "🧑‍🦳", description: "Grandmaster stole his students.", statement: "I was at my own dojo across town." },
    { id: "s083e", name: "Sato Kimura", role: "Housekeeper", emoji: "👩‍🦳", description: "Grandmaster accused her of theft.", statement: "I was cleaning the guest rooms." }
  ],
  evidence: [
    { id: "ev-083-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Aconite poisoning","Ingested via tea","Time: 05:30 AM (dawn)"] },
    { id: "ev-083-2", title: "Dojo CCTV", type: "cctv", icon: "📹", isKey: true, content: ["05:00 Hiroshi in main dojo","05:15 James in quarters","05:20 Yuki prepares tea","05:25 Yuki serves tea"] },
    { id: "ev-083-3", title: "Tea Cup", type: "document", icon: "🍵", isKey: true, content: ["Aconite residue","Partial print — Yuki","Yuki served tea directly"] },
    { id: "ev-083-4", title: "Grandmaster's Will", type: "document", icon: "📄", isKey: true, content: ["Yuki removed from will","Replaced by a charity","Changed 3 days before murder"] },
    { id: "ev-083-5", title: "Hiroshi's Training Log", type: "document", icon: "📋", isKey: false, content: ["Continuous training","Students confirm presence"] },
    { id: "ev-083-6", title: "James's Quarter Log", type: "document", icon: "📋", isKey: false, content: ["In quarters writing letter","Time stamps"] },
    { id: "ev-083-7", title: "Master Tanaka's Alibi", type: "document", icon: "📄", isKey: false, content: ["At own dojo","Students confirm"] },
    { id: "ev-083-8", title: "Sato's Housekeeping Log", type: "document", icon: "📋", isKey: false, content: ["Continuous cleaning","Two guests confirm"] },
    { id: "ev-083-9", title: "Aconite Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Yuki's room","Grown in her private garden","Recent preparation"] },
    { id: "ev-083-10", title: "Yuki's Diary", type: "document", icon: "📔", isKey: true, content: ["'He took everything from me.'","'I have nothing left to lose.'"] }
  ],
  timeline: [
    { time: "05:00", event: "Hiroshi in main dojo" },
    { time: "05:15", event: "James in quarters" },
    { time: "05:20", event: "Yuki prepares tea" },
    { time: "05:25", event: "Yuki serves tea" },
    { time: "05:30", event: "Grandmaster drinks" },
    { time: "05:45", event: "Grandmaster collapses" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s083c", motive: "Grandmaster removed Yuki from his will 3 days before, replacing her with a charity. In rage and betrayal, she poisoned his tea with aconite from her own garden.", keyEvidenceIds: ["ev-083-1","ev-083-2","ev-083-3","ev-083-4","ev-083-10"] }
};

export const CASE_084: Case = {
  id: "084", number: 84, title: "The Vineyard Wedding", difficulty: 4,
  briefing: "At a destination wedding in Tuscany, the bride's father is found dead in the vineyard. Snake bite — but no snakes in the area. Five guests were staying at the estate.",
  image: "/cases/case-084.jpeg",
  suspects: [
    { id: "s084a", name: "Groom Marco", role: "Groom", emoji: "🤵", description: "Father opposed the marriage.", statement: "I was at the rehearsal dinner." },
    { id: "s084b", name: "Bride Isabella", role: "Bride", emoji: "👰", description: "Father was controlling her inheritance.", statement: "I was with my bridesmaids." },
    { id: "s084c", name: "Best Man Luca", role: "Best Man", emoji: "🧑", description: "Father exposed his criminal record.", statement: "I was at the bar." },
    { id: "s084d", name: "Ex-Boyfriend Alessandro", role: "Ex-Boyfriend", emoji: "🧔", description: "Crashed the wedding.", statement: "I wasn't even at the estate." },
    { id: "s084e", name: "Estate Manager Paolo", role: "Estate Manager", emoji: "💼", description: "Father was going to sell the estate.", statement: "I was doing rounds on the property." }
  ],
  evidence: [
    { id: "ev-084-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Death by snake venom","Species: Monocled cobra","Not native to Italy","Time: 17:30"] },
    { id: "ev-084-2", title: "Estate CCTV", type: "cctv", icon: "📹", isKey: true, content: ["17:00 Marco at rehearsal dinner","17:15 Paolo doing rounds","17:20 Marco walks toward vineyard","17:35 Marco returns from vineyard"] },
    { id: "ev-084-3", title: "Venom Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Marco's hotel room","Cobra venom vial","Smuggled from Thailand"] },
    { id: "ev-084-4", title: "Father's Objection", type: "document", icon: "📄", isKey: true, content: ["Formal objection to marriage","Threatened to cut Isabella from will","Prenup blocked Marco from inheriting"] },
    { id: "ev-084-5", title: "Isabella's Bridesmaid Log", type: "witness", icon: "📝", isKey: false, content: ["Continuous with bridesmaids","Photos timestamped"] },
    { id: "ev-084-6", title: "Luca's Bar Tab", type: "bank", icon: "🧾", isKey: false, content: ["Continuous bar presence","Bartender confirms"] },
    { id: "ev-084-7", title: "Alessandro's Location", type: "document", icon: "📄", isKey: false, content: ["In Milan","Hotel booking confirmed"] },
    { id: "ev-084-8", title: "Paolo's Rounds Log", type: "document", icon: "📋", isKey: false, content: ["Continuous rounds","Automated GPS log"] },
    { id: "ev-084-9", title: "Marco's Search History", type: "phone", icon: "📱", isKey: true, content: ["'Cobra venom effects'","'How to inject venom'","'Undetectable snake bite death'"] },
    { id: "ev-084-10", title: "Marco's Emails", type: "document", icon: "📧", isKey: true, content: ["To sister: 'If her father stops this wedding, I have nothing.'","'I'll do anything.'"] }
  ],
  timeline: [
    { time: "17:00", event: "Marco at rehearsal" },
    { time: "17:15", event: "Paolo doing rounds" },
    { time: "17:20", event: "Marco walks to vineyard" },
    { time: "17:30", event: "Marco injects venom" },
    { time: "17:35", event: "Marco returns" },
    { time: "18:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s084a", motive: "The bride's father opposed the marriage and threatened to disinherit Isabella, leaving Marco with nothing. Marco smuggled cobra venom from Thailand and injected the father during a vineyard confrontation.", keyEvidenceIds: ["ev-084-1","ev-084-2","ev-084-3","ev-084-4","ev-084-9"] }
};

export const CASE_085: Case = {
  id: "085", number: 85, title: "The Masquerade Ball", difficulty: 3,
  briefing: "At a New Year's Eve masquerade ball, a wealthy industrialist is found dead in the wine cellar. Stabbed through the heart. Five guests were seen leaving the ballroom.",
  image: "/cases/case-085.jpeg",
  suspects: [
    { id: "s085a", name: "Business Rival Sterling", role: "Business Rival", emoji: "💼", description: "Industrialist was destroying his company.", statement: "I was on the dance floor." },
    { id: "s085b", name: "Mistress Sophia", role: "Mistress", emoji: "👩‍🦰", description: "He was ending the affair.", statement: "I was at the champagne bar." },
    { id: "s085c", name: "Son Charles", role: "Son", emoji: "🧑", description: "Being disinherited.", statement: "I was outside smoking." },
    { id: "s085d", name: "Daughter Margaret", role: "Daughter", emoji: "👩", description: "He was blocking her marriage.", statement: "I was in the powder room." },
    { id: "s085e", name: "Butler James", role: "Butler", emoji: "🤵", description: "Industrialist discovered his theft.", statement: "I was serving guests in the ballroom." }
  ],
  evidence: [
    { id: "ev-085-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Stabbed through heart","Time: 23:30","Single thrust","No defensive wounds"] },
    { id: "ev-085-2", title: "Cellar Door CCTV", type: "cctv", icon: "📹", isKey: true, content: ["23:00 Sterling dancing","23:10 Sophia at champagne bar","23:15 Charles outside smoking","23:20 Charles enters side door"] },
    { id: "ev-085-3", title: "Letter Opener", type: "document", icon: "🗡️", isKey: true, content: ["Victim's blood on blade","Charles's prints","From victim's desk"] },
    { id: "ev-085-4", title: "New Will Draft", type: "document", icon: "📄", isKey: true, content: ["Charles being disinherited","$50M estate going to charity","Signed 2 days before"] },
    { id: "ev-085-5", title: "Sterling's Dance Log", type: "document", icon: "📋", isKey: false, content: ["Continuous dancing","Multiple guests confirm"] },
    { id: "ev-085-6", title: "Sophia's Bar Log", type: "document", icon: "📋", isKey: false, content: ["Continuous bar presence","Bartender confirms"] },
    { id: "ev-085-7", title: "Margaret's Powder Room Log", type: "document", icon: "📋", isKey: false, content: ["Continuous presence","Two women confirm"] },
    { id: "ev-085-8", title: "James's Service Log", type: "document", icon: "📋", isKey: false, content: ["Continuous service","Staff confirm"] },
    { id: "ev-085-9", title: "Charles's Debts", type: "bank", icon: "💳", isKey: true, content: ["$2M gambling debts","No inheritance = no way out","Called loan shark 3 days before"] },
    { id: "ev-085-10", title: "Charles's Phone", type: "phone", icon: "📱", isKey: true, content: ["23:25 to sister: 'It's done. He won't disinherit me now.'"] }
  ],
  timeline: [
    { time: "23:00", event: "Sterling dancing" },
    { time: "23:10", event: "Sophia at bar" },
    { time: "23:15", event: "Charles outside smoking" },
    { time: "23:20", event: "Charles enters side door" },
    { time: "23:30", event: "Victim stabbed" },
    { time: "23:35", event: "Charles exits" },
    { time: "00:30", event: "Body discovered" }
  ],
  solution: { culpritId: "s085c", motive: "Father disinherited Charles, leaving him unable to pay $2M gambling debts. Charles entered through a side door during his 'smoking break' and killed his father with a letter opener.", keyEvidenceIds: ["ev-085-1","ev-085-2","ev-085-3","ev-085-4","ev-085-10"] }
};

export const CASE_086: Case = {
  id: "086", number: 86, title: "The Observatory", difficulty: 4,
  briefing: "At a mountain observatory, an astronomer is found dead in the telescope dome. Suffocated — but the dome was fully ventilated. Five scientists were at the facility.",
  image: "/cases/case-086.jpeg",
  suspects: [
    { id: "s086a", name: "Dr. Chen", role: "Astronomer", emoji: "👨‍🔬", description: "Victim was claiming his discovery.", statement: "I was in the control room." },
    { id: "s086b", name: "Dr. Volkov", role: "Astronomer", emoji: "👩‍🔬", description: "Victim exposed his fraud.", statement: "I was in the data lab." },
    { id: "s086c", name: "Tech Sarah", role: "Technician", emoji: "👩‍🔧", description: "Victim reported her harassment.", statement: "I was in the maintenance bay." },
    { id: "s086d", name: "Post-Doc Ahmed", role: "Post-Doc", emoji: "🧑‍🔬", description: "Victim was blocking his career.", statement: "I was in the library." },
    { id: "s086e", name: "Cook Maria", role: "Cook", emoji: "👩‍🍳", description: "Victim discovered her smuggling.", statement: "I was in the kitchen." }
  ],
  evidence: [
    { id: "ev-086-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Suffocation","Time: 01:00 AM","Bag over head","No struggle"] },
    { id: "ev-086-2", title: "Observatory CCTV", type: "cctv", icon: "📹", isKey: true, content: ["00:30 Chen in control room","00:45 Volkov in data lab","00:50 Chen walks toward dome","01:00 dome door opens"] },
    { id: "ev-086-3", title: "Plastic Bag", type: "document", icon: "🛍️", isKey: true, content: ["Found in dome","Chen's fingerprints","From observatory storage"] },
    { id: "ev-086-4", title: "Victim's Data", type: "document", icon: "📄", isKey: true, content: ["Chen was claiming victim's discovery","Victim had proof","Was going to expose at conference"] },
    { id: "ev-086-5", title: "Volkov's Lab Log", type: "document", icon: "📋", isKey: false, content: ["Continuous data work","Computer timestamps"] },
    { id: "ev-086-6", title: "Sarah's Maintenance Log", type: "document", icon: "📋", isKey: false, content: ["Continuous maintenance","Two staff confirm"] },
    { id: "ev-086-7", title: "Ahmed's Library Log", type: "document", icon: "📋", isKey: false, content: ["Continuous reading","Library camera"] },
    { id: "ev-086-8", title: "Maria's Kitchen Log", type: "document", icon: "📋", isKey: false, content: ["Continuous kitchen work","Assistant confirms"] },
    { id: "ev-086-9", title: "Chen's Emails", type: "document", icon: "📧", isKey: true, content: ["To colleague: 'The discovery is mine.'","'He's stealing it.'"] },
    { id: "ev-086-10", title: "Chen's Phone", type: "phone", icon: "📱", isKey: true, content: ["00:40 to unknown: 'One hour.'","01:15: 'Done.'"] }
  ],
  timeline: [
    { time: "00:30", event: "Chen in control room" },
    { time: "00:40", event: "Chen sends text" },
    { time: "00:50", event: "Chen walks to dome" },
    { time: "01:00", event: "Victim suffocated" },
    { time: "01:15", event: "Chen texts 'Done'" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s086a", motive: "Victim had proof that Chen was claiming the victim's astronomical discovery as his own. Facing exposure at an upcoming conference, Chen suffocated him with a plastic bag in the dome.", keyEvidenceIds: ["ev-086-1","ev-086-2","ev-086-3","ev-086-4","ev-086-9"] }
};

export const CASE_087: Case = {
  id: "087", number: 87, title: "The Yacht Club", difficulty: 3,
  briefing: "At an exclusive yacht club regatta, a champion sailor is found dead on his boat. Drowned — but the weather was calm. Five club members were at the marina.",
  image: "/cases/case-087.jpeg",
  suspects: [
    { id: "s087a", name: "Carlos Mendez", role: "Rival Sailor", emoji: "⛵", description: "Champion beat him every race.", statement: "I was on my own boat." },
    { id: "s087b", name: "Nicole Sterling", role: "Ex-Wife", emoji: "👩", description: "Champion refused to pay settlement.", statement: "I was at the clubhouse." },
    { id: "s087c", name: "Crew Member Chen", role: "Crew", emoji: "🧑‍✈️", description: "Champion was firing him.", statement: "I was doing maintenance." },
    { id: "s087d", name: "Investor David", role: "Investor", emoji: "💼", description: "Champion was exposing his fraud.", statement: "I was in the marina office." },
    { id: "s087e", name: "Manager Patricia", role: "Club Manager", emoji: "👩‍💼", description: "Champion was suing the club.", statement: "I was at the front desk." }
  ],
  evidence: [
    { id: "ev-087-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Drowning","Time: 20:00","Head injury pre-mortem","Foul play"] },
    { id: "ev-087-2", title: "Marina CCTV", type: "cctv", icon: "📹", isKey: true, content: ["19:30 Carlos on his boat","19:45 Chen in maintenance bay","19:50 Carlos walks toward champion's boat","20:10 Carlos returns"] },
    { id: "ev-087-3", title: "Boat Hook", type: "document", icon: "🪝", isKey: true, content: ["Victim's blood on it","Carlos's prints","Found on champion's boat"] },
    { id: "ev-087-4", title: "Race Records", type: "document", icon: "📄", isKey: true, content: ["Carlos lost 15 straight races","Champion publicly humiliated him","Sponsorship lost"] },
    { id: "ev-087-5", title: "Nicole's Club Log", type: "document", icon: "📋", isKey: false, content: ["At clubhouse","Bartender confirms"] },
    { id: "ev-087-6", title: "Chen's Maintenance Log", type: "document", icon: "📋", isKey: false, content: ["Continuous maintenance","Two colleagues confirm"] },
    { id: "ev-087-7", title: "David's Office Log", type: "document", icon: "📋", isKey: false, content: ["Continuous office work","Phone logs"] },
    { id: "ev-087-8", title: "Patricia's Front Desk Log", type: "document", icon: "📋", isKey: false, content: ["Continuous desk presence","Guests confirm"] },
    { id: "ev-087-9", title: "Carlos's Emails", type: "document", icon: "📧", isKey: true, content: ["To brother: 'He's ruined me.'","'I'll never sail again.'"] },
    { id: "ev-087-10", title: "Carlos's Phone", type: "phone", icon: "📱", isKey: true, content: ["20:15 to wife: 'It's over.'"] }
  ],
  timeline: [
    { time: "19:30", event: "Carlos on his boat" },
    { time: "19:45", event: "Chen in maintenance" },
    { time: "19:50", event: "Carlos walks to champion's boat" },
    { time: "20:00", event: "Champion killed" },
    { time: "20:10", event: "Carlos returns" },
    { time: "21:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s087a", motive: "Champion beat Carlos 15 straight races and publicly humiliated him, causing him to lose major sponsorships. Carlos used a boat hook to kill him and dumped the body overboard.", keyEvidenceIds: ["ev-087-1","ev-087-2","ev-087-3","ev-087-4","ev-087-9"] }
};

export const CASE_088: Case = {
  id: "088", number: 88, title: "The Diamond Mine", difficulty: 4,
  briefing: "At a diamond mine in South Africa, the mine foreman is found dead at the bottom of a shaft. Fall — but the safety line was cut. Five miners were working that shift.",
  image: "/cases/case-088.jpeg",
  suspects: [
    { id: "s088a", name: "Miner Peter", role: "Miner", emoji: "⛏️", description: "Foreman was firing him.", statement: "I was in the north tunnel." },
    { id: "s088b", name: "Johannes Botha", role: "Union Leader", emoji: "🧔", description: "Foreman exposed his corruption.", statement: "I was at the union office." },
    { id: "s088c", name: "Thabo Nkosi", role: "Security Chief", emoji: "💪", description: "Foreman discovered his diamond theft.", statement: "I was at the guard post." },
    { id: "s088d", name: "Marie Fourie", role: "Engineer", emoji: "👩‍🔧", description: "Foreman blamed her for a cave-in.", statement: "I was at the surface control room." },
    { id: "s088e", name: "Kruger Van Der Merwe", role: "Rival Mine Owner", emoji: "💼", description: "Foreman was expanding the mine.", statement: "I was at my own mine." }
  ],
  evidence: [
    { id: "ev-088-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Fall from height","Time: 14:00","Bruising on shoulder — struggle","Safety line cut"] },
    { id: "ev-088-2", title: "Shaft CCTV", type: "cctv", icon: "📹", isKey: true, content: ["13:30 Peter in north tunnel","13:45 Thabo at guard post","13:50 Thabo walks toward shaft","14:05 Thabo returns"] },
    { id: "ev-088-3", title: "Safety Line", type: "document", icon: "🪢", isKey: true, content: ["Cut cleanly","Thabo's boot prints near anchor","Cut with mining tool"] },
    { id: "ev-088-4", title: "Diamond Theft Evidence", type: "document", icon: "💎", isKey: true, content: ["Foreman had proof Thabo was smuggling diamonds","Coordinated with police","Arrest scheduled"] },
    { id: "ev-088-5", title: "Peter's Tunnel Log", type: "document", icon: "📋", isKey: false, content: ["Continuous tunnel work","Two miners confirm"] },
    { id: "ev-088-6", title: "Johannes's Union Log", type: "document", icon: "📋", isKey: false, content: ["At union office","Secretary confirms"] },
    { id: "ev-088-7", title: "Marie's Control Log", type: "document", icon: "📋", isKey: false, content: ["Continuous control room","Video feed"] },
    { id: "ev-088-8", title: "Kruger's Location", type: "document", icon: "📄", isKey: false, content: ["At own mine","Security confirms"] },
    { id: "ev-088-9", title: "Thabo's Bank Records", type: "bank", icon: "💳", isKey: true, content: ["$500K in unexplained deposits","Matches smuggled diamond sales","Recent activity"] },
    { id: "ev-088-10", title: "Thabo's Phone", type: "phone", icon: "📱", isKey: true, content: ["13:40 to accomplice: 'He won't talk.'","14:10: 'Done.'"] }
  ],
  timeline: [
    { time: "13:30", event: "Peter in north tunnel" },
    { time: "13:45", event: "Thabo at guard post" },
    { time: "13:50", event: "Thabo walks to shaft" },
    { time: "14:00", event: "Thabo cuts safety line" },
    { time: "14:05", event: "Thabo returns" },
    { time: "14:00", event: "Foreman falls" },
    { time: "15:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s088c", motive: "Foreman had proof Thabo was smuggling diamonds and had coordinated with police for an arrest. Thabo cut the foreman's safety line during a routine shift check.", keyEvidenceIds: ["ev-088-1","ev-088-2","ev-088-3","ev-088-4","ev-088-9"] }
};

export const CASE_089: Case = {
  id: "089", number: 89, title: "The Book Festival", difficulty: 3,
  briefing: "At a major literary festival, a bestselling author is found dead in his signing booth. Poison in his coffee. Five people from the festival had access.",
  image: "/cases/case-089.jpeg",
  suspects: [
    { id: "s089a", name: "Rival Author Stone", role: "Rival Author", emoji: "📚", description: "Author stole his plot.", statement: "I was at my own signing." },
    { id: "s089b", name: "Editor Marie", role: "Editor", emoji: "👩‍💼", description: "Author was leaving her.", statement: "I was at the publisher's booth." },
    { id: "s089c", name: "Fan Marcus", role: "Fan", emoji: "🧑", description: "Author had filed a restraining order.", statement: "I was outside the hall." },
    { id: "s089d", name: "Agent Patel", role: "Agent", emoji: "🧑‍💼", description: "Author was leaving his agency.", statement: "I was in the green room." },
    { id: "s089e", name: "Publicist Chen", role: "Publicist", emoji: "👩‍💼", description: "Author was going to fire her.", statement: "I was at the press table." }
  ],
  evidence: [
    { id: "ev-089-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Arsenic poisoning","Ingested via coffee","Time: 14:30"] },
    { id: "ev-089-2", title: "Festival CCTV", type: "cctv", icon: "📹", isKey: true, content: ["14:00 Marie at publisher booth","14:10 Patel in green room","14:15 Patel walks toward author's booth","14:25 Patel returns"] },
    { id: "ev-089-3", title: "Coffee Cup", type: "document", icon: "☕", isKey: true, content: ["Arsenic residue","Partial print — Patel","Only Patel's and author's prints"] },
    { id: "ev-089-4", title: "Author's Contract", type: "document", icon: "📄", isKey: true, content: ["Author leaving Patel's agency","Would lose $3M in commissions","New agent already signed"] },
    { id: "ev-089-5", title: "Stone's Signing Log", type: "document", icon: "📋", isKey: false, content: ["Continuous signing","Photos timestamped"] },
    { id: "ev-089-6", title: "Marie's Booth Log", type: "document", icon: "📋", isKey: false, content: ["Continuous at booth","Publisher staff confirm"] },
    { id: "ev-089-7", title: "Marcus's Location", type: "document", icon: "📄", isKey: false, content: ["Outside hall","Security confirms"] },
    { id: "ev-089-8", title: "Chen's Press Log", type: "document", icon: "📋", isKey: false, content: ["Continuous at press table","Two colleagues confirm"] },
    { id: "ev-089-9", title: "Arsenic Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Patel's briefcase","Purchased online","Recent delivery"] },
    { id: "ev-089-10", title: "Patel's Emails", type: "document", icon: "📧", isKey: true, content: ["To partner: 'I'll lose everything.'","'He can't do this to me.'"] }
  ],
  timeline: [
    { time: "14:00", event: "Marie at booth" },
    { time: "14:10", event: "Patel in green room" },
    { time: "14:15", event: "Patel walks to author's booth" },
    { time: "14:20", event: "Patel poisons coffee" },
    { time: "14:25", event: "Patel returns" },
    { time: "14:30", event: "Author drinks" },
    { time: "15:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s089d", motive: "Author was leaving Patel's agency for a new agent, costing Patel $3M in commissions. Patel poisoned his coffee with arsenic during a brief walk to the booth.", keyEvidenceIds: ["ev-089-1","ev-089-2","ev-089-3","ev-089-4","ev-089-9"] }
};

export const CASE_090: Case = {
  id: "090", number: 90, title: "The Air Traffic Control", difficulty: 4,
  briefing: "At an air traffic control tower, the senior controller is found dead at his station. Heart attack — but the autopsy reveals poison. Five controllers were on shift.",
  image: "/cases/case-090.jpeg",
  suspects: [
    { id: "s090a", name: "Controller Reynolds", role: "Controller", emoji: "🎧", description: "Was going to be replaced.", statement: "I was at my station." },
    { id: "s090b", name: "Controller Chen", role: "Controller", emoji: "🧑‍💼", description: "Senior was exposing his mistakes.", statement: "I was on break." },
    { id: "s090c", name: "Supervisor Patel", role: "Supervisor", emoji: "👨‍💼", description: "Senior was going to report him.", statement: "I was in the supervisor's office." },
    { id: "s090d", name: "Technician Marcus", role: "Technician", emoji: "🔧", description: "Senior exposed his theft.", statement: "I was in the server room." },
    { id: "s090e", name: "Trainee Maria", role: "Trainee", emoji: "👩‍✈️", description: "Senior was failing her.", statement: "I was shadowing another controller." }
  ],
  evidence: [
    { id: "ev-090-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Cyanide poisoning","Ingested via coffee","Time: 03:00 AM"] },
    { id: "ev-090-2", title: "Tower CCTV", type: "cctv", icon: "📹", isKey: true, content: ["02:30 Reynolds at station","02:45 Chen on break","02:50 Patel exits office","02:55 Patel walks to coffee station"] },
    { id: "ev-090-3", title: "Coffee Cup", type: "document", icon: "☕", isKey: true, content: ["Cyanide residue","Fingerprint: Patel","Only Patel's and senior's prints"] },
    { id: "ev-090-4", title: "Senior's Report", type: "document", icon: "📄", isKey: true, content: ["Report on Patel's negligence","Would end his career","Filed 3 days before"] },
    { id: "ev-090-5", title: "Reynolds's Station Log", type: "document", icon: "📋", isKey: false, content: ["Continuous at station","Multiple recordings"] },
    { id: "ev-090-6", title: "Chen's Break Log", type: "document", icon: "📋", isKey: false, content: ["Continuous break room","Colleagues confirm"] },
    { id: "ev-090-7", title: "Marcus's Server Log", type: "document", icon: "📋", isKey: false, content: ["Continuous server work","System logs"] },
    { id: "ev-090-8", title: "Maria's Shadow Log", type: "document", icon: "📋", isKey: false, content: ["Shadowing controller","Audio record"] },
    { id: "ev-090-9", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Patel's desk","From old cleaning supplies","Recent access"] },
    { id: "ev-090-10", title: "Patel's Emails", type: "document", icon: "📧", isKey: true, content: ["To wife: 'If the report goes through, I'm done.'","'I can't lose this job.'"] }
  ],
  timeline: [
    { time: "02:30", event: "Reynolds at station" },
    { time: "02:45", event: "Chen on break" },
    { time: "02:50", event: "Patel exits office" },
    { time: "02:55", event: "Patel at coffee station" },
    { time: "02:58", event: "Patel poisons coffee" },
    { time: "03:00", event: "Senior drinks" },
    { time: "04:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s090c", motive: "Senior was filing a negligence report that would end Patel's career. Patel poisoned the coffee with cyanide from old cleaning supplies during a late-night coffee break.", keyEvidenceIds: ["ev-090-1","ev-090-2","ev-090-3","ev-090-4","ev-090-9"] }
};

export const CASE_091: Case = {
  id: "091", number: 91, title: "The Volcano Research", difficulty: 4,
  briefing: "At a volcano research station in Iceland, a geologist is found dead near the crater. Fall — but she was an experienced climber. Five researchers were at the station.",
  image: "/cases/case-091.jpeg",
  suspects: [
    { id: "s091a", name: "Dr. Larsen", role: "Senior Researcher", emoji: "👨‍🔬", description: "She was going to expose his fake data.", statement: "I was in the equipment room." },
    { id: "s091b", name: "Dr. Petrov", role: "Researcher", emoji: "👩‍🔬", description: "She rejected his advances.", statement: "I was in my quarters." },
    { id: "s091c", name: "Tech Ahmed", role: "Technician", emoji: "🔧", description: "She reported his harassment.", statement: "I was fixing the seismic equipment." },
    { id: "s091d", name: "Cook Elena", role: "Cook", emoji: "👩‍🍳", description: "She caught her stealing supplies.", statement: "I was in the kitchen." },
    { id: "s091e", name: "Base Leader Johnson", role: "Base Leader", emoji: "👨‍✈️", description: "She was going to replace him.", statement: "I was in the command room." }
  ],
  evidence: [
    { id: "ev-091-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Fall from crater rim","Time: 06:30 AM","Pre-mortem blow to head","Not an accident"] },
    { id: "ev-091-2", title: "Base CCTV", type: "cctv", icon: "📹", isKey: true, content: ["06:00 Larsen in equipment room","06:10 Larsen exits with climbing gear","06:20 Larsen near crater","06:35 Larsen returns without gear"] },
    { id: "ev-091-3", title: "Climbing Rope", type: "document", icon: "🪢", isKey: true, content: ["Found cut at crater","Larsen's prints","Larsen's boot prints near cut point"] },
    { id: "ev-091-4", title: "Victim's Data", type: "document", icon: "📄", isKey: true, content: ["Larsen falsified 5 years of research","Victim had proof","Was going to report to university"] },
    { id: "ev-091-5", title: "Petrov's Alibi", type: "witness", icon: "📝", isKey: false, content: ["Two researchers confirm sleeping","Continuous presence"] },
    { id: "ev-091-6", title: "Ahmed's Equipment Log", type: "document", icon: "📋", isKey: false, content: ["Continuous equipment work","Automated system logs"] },
    { id: "ev-091-7", title: "Elena's Kitchen Log", type: "document", icon: "📋", isKey: false, content: ["Continuous meal prep","Two staff confirm"] },
    { id: "ev-091-8", title: "Johnson's Command Log", type: "document", icon: "📋", isKey: false, content: ["Continuous monitoring","Two operators confirm"] },
    { id: "ev-091-9", title: "Larsen's Emails", type: "document", icon: "📧", isKey: true, content: ["To dean: 'She must be stopped.'","'Before the paper publishes.'"] },
    { id: "ev-091-10", title: "Larsen's Boots", type: "document", icon: "👢", isKey: true, content: ["Volcanic ash on them","Fresh from crater rim","He claimed indoors all morning"] }
  ],
  timeline: [
    { time: "06:00", event: "Larsen in equipment room" },
    { time: "06:10", event: "Larsen exits with gear" },
    { time: "06:20", event: "Larsen near crater" },
    { time: "06:25", event: "Victim pushed, rope cut" },
    { time: "06:35", event: "Larsen returns without gear" },
    { time: "08:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s091a", motive: "Victim had proof Larsen falsified 5 years of research. He lured her to the crater with a fake equipment emergency, struck her, and cut her rope to stage an accident.", keyEvidenceIds: ["ev-091-1","ev-091-2","ev-091-3","ev-091-4","ev-091-9"] }
};

export const CASE_092: Case = {
  id: "092", number: 92, title: "The Perfume Factory", difficulty: 3,
  briefing: "At a luxury perfume factory in Grasse, France, the master perfumer is found dead in her lab. Poison — inhaled through an unmarked bottle. Five apprentices were in the building.",
  image: "/cases/case-092.jpeg",
  suspects: [
    { id: "s092a", name: "Apprentice Marie", role: "Apprentice", emoji: "👩‍🔬", description: "Was going to be dismissed.", statement: "I was in the blending room." },
    { id: "s092b", name: "Apprentice Jean", role: "Apprentice", emoji: "🧑‍🔬", description: "She stole his formula.", statement: "I was in the raw materials room." },
    { id: "s092c", name: "Rival Perfumer Sofia", role: "Rival Perfumer", emoji: "👩‍🎨", description: "She exposed her fake credentials.", statement: "I was at my own lab in Paris." },
    { id: "s092d", name: "Investor Mr. Blanc", role: "Investor", emoji: "💼", description: "She refused to sell her formula.", statement: "I was in the executive office." },
    { id: "s092e", name: "Lab Tech Chen", role: "Lab Technician", emoji: "🔬", description: "She reported him for theft.", statement: "I was in the storage room." }
  ],
  evidence: [
    { id: "ev-092-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Cyanide poisoning","Inhaled via unmarked bottle","Time: 15:00"] },
    { id: "ev-092-2", title: "Lab CCTV", type: "cctv", icon: "📹", isKey: true, content: ["14:30 Marie in blending room","14:40 Jean in raw materials","14:45 Marie walks to master lab","15:05 Marie returns"] },
    { id: "ev-092-3", title: "Unmarked Bottle", type: "document", icon: "🧴", isKey: true, content: ["Cyanide inside","Marie's prints","Marie had access to chemical storage"] },
    { id: "ev-092-4", title: "Dismissal Letter", type: "document", icon: "📄", isKey: true, content: ["Marie being dismissed","Effective next week","Reason: repeated mistakes"] },
    { id: "ev-092-5", title: "Jean's Formula", type: "document", icon: "📄", isKey: false, content: ["Formula stolen by master","But Jean in raw materials continuously"] },
    { id: "ev-092-6", title: "Sofia's Location", type: "document", icon: "📄", isKey: false, content: ["In Paris","Train ticket confirms"] },
    { id: "ev-092-7", title: "Blanc's Office Log", type: "document", icon: "📋", isKey: false, content: ["Continuous office presence","Secretary confirms"] },
    { id: "ev-092-8", title: "Chen's Storage Log", type: "document", icon: "📋", isKey: false, content: ["Continuous storage work","Inventory timestamps"] },
    { id: "ev-092-9", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["From chemical cabinet","Only Marie's code used at 14:45","Not on her schedule"] },
    { id: "ev-092-10", title: "Marie's Emails", type: "document", icon: "📧", isKey: true, content: ["To friend: 'She's firing me.'","'My career is over.'"] }
  ],
  timeline: [
    { time: "14:30", event: "Marie in blending room" },
    { time: "14:40", event: "Jean in raw materials" },
    { time: "14:45", event: "Marie walks to master lab" },
    { time: "14:50", event: "Marie releases cyanide" },
    { time: "15:00", event: "Master perfumer inhales" },
    { time: "15:05", event: "Marie returns" },
    { time: "16:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s092a", motive: "Marie was being dismissed for repeated mistakes, ending her career. She released cyanide into the master perfumer's private lab through the ventilation system.", keyEvidenceIds: ["ev-092-1","ev-092-2","ev-092-3","ev-092-4","ev-092-9"] }
};

export const CASE_093: Case = {
  id: "093", number: 93, title: "The Coalmine Disaster", difficulty: 4,
  briefing: "After a mine collapse in West Virginia, the mine owner is found dead in his office. Beaten to death. Five people had lost family in the collapse. But only five had access to his office.",
  image: "/cases/case-093.jpeg",
  suspects: [
    { id: "s093a", name: "Sarah Mitchell", role: "Miner's Widow", emoji: "👩‍🦰", description: "Lost husband in the collapse.", statement: "I was at the memorial service." },
    { id: "s093b", name: "Hank Wilson", role: "Union Leader", emoji: "🧔", description: "His brother died in the collapse.", statement: "I was at the union hall." },
    { id: "s093c", name: "Charles Bennett", role: "Son", emoji: "🧑", description: "Was being disinherited.", statement: "I was at a hotel downtown." },
    { id: "s093d", name: "Manager Patel", role: "Mine Manager", emoji: "👨‍💼", description: "Was going to be fired.", statement: "I was at the courthouse." },
    { id: "s093e", name: "Journalist Emma", role: "Journalist", emoji: "📰", description: "Was writing an exposé.", statement: "I was at my newspaper office." }
  ],
  evidence: [
    { id: "ev-093-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Beaten to death","Time: 14:00","Weapon: coal pick","Multiple blows"] },
    { id: "ev-093-2", title: "Office CCTV", type: "cctv", icon: "📹", isKey: true, content: ["13:30 Sarah leaves memorial","13:45 Sarah drives toward office","13:55 Sarah enters office","14:20 Sarah exits with blood on jacket"] },
    { id: "ev-093-3", title: "Coal Pick", type: "document", icon: "⛏️", isKey: true, content: ["Victim's blood on it","Sarah's fingerprints","Husband's mining tool"] },
    { id: "ev-093-4", title: "Safety Negligence Report", type: "document", icon: "📄", isKey: true, content: ["Owner ignored safety warnings","12 miners died","Sarah's husband was one"] },
    { id: "ev-093-5", title: "Hank's Union Log", type: "document", icon: "📋", isKey: false, content: ["Continuous union hall presence","Two members confirm"] },
    { id: "ev-093-6", title: "Charles's Hotel Log", type: "document", icon: "📄", isKey: false, content: ["At hotel downtown","Front desk confirms"] },
    { id: "ev-093-7", title: "Patel's Court Log", type: "document", icon: "📋", isKey: false, content: ["At courthouse","Judge confirms"] },
    { id: "ev-093-8", title: "Emma's Office Log", type: "document", icon: "📋", isKey: false, content: ["At newspaper office","Editor confirms"] },
    { id: "ev-093-9", title: "Sarah's Bank Records", type: "bank", icon: "💳", isKey: true, content: ["Husband's life insurance denied","Owner's company refused payout","Financial ruin"] },
    { id: "ev-093-10", title: "Sarah's Diary", type: "document", icon: "📔", isKey: true, content: ["'He killed my husband.'","'He'll pay for what he did.'"] }
  ],
  timeline: [
    { time: "13:30", event: "Sarah leaves memorial" },
    { time: "13:45", event: "Sarah drives to office" },
    { time: "13:55", event: "Sarah enters owner's office" },
    { time: "14:00", event: "Owner beaten to death" },
    { time: "14:20", event: "Sarah exits with blood" },
    { time: "16:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s093a", motive: "Owner ignored safety warnings that killed 12 miners including Sarah's husband, and then refused the life insurance payout. Sarah killed him with her husband's coal pick during a confrontation.", keyEvidenceIds: ["ev-093-1","ev-093-2","ev-093-3","ev-093-4","ev-093-9"] }
};

export const CASE_094: Case = {
  id: "094", number: 94, title: "The Ice Rink", difficulty: 3,
  briefing: "At an Olympic training facility, a figure skating champion is found dead on the ice. Blunt force trauma — but she was alone on the rink. Five skaters were in the building.",
  image: "/cases/case-094.jpeg",
  suspects: [
    { id: "s094a", name: "Anna Petrova", role: "Rival Skater", emoji: "⛸️", description: "Champion was taking her spot.", statement: "I was in the locker room." },
    { id: "s094b", name: "Coach Volkov", role: "Coach", emoji: "🧑‍🏫", description: "Champion was leaving him.", statement: "I was in the coaches' room." },
    { id: "s094c", name: "Choreographer Sofia", role: "Choreographer", emoji: "🎭", description: "Champion was stealing her routines.", statement: "I was in the music room." },
    { id: "s094d", name: "Physio Marcus", role: "Physiotherapist", emoji: "💆", description: "Champion reported him.", statement: "I was in the treatment room." },
    { id: "s094e", name: "Father Viktor", role: "Father", emoji: "🧔", description: "Champion was going to cut him off.", statement: "I was in the parking lot." }
  ],
  evidence: [
    { id: "ev-094-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Blunt force trauma to skull","Time: 05:45 AM","Weapon: skate blade guard","Single blow"] },
    { id: "ev-094-2", title: "Rink CCTV", type: "cctv", icon: "📹", isKey: true, content: ["05:20 Anna in locker room","05:30 Anna walks toward rink","05:40 Anna exits rink","05:45 champion found"] },
    { id: "ev-094-3", title: "Skate Guard", type: "document", icon: "⛸️", isKey: true, content: ["Victim's blood on it","Anna's fingerprints","Found near rink"] },
    { id: "ev-094-4", title: "Olympic Roster", type: "document", icon: "📄", isKey: true, content: ["Anna was alternate","Champion took the spot","Anna lost her only chance"] },
    { id: "ev-094-5", title: "Volkov's Room Log", type: "document", icon: "📋", isKey: false, content: ["Continuous coaches room presence","Assistant confirms"] },
    { id: "ev-094-6", title: "Sofia's Music Log", type: "document", icon: "📋", isKey: false, content: ["Continuous music editing","Computer timestamps"] },
    { id: "ev-094-7", title: "Marcus's Treatment Log", type: "document", icon: "📋", isKey: false, content: ["Continuous treatment","Patient confirms"] },
    { id: "ev-094-8", title: "Viktor's Location", type: "document", icon: "📄", isKey: false, content: ["Parking lot footage","Continuous presence"] },
    { id: "ev-094-9", title: "Anna's Emails", type: "document", icon: "📧", isKey: true, content: ["To mother: 'She took everything from me.'","'I'll never get another chance.'"] },
    { id: "ev-094-10", title: "Anna's Phone", type: "phone", icon: "📱", isKey: true, content: ["05:25 to friend: 'It's happening.'","05:50: 'Done.'"] }
  ],
  timeline: [
    { time: "05:20", event: "Anna in locker room" },
    { time: "05:25", event: "Anna sends text" },
    { time: "05:30", event: "Anna walks to rink" },
    { time: "05:35", event: "Champion struck with skate guard" },
    { time: "05:40", event: "Anna exits rink" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s094a", motive: "Champion took Anna's only Olympic spot, ending her career. Anna confronted her on the early morning ice and struck her with a skate guard.", keyEvidenceIds: ["ev-094-1","ev-094-2","ev-094-3","ev-094-4","ev-094-10"] }
};

export const CASE_095: Case = {
  id: "095", number: 95, title: "The Monastery Wine Cellar", difficulty: 4,
  briefing: "At a Trappist monastery in Belgium, the brewmaster monk is found dead in the cellar. Poison in the communion wine. Five monks had access.",
  image: "/cases/case-095.jpeg",
  suspects: [
    { id: "s095a", name: "Brother Paul", role: "Cellarer", emoji: "🧔", description: "Brewmaster was going to expose his theft.", statement: "I was in the garden." },
    { id: "s095b", name: "Brother Thomas", role: "Assistant", emoji: "🧑", description: "Was being replaced as assistant.", statement: "I was in the chapel praying." },
    { id: "s095c", name: "Brother Andrew", role: "Infirmarian", emoji: "👨‍⚕️", description: "Brewmaster reported his drinking.", statement: "I was in the infirmary." },
    { id: "s095d", name: "Brother Francis", role: "Guest Master", emoji: "👴", description: "Brewmaster humiliated him.", statement: "I was in the guest quarters." },
    { id: "s095e", name: "Brother Michael", role: "Novice Master", emoji: "👨‍🏫", description: "Brewmaster was blocking his ordination.", statement: "I was teaching novices." }
  ],
  evidence: [
    { id: "ev-095-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Arsenic poisoning","Ingested via communion wine","Time: 06:00 AM (Matins)"] },
    { id: "ev-095-2", title: "Cellar Door CCTV", type: "cctv", icon: "📹", isKey: true, content: ["05:30 Paul exits garden","05:35 Paul enters cellar","05:45 Paul exits","06:00 Matins begins"] },
    { id: "ev-095-3", title: "Wine Cask", type: "document", icon: "🍷", isKey: true, content: ["Arsenic inside cask","Paul's fingerprints on tap","Recent access"] },
    { id: "ev-095-4", title: "Theft Evidence", type: "document", icon: "📄", isKey: true, content: ["Paul stealing wine sales","Brewmaster discovered","Was going to report to abbot"] },
    { id: "ev-095-5", title: "Thomas's Prayer Log", type: "document", icon: "📋", isKey: false, content: ["Continuous prayer","Two monks confirm"] },
    { id: "ev-095-6", title: "Andrew's Infirmary Log", type: "document", icon: "📋", isKey: false, content: ["Continuous infirmary work","Patient log"] },
    { id: "ev-095-7", title: "Francis's Guest Log", type: "document", icon: "📋", isKey: false, content: ["Continuous guest work","Two guests confirm"] },
    { id: "ev-095-8", title: "Michael's Teaching Log", type: "document", icon: "📋", isKey: false, content: ["Continuous teaching","Five novices confirm"] },
    { id: "ev-095-9", title: "Arsenic Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Paul's room","From monastery garden supplies","Recent access"] },
    { id: "ev-095-10", title: "Paul's Confession", type: "document", icon: "📔", isKey: true, content: ["Written note: 'He'll take everything.'","'I must protect myself.'"] }
  ],
  timeline: [
    { time: "05:30", event: "Paul exits garden" },
    { time: "05:35", event: "Paul enters cellar" },
    { time: "05:40", event: "Paul poisons wine cask" },
    { time: "05:45", event: "Paul exits" },
    { time: "06:00", event: "Matins begins, brewmaster drinks" },
    { time: "06:15", event: "Brewmaster collapses" },
    { time: "07:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s095a", motive: "Brother Paul was stealing wine sales. Brewmaster discovered the theft and was going to report him to the abbot. Paul poisoned the communion wine with arsenic from the monastery garden.", keyEvidenceIds: ["ev-095-1","ev-095-2","ev-095-3","ev-095-4","ev-095-9"] }
};

export const CASE_096: Case = {
  id: "096", number: 96, title: "The Tech Conference", difficulty: 3,
  briefing: "At a major tech conference in San Francisco, a keynote speaker is found dead in his green room. Overdose — but he was a recovering addict with 10 years sober. Five colleagues were in the building.",
  image: "/cases/case-096.jpeg",
  suspects: [
    { id: "s096a", name: "Co-Founder Chen", role: "Co-Founder", emoji: "🧑‍💼", description: "Was going to be ousted.", statement: "I was in the main hall." },
    { id: "s096b", name: "Investor Sterling", role: "Investor", emoji: "💼", description: "Was being exposed for fraud.", statement: "I was at the VIP lounge." },
    { id: "s096c", name: "Assistant Sofia", role: "Assistant", emoji: "👩‍💼", description: "Was being fired.", statement: "I was getting coffee for the speaker." },
    { id: "s096d", name: "Rival CEO Patel", role: "Rival CEO", emoji: "🧔", description: "Was stealing their product.", statement: "I was at my own booth." },
    { id: "s096e", name: "Journalist Emma", role: "Journalist", emoji: "📰", description: "Had damaging evidence.", statement: "I was in the press room." }
  ],
  evidence: [
    { id: "ev-096-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Heroin overdose","Injected","Time: 09:45 AM","Pure grade"] },
    { id: "ev-096-2", title: "Green Room CCTV", type: "cctv", icon: "📹", isKey: true, content: ["09:30 Sofia brings coffee","09:35 Sofia exits","09:40 Sofia returns with envelope","09:42 Sofia exits"] },
    { id: "ev-096-3", title: "Syringe", type: "document", icon: "💉", isKey: true, content: ["Found in trash","Sofia's fingerprints","Contained pure heroin"] },
    { id: "ev-096-4", title: "Termination Letter", type: "document", icon: "📄", isKey: true, content: ["Sofia being fired","Effective that day","Would lose $200K severance"] },
    { id: "ev-096-5", title: "Chen's Alibi", type: "document", icon: "📄", isKey: false, content: ["Continuous main hall presence","Camera confirms"] },
    { id: "ev-096-6", title: "Sterling's VIP Log", type: "document", icon: "📋", isKey: false, content: ["Continuous VIP lounge","Two investors confirm"] },
    { id: "ev-096-7", title: "Patel's Booth Log", type: "document", icon: "📋", isKey: false, content: ["Continuous at own booth","Staff confirms"] },
    { id: "ev-096-8", title: "Emma's Press Log", type: "document", icon: "📋", isKey: false, content: ["Continuous press room","Two journalists confirm"] },
    { id: "ev-096-9", title: "Heroin Source", type: "document", icon: "🧪", isKey: true, content: ["From Sofia's apartment","Purchased through dark web","Credit card trail"] },
    { id: "ev-096-10", title: "Sofia's Text", type: "phone", icon: "📱", isKey: true, content: ["08:50 to boyfriend: 'He's firing me today.'","'I have a plan.'"] }
  ],
  timeline: [
    { time: "09:30", event: "Sofia brings coffee" },
    { time: "09:35", event: "Sofia exits" },
    { time: "09:40", event: "Sofia returns with envelope" },
    { time: "09:42", event: "Sofia injects speaker" },
    { time: "09:45", event: "Speaker dies" },
    { time: "10:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s096c", motive: "Sofia was being fired that day and would lose her $200K severance. She injected her recovering-addict boss with pure heroin to make it look like a relapse.", keyEvidenceIds: ["ev-096-1","ev-096-2","ev-096-3","ev-096-4","ev-096-10"] }
};

export const CASE_097: Case = {
  id: "097", number: 97, title: "The Ballet Company", difficulty: 3,
  briefing: "During a performance of Swan Lake, the prima ballerina collapses on stage. Poison in her water bottle. Five people had access to the wings.",
  image: "/cases/case-097.jpeg",
  suspects: [
    { id: "s097a", name: "Understudy Maria", role: "Understudy", emoji: "🩰", description: "Would take her role.", statement: "I was in my own dressing room." },
    { id: "s097b", name: "Ballet Master Petrov", role: "Ballet Master", emoji: "🧑‍🏫", description: "She was leaving for another company.", statement: "I was in the wings watching." },
    { id: "s097c", name: "Partner Carlos", role: "Partner Dancer", emoji: "🕺", description: "She rejected his advances.", statement: "I was on stage dancing with her." },
    { id: "s097d", name: "Wardrobe Anna", role: "Wardrobe Manager", emoji: "👗", description: "She got her sister fired.", statement: "I was doing costume changes." },
    { id: "s097e", name: "Director Chen", role: "Artistic Director", emoji: "🎭", description: "She was going to sue the company.", statement: "I was in the audience." }
  ],
  evidence: [
    { id: "ev-097-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Cyanide poisoning","Ingested via water bottle","Time: 20:45 (mid-performance)"] },
    { id: "ev-097-2", title: "Wings CCTV", type: "cctv", icon: "📹", isKey: true, content: ["20:30 Petrov in wings","20:35 Maria walks to wings","20:40 Maria near ballerina's water","20:42 Maria returns"] },
    { id: "ev-097-3", title: "Water Bottle", type: "document", icon: "💧", isKey: true, content: ["Cyanide residue","Maria's fingerprints","Handle also handled by ballerina"] },
    { id: "ev-097-4", title: "Understudy Contract", type: "document", icon: "📄", isKey: true, content: ["Maria understudy for 6 years","Never given lead","Would take over if lead injured"] },
    { id: "ev-097-5", title: "Petrov's Wings Log", type: "document", icon: "📋", isKey: false, content: ["Continuous wings presence","Video confirms"] },
    { id: "ev-097-6", title: "Carlos's Stage Log", type: "document", icon: "📋", isKey: false, content: ["On stage performing","Recording confirms"] },
    { id: "ev-097-7", title: "Anna's Wardrobe Log", type: "document", icon: "📋", isKey: false, content: ["Continuous costume changes","Two assistants confirm"] },
    { id: "ev-097-8", title: "Chen's Audience Log", type: "document", icon: "📋", isKey: false, content: ["In audience","Photos confirm"] },
    { id: "ev-097-9", title: "Cyanide Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Maria's makeup kit","Purchased 3 days ago","Used theatrical grade"] },
    { id: "ev-097-10", title: "Maria's Diary", type: "document", icon: "📔", isKey: true, content: ["'Six years of waiting.'","'This is my only chance.'"] }
  ],
  timeline: [
    { time: "20:30", event: "Petrov in wings" },
    { time: "20:35", event: "Maria walks to wings" },
    { time: "20:40", event: "Maria poisons water" },
    { time: "20:42", event: "Maria returns" },
    { time: "20:45", event: "Ballerina drinks" },
    { time: "20:50", event: "Ballerina collapses on stage" }
  ],
  solution: { culpritId: "s097a", motive: "Maria spent 6 years as understudy, never getting the lead. She poisoned the ballerina's water during a quick trip to the wings, knowing she would finally dance the lead.", keyEvidenceIds: ["ev-097-1","ev-097-2","ev-097-3","ev-097-4","ev-097-10"] }
};

export const CASE_098: Case = {
  id: "098", number: 98, title: "The Refugee Camp", difficulty: 4,
  briefing: "At a humanitarian aid camp, a UN coordinator is found dead in his tent. Poison in his water. Five aid workers were in the camp.",
  image: "/cases/case-098.jpeg",
  suspects: [
    { id: "s098a", name: "Doctor Patel", role: "Doctor", emoji: "👨‍⚕️", description: "Coordinator was reporting his negligence.", statement: "I was in the medical tent." },
    { id: "s098b", name: "Logistics Chief Maria", role: "Logistics Chief", emoji: "👩‍💼", description: "Coordinator was replacing her.", statement: "I was in the supply tent." },
    { id: "s098c", name: "Security Head Ahmed", role: "Security Head", emoji: "💪", description: "Coordinator discovered his smuggling.", statement: "I was on patrol." },
    { id: "s098d", name: "Local Guide Ibrahim", role: "Local Guide", emoji: "🧔", description: "Coordinator refused to pay him.", statement: "I was in my own tent." },
    { id: "s098e", name: "Journalist Sarah", role: "Journalist", emoji: "📰", description: "Coordinator was blocking her access.", statement: "I was at the press area." }
  ],
  evidence: [
    { id: "ev-098-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Arsenic poisoning","Ingested via water","Time: 04:00 AM"] },
    { id: "ev-098-2", title: "Camp CCTV", type: "cctv", icon: "📹", isKey: true, content: ["03:00 Ahmed on patrol","03:20 Ahmed near coordinator's tent","03:30 Ahmed returns","04:00 coordinator drinks"] },
    { id: "ev-098-3", title: "Water Bottle", type: "document", icon: "💧", isKey: true, content: ["Arsenic residue","Ahmed's fingerprints","Recent handling"] },
    { id: "ev-098-4", title: "Smuggling Evidence", type: "document", icon: "📄", isKey: true, content: ["Coordinator had proof Ahmed was stealing supplies","Was going to UN Security","Ahmed faced prison"] },
    { id: "ev-098-5", title: "Patel's Medical Log", type: "document", icon: "📋", isKey: false, content: ["Continuous medical work","Patient records"] },
    { id: "ev-098-6", title: "Maria's Supply Log", type: "document", icon: "📋", isKey: false, content: ["Continuous supply work","Inventory timestamps"] },
    { id: "ev-098-7", title: "Ibrahim's Tent Log", type: "document", icon: "🏕️", isKey: false, content: ["Continuous tent presence","Family confirms"] },
    { id: "ev-098-8", title: "Sarah's Press Log", type: "document", icon: "📋", isKey: false, content: ["Continuous press area","Photos timestamped"] },
    { id: "ev-098-9", title: "Arsenic Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Ahmed's kit","From old camp supplies","Missing for 3 days"] },
    { id: "ev-098-10", title: "Ahmed's Phone", type: "phone", icon: "📱", isKey: true, content: ["03:15 to associate: 'He knows.'","03:45: 'It's done.'"] }
  ],
  timeline: [
    { time: "03:00", event: "Ahmed on patrol" },
    { time: "03:20", event: "Ahmed near coordinator's tent" },
    { time: "03:25", event: "Ahmed poisons water" },
    { time: "03:30", event: "Ahmed returns" },
    { time: "04:00", event: "Coordinator drinks" },
    { time: "05:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s098c", motive: "Coordinator discovered Ahmed was stealing humanitarian supplies and selling them. Facing UN Security and prison, Ahmed poisoned his water during a patrol.", keyEvidenceIds: ["ev-098-1","ev-098-2","ev-098-3","ev-098-4","ev-098-10"] }
};

export const CASE_099: Case = {
  id: "099", number: 99, title: "The Comic Convention", difficulty: 3,
  briefing: "At a major comic convention, a famous illustrator is found dead in his signing booth. Stabbed with a pencil — but poisoned first. Five people had access to his booth.",
  image: "/cases/case-099.jpeg",
  suspects: [
    { id: "s099a", name: "Writer Michael", role: "Writer", emoji: "✍️", description: "Illustrator was taking all credit.", statement: "I was at my own booth." },
    { id: "s099b", name: "Rival Artist Sofia", role: "Rival Artist", emoji: "🎨", description: "Illustrator stole her style.", statement: "I was in artist alley." },
    { id: "s099c", name: "Fan Marcus", role: "Fan", emoji: "🧑", description: "Illustrator had mocked him publicly.", statement: "I was in the signing line." },
    { id: "s099d", name: "Publisher Chen", role: "Publisher", emoji: "💼", description: "Illustrator was leaving for a competitor.", statement: "I was in the VIP lounge." },
    { id: "s099e", name: "Assistant Elena", role: "Assistant", emoji: "👩‍💼", description: "Illustrator was going to fire her.", statement: "I was getting lunch for him." }
  ],
  evidence: [
    { id: "ev-099-1", title: "Toxicology", type: "document", icon: "🔬", isKey: true, content: ["Arsenic poisoning first","Then stabbed with pencil","Time: 14:30","Two-step murder"] },
    { id: "ev-099-2", title: "Convention CCTV", type: "cctv", icon: "📹", isKey: true, content: ["14:00 Elena delivers lunch","14:10 Michael at own booth","14:15 Sofia walks past booth","14:20 Elena returns to booth"] },
    { id: "ev-099-3", title: "Lunch Container", type: "document", icon: "🥡", isKey: true, content: ["Arsenic in food","Elena's fingerprints","Only Elena and illustrator handled"] },
    { id: "ev-099-4", title: "Termination Letter", type: "document", icon: "📄", isKey: true, content: ["Elena being fired","Effective next day","Reason: unauthorized spending"] },
    { id: "ev-099-5", title: "Michael's Booth Log", type: "document", icon: "📋", isKey: false, content: ["Continuous own booth","Camera confirms"] },
    { id: "ev-099-6", title: "Sofia's Booth Log", type: "document", icon: "📋", isKey: false, content: ["Continuous artist alley","Neighbors confirm"] },
    { id: "ev-099-7", title: "Marcus's Line Log", type: "document", icon: "📋", isKey: false, content: ["In signing line continuously","Photos timestamped"] },
    { id: "ev-099-8", title: "Chen's VIP Log", type: "document", icon: "📋", isKey: false, content: ["Continuous VIP lounge","Staff confirms"] },
    { id: "ev-099-9", title: "Arsenic Source", type: "document", icon: "🧪", isKey: true, content: ["Found in Elena's purse","From her rat poison at home","Recent use"] },
    { id: "ev-099-10", title: "Elena's Phone", type: "phone", icon: "📱", isKey: true, content: ["13:00 to friend: 'He's firing me today.'","'He'll never fire anyone again.'"] }
  ],
  timeline: [
    { time: "14:00", event: "Elena delivers lunch" },
    { time: "14:10", event: "Illustrator eats, poisoned" },
    { time: "14:15", event: "Illustrator weak, Elena returns" },
    { time: "14:20", event: "Elena stabs with pencil" },
    { time: "14:30", event: "Illustrator dies" },
    { time: "15:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s099e", motive: "Elena was being fired for unauthorized spending. She poisoned her boss's lunch with arsenic, then when he was weakened, finished him with his own pencil to make it look like a struggle.", keyEvidenceIds: ["ev-099-1","ev-099-2","ev-099-3","ev-099-4","ev-099-10"] }
};

export const CASE_100: Case = {
  id: "100", number: 100, title: "The Final Case", difficulty: 5,
  briefing: "A detective who spent 40 years solving murders is found dead in his own office. The crime scene has five clues — one for each of his old unsolved cases. Someone he never caught has finally caught up with him.",
  image: "/cases/case-100.jpeg",
  suspects: [
    { id: "s100a", name: "Detective Morgan", role: "Rival Detective", emoji: "🕵️", description: "Always second-best to victim.", statement: "I was in my own office across the hall." },
    { id: "s100b", name: "Sarah Barnes", role: "Former Partner", emoji: "👩‍💼", description: "Was fired on victim's testimony.", statement: "I was at home in another state." },
    { id: "s100c", name: "Journalist Chen", role: "Journalist", emoji: "📰", description: "Victim ruined his career.", statement: "I was in the press room." },
    { id: "s100d", name: "Marcus Reed", role: "Ex-Convict", emoji: "🧔", description: "Spent 15 years in prison because of victim.", statement: "I was at my halfway house." },
    { id: "s100e", name: "Elena Hart", role: "Daughter", emoji: "👩", description: "Victim was never there for her.", statement: "I was at my mother's house." }
  ],
  evidence: [
    { id: "ev-100-1", title: "Autopsy", type: "document", icon: "🔬", isKey: true, content: ["Single gunshot wound to chest","Time: 22:30","No defensive wounds","Execution style"] },
    { id: "ev-100-2", title: "Office CCTV", type: "cctv", icon: "📹", isKey: true, content: ["22:00 Morgan in hallway","22:15 Reed enters building","22:20 Reed walks toward victim's office","22:35 Reed exits"] },
    { id: "ev-100-3", title: "Old Case Files", type: "document", icon: "📄", isKey: true, content: ["Five files spread on desk","Each one an unsolved murder","Victim was reviewing them"] },
    { id: "ev-100-4", title: "Missing Gun", type: "document", icon: "🔫", isKey: true, content: ["Victim's service weapon missing","Registered to victim","Not in holster"] },
    { id: "ev-100-5", title: "Morgan's Office Log", type: "document", icon: "📋", isKey: false, content: ["Continuous office presence","Timestamps confirm"] },
    { id: "ev-100-6", title: "Sarah's Location", type: "document", icon: "📄", isKey: false, content: ["In another state","Flight records confirm"] },
    { id: "ev-100-7", title: "Chen's Press Log", type: "document", icon: "📋", isKey: false, content: ["Continuous press room","Two journalists confirm"] },
    { id: "ev-100-8", title: "Elena's Alibi", type: "witness", icon: "📝", isKey: false, content: ["At her mother's house","Ring camera confirms"] },
    { id: "ev-100-9", title: "Reed's Halfway House Log", type: "document", icon: "📋", isKey: true, content: ["Signed out at 21:00","Signed in at 23:30","2.5 hours unaccounted"] },
    { id: "ev-100-10", title: "Fingerprint on Gun", type: "document", icon: "🖐️", isKey: true, content: ["Partial print on trigger","Matches Marcus Reed","His prints on file from conviction"] }
  ],
  timeline: [
    { time: "22:00", event: "Morgan in hallway" },
    { time: "22:15", event: "Reed enters building" },
    { time: "22:20", event: "Reed walks to victim's office" },
    { time: "22:30", event: "Victim shot" },
    { time: "22:35", event: "Reed exits" },
    { time: "06:00", event: "Body discovered" }
  ],
  solution: { culpritId: "s100d", motive: "Marcus Reed spent 15 years in prison based on the detective's testimony — a case where the detective may have suppressed exonerating evidence. Reed tracked him down the day he was released to exact revenge.", keyEvidenceIds: ["ev-100-1","ev-100-2","ev-100-4","ev-100-9","ev-100-10"] }
};

