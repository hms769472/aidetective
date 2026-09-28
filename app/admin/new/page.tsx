"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { saveUserCase, getNextCustomCaseId } from "@/lib/userCases";
import type { Case, Suspect, Evidence, TimelineEvent, EvidenceType } from "@/lib/types";

const EVIDENCE_TYPES: EvidenceType[] = ["cctv", "phone", "bank", "document", "witness"];

function emptySuspect(): Suspect {
  return { id: "", name: "", role: "", emoji: "👤", description: "", statement: "" };
}
function emptyEvidence(): Evidence {
  return { id: "", title: "", type: "document", icon: "📄", content: [""], isKey: false };
}
function emptyTimeline(): TimelineEvent {
  return { time: "", event: "" };
}

export default function NewCasePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState(3);
  const [briefing, setBriefing] = useState("");
  const [caseImage, setCaseImage] = useState("/aidetect.jpeg");
  const [suspects, setSuspects] = useState<Suspect[]>([emptySuspect(), emptySuspect(), emptySuspect()]);
  const [evidence, setEvidence] = useState<Evidence[]>([emptyEvidence(), emptyEvidence(), emptyEvidence()]);
  const [timeline, setTimeline] = useState<TimelineEvent[]>([emptyTimeline(), emptyTimeline()]);
  const [culpritId, setCulpritId] = useState("");
  const [motive, setMotive] = useState("");
  const [keyEvidenceIds, setKeyEvidenceIds] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // ----- Suspect helpers -----
  const updateSuspect = (i: number, patch: Partial<Suspect>) => {
    setSuspects((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));
  };
  const removeSuspect = (i: number) => {
    setSuspects((prev) => prev.filter((_, idx) => idx !== i));
  };
  const addSuspect = () => setSuspects((prev) => [...prev, emptySuspect()]);

  // ----- Evidence helpers -----
  const updateEvidence = (i: number, patch: Partial<Evidence>) => {
    setEvidence((prev) => prev.map((e, idx) => (idx === i ? { ...e, ...patch } : e)));
  };
  const updateEvidenceLine = (i: number, lineIdx: number, value: string) => {
    setEvidence((prev) =>
      prev.map((e, idx) =>
        idx === i ? { ...e, content: e.content.map((l, li) => (li === lineIdx ? value : l)) } : e
      )
    );
  };
  const addEvidenceLine = (i: number) => {
    setEvidence((prev) =>
      prev.map((e, idx) => (idx === i ? { ...e, content: [...e.content, ""] } : e))
    );
  };
  const removeEvidenceLine = (i: number, lineIdx: number) => {
    setEvidence((prev) =>
      prev.map((e, idx) =>
        idx === i ? { ...e, content: e.content.filter((_, li) => li !== lineIdx) } : e
      )
    );
  };
  const removeEvidence = (i: number) => {
    setEvidence((prev) => prev.filter((_, idx) => idx !== i));
  };
  const addEvidence = () => setEvidence((prev) => [...prev, emptyEvidence()]);

  // ----- Timeline helpers -----
  const updateTimeline = (i: number, patch: Partial<TimelineEvent>) => {
    setTimeline((prev) => prev.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));
  };
  const removeTimeline = (i: number) => setTimeline((prev) => prev.filter((_, idx) => idx !== i));
  const addTimeline = () => setTimeline((prev) => [...prev, emptyTimeline()]);

  // ----- Key evidence toggle -----
  const toggleKeyEvidence = (id: string) => {
    setKeyEvidenceIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // ----- Save -----
  const handleSave = () => {
    setError(null);

    // Validate
    if (!title.trim()) return setError("Title is required.");
    if (!briefing.trim()) return setError("Briefing is required.");
    if (suspects.length < 3) return setError("At least 3 suspects required.");
    if (evidence.length < 3) return setError("At least 3 evidence items required.");
    if (timeline.length < 2) return setError("At least 2 timeline events required.");
    if (!culpritId) return setError("You must select the culprit.");
    if (keyEvidenceIds.length < 2) return setError("Select at least 2 key evidence items.");
    if (!motive.trim()) return setError("Motive is required.");

    // Normalize IDs
    const caseId = getNextCustomCaseId();
    const caseNum = parseInt(caseId, 10);

    const normalizedSuspects: Suspect[] = suspects.map((s, i) => ({
      ...s,
      id: s.id.trim() || `s-${i + 1}-${Date.now()}`,
      name: s.name.trim(),
      role: s.role.trim(),
      description: s.description.trim(),
      statement: s.statement.trim(),
    }));

    const normalizedEvidence: Evidence[] = evidence.map((e, i) => ({
      ...e,
      id: e.id.trim() || `ev-${caseId}-${i + 1}`,
      title: e.title.trim(),
      content: e.content.filter((l) => l.trim()),
    }));

    // Remap culprit + key evidence IDs
    const culpritIdx = suspects.findIndex((s) => s.id === culpritId || s.name === culpritId);
    const finalCulpritId = culpritIdx >= 0 ? normalizedSuspects[culpritIdx].id : normalizedSuspects[0].id;

    const finalKeyEvidenceIds = keyEvidenceIds.map((oldId) => {
      const idx = evidence.findIndex((e) => e.id === oldId);
      return idx >= 0 ? normalizedEvidence[idx].id : oldId;
    });

    const newCase: Case = {
      id: caseId,
      number: caseNum,
      title: title.trim(),
      difficulty,
      briefing: briefing.trim(),
      image: caseImage.trim() || undefined,
      suspects: normalizedSuspects,
      evidence: normalizedEvidence,
      timeline: timeline.map((t) => ({ time: t.time.trim(), event: t.event.trim() })).filter((t) => t.time && t.event),
      solution: {
        culpritId: finalCulpritId,
        motive: motive.trim(),
        keyEvidenceIds: finalKeyEvidenceIds,
      },
      contradictions: [],
    };

    saveUserCase(newCase);
    router.push("/admin");
  };

  return (
    <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <Link href="/admin" className="text-xs text-[#C9A227] hover:underline">
            ← Back to Admin
          </Link>
          <div className="text-[10px] sm:text-xs tracking-[0.3em] text-[#C9A227] mt-2">
            CASE BUILDER
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mt-1">New Case</h1>
        </div>

        {/* BASIC */}
        <Section title="Basic Info">
          <Field label="Case Title">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="The Missing Heirloom"
              className="input" />
          </Field>
          <Field label="Briefing (setup)">
            <textarea value={briefing} onChange={(e) => setBriefing(e.target.value)} rows={4}
              placeholder="Who died, where, when, and why it's suspicious..." className="input" />
          </Field>
          <Field label="Cover Image (from /public)">
            <input
              value={caseImage}
              onChange={(e) => setCaseImage(e.target.value)}
              placeholder="/aidetect.jpeg"
              className="input"
            />
          </Field>
          <Field label={`Difficulty: ${"⭐".repeat(difficulty)}`}>
            <input type="range" min={1} max={5} value={difficulty}
              onChange={(e) => setDifficulty(parseInt(e.target.value, 10))}
              className="w-full accent-[#C9A227]" />
          </Field>
        </Section>

        {/* SUSPECTS */}
        <Section title={`Suspects (${suspects.length})`}>
          {suspects.map((s, i) => (
            <div key={i} className="p-4 rounded-lg bg-black/30 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-xs text-[#C9A227] font-semibold">Suspect #{i + 1}</div>
                {suspects.length > 3 && (
                  <button onClick={() => removeSuspect(i)} className="text-xs text-red-400 hover:text-red-300">Remove</button>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <input value={s.emoji} onChange={(e) => updateSuspect(i, { emoji: e.target.value })}
                  placeholder="👤" maxLength={4} className="input text-center" />
                <input value={s.name} onChange={(e) => updateSuspect(i, { name: e.target.value })}
                  placeholder="Name" className="input col-span-2" />
              </div>
              <input value={s.role} onChange={(e) => updateSuspect(i, { role: e.target.value })}
                placeholder="Role (e.g., Business Partner)" className="input" />
              <textarea value={s.description} onChange={(e) => updateSuspect(i, { description: e.target.value })}
                placeholder="Short description" rows={2} className="input" />
              <textarea value={s.statement} onChange={(e) => updateSuspect(i, { statement: e.target.value })}
                placeholder="Their statement/alibi" rows={2} className="input" />
            </div>
          ))}
          <button onClick={addSuspect} className="w-full py-2 rounded-lg border border-dashed border-white/20 text-sm text-[#8993A1] hover:border-[#C9A227]/50 hover:text-[#C9A227]">
            + Add Suspect
          </button>
        </Section>

        {/* EVIDENCE */}
        <Section title={`Evidence (${evidence.length})`}>
          {evidence.map((e, i) => (
            <div key={i} className="p-4 rounded-lg bg-black/30 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-xs text-[#C9A227] font-semibold">Evidence #{i + 1}</div>
                {evidence.length > 3 && (
                  <button onClick={() => removeEvidence(i)} className="text-xs text-red-400 hover:text-red-300">Remove</button>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                <input value={e.icon} onChange={(ev) => updateEvidence(i, { icon: ev.target.value })}
                  placeholder="📄" maxLength={4} className="input text-center" />
                <input value={e.title} onChange={(ev) => updateEvidence(i, { title: ev.target.value })}
                  placeholder="Title" className="input col-span-3" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select value={e.type} onChange={(ev) => updateEvidence(i, { type: ev.target.value as EvidenceType })}
                  className="input">
                  {EVIDENCE_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-[#11161D]">{t}</option>
                  ))}
                </select>
                <label className="flex items-center gap-2 text-sm text-[#E8EDF2] px-3">
                  <input type="checkbox" checked={e.isKey}
                    onChange={(ev) => updateEvidence(i, { isKey: ev.target.checked })}
                    className="accent-[#C9A227]" />
                  Mark as key evidence
                </label>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-wider text-[#8993A1]">Content lines</div>
                {e.content.map((line, li) => (
                  <div key={li} className="flex gap-2">
                    <input value={line} onChange={(ev) => updateEvidenceLine(i, li, ev.target.value)}
                      placeholder={`Line ${li + 1}`} className="input flex-1" />
                    {e.content.length > 1 && (
                      <button onClick={() => removeEvidenceLine(i, li)}
                        className="px-2 text-red-400 hover:text-red-300">×</button>
                    )}
                  </div>
                ))}
                <button onClick={() => addEvidenceLine(i)} className="text-xs text-[#C9A227] hover:underline">
                  + Add line
                </button>
              </div>
            </div>
          ))}
          <button onClick={addEvidence} className="w-full py-2 rounded-lg border border-dashed border-white/20 text-sm text-[#8993A1] hover:border-[#C9A227]/50 hover:text-[#C9A227]">
            + Add Evidence
          </button>
        </Section>

        {/* TIMELINE */}
        <Section title={`Timeline (${timeline.length})`}>
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-2">
              <input value={t.time} onChange={(e) => updateTimeline(i, { time: e.target.value })}
                placeholder="21:00" className="input w-24" />
              <input value={t.event} onChange={(e) => updateTimeline(i, { event: e.target.value })}
                placeholder="What happened" className="input flex-1" />
              {timeline.length > 2 && (
                <button onClick={() => removeTimeline(i)} className="px-2 text-red-400 hover:text-red-300">×</button>
              )}
            </div>
          ))}
          <button onClick={addTimeline} className="w-full py-2 rounded-lg border border-dashed border-white/20 text-sm text-[#8993A1] hover:border-[#C9A227]/50 hover:text-[#C9A227]">
            + Add Event
          </button>
        </Section>

        {/* SOLUTION */}
        <Section title="Solution">
          <Field label="Culprit">
            <select value={culpritId} onChange={(e) => setCulpritId(e.target.value)} className="input">
              <option value="" className="bg-[#11161D]">— Select culprit —</option>
              {suspects.map((s, i) => (
                <option key={i} value={s.id || s.name || `s-${i}`} className="bg-[#11161D]">
                  {s.name || `Suspect #${i + 1}`}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Motive (revealed on result screen)">
            <textarea value={motive} onChange={(e) => setMotive(e.target.value)} rows={3}
              placeholder="Why did they do it?" className="input" />
          </Field>
          <Field label={`Key Evidence (${keyEvidenceIds.length} selected — min 2)`}>
            <div className="space-y-1">
              {evidence.map((e, i) => {
                const id = e.id || `ev-${i}`;
                const checked = keyEvidenceIds.includes(id);
                return (
                  <label key={i} className="flex items-center gap-2 text-sm text-[#E8EDF2]">
                    <input type="checkbox" checked={checked}
                      onChange={() => toggleKeyEvidence(id)}
                      className="accent-[#C9A227]" />
                    <span>{e.icon} {e.title || `Evidence #${i + 1}`}</span>
                  </label>
                );
              })}
            </div>
          </Field>
        </Section>

        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-400">
            ⚠ {error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pb-12">
          <Link href="/admin" className="flex-1 text-center py-3 rounded-lg border border-white/10 hover:border-white/30">
            Cancel
          </Link>
          <button onClick={handleSave}
            className="flex-1 py-3 rounded-lg bg-[#C9A227] text-black font-bold hover:bg-[#d8b13a] transition">
            Save Case
          </button>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.875rem;
          color: #e8edf2;
          outline: none;
        }
        .input:focus {
          border-color: rgba(201, 162, 39, 0.5);
        }
        .input::placeholder {
          color: #8993a1;
        }
      `}</style>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 sm:p-6 rounded-xl bg-[#11161D] border border-white/10 space-y-3">
      <div className="text-xs uppercase tracking-wider text-[#C9A227]">{title}</div>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs text-[#8993A1] mb-1">{label}</div>
      {children}
    </div>
  );
}