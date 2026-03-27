"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BOOT_LINES = [
  { text: "LLMGUARDT2 // AI SECURITY FRAMEWORK — BOOT SEQUENCE", delay: 0, color: "text-terminal-green" },
  { text: "Loading OWASP LLM Top 10 attack library... 35 payloads", delay: 350, color: "text-terminal-text", suffix: "  [ARMED]", suffixColor: "text-terminal-cyan" },
  { text: "Semantic injection detector... cosine similarity threshold 0.75", delay: 750, color: "text-terminal-text", suffix: "  [ACTIVE]", suffixColor: "text-terminal-green" },
  { text: "Red-team scan engine... multi-provider (Claude / GPT-4)", delay: 1100, color: "text-terminal-text", suffix: "  [READY]", suffixColor: "text-terminal-green" },
  { text: "Firewall breach simulator... prompt injection // jailbreak // DoS", delay: 1450, color: "text-terminal-text", suffix: "  [LOADED]", suffixColor: "text-terminal-cyan" },
  { text: "Anthropic API... authenticated", delay: 1750, color: "text-terminal-text", suffix: "  [OK]", suffixColor: "text-terminal-green" },
  { text: "", delay: 2000, color: "text-terminal-text" },
  { text: "ASH CLEMENTS", delay: 2200, color: "text-terminal-green", big: true },
  { text: "AI RED-TEAMER  //  HACKER  //  BUILDER  //  PALO ALTO NETWORKS", delay: 2450, color: "text-terminal-cyan" },
  { text: "", delay: 2550, color: "text-terminal-text" },
  { text: "Breaking AI systems before the bad actors do.", delay: 2650, color: "text-terminal-muted" },
];

interface BootLine {
  text: string;
  delay: number;
  color: string;
  suffix?: string;
  suffixColor?: string;
  big?: boolean;
}

function TypewriterLine({ line, onDone }: { line: BootLine; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [showSuffix, setShowSuffix] = useState(false);

  useEffect(() => {
    if (!line.text) {
      onDone?.();
      return;
    }
    let i = 0;
    const speed = line.big ? 30 : 18;
    const interval = setInterval(() => {
      setDisplayed(line.text.slice(0, ++i));
      if (i >= line.text.length) {
        clearInterval(interval);
        if (line.suffix) setTimeout(() => { setShowSuffix(true); onDone?.(); }, 100);
        else onDone?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [line, onDone]);

  if (!line.text) return <div className="h-4" />;

  return (
    <div className={cn("font-mono leading-relaxed", line.big ? "text-2xl md:text-3xl font-bold" : "text-sm md:text-base")}>
      <span className={line.color}>{displayed}</span>
      {showSuffix && line.suffix && (
        <span className={line.suffixColor}>{line.suffix}</span>
      )}
    </div>
  );
}

export function TerminalBoot({ onComplete }: { onComplete?: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [doneLines, setDoneLines] = useState<Set<number>>(new Set());

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
    });
  }, []);

  const handleDone = (i: number) => {
    setDoneLines((prev) => {
      const next = new Set(prev).add(i);
      if (next.size === BOOT_LINES.length) onComplete?.();
      return next;
    });
  };

  return (
    <div className="space-y-1 p-2">
      <div className="flex items-center gap-2 mb-3 text-terminal-dim font-mono text-xs">
        <span className="text-terminal-green">▶</span>
        <span>bash — 80×24</span>
      </div>
      {BOOT_LINES.map((line, i) =>
        visibleLines.includes(i) ? (
          <TypewriterLine key={i} line={line} onDone={() => handleDone(i)} />
        ) : null
      )}
      {doneLines.size < BOOT_LINES.length && (
        <span className="inline-block w-2 h-4 bg-terminal-green animate-cursor-blink" />
      )}
    </div>
  );
}
