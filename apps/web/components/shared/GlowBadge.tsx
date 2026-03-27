import { cn } from "@/lib/utils";
import type { ScanStatus, Severity } from "@/lib/scan-types";

const statusClass: Record<ScanStatus, string> = {
  VULNERABLE: "badge-vulnerable",
  PARTIAL: "badge-partial",
  RESISTANT: "badge-resistant",
  REVIEW: "badge-review",
  ERROR: "bg-gray-900 text-gray-400 border border-gray-700 text-xs px-2 py-0.5 rounded font-mono font-medium",
};

const severityClass: Record<Severity, string> = {
  critical: "badge-critical",
  high: "badge-high",
  medium: "badge-medium",
  low: "badge-low",
  info: "badge-info",
};

export function StatusBadge({ status }: { status: ScanStatus }) {
  return <span className={cn(statusClass[status])}>{status}</span>;
}

export function SeverityBadge({ severity }: { severity: Severity }) {
  return <span className={cn(severityClass[severity])}>{severity.toUpperCase()}</span>;
}

export function TagBadge({ tag, className }: { tag: string; className?: string }) {
  return (
    <span
      className={cn(
        "text-xs px-2 py-0.5 rounded font-mono border",
        "bg-terminal-surface text-terminal-cyan border-terminal-border",
        className
      )}
    >
      {tag}
    </span>
  );
}
