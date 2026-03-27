"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalWindow } from "@/components/shared/TerminalWindow";
import { StatusBadge, SeverityBadge } from "@/components/shared/GlowBadge";
import { ChevronDown, ChevronRight, Loader2 } from "lucide-react";
import { useState } from "react";
import type { ScanState } from "./PlaygroundSection";

function ResultCard({ result, index }: { result: import("@/lib/scan-types").ScanResult; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className="border border-terminal-border rounded overflow-hidden"
    >
      <button
        className="w-full flex items-center gap-3 p-3 hover:bg-terminal-surface/50 transition-colors text-left"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="font-mono text-xs text-terminal-dim w-8 shrink-0">
          {String(result.index).padStart(2, "0")}
        </span>
        <StatusBadge status={result.analysis.status} />
        <SeverityBadge severity={result.payload.severity} />
        <span className="font-mono text-xs text-terminal-cyan w-14 shrink-0">{result.payload.category}</span>
        <span className="font-mono text-xs text-terminal-text flex-1 truncate">{result.payload.name}</span>
        <span className="font-mono text-xs text-terminal-dim">{result.elapsed_ms}ms</span>
        {expanded ? <ChevronDown size={14} className="text-terminal-dim shrink-0" /> : <ChevronRight size={14} className="text-terminal-dim shrink-0" />}
      </button>

      {expanded && (
        <div className="px-3 pb-3 border-t border-terminal-border space-y-3">
          <div className="font-mono text-xs text-terminal-muted pt-2">{result.payload.description}</div>

          {result.analysis.detected_signals.length > 0 && (
            <div>
              <div className="font-mono text-xs text-red-400 mb-1">DETECTED SIGNALS</div>
              <div className="space-y-0.5">
                {result.analysis.detected_signals.map((s, i) => (
                  <div key={i} className="font-mono text-xs text-terminal-text pl-3 border-l border-red-800">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.analysis.resistance_signals.length > 0 && (
            <div>
              <div className="font-mono text-xs text-terminal-green mb-1">RESISTANCE SIGNALS</div>
              <div className="space-y-0.5">
                {result.analysis.resistance_signals.map((s, i) => (
                  <div key={i} className="font-mono text-xs text-terminal-text pl-3 border-l border-green-800">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="font-mono text-xs text-terminal-muted mb-1">RESPONSE PREVIEW</div>
            <div className="font-mono text-xs text-terminal-text bg-terminal-bg rounded p-2 max-h-24 overflow-y-auto whitespace-pre-wrap opacity-80">
              {result.response_preview || "(empty)"}
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-terminal-dim">
            <span>method: {result.analysis.detection_method}</span>
            <span>confidence: {result.analysis.confidence}%</span>
            <span>len: {result.analysis.response_length}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ResultStream({ scanState }: { scanState: ScanState }) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const total = scanState.startEvent?.total_payloads ?? 0;
  const done = scanState.results.length;
  const progress = total > 0 ? (done / total) * 100 : 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [scanState.results.length]);

  return (
    <TerminalWindow
      title={
        scanState.status === "running"
          ? `scanning... ${done}/${total}`
          : scanState.status === "done"
          ? `scan complete — ${done} payloads`
          : "results"
      }
    >
      {/* Progress bar */}
      {(scanState.status === "running" || scanState.status === "done") && total > 0 && (
        <div className="mb-4">
          <div className="flex justify-between font-mono text-xs text-terminal-muted mb-1">
            <span>{scanState.startEvent?.model}</span>
            <span>{done}/{total} payloads</span>
          </div>
          <div className="h-1 bg-terminal-border rounded overflow-hidden">
            <motion.div
              className="h-full bg-terminal-green"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>
      )}

      {/* Results list */}
      <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
        {scanState.status === "idle" && (
          <div className="text-center py-20 text-terminal-dim font-mono text-sm">
            <div className="text-4xl mb-4">⚡</div>
            <p>Configure a scan and hit Run</p>
            <p className="text-xs mt-1 opacity-60">Results stream in real-time as each payload executes</p>
          </div>
        )}

        {scanState.status === "running" && scanState.results.length === 0 && (
          <div className="flex items-center gap-3 py-8 justify-center font-mono text-sm text-terminal-muted">
            <Loader2 size={16} className="animate-spin text-terminal-green" />
            <span>Initializing scan...</span>
          </div>
        )}

        <AnimatePresence>
          {scanState.results.map((r, i) => (
            <ResultCard key={r.payload.id + i} result={r} index={i} />
          ))}
        </AnimatePresence>

        {scanState.status === "running" && scanState.results.length > 0 && (
          <div className="flex items-center gap-2 py-2 font-mono text-xs text-terminal-muted">
            <Loader2 size={12} className="animate-spin" />
            Running next payload...
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </TerminalWindow>
  );
}
