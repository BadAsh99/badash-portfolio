import type { Metadata } from "next";
import {
  GitBranch,
  Layers,
  Terminal,
  ExternalLink,
  ChevronRight,
  Shield,
  Zap,
  Network,
  FileSearch,
  ArrowRight,
} from "lucide-react";
import { TagBadge } from "@/components/shared/GlowBadge";

export const metadata: Metadata = {
  title: "SCMReady",
  description:
    "Interactive Panorama → Strata Cloud Manager migration teaching tool. Visualizes device group hierarchies, template stack transformations, and migration blockers from a live config file.",
};

const features = [
  {
    title: "Live Config Analysis",
    icon: <FileSearch size={14} />,
    body:
      "Upload a Panorama running-config.xml and get an instant interactive map of your device group hierarchy, template stacks, and snippet candidates. No cloud processing — everything runs locally.",
  },
  {
    title: "StackShift Engine",
    icon: <Zap size={14} />,
    body:
      "Classifies each template as shared or site-specific, then recommends the exact SCM snippet scope and cascade setting. Shared templates with cascade ON can replace 5 stacks with a single snippet.",
  },
  {
    title: "Migration Blocker Detection",
    icon: <Shield size={14} />,
    body:
      "Flags intrazone-default rule overrides (hard migration blocker), PAN-OS version gaps, and feature parity issues before you touch SCM. Know what breaks before it breaks.",
  },
  {
    title: "TAC-Grade Credential Scrubbing",
    icon: <Shield size={14} />,
    body:
      "Every uploaded config is scrubbed before parsing — 21 credential field types, JWT Bearer tokens, base64 key blobs, BGP/OSPF routing data, DNS servers, and full network topology. Stronger than PANW's own TSF sanitization pipeline.",
  },
  {
    title: "Interactive Canvas",
    icon: <Network size={14} />,
    body:
      "Pan, zoom, and click through the migration map. Collapse template stacks into snippets. Drag-and-remap device groups in Try It mode. The canvas teaches the SCM mental model by letting you interact with it.",
  },
  {
    title: "PS Engagement Ready",
    icon: <Layers size={14} />,
    body:
      "Load a customer config, walk through the coach card narrative, export a snippet recommendation report. Designed for the PS conversation — not just technical validation.",
  },
];

const scrubCategories = [
  { label: "Credentials", items: ["phash / password", "RADIUS / TACACS+ secrets", "BGP MD5 auth keys", "LDAP bind-password", "IKE / IPsec PSKs", "SNMP community + SNMPv3 authpwd/privpwd", "Kerberos keytab", "OAuth client-secret", "AWS secret-access-key", "Proxy user/pwd", "API keys + JWT Bearer tokens"] },
  { label: "Routing Topology", items: ["BGP neighbor IPs + AS numbers", "BGP router-ID", "OSPF router-ID + neighbors", "Redistribution agent passwords", "Static route next-hops"] },
  { label: "Network Topology", items: ["All interface IPs", "DNS primary / secondary servers", "NTP server addresses", "Syslog / SIEM IPs", "HA peer IPs", "LDAP / RADIUS / TACACS+ server IPs"] },
  { label: "Key Material", items: ["Certificate private keys + passphrases", "base64 blobs > 256-bit", "JWT Bearer tokens", "SSL forward-proxy CA"] },
];

const stackShiftLogic = `# StackShift classification logic (simplified)

if template.has_shared_indicators():
    # DNS, NTP, Syslog, SNMP — same on every device
    snippet.scope  = "All Firewalls"   # or regional folder
    snippet.cascade = True             # one snippet covers N devices
    snippet.replaces = len(stacks_using_template)
else:
    # Physical interfaces, BGP, site-specific routing
    snippet.scope  = dg_that_owns_devices
    snippet.cascade = False            # scoped, not inherited
    snippet.replaces = 1`;

const tags = [
  "Panorama", "Strata Cloud Manager", "PAN-OS", "Migration",
  "Flask", "Canvas API", "Python", "Professional Services",
];

