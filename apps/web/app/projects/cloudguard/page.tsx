import type { Metadata } from "next";
import {
  Shield,
  Cloud,
  Terminal,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  FileText,
  Zap,
} from "lucide-react";
import { TagBadge } from "@/components/shared/GlowBadge";

export const metadata: Metadata = {
  title: "CloudGuard",
  description:
    "Read-only cloud misconfiguration scanner for Azure, AWS, and GCP. CIS Benchmark aligned with copy-paste remediation and executive PDF reports.",
};

const checks = [
  {
    category: "Identity & Access",
    icon: <Shield size={14} />,
    items: [
      "Owner/Contributor roles at subscription scope (broad privilege audit)",
      "Service principal exposure and excessive permissions",
    ],
  },
  {
    category: "Storage & Data Protection",
    icon: <Cloud size={14} />,
    items: [
      "Public blob access on storage accounts",
      "HTTPS enforcement and TLS version checks",
      "Soft delete status across all storage accounts",
    ],
  },
  {
    category: "Network Security",
    icon: <AlertTriangle size={14} />,
    items: [
      "NSG rules exposing RDP (3389), SSH (22), WinRM (5985), Telnet (23) to 0.0.0.0/0",
      "Unrestricted inbound access on management ports",
    ],
  },
  {
    category: "Observability & Logging",
    icon: <FileText size={14} />,
    items: [
      "Activity Log profile existence and retention >= 90 days",
      "Activity Log Alerts configuration",
    ],
  },
  {
    category: "Secrets Management",
    icon: <Zap size={14} />,
    items: [
      "Key Vault existence per subscription",
      "Soft delete + purge protection enabled",
      "Public network access controls",
    ],
  },
  {
    category: "Policy Enforcement",
    icon: <CheckCircle size={14} />,
    items: [
      "Defender for Cloud plans: Storage, Servers, SQL, App Services, Key Vault",
    ],
  },
];

const features = [
  {
    title: "Read-Only by Design",
    body:
      "CloudGuard only needs Reader + Security Reader on the subscription. Zero write access. Nothing gets changed during a scan — findings are observations, not actions.",
  },
  {
    title: "CIS Benchmark Alignment",
    body:
      "Every finding maps to a CIS control reference and OWASP Cloud Top 10 category. No invented severity — framework-grounded output you can hand to a compliance team.",
  },
  {
    title: "Copy-Paste Remediation",
    body:
      "Each finding ships with the exact az CLI command and a drop-in Terraform block to fix it. The gap between \"finding\" and \"fix\" is one paste.",
  },
  {
    title: "Executive PDF Reports",
    body:
      "pdf_report.py generates a structured report with severity summary, findings table, and remediation steps. Drop it in a customer email or a compliance ticket.",
  },
  {
    title: "CI/CD Integration via REST API",
    body:
      "POST /api/scan returns structured findings JSON. Select specific checks per run. Scan multiple subscriptions with the same service principal by passing different subscription_id values.",
  },
  {
    title: "Docker-First Deployment",
    body:
      "docker compose up -d and it's live at localhost:5000. Works anywhere Docker runs — local, VM, or pipeline container. No dependency sprawl.",
  },
];

const quickstart = `# 1. Clone
git clone https://github.com/BadAsh99/cloudguard.git && cd cloudguard

# 2. Create read-only service principal
az ad sp create-for-rbac \\
  --name "cloudguard-scanner" \\
  --role Reader \\
  --scopes /subscriptions/<SUBSCRIPTION_ID>

# 3. Spin up
docker compose up -d
# Open http://localhost:5000

# 4. Or scan via API
curl -X POST http://localhost:5000/api/scan \\
  -H "Content-Type: application/json" \\
  -d '{"provider": "azure", "mode": "scan", "credentials": { ... }}'`;

const tags = ["Cloud Security", "Azure", "AWS", "GCP", "CIS Benchmarks", "OWASP Cloud Top 10", "Terraform", "Docker", "Python"];

