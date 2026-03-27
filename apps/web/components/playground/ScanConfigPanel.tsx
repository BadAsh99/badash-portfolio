"use client";

import { useState } from "react";
import { TerminalWindow } from "@/components/shared/TerminalWindow";
import type { ScanConfig, ScanCategory } from "@/lib/scan-types";
import { Play, Square } from "lucide-react";

const CATEGORIES: { id: ScanCategory; label: string; short: string }[] = [
  { id: "LLM01", label: "Prompt Injection", short: "LLM01" },
  { id: "LLM02", label: "Insecure Output Handling", short: "LLM02" },
  { id: "LLM03", label: "Training Data Poisoning", short: "LLM03" },
  { id: "LLM04", label: "Model Denial of Service", short: "LLM04" },
  { id: "LLM05", label: "Supply Chain Vulnerabilities", short: "LLM05" },
  { id: "LLM06", label: "Sensitive Information Disclosure", short: "LLM06" },
  { id: "LLM07", label: "Insecure Plugin Design", short: "LLM07" },
  { id: "LLM08", label: "Excessive Agency", short: "LLM08" },
  { id: "LLM09", label: "Overreliance", short: "LLM09" },
  { id: "LLM10", label: "Model Theft", short: "LLM10" },
];

const MODELS = {
  anthropic: ["claude-haiku-4-5-20251001", "claude-sonnet-4-6", "claude-opus-4-6"],
  openai: ["gpt-4o-mini", "gpt-4o", "gpt-4-turbo"],
};

interface Props {
  onScan: (config: ScanConfig) => void;
  onReset: () => void;
  scanning: boolean;
}

export function ScanConfigPanel({ onScan, onReset, scanning }: Props) {
  const [provider, setProvider] = useState<"anthropic" | "openai">("anthropic");
  const [model, setModel] = useState("claude-haiku-4-5-20251001");
  const [selected, setSelected] = useState<Set<ScanCategory>>(new Set<ScanCategory>(["LLM01", "LLM06"]));
  const [systemPrompt, setSystemPrompt] = useState("");

  const toggleCategory = (id: ScanCategory) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(CATEGORIES.map((c) => c.id)));
  const clearAll = () => setSelected(new Set());

  const handleProviderChange = (p: "anthropic" | "openai") => {
    setProvider(p);
    setModel(MODELS[p][0]);
  };

  const handleScan = () => {
    if (selected.size === 0) return;
    onScan({
      provider,
      model,
      categories: Array.from(selected),
      delay: 0.3,
      system_prompt: systemPrompt || undefined,
    });
  };

  return (
    <TerminalWindow title="scan_config.json">
      <div className="space-y-4 text-sm font-mono">
        {/* Provider */}
        <div>
          <div className="text-terminal-muted text-xs mb-2">PROVIDER</div>
          <div className="flex gap-2">
            {(["anthropic", "openai"] as const).map((p) => (
              <button
                key={p}
                onClick={() => handleProviderChange(p)}
                className={`flex-1 py-1.5 rounded text-xs border transition-colors ${
                  provider === p
                    ? "border-terminal-green text-terminal-green bg-green-950/20"
                    : "border-terminal-border text-terminal-muted hover:border-terminal-dim"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Model */}
        <div>
          <div className="text-terminal-muted text-xs mb-2">MODEL</div>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full bg-terminal-bg border border-terminal-border rounded px-3 py-1.5 text-terminal-text text-xs focus:border-terminal-green focus:outline-none"
          >
            {MODELS[provider].map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-terminal-muted text-xs">CATEGORIES ({selected.size}/10)</span>
            <div className="flex gap-2">
              <button onClick={selectAll} className="text-xs text-terminal-cyan hover:text-terminal-green transition-colors">all</button>
              <button onClick={clearAll} className="text-xs text-terminal-dim hover:text-terminal-muted transition-colors">none</button>
            </div>
          </div>
          <div className="space-y-1 max-h-52 overflow-y-auto pr-1">
            {CATEGORIES.map((c) => (
              <label key={c.id} className="flex items-center gap-2 cursor-pointer group py-0.5">
                <input
                  type="checkbox"
                  checked={selected.has(c.id)}
                  onChange={() => toggleCategory(c.id)}
                  className="accent-terminal-green"
                />
                <span className="text-terminal-green text-xs w-12 shrink-0">{c.short}</span>
                <span className={`text-xs transition-colors ${selected.has(c.id) ? "text-terminal-text" : "text-terminal-dim"} group-hover:text-terminal-text`}>
                  {c.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Optional system prompt */}
        <div>
          <div className="text-terminal-muted text-xs mb-2">TARGET SYSTEM PROMPT (optional)</div>
          <textarea
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            placeholder="e.g. You are a helpful assistant..."
            rows={2}
            className="w-full bg-terminal-bg border border-terminal-border rounded px-3 py-2 text-terminal-text text-xs placeholder-terminal-dim resize-none focus:border-terminal-green focus:outline-none transition-colors"
          />
        </div>

        {/* Scan button */}
        <button
          onClick={scanning ? onReset : handleScan}
          disabled={!scanning && selected.size === 0}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded font-bold text-sm transition-all ${
            scanning
              ? "bg-red-950 border border-red-800 text-red-400 hover:bg-red-900"
              : "bg-terminal-green text-terminal-bg hover:bg-terminal-green/90 disabled:opacity-40 disabled:cursor-not-allowed shadow-glow-green"
          }`}
        >
          {scanning ? (
            <><Square size={14} /> Stop Scan</>
          ) : (
            <><Play size={14} /> Run Scan</>
          )}
        </button>

        <div className="text-terminal-dim text-xs text-center">Rate limited · 3 scans/hr</div>
      </div>
    </TerminalWindow>
  );
}
