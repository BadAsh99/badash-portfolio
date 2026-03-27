"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, Radio, ExternalLink, RefreshCw } from "lucide-react";
import type { ThreatItem } from "@/app/api/security-news/route";

const severityColor = {
  critical: "text-red-400 border-red-800 bg-red-950/40",
  high: "text-orange-400 border-orange-800 bg-orange-950/30",
  medium: "text-yellow-400 border-yellow-800 bg-yellow-950/20",
};

export function SecurityFeed() {
  const [items, setItems] = useState<ThreatItem[]>([]);
  const [updated, setUpdated] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetch("/api/security-news")
      .then((r) => r.json())
      .then((data) => {
        setItems(data.items ?? []);
        setUpdated(data.updated ?? "");
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute rounded-full pointer-events-none" style={{ top: "10%", right: "-5%", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(220,0,0,0.10) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-terminal-cyan text-sm mb-2 flex items-center gap-2">
            <Radio size={13} className="animate-pulse" />
            {"// LIVE THREAT INTEL"}
          </div>
          <h2 className="text-3xl font-bold font-mono text-terminal-text">
            <span className="text-terminal-cyan">Threat</span> Feed
          </h2>
          <p className="text-terminal-muted font-mono text-sm mt-2">
            Active exploits · CISA KEV · NVD high-severity CVEs
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <button
            onClick={load}
            disabled={loading}
            className="flex items-center gap-1.5 font-mono text-xs text-terminal-dim hover:text-terminal-green transition-colors border border-terminal-border px-3 py-1.5 rounded"
          >
            <RefreshCw size={11} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
          {updated && (
            <span className="font-mono text-xs text-terminal-dim">
              Updated {new Date(updated).toLocaleTimeString()}
            </span>
          )}
        </div>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-card p-4 h-20 animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="glass-card p-8 text-center font-mono text-terminal-muted text-sm">
          Feed unavailable — external APIs unreachable
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex gap-3 group hover:border-terminal-cyan/30 transition-all"
            >
              <AlertTriangle size={14} className={`shrink-0 mt-0.5 ${item.severity === "critical" ? "text-red-400" : item.severity === "high" ? "text-orange-400" : "text-yellow-400"}`} />
              <div className="flex-1 min-w-0">
                <div className="font-mono text-xs text-terminal-text leading-snug line-clamp-2 group-hover:text-white transition-colors">
                  {item.title}
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className={`font-mono text-xs px-1.5 py-0.5 rounded border ${severityColor[item.severity]}`}>
                    {item.severity.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-terminal-dim">{item.source}</span>
                  {item.vendor && <span className="font-mono text-xs text-terminal-dim">· {item.vendor}</span>}
                  <span className="font-mono text-xs text-terminal-dim ml-auto">{item.date}</span>
                </div>
              </div>
              <ExternalLink size={12} className="shrink-0 text-terminal-dim group-hover:text-terminal-cyan transition-colors mt-0.5" />
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