export default function SCMReadyPage() {
  return (
    <div className="pt-14 min-h-screen">
      <section className="py-24 px-4 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-terminal-cyan text-sm mb-3">{"// PROJECTS / SCMREADY"}</div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold font-mono text-terminal-text leading-tight">
                <span className="text-terminal-green">SCM</span>Ready
              </h1>
              <p className="font-mono text-terminal-muted text-sm mt-1 leading-none">
                Powered by <span className="text-terminal-cyan">StackShift</span>
              </p>
              <p className="font-mono text-terminal-muted text-sm mt-3 leading-relaxed max-w-xl">
                Interactive Panorama → Strata Cloud Manager migration teaching tool.
                Upload a config, visualize the hierarchy transformation, and walk out knowing exactly
                which templates become snippets and why.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs px-2 py-1 rounded border text-terminal-green border-terminal-green/30">
                ACTIVE
              </span>
              <a
                href="https://github.com/BadAsh99/panorama-scm-migrator"
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
            { value: "21+", label: "Credential Field Types Scrubbed" },
            { value: "StackShift", label: "Template → Snippet Engine" },
            { value: "Local Only", label: "No Cloud Processing" },
            { value: "PS-Ready", label: "Customer Engagement Tool" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="font-mono text-sm font-bold text-terminal-green">{s.value}</div>
              <div className="font-mono text-xs text-terminal-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* The problem */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// THE PROBLEM"}</div>
          <div className="terminal-chrome p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={14} className="text-terminal-green" />
              <span className="font-mono text-xs text-terminal-muted">ash@badash99:~$ panorama --explain migration</span>
            </div>
            <div className="font-mono text-sm text-terminal-text space-y-4 leading-relaxed">
              <p>
                Panorama manages firewalls with{" "}
                <span className="text-terminal-green font-semibold">Device Groups</span> and{" "}
                <span className="text-terminal-green font-semibold">Template Stacks</span>.
                SCM uses <span className="text-terminal-cyan font-semibold">Folders</span> and{" "}
                <span className="text-terminal-cyan font-semibold">Snippets</span>.
                The concepts aren{"'"}t 1:1 — and that gap is where migrations stall.
              </p>
              <p>
                A template stack with 5 templates assigned to 12 devices doesn{"'"}t become 5 snippets.
                It might become <span className="text-terminal-green font-semibold">2 snippets</span> —
                one shared snippet with cascade ON covering all 12 devices, and one site-specific snippet
                scoped to the DC folder. Or it might be 5. The answer is in the template content,
                not the stack count.
              </p>
              <p>
                SCMReady reads the config and shows you which answer applies — and why.
              </p>
            </div>
          </div>
        </div>

        {/* The Panorama → SCM transformation */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// PANORAMA → SCM: THE TRANSFORMATION"}</div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-5">
              <div className="font-mono text-sm font-bold text-terminal-muted mb-3 flex items-center gap-2">
                <GitBranch size={14} /> Panorama Model
              </div>
              <div className="space-y-2 font-mono text-xs text-terminal-text">
                {[
                  "Device Groups → policy hierarchy (pre/post rules)",
                  "Templates → network config per device class",
                  "Template Stacks → assign templates to devices",
                  "Max depth: shared → DG → child DG → grandchild DG",
                  "Stacks can mix shared + site-specific templates",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <ChevronRight size={11} className="text-terminal-muted shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-5 border-terminal-green/20">
              <div className="font-mono text-sm font-bold text-terminal-green mb-3 flex items-center gap-2">
                <Layers size={14} /> SCM Model
              </div>
              <div className="space-y-2 font-mono text-xs text-terminal-text">
                {[
                  "Folders → policy hierarchy (replaces DGs)",
                  "Global → All Firewalls → customer folders (max 4 deep)",
                  "Snippets → network config with scope + cascade",
                  "Cascade ON → snippet inherited by all child folders",
                  "Cascade OFF → snippet scoped to exact folder only",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <ChevronRight size={11} className="text-terminal-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4 font-mono text-xs text-terminal-muted">
            <span className="text-terminal-muted">Template Stack (N templates, M devices)</span>
            <ArrowRight size={14} className="text-terminal-green" />
            <span className="text-terminal-green">1–N Snippets (StackShift decides)</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// FEATURES"}</div>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-terminal-green">{f.icon}</span>
                  <span className="font-mono text-sm font-bold text-terminal-text">{f.title}</span>
                </div>
                <p className="font-mono text-xs text-terminal-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* StackShift logic */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// STACKSHIFT ENGINE"}</div>
          <div className="terminal-chrome p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={14} className="text-terminal-green" />
              <span className="font-mono text-xs text-terminal-muted">ash@badash99:~$ cat stackshift_logic.py</span>
            </div>
            <pre className="font-mono text-xs text-terminal-text leading-relaxed whitespace-pre overflow-x-auto">
              {stackShiftLogic}
            </pre>
          </div>
        </div>

        {/* Credential scrubbing */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// CREDENTIAL SCRUBBING — STRONGER THAN PANW TAC"}</div>
          <p className="font-mono text-xs text-terminal-muted mb-4 leading-relaxed">
            Every uploaded config is scrubbed before any parsing occurs. The original file is deleted immediately after redaction.
            Only the sanitized copy is processed. Covers everything PANW{"'"}s own TSF pipeline scrubs — plus BGP routing topology, redistribution agent credentials, DNS infrastructure, and JWT tokens.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {scrubCategories.map((cat) => (
              <div key={cat.label} className="glass-card p-4">
                <div className="font-mono text-xs font-bold text-terminal-green mb-2">{cat.label}</div>
                <ul className="space-y-1">
                  {cat.items.map((item) => (
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

        {/* CTA */}
        <div className="flex flex-wrap gap-3 font-mono text-sm">
          <a
            href="https://scmready-production.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass-card px-4 py-2 rounded border-terminal-green text-terminal-green hover:bg-terminal-green/10 transition-colors"
          >
            Launch SCMReady → <ExternalLink size={13} />
          </a>
          <a
            href="https://github.com/BadAsh99/panorama-scm-migrator"
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
