export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  pageUrl?: string;
  demoUrl?: string;
  language: string;
  status: "active" | "stable" | "wip";
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "aiseal",
    name: "AISeal",
    description: "AI Trust & Certification Platform — independent AI vendor certification, OWASP LLM Top 10 scanner, and TrustScore 0–100",
    longDescription:
      "The CA layer AI trust has been missing. AISeal is a three-product platform: Scan (OWASP LLM Top 10 + Agentic Top 10 detection, TrustScore 0–100), Cert (independent three-tier certification with public badge and registry), and Monitor (runtime LLM behavioral surveillance). Includes quantum readiness scanner and EU AI Act evidence generation. Live at aiseal.ai.",
    tags: ["AI Security", "OWASP LLM", "Certification", "Next.js", "TypeScript", "EU AI Act"],
    githubUrl: "https://github.com/BadAsh99/aiseal",
    demoUrl: "https://aiseal.ai",
    language: "TypeScript",
    status: "active",
    highlights: [
      "All 10 OWASP LLM Top 10 + Agentic Top 10 (ASI01–ASI10) detectors",
      "TrustScore 0–100 with risk-weighted category scoring",
      "3-tier certification: ACF-1 / ACF-2 / ACF-3 with public badge + registry",
      "EU AI Act conformity evidence package (Art. 9–15 mapping)",
      "Post-quantum cryptography readiness scanner (NIST PQC, HNDL risk)",
      "MITRE ATLAS v5.4 + NIST AI RMF + EU AI Act framework alignment",
    ],
  },
  {
    id: "scmready",
    name: "SCMReady",
    description: "Panorama → Strata Cloud Manager migration analyzer — 26 automated checks including 9 silent failure modes the native tool misses",
    longDescription:
      "PS tool that parses a Panorama running-config.xml and surfaces every migration blocker before you touch a single firewall. 26 automated checks cover hard blockers (HA Active/Active, folder depth, reserved names, BGP RR) and 9 silent failure modes (intrazone/interzone defaults, OSPF LSA drops, tag asterisks, PSK dollar signs, BGP community strings, eth1/3+eth1/4 conflicts). Includes visual DG→Folder mapping, StackShift template classification, and SOW complexity scoring.",
    tags: ["PAN-OS", "Strata Cloud Manager", "Migration", "Python", "Flask", "PANW PS"],
    githubUrl: "https://github.com/BadAsh99/scmready",
    language: "Python",
    status: "active",
    highlights: [
      "26 parity checks — 9 silent failures the native SCM pre-check misses entirely",
      "Visual Device Group → SCM Folder hierarchy mapping",
      "StackShift engine: Template Stacks → Shared/Site-Specific Snippets",
      "CRITICAL/HIGH/MEDIUM findings with remediation steps + affected object names",
      "Complexity score + SOW effort estimator (Quick / Standard / Complex)",
    ],
  },
  {
    id: "badash-killchain",
    name: "badash-killchain",
    description: "LLM red-team attack chain framework — cross-application attack chains, prompt injection, and agent-to-agent exploitation",
    longDescription:
      "Production-grade AI security research framework simulating a realistic microservices environment with 5 services and 3 LLM agents. Demonstrates cross-application attack chains where a payload injected into one agent propagates through trust boundaries to compromise downstream services. Every feature maps to PANW AIRS curriculum — validates AIRS, doesn't compete with it.",
    tags: ["AI Security", "Red Team", "Prompt Injection", "FastAPI", "AIRS", "Cross-App Attacks"],
    githubUrl: "https://github.com/BadAsh99/badash-killchain",
    language: "Python",
    status: "active",
    highlights: [
      "5 microservices: gateway + content-mod + finance + support + dashboard",
      "Cross-app attack chains (AC-001/002/003) — payload crosses agent trust boundaries",
      "Semantic + keyword injection detection with real-time audit logging",
      "MITRE ATLAS + PANW AIRS curriculum alignment",
    ],
  },
  {
    id: "llmguardt2",
    name: "LLMGuardT2",
    description: "OWASP LLM Top 10 red-team scanner with semantic detection — catches paraphrased attacks that bypass pattern matchers",
    longDescription:
      "Red-team scanner that fires 35 payloads across all 10 OWASP LLM categories against live Claude and OpenAI endpoints. The differentiator: all-MiniLM-L6-v2 semantic embeddings with cosine similarity scoring catches rephrased attacks that every string-matching scanner misses. Results stream in real-time via SSE with per-payload VULNERABLE / PARTIAL / RESISTANT classification.",
    tags: ["OWASP LLM", "Semantic Detection", "Red Team", "Flask", "sentence-transformers"],
    githubUrl: "https://github.com/BadAsh99/llmguardt2",
    language: "Python",
    status: "stable",
    highlights: [
      "35 payloads across all OWASP LLM Top 10 categories",
      "Semantic detection via all-MiniLM-L6-v2 — catches paraphrased attacks",
      "SSE real-time streaming — results appear as each payload fires",
      "Multi-provider: Anthropic Claude + OpenAI, tunable similarity threshold",
    ],
  },
  {
    id: "cloudguard",
    name: "CloudGuard",
    description: "Cloud misconfiguration scanner for AWS, Azure, and GCP with CIS Benchmark mapping and PDF reports",
    longDescription:
      "Read-only cloud security scanner that identifies misconfigurations across Azure, AWS, and GCP. Maps findings to CIS Benchmarks and OWASP Cloud Top 10 with copy-paste remediation steps and executive PDF reports.",
    tags: ["Cloud Security", "Azure", "AWS", "GCP", "CIS Benchmarks"],
    githubUrl: "https://github.com/BadAsh99/cloudguard",
    pageUrl: "/projects/cloudguard",
    language: "Python",
    status: "stable",
    highlights: [
      "Azure, AWS, GCP multi-cloud support",
      "CIS Benchmark + OWASP Cloud Top 10 alignment",
      "Read-only — no write permissions required",
      "Executive PDF report generation",
    ],
  },
];
