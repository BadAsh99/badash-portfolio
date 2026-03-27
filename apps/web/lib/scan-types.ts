export type ScanStatus = "VULNERABLE" | "PARTIAL" | "RESISTANT" | "REVIEW" | "ERROR";
export type Severity = "critical" | "high" | "medium" | "low" | "info";
export type ScanCategory =
  | "LLM01" | "LLM02" | "LLM03" | "LLM04" | "LLM05"
  | "LLM06" | "LLM07" | "LLM08" | "LLM09" | "LLM10";

export interface ScanPayload {
  id: string;
  name: string;
  category: ScanCategory;
  category_label: string;
  severity: Severity;
  prompt: string;
  description: string;
  tags: string[];
}

export interface ScanAnalysis {
  status: ScanStatus;
  confidence: number;
  detected_signals: string[];
  resistance_signals: string[];
  response_length: number;
  detection_method: "semantic" | "substring" | "none";
  semantic_scores: Record<string, number>;
}

export interface ScanResult {
  index: number;
  total: number;
  payload: ScanPayload;
  response_preview: string;
  analysis: ScanAnalysis;
  elapsed_ms: number;
  timestamp: number;
}

export interface ScanStartEvent {
  scan_id: string;
  provider: string;
  model: string;
  total_payloads: number;
  timestamp: number;
}

export interface ScanEndEvent {
  scan_id: string;
  stats: Record<ScanStatus, number>;
  severity_counts: Record<Severity, Record<ScanStatus, number>>;
  risk_score: number;
  total_payloads: number;
  timestamp: number;
}

export interface ScanConfig {
  provider: "anthropic" | "openai";
  model: string;
  categories: ScanCategory[];
  delay?: number;
  system_prompt?: string;
}

export interface OWASPCategory {
  id: ScanCategory;
  label: string;
  payload_count: number;
  severity_breakdown: Record<Severity, number>;
}

export interface ShareableReport {
  scan_id: string;
  risk_score: number;
  stats: Record<ScanStatus, number>;
  provider: string;
  model: string;
  results: Array<{ id: string; status: ScanStatus; confidence: number }>;
}
