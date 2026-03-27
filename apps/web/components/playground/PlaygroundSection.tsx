"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanConfigPanel } from "./ScanConfigPanel";
import { ResultStream } from "./ResultStream";
import { RiskScoreGauge } from "./RiskScoreGauge";
import { ShareableReport } from "./ShareableReport";
import type { ScanConfig, ScanResult, ScanEndEvent, ScanStartEvent } from "@/lib/scan-types";

export interface ScanState {
  status: "idle" | "running" | "done" | "error";
  startEvent: ScanStartEvent | null;
  results: ScanResult[];
  endEvent: ScanEndEvent | null;
  error: string | null;
}

export function PlaygroundSection() {
  const [scanState, setScanState] = useState<ScanState>({
    status: "idle",
    startEvent: null,
    results: [],
    endEvent: null,
    error: null,
  });

  const runScan = useCallback(async (config: ScanConfig) => {
    setScanState({ status: "running", startEvent: null, results: [], endEvent: null, error: null });

    let buffer = "";

    function parseSSEChunk(chunk: string, onEvent: (type: string, data: unknown) => void) {
      buffer += chunk;
      const events = buffer.split("\n\n");
      buffer = events.pop() ?? "";
      for (const raw of events) {
        if (!raw.trim()) continue;
        const lines = raw.split("\n");
        let type = "message";
        let dataStr = "";
        for (const line of lines) {
          if (line.startsWith("event:")) type = line.slice(6).trim();
          else if (line.startsWith("data:")) dataStr += line.slice(5).trim();
        }
        if (dataStr) {
          try { onEvent(type, JSON.parse(dataStr)); } catch { /* skip malformed */ }
        }
      }
    }

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Scanner unavailable" }));
        setScanState((s) => ({ ...s, status: "error", error: err.error ?? "Unknown error" }));
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        parseSSEChunk(decoder.decode(value, { stream: true }), (type, data) => {
          if (type === "scan_start") {
            setScanState((s) => ({ ...s, startEvent: data as ScanStartEvent }));
          } else if (type === "result") {
            setScanState((s) => ({ ...s, results: [...s.results, data as ScanResult] }));
          } else if (type === "scan_end") {
            setScanState((s) => ({ ...s, status: "done", endEvent: data as ScanEndEvent }));
          } else if (type === "error") {
            setScanState((s) => ({ ...s, status: "error", error: (data as { message: string }).message }));
          }
        });
      }
    } catch (e) {
      setScanState((s) => ({
        ...s,
        status: "error",
        error: e instanceof Error ? e.message : "Connection failed",
      }));
    }
  }, []);

  const reset = () =>
    setScanState({ status: "idle", startEvent: null, results: [], endEvent: null, error: null });

  return (
    <section id="playground" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="font-mono text-terminal-green text-sm mb-2">{"// SECTION 01"}</div>
        <h2 className="text-3xl font-bold font-mono text-terminal-text">
          AI Security <span className="text-terminal-green">Playground</span>
        </h2>
        <p className="text-terminal-muted font-mono text-sm mt-2 max-w-2xl">
          Live OWASP LLM Top 10 scanner. Select categories, hit scan — semantic detection engine tests 35+ attack payloads against Claude or GPT-4 in real time.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Config panel */}
        <div className="lg:col-span-1">
          <ScanConfigPanel
            onScan={runScan}
            onReset={reset}
            scanning={scanState.status === "running"}
          />
          {scanState.endEvent && (
            <div className="mt-4 space-y-4">
              <RiskScoreGauge score={scanState.endEvent.risk_score} stats={scanState.endEvent.stats} />
              <ShareableReport scanState={scanState} />
            </div>
          )}
        </div>

        {/* Results stream */}
        <div className="lg:col-span-2">
          <ResultStream scanState={scanState} />
        </div>
      </div>

      {scanState.error && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 border border-red-800 bg-red-950/30 rounded p-4 font-mono text-sm text-red-400"
          >
            <span className="font-bold">ERROR:</span> {scanState.error}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}
