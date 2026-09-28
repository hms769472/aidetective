"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { getUserCases, deleteUserCase } from "@/lib/userCases";
import {
  exportAllCases,
  exportSingleCase,
  importCasesFromJSON,
} from "@/lib/caseTransfer";
import type { Case } from "@/lib/types";

type Toast = { kind: "ok" | "err"; text: string };

export default function AdminPage() {
  const [cases, setCases] = useState<Case[]>([]);
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const [importErrors, setImportErrors] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCases(getUserCases());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const refresh = () => setCases(getUserCases());

  const handleDelete = (id: string) => {
    if (!confirm("Delete this case permanently?")) return;
    deleteUserCase(id);
    refresh();
  };

  const handleExportAll = () => {
    if (cases.length === 0) {
      setToast({ kind: "err", text: "No cases to export." });
      return;
    }
    const json = exportAllCases();
    downloadFile(`casezero-all-${Date.now()}.json`, json);
    setToast({ kind: "ok", text: `Exported ${cases.length} case(s).` });
  };

  const handleExportOne = (c: Case) => {
    const json = exportSingleCase(c);
    downloadFile(`casezero-${c.id}-${c.title.replace(/\s+/g, "-")}.json`, json);
    setToast({ kind: "ok", text: `Exported "${c.title}".` });
  };

  const handleImportClick = () => fileRef.current?.click();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportErrors([]);
    try {
      const text = await file.text();
      const res = importCasesFromJSON(text);
      if (!res.ok) {
        setToast({ kind: "err", text: res.error });
      } else {
        refresh();
        setImportErrors(res.errors);
        setToast({
          kind: "ok",
          text: `Imported ${res.imported} case(s).`,
        });
      }
    } catch {
      setToast({ kind: "err", text: "Could not read file." });
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  if (!mounted) {
    return (
      <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] flex items-center justify-center">
        <div className="text-[#8993A1]">Loading admin...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <BackButton fallback="/" label="Back to Home" />
        <div className="text-[10px] sm:text-xs tracking-[0.3em] text-[#C9A227]">
          CASE BUILDER
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mt-1">Custom Cases</h1>
        <p className="mt-2 text-sm text-[#8993A1]">
          Create your own cases. Stored locally in your browser. Import/export
          as JSON to back up or share.
        </p>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/admin/new"
            className="text-center py-3 rounded-lg bg-[#C9A227] text-black font-bold hover:bg-[#d8b13a] transition"
          >
            + New Case
          </Link>
          <Link
            href="/archive"
            className="text-center py-3 rounded-lg border border-white/10 hover:border-white/30"
          >
            View Archive
          </Link>
        </div>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleExportAll}
            className="text-center py-3 rounded-lg border border-[#C9A227]/40 text-[#C9A227] hover:bg-[#C9A227]/10 transition font-semibold text-sm"
          >
            📤 Export All ({cases.length})
          </button>
          <button
            onClick={handleImportClick}
            className="text-center py-3 rounded-lg border border-[#C9A227]/40 text-[#C9A227] hover:bg-[#C9A227]/10 transition font-semibold text-sm"
          >
            📥 Import JSON
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {importErrors.length > 0 && (
          <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-xs text-yellow-300">
            <div className="font-semibold mb-1">Some cases were skipped:</div>
            <ul className="list-disc pl-5 space-y-0.5">
              {importErrors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8">
          <div className="text-xs uppercase tracking-wider text-[#8993A1] mb-3">
            Your Cases ({cases.length})
          </div>

          {cases.length === 0 ? (
            <div className="p-6 rounded-xl bg-[#11161D] border border-white/10 text-center text-sm text-[#8993A1]">
              No custom cases yet. Click{" "}
              <span className="text-[#C9A227]">+ New Case</span> to create one,
              or <span className="text-[#C9A227]">📥 Import JSON</span> to load a
              shared file.
            </div>
          ) : (
            <div className="grid gap-2 sm:gap-3">
              {cases.map((c) => (
                <div
                  key={c.id}
                  className="p-4 rounded-xl bg-[#11161D] border border-white/10 flex flex-col sm:flex-row justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-[#8993A1]">
                      CASE #{String(c.number).padStart(3, "0")} ·{" "}
                      {c.suspects.length} suspects · {c.evidence.length} evidence
                    </div>
                    <div className="font-bold text-sm sm:text-base truncate">
                      {c.title}
                    </div>
                    <div className="text-xs text-[#8993A1] line-clamp-2 mt-1">
                      {c.briefing}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 shrink-0">
                    <Link
                      href={`/case/${c.id}`}
                      className="px-3 py-1.5 rounded-md text-xs border border-white/10 hover:border-[#C9A227]/50 text-center whitespace-nowrap"
                    >
                      ▶ Play
                    </Link>
                    <Link
                      href={`/admin/edit/${c.id}`}
                      className="px-3 py-1.5 rounded-md text-xs border border-white/10 hover:border-[#C9A227]/50 text-center whitespace-nowrap"
                    >
                      ✎ Edit
                    </Link>
                    <button
                      onClick={() => handleExportOne(c)}
                      className="px-3 py-1.5 rounded-md text-xs border border-white/10 hover:border-[#C9A227]/50 text-[#E8EDF2] whitespace-nowrap"
                    >
                      📤 Export
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="px-3 py-1.5 rounded-md text-xs border border-red-500/30 text-red-400 hover:bg-red-500/10 whitespace-nowrap"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] px-5 py-3 rounded-lg text-sm font-semibold shadow-2xl max-w-[92vw] ${
            toast.kind === "ok"
              ? "bg-[#C9A227] text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {toast.kind === "ok" ? "✓" : "⚠"} {toast.text}
        </div>
      )}
    </main>
  );
}

function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}