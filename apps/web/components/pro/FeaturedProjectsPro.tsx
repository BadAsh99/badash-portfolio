import { ExternalLink } from "lucide-react";
import Link from "next/link";

const featured = [
  {
    name: "AI Runtime Security Research Platform",
    description:
      "Multi-agent LLM security framework demonstrating cross-service attack detection and runtime monitoring — the architectural pattern behind Palo Alto Networks' AIRS offering.",
    tags: ["AI Security", "FastAPI", "AIRS", "Red Team"],
    github: "https://github.com/BadAsh99/badash-killchain",
    highlight: "5 microservices · real attack chains · audit logging",
  },
  {
    name: "LLM Vulnerability Assessment Scanner",
    description:
      "Automated scanner testing AI endpoints against the full OWASP LLM Top 10. Semantic detection catches paraphrased attacks that bypass pattern matching — 35+ payloads, production-ready.",
    tags: ["OWASP LLM Top 10", "Semantic Detection", "Python"],
    github: "https://github.com/BadAsh99/llmguardt2",
    highlight: "35+ payloads · semantic ML detection · SSE streaming",
  },
  {
    name: "Cloud Security Posture Scanner",
    description:
      "Multi-cloud misconfiguration scanner mapping findings to CIS Benchmarks with executive PDF reporting. Covers AWS, Azure, and GCP in a single read-only scan.",
    tags: ["Cloud Security", "AWS", "Azure", "GCP", "CIS Benchmarks"],
    github: "https://github.com/BadAsh99/cloudguard",
    highlight: "3 cloud providers · CIS aligned · PDF reports",
  },
];

export function FeaturedProjectsPro() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto border-t border-terminal-border">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <div className="font-sans text-sm text-[#0080ff] mb-2 tracking-wide uppercase">Portfolio</div>
          <h2 className="font-sans text-3xl font-bold text-white">Security Tooling</h2>
          <p className="font-sans text-sm text-terminal-muted mt-2">
            Production tools built at the intersection of AI security, cloud, and enterprise network security.
          </p>
        </div>
        <Link
          href="/pro/projects"
          className="shrink-0 font-sans text-sm text-[#0080ff] hover:underline"
        >
          All projects →
        </Link>
      </div>

      <div className="space-y-4">
        {featured.map((p) => (
          <a
            key={p.name}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex flex-col sm:flex-row gap-4 group hover:border-[#0080ff]/30 transition-all block"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="font-sans font-semibold text-white group-hover:text-[#0080ff] transition-colors">
                  {p.name}
                </div>
                <ExternalLink size={14} className="shrink-0 text-terminal-dim group-hover:text-[#0080ff] transition-colors mt-0.5" />
              </div>
              <p className="font-sans text-sm text-terminal-muted leading-relaxed mb-3">
                {p.description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="font-sans text-xs px-2 py-0.5 rounded border border-terminal-border text-terminal-muted bg-terminal-surface">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs text-terminal-dim">{p.highlight}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
