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
    id: "badash-killchain",
    name: "badash-killchain",
    description: "Multi-application LLM runtime security framework with cross-app attack chains and prompt injection detection",
    longDescription:
      "Production-grade AI security framework simulating a realistic microservices environment with 3 LLM agents, semantic injection detection, real-time audit logging, and cross-service attack chain visualization.",
    tags: ["AI Security", "FastAPI", "Prompt Injection", "Red Team", "AIRS"],
    githubUrl: "https://github.com/BadAsh99/badash-killchain",
    language: "Python",
    status: "active",
    highlights: [
      "5 microservices: gateway + 3 LLM agents + dashboard",
      "Semantic + keyword injection detection",
      "Cross-app attack chain visualization",
      "Audit logging with risk scoring",
    ],
  },
  {
    id: "llmguardt2",
    name: "LLMGuardT2",
    description: "Enterprise LLM vulnerability scanner with semantic attack detection across all OWASP LLM Top 10 categories",
    longDescription:
      "Red-team scanner that tests LLM endpoints against 35+ payloads covering all 10 OWASP LLM vulnerabilities. Uses sentence-transformers for semantic detection — catches paraphrased attacks that bypass pattern matching.",
    tags: ["OWASP LLM", "Vulnerability Scanner", "Semantic Detection", "Flask", "AI Red Team"],
    githubUrl: "https://github.com/BadAsh99/llmguardt2",
    language: "Python",
    status: "stable",
    highlights: [
      "35 payloads across all OWASP LLM Top 10",
      "Semantic detection via all-MiniLM-L6-v2",
      "SSE real-time streaming results",
      "Supports Anthropic + OpenAI",
    ],
  },
  {
    id: "panorama-scm-migrator",
    name: "SCMReady",
    description: "Interactive Panorama → SCM migration teaching tool. Upload a config, visualize the hierarchy, and walk out knowing exactly which templates become snippets.",
    longDescription:
      "PS-grade migration tool powered by the StackShift engine. Classifies Panorama templates as shared vs site-specific, recommends exact snippet scope and cascade settings, detects hard migration blockers, and scrubs credentials stronger than PANW's own TAC pipeline.",
    tags: ["Panorama", "Strata Cloud Manager", "PAN-OS", "Migration", "Flask", "Python", "Professional Services"],
    githubUrl: "https://github.com/BadAsh99/panorama-scm-migrator",
    pageUrl: "/projects/scmready",
    language: "Python",
    status: "active",
    highlights: [
      "StackShift engine: classifies templates → snippet scope + cascade",
      "Hard blocker detection (intrazone-default, PAN-OS version)",
      "TAC-grade credential scrubbing — 21+ field types",
      "Interactive canvas: pan, zoom, drag-to-remap",
    ],
  },
  {
    id: "cloudguard",
    name: "CloudGuard",
    description: "Cloud misconfiguration scanner for AWS, Azure, and GCP with CIS Benchmark mapping and PDF reports",
    longDescription:
      "Read-only cloud security scanner that identifies misconfigurations across Azure, AWS, and GCP. Maps findings to CIS Benchmarks and OWASP Cloud Top 10 with copy-paste remediation and executive PDF reports.",
    tags: ["Cloud Security", "Azure", "AWS", "GCP", "CIS Benchmarks", "Terraform"],
    githubUrl: "https://github.com/BadAsh99/cloudguard",
    pageUrl: "/projects/cloudguard",
    language: "Python",
    status: "stable",
    highlights: [
      "Azure, AWS, GCP support",
      "CIS Benchmark alignment",
      "Red-team exploitation mode",
      "Executive PDF report generation",
    ],
  },
  {
    id: "firewise-ai",
    name: "firewise-ai",
    description: "AI-powered security monitoring and response system",
    longDescription:
      "AI-driven security event correlation and automated response framework. Leverages LLMs for intelligent threat analysis and response recommendation.",
    tags: ["AI Security", "SIEM", "Automation", "Monitoring"],
    githubUrl: "https://github.com/BadAsh99/firewise-ai",
    language: "Python",
    status: "wip",
    highlights: [
      "AI-powered threat correlation",
      "Automated response recommendations",
      "Security event analysis",
    ],
  },
  {
    id: "llmguard",
    name: "llmguard",
    description: "LLM security guardrails and policy enforcement framework",
    longDescription:
      "Policy enforcement layer for LLM applications. Defines and enforces security boundaries for production AI systems.",
    tags: ["LLM Security", "Guardrails", "Policy", "AI"],
    githubUrl: "https://github.com/BadAsh99/llmguard",
    language: "Python",
    status: "stable",
    highlights: [
      "Input/output policy enforcement",
      "Configurable security boundaries",
      "Production-ready guardrails",
    ],
  },
  {
    id: "posture-validator",
    name: "posture-validator",
    description: "Python/Streamlit security posture validator powered by Gemini Vertex AI",
    longDescription:
      "AI-powered security posture assessment tool using Google Gemini for intelligent analysis of cloud and network security configurations.",
    tags: ["GCP", "Vertex AI", "Gemini", "Streamlit", "Security Posture"],
    githubUrl: "https://github.com/BadAsh99/posture-validator",
    language: "Python",
    status: "stable",
    highlights: [
      "Gemini-powered analysis",
      "Streamlit dashboard",
      "GCP security posture",
    ],
  },
];
