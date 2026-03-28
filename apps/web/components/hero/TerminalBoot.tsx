"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface BootLine {
  text: string;
  delay: number;
  color: string;
  suffix?: string;
  suffixColor?: string;
  big?: boolean;
}

export const LLMGUARDT2_LINES: BootLine[] = [
  { text: "LLMGUARDT2 // AI SECURITY", delay: 0, color: "text-terminal-green" },
  { text: "OWASP LLM Top 10 · 35 payloads", delay: 350, color: "text-terminal-text", suffix: "  [ARMED]", suffixColor: "text-terminal-cyan" },
  { text: "Semantic injection detector", delay: 750, color: "text-terminal-text", suffix: "  [ACTIVE]", suffixColor: "text-terminal-green" },
  { text: "Red-team engine · Claude / GPT-4", delay: 1100, color: "text-terminal-text", suffix: "  [READY]", suffixColor: "text-terminal-green" },
  { text: "Breach simulator · inject/jailbreak", delay: 1450, color: "text-terminal-text", suffix: "  [LOADED]", suffixColor: "text-terminal-cyan" },
  { text: "Anthropic API · authenticated", delay: 1750, color: "text-terminal-text", suffix: "  [OK]", suffixColor: "text-terminal-green" },
  { text: "", delay: 2000, color: "text-terminal-text" },
  { text: "ASH CLEMENTS", delay: 2200, color: "text-terminal-green", big: true },
  { text: "AI RED-TEAMER · HACKER · BUILDER", delay: 2450, color: "text-terminal-cyan" },
  { text: "", delay: 2550, color: "text-terminal-text" },
  { text: "Breaking AI before bad actors do.", delay: 2650, color: "text-terminal-muted" },
];

export const CLOUDGUARD_LINES: BootLine[] = [
  { text: "CLOUDGUARD // CLOUD SECURITY", delay: 200, color: "text-terminal-green" },
  { text: "AWS IAM misconfiguration scan", delay: 550, color: "text-terminal-text", suffix: "  [ARMED]", suffixColor: "text-terminal-cyan" },
  { text: "Azure RBAC privilege escalation", delay: 950, color: "text-terminal-text", suffix: "  [ACTIVE]", suffixColor: "text-terminal-green" },
  { text: "GCP service account auditor", delay: 1300, color: "text-terminal-text", suffix: "  [READY]", suffixColor: "text-terminal-green" },
  { text: "S3 public exposure detector", delay: 1600, color: "text-terminal-text", suffix: "  [LOADED]", suffixColor: "text-terminal-cyan" },
  { text: "Zero-trust policy analyzer", delay: 1900, color: "text-terminal-text", suffix: "  [OK]", suffixColor: "text-terminal-green" },
  { text: "", delay: 2100, color: "text-terminal-text" },
  { text: "PALO ALTO NETWORKS", delay: 2300, color: "text-terminal-green", big: true },
  { text: "SR. SASE · PRISMA ACCESS", delay: 2550, color: "text-terminal-cyan" },
  { text: "", delay: 2650, color: "text-terminal-text" },
  { text: "Securing cloud before it's too late.", delay: 2750, color: "text-terminal-muted" },
];

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

  if (!line.text) return <div className="h-3" />;

  return (
    <div className={cn("font-mono leading-snug w-full whitespace-nowrap overflow-hidden", line.big ? "text-lg md:text-xl font-bold" : "text-xs md:text-sm")}>
      <span className={line.color}>{displayed}</span>
      {showSuffix && line.suffix && (
        <span className={line.suffixColor}>{line.suffix}</span>
      )}
    </div>
  );
}

export function TerminalBoot({ lines, title, onComplete }: { lines: BootLine[]; title: string; onComplete?: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [doneLines, setDoneLines] = useState<Set<number>>(new Set());

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
    });
  }, [lines]);

  const handleDone = (i: number) => {
    setDoneLines((prev) => {
      const next = new Set(prev).add(i);
      if (next.size === lines.length) onComplete?.();
      return next;
    });
  };

  return (
    <div className="space-y-0.5 p-2">
      <div className="flex items-center gap-2 mb-3 text-terminal-dim font-mono text-xs">
        <span className="text-terminal-green">▶</span>
        <span>{title}</span>
      </div>
      {lines.map((line, i) =>
        visibleLines.includes(i) ? (
          <TypewriterLine key={i} line={line} onDone={() => handleDone(i)} />
        ) : null
      )}
      {doneLines.size < lines.length && (
        <span className="inline-block w-2 h-3 bg-terminal-green animate-cursor-blink" />
      )}
    </div>
  );
}
