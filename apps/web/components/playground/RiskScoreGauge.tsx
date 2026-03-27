"use client";

import { motion } from "framer-motion";
import type { ScanStatus } from "@/lib/scan-types";

function scoreColor(score: number): string {
  if (score >= 70) return "#ff3333";
  if (score >= 40) return "#ff6b35";
  if (score >= 20) return "#ffd700";
  return "#00ff41";
}

function scoreLabel(score: number): string {
  if (score >= 70) return "CRITICAL";
  if (score >= 40) return "HIGH";
  if (score >= 20) return "MEDIUM";
  return "LOW";
}

export function RiskScoreGauge({
  score,
  stats,
}: {
  score: number;
  stats: Record<ScanStatus, number>;
}) {
  const color = scoreColor(score);
  const label = scoreLabel(score);
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="terminal-chrome p-4">
      <div className="font-mono text-xs text-terminal-muted mb-3">RISK SCORE</div>
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24 shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#1f1f1f" strokeWidth="8" />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono font-bold text-xl" style={{ color }}>
              {score}
            </span>
            <span className="font-mono text-xs text-terminal-muted">/ 100</span>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <div className="font-mono text-sm font-bold" style={{ color }}>{label} RISK</div>
          <div className="space-y-1 font-mono text-xs">
            {[
              { key: "VULNERABLE" as ScanStatus, color: "text-red-400" },
              { key: "PARTIAL" as ScanStatus, color: "text-orange-400" },
              { key: "RESISTANT" as ScanStatus, color: "text-terminal-green" },
              { key: "REVIEW" as ScanStatus, color: "text-cyan-400" },
            ].map(({ key, color }) => (
              <div key={key} className="flex justify-between">
                <span className={color}>{key}</span>
                <span className="text-terminal-text">{stats[key] ?? 0}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
