"use client";

import { useEffect, useRef, useState } from "react";
import type { Suspect } from "@/lib/types";
import {
  type SuspectInterrogation,
  matchAnswer,
  getSuggestedQuestions,
} from "@/lib/interrogation";
import { playSend, playReceive, playTypeKey, playTypeDone } from "@/lib/sound";

type Message = {
  id: number;
  role: "detective" | "suspect";
  text: string;
  /** When true, apply typewriter effect */
  animate?: boolean;
};

type Props = {
  suspect: Suspect;
  interrogation: SuspectInterrogation;
};

export default function InterrogationChat({ suspect, interrogation }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset on suspect change
  useEffect(() => {
    idRef.current = 0;
    setMessages([
      { id: idRef.current++, role: "suspect", text: interrogation.intro, animate: true },
    ]);
    setInput("");
    setTyping(false);
    setTypingText("");
  }, [suspect.id, interrogation.intro]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, typingText]);

  // Typewriter animation for the last animated message
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (!last || last.role !== "suspect" || !last.animate) return;

    setTypingText("");
    let i = 0;
    const text = last.text;
    const interval = setInterval(() => {
      const ch = text[i];
      i++;
      setTypingText(text.slice(0, i));

      // Sound: skip spaces for rhythm
      if (ch && ch !== " " && ch !== "\n") {
        playTypeKey();
      }

      if (i >= text.length) {
        clearInterval(interval);
        playTypeDone();
        // Mark as no longer animating
        setMessages((prev) =>
          prev.map((m) => (m.id === last.id ? { ...m, animate: false } : m))
        );
      }
    }, 22);

    return () => clearInterval(interval);
  }, [messages]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;

    playSend();
    const myMsg: Message = {
      id: idRef.current++,
      role: "detective",
      text: q,
    };
    setMessages((prev) => [...prev, myMsg]);
    setInput("");
    setTyping(true);
    setTypingText("");

    setTimeout(() => {
      const answer = matchAnswer(interrogation, q);
      setTyping(false);
      playReceive();
      const suspMsg: Message = {
        id: idRef.current++,
        role: "suspect",
        text: answer,
        animate: true,
      };
      setMessages((prev) => [...prev, suspMsg]);
    }, 550 + Math.random() * 500);
  };

  const suggestions = getSuggestedQuestions(interrogation, 4);

  return (
    <div className="rounded-xl bg-[#11161D] border border-white/10 flex flex-col h-[420px] sm:h-[520px]">
      {/* Header */}
      <div className="flex items-center gap-3 p-3 sm:p-4 border-b border-white/10">
        <span className="text-2xl">{suspect.emoji}</span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-[#E8EDF2] truncate">
            {suspect.name}
          </div>
          <div className="text-[10px] text-[#8993A1] truncate">
            {suspect.role} · Interrogation
          </div>
        </div>
        <span className="ml-auto text-[10px] text-[#C9A227] uppercase tracking-wider flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
          Live
        </span>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3"
      >
        {messages.map((m) => {
          const isAnimating = m.animate;
          const displayText = isAnimating ? typingText : m.text;
          return (
            <div
              key={m.id}
              className={`flex ${m.role === "detective" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "detective"
                    ? "bg-[#C9A227] text-black rounded-br-sm"
                    : "bg-black/40 border border-white/10 text-[#E8EDF2] rounded-bl-sm"
                }`}
              >
                {displayText}
                {isAnimating && (
                  <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-[#C9A227] animate-pulse align-middle" />
                )}
              </div>
            </div>
          );
        })}

        {typing && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-lg bg-black/40 border border-white/10">
              <span className="inline-flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8993A1] animate-bounce" />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#8993A1] animate-bounce"
                  style={{ animationDelay: "0.15s" }}
                />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#8993A1] animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="px-3 sm:px-4 pt-2 flex flex-wrap gap-2 border-t border-white/5">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-[#8993A1] hover:text-[#C9A227] hover:border-[#C9A227]/40 transition active:scale-[0.96]"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="p-3 sm:p-4 border-t border-white/10 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-sm text-[#E8EDF2] placeholder-[#8993A1] focus:outline-none focus:border-[#C9A227]/50"
        />
        <button
          type="submit"
          disabled={!input.trim() || typing}
          className="px-4 py-2 rounded-lg bg-[#C9A227] text-black text-sm font-semibold disabled:opacity-40 active:scale-[0.97] transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}