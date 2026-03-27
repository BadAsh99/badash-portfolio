import type { Metadata } from "next";
import { Terminal, Shield, Cloud, Brain, Network } from "lucide-react";
import { TagBadge } from "@/components/shared/GlowBadge";

export const metadata: Metadata = {
  title: "About",
  description: "Ash Clements — Sr. SASE & AI Security Consultant at Palo Alto Networks.",
};

const domains = [
  { icon: <Brain size={16} />, name: "AI Security", items: ["OWASP LLM Top 10", "Prompt Injection", "LLM Red Teaming", "Agentic AI Security", "AIRS"] },
  { icon: <Network size={16} />, name: "SASE & PAN-OS", items: ["Prisma Access", "GlobalProtect", "PAN-OS", "SD-WAN", "Zero Trust"] },
  { icon: <Cloud size={16} />, name: "Cloud Security", items: ["Azure", "AWS", "GCP", "Terraform IaC", "CIS Benchmarks"] },
  { icon: <Shield size={16} />, name: "Security Engineering", items: ["Python", "FastAPI", "Docker", "Semantic Detection", "Red Team"] },
];

export default function AboutPage() {
  return (
    <div className="pt-14 min-h-screen">
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-2">{"// ABOUT"}</div>
          <h1 className="text-3xl font-bold font-mono text-terminal-text">
            <span className="text-terminal-green">Ash Clements</span>
          </h1>
          <div className="font-mono text-terminal-cyan text-sm mt-1">
            Sr. Professional Services Consultant — SASE & AI Security · Palo Alto Networks
          </div>
        </div>

        {/* Bio */}
        <div className="terminal-chrome p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Terminal size={14} className="text-terminal-green" />
            <span className="font-mono text-xs text-terminal-muted">ash@badash-lab:~ $ cat bio.txt</span>
          </div>
          <div className="font-mono text-sm text-terminal-text space-y-3 leading-relaxed">
            <p>
              I architect enterprise security at the intersection of SASE and GenAI — deploying Prisma Access for Fortune 500s by day, building AI security tooling by night.
            </p>
            <p>
              Currently deep in the transition from manual SASE configuration to agentic AI workflows — documenting the journey weekly in{" "}
              <span className="text-terminal-green">BadAshWednesdays</span>.
            </p>
            <p>
              The tools on this site are real: <span className="text-terminal-cyan">LLMGuardT2</span> scans LLM endpoints for OWASP vulnerabilities using semantic detection.{" "}
              <span className="text-terminal-cyan">badash-killchain</span> simulates cross-app AI attack chains.{" "}
              <span className="text-terminal-cyan">CloudGuard</span> red-teams cloud misconfigurations against CIS Benchmarks.
            </p>
            <p className="text-terminal-muted">
              Based in Phoenix, AZ. Open to conversations about AI security architecture, AIRS, and building at scale.
            </p>
          </div>
        </div>

        {/* Domains grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {domains.map((domain) => (
            <div key={domain.name} className="terminal-chrome p-4">
              <div className="flex items-center gap-2 text-terminal-green font-mono text-sm font-bold mb-3">
                {domain.icon}
                {domain.name}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {domain.items.map((item) => (
                  <TagBadge key={item} tag={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <a
            href="https://github.com/BadAsh99"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-terminal-border px-4 py-2 rounded hover:border-terminal-green hover:text-terminal-green transition-colors"
          >
            GitHub — @BadAsh99 ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ash-clements"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-terminal-border px-4 py-2 rounded hover:border-terminal-cyan hover:text-terminal-cyan transition-colors"
          >
            LinkedIn — Ash Clements ↗
          </a>
          <a
            href="https://badash99.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-terminal-border px-4 py-2 rounded hover:border-terminal-muted hover:text-terminal-text transition-colors"
          >
            Hugo Site ↗
          </a>
        </div>
      </section>
    </div>
  );
}
