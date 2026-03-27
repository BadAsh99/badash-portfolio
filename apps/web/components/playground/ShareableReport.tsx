"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import type { ScanState } from "./PlaygroundSection";
import type { ShareableReport as ShareableReportType } from "@/lib/scan-types";

export function ShareableReport({ scanState }: { scanState: ScanState }) {
  const [copied, setCopied] = useState(false);

  if (scanState.status !== "done" || !scanState.endEvent) return null;

  const report: ShareableReportType = {
    scan_id: scanState.endEvent.scan_id,
    risk_score: scanState.endEvent.risk_score,
    stats: scanState.endEvent.stats,
    provider: scanState.startEvent?.provider ?? "anthropic",
    model: scanState.startEvent?.model ?? "",
    results: scanState.results.map((r) => ({
      id: r.payload.id,
      status: r.analysis.status,
      confidence: r.analysis.confidence,
    })),
  };

  const encoded = btoa(JSON.stringify(report));
  const url = `${window.location.origin}/playground?report=${encoded}`;

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="w-full flex items-center justify-center gap-2 py-2 border border-terminal-border rounded font-mono text-xs text-terminal-muted hover:border-terminal-cyan hover:text-terminal-cyan transition-colors"
    >
      {copied ? <Check size={14} className="text-terminal-green" /> : <Link2 size={14} />}
      {copied ? "Link copied!" : "Copy shareable report link"}
    </button>
  );
}