export default function CloudGuardPage() {
  return (
    <div className="pt-14 min-h-screen">
      <section className="py-24 px-4 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-terminal-cyan text-sm mb-3">{"// PROJECTS / CLOUDGUARD"}</div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold font-mono text-terminal-text leading-tight">
                <span className="text-terminal-green">Cloud</span>Guard
              </h1>
              <p className="font-mono text-terminal-muted text-sm mt-3 leading-relaxed max-w-xl">
                Read-only cloud misconfiguration scanner. Azure live, AWS/GCP in progress.
                Maps every finding to CIS Benchmarks and OWASP Cloud Top 10 — then gives you the exact CLI command and Terraform block to fix it.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs px-2 py-1 rounded border text-terminal-green border-terminal-green/30">
                STABLE
              </span>
              <a
                href="https://github.com/BadAsh99/cloudguard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm glass-card px-4 py-2 rounded hover:border-terminal-green hover:text-terminal-green transition-colors"
              >
                GitHub <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-5">
            {tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { value: "3 Providers", label: "Azure / AWS / GCP" },
            { value: "6 Categories", label: "Check Coverage" },
            { value: "CIS + OWASP", label: "Framework Aligned" },
            { value: "Read-Only", label: "Zero Write Access" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="font-mono text-sm font-bold text-terminal-green">{s.value}</div>
              <div className="font-mono text-xs text-terminal-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* What it does */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// FEATURES"}</div>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ChevronRight size={13} className="text-terminal-green shrink-0" />
                  <span className="font-mono text-sm font-bold text-terminal-text">{f.title}</span>
                </div>
                <p className="font-mono text-xs text-terminal-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Check coverage */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// CHECK COVERAGE — AZURE"}</div>
          <div className="space-y-3">
            {checks.map((c) => (
              <div key={c.category} className="glass-card p-4">
                <div className="flex items-center gap-2 text-terminal-green font-mono text-sm font-bold mb-2">
                  {c.icon}
                  {c.category}
                </div>
                <ul className="space-y-1">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-mono text-xs text-terminal-text">
                      <ChevronRight size={11} className="text-terminal-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quickstart */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// QUICKSTART"}</div>
          <div className="terminal-chrome p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={14} className="text-terminal-green" />
              <span className="font-mono text-xs text-terminal-muted">ash@badash99:~$ cat quickstart.sh</span>
            </div>
            <pre className="font-mono text-xs text-terminal-text leading-relaxed whitespace-pre overflow-x-auto">
              {quickstart}
            </pre>
          </div>
        </div>

        {/* Architecture note */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// ARCHITECTURE"}</div>
          <div className="terminal-chrome p-6">
            <div className="flex items-center gap-2 mb-5">
              <Terminal size={14} className="text-terminal-green" />
              <span className="font-mono text-xs text-terminal-muted">ash@badash99:~$ cat arch.txt</span>
            </div>
            <div className="font-mono text-sm text-terminal-text space-y-4 leading-relaxed">
              <p>
                CloudGuard is structured as a{" "}
                <span className="text-terminal-green font-semibold">payload framework</span>
                {" "}— same mental model as LLMGuardT2, but for cloud infrastructure instead of LLM endpoints.
                Each check is a discrete payload with its own ID, category, CIS control reference, and check function.
              </p>
              <p>
                <span className="text-terminal-green font-semibold">azure_scanner.py</span> handles Azure SDK calls via a service principal or{" "}
                <span className="text-terminal-cyan">az login</span> session.{" "}
                <span className="text-terminal-green font-semibold">scanner.py</span> defines the payload registry and{" "}
                <span className="text-terminal-green font-semibold">ScanFinding</span> model — every result has a severity,
                CIS control, and two remediation blocks (CLI + Terraform).
              </p>
              <p>
                <span className="text-terminal-green font-semibold">exploiter.py</span> is the red-team module —
                read-only exploitation simulation to demonstrate blast radius without making any changes.
                It uses the same credential path as the scanner.
              </p>
              <p>
                The Flask app wraps everything with a simple REST API and browser UI.
                Designed to be dropped into a CI/CD pipeline or used interactively in a PS engagement.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 font-mono text-sm">
          <a
            href="https://cloudguard-production.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card px-4 py-2 rounded border-terminal-green text-terminal-green hover:bg-terminal-green/10 transition-colors"
          >
            Launch CloudGuard → <ExternalLink size={13} />
          </a>
          <a
            href="https://github.com/BadAsh99/cloudguard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card px-4 py-2 rounded hover:border-terminal-green hover:text-terminal-green transition-colors"
          >
            View on GitHub <ExternalLink size={13} />
          </a>
          <a
            href="/projects"
            className="flex items-center gap-2 glass-card px-4 py-2 rounded hover:border-terminal-green hover:text-terminal-green transition-colors"
          >
            ← All Projects
          </a>
        </div>

      </section>
    </div>
  );
}
