"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BOOT_LINES = [
  { text: "BADASH SECURITY LAB v2.0 — INITIALIZING...", delay: 0, color: "text-terminal-green" },
  { text: "Loading OWASP LLM Top 10 scanner...", delay: 300, color: "text-terminal-text", suffix: "  [OK]", suffixColor: "text-terminal-green" },
  { text: "Semantic detection engine (all-MiniLM-L6-v2)...", delay: 600, color: "text-terminal-text", suffix: "  [OK]", suffixColor: "text-terminal-green" },
  { text: "Prompt injection analyzer...", delay: 900, color: "text-terminal-text", suffix: "  [OK]", suffixColor: "text-terminal-green" },
  { text: "Cloud security scanner...", delay: 1100, color: "text-terminal-text", suffix: "  [OK]", suffixColor: "text-terminal-green" },
  { text: "Connecting to Anthropic API...", delay: 1300, color: "text-terminal-text", suffix: "  [OK]", suffixColor: "text-terminal-green" },
  { text: "", delay: 1500, color: "text-terminal-text" },
  { text: "ASH CLEMENTS", delay: 1700, color: "text-terminal-green", big: true },
  { text: "SR. SASE & AI SECURITY CONSULTANT  //  PALO ALTO NETWORKS", delay: 1900, color: "text-terminal-cyan" },
  { text: "", delay: 2000, color: "text-terminal-text" },
  { text: "Building at the intersection of PAN-OS, GenAI, and enterprise security.", delay: 2100, color: "text-terminal-muted" },
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
