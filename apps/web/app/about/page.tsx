import type { Metadata } from "next";
import { Terminal, Shield, Cloud, Brain, Network, Award, Zap } from "lucide-react";
import { TagBadge } from "@/components/shared/GlowBadge";
import { HUDProfile } from "@/components/shared/HUDProfile";
import { ReportLinks } from "@/components/shared/ReportLinks";

export const metadata: Metadata = {
  title: "About",
  description: "Bash99 — SASE, SaaS & AI Security. PCNSE certified. Securing enterprise infrastructure for gas & oil, telecom, and Fortune 500.",
};

const domains = [
  {
    icon: <Brain size={16} />,
    name: "AI Security",
    items: ["OWASP LLM Top 10", "Prompt Injection", "LLM Red Teaming", "Agentic AI Security", "AIRS", "Semantic Detection"],
  },
  {
    icon: <Network size={16} />,
    name: "SASE & SaaS Security",
    items: ["SASE", "SaaS Security", "SD-WAN", "Zero Trust", "PCNSE", "GlobalProtect"],
  },
  {
    icon: <Cloud size={16} />,
    name: "Cloud Security",
    items: ["Azure", "AWS", "GCP", "Terraform IaC", "CIS Benchmarks", "Cloud SIEM"],
  },
  {
    icon: <Shield size={16} />,
    name: "Security Engineering",
    items: ["Python", "FastAPI", "Docker", "Semantic Detection", "Red Team", "Threat Modeling"],
  },
];

const stats = [
  { value: "Fortune 500", label: "Enterprise Scale" },
  { value: "Gas & Oil", label: "Critical Infrastructure" },
  { value: "Telecom", label: "Carrier Grade" },
  { value: "PCNSE", label: "Certified" },
];

const timeline = [
  {
    role: "SASE & AI Security Consultant",
    company: "Enterprise Security",
    detail: "SASE & AI Security · SaaS · Enterprise Deployment",
    current: true,
  },
  {
    role: "Network Security Engineer",
    company: "American Express",
    detail: "Enterprise network security · Financial infrastructure",
    current: false,
  },
  {
    role: "Manager, Channel Development",
    company: "Allied Telecom Group",
    detail: "Telecom infrastructure · Channel architecture",
    current: false,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-14 min-h-screen">
      <section className="py-24 px-4 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row items-start gap-10">
          <div className="flex-1 min-w-0">
            <div className="font-mono text-terminal-green text-sm mb-3">{"// IDENTITY.TXT"}</div>
            <h1 className="text-4xl md:text-5xl font-bold font-mono text-terminal-text leading-tight">
              <span className="text-terminal-green">Bash99</span>
            </h1>
            <div className="font-mono text-terminal-cyan text-base mt-2">
              SASE & AI Security · SaaS · Builder
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 font-mono text-xs text-terminal-green border border-terminal-green/30 px-3 py-1 rounded-full">
                <Award size={11} /> PCNSE
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-terminal-muted border border-terminal-border px-3 py-1 rounded-full">
                Phoenix, AZ
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-terminal-muted border border-terminal-border px-3 py-1 rounded-full">
                ECPI University
              </span>
            </div>
          </div>
          <div className="shrink-0 flex justify-center md:justify-end">
            <HUDProfile size="sm" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="font-mono text-sm font-bold text-terminal-green">{s.value}</div>
              <div className="font-mono text-xs text-terminal-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="terminal-chrome p-6 mb-8">
          <div className="flex items-center gap-2 mb-5">
            <Terminal size={14} className="text-terminal-green" />
            <span className="font-mono text-xs text-terminal-muted">ash@badash99:~$ cat mission.txt</span>
          </div>
          <div className="font-mono text-sm text-terminal-text space-y-4 leading-relaxed">
            <p>
              Elementary school. Texas Instruments computer in the classroom. Every other kid was playing games.{" "}
              <span className="text-terminal-green font-semibold">I was writing BASIC — making the screen change colors, making it produce sounds.</span>{" "}
              The teacher pulled me aside for wasting valuable time on the computer. That was 1979. Nothing has changed.
            </p>
            <p>
              At home we had our own TI — that{"'"}s where I practiced. When we graduated to a Windows PC, my dad had one rule:
              if my brother and I broke the OS —{" "}
              <span className="text-terminal-green font-semibold">and we broke it constantly</span>{" "}
              — we fixed it ourselves. No exceptions. Reload the OS, figure it out, or it stays broken.{" "}
              <span className="text-terminal-cyan">That{"'"}s still how I operate.</span>{" "}
              Break things. Understand why. Put it back together better.
            </p>
            <p>
              I got my first job at 15 and a half — workers permit, waiting tables, helping the family keep the lights on
              and buying computer parts with whatever was left.{" "}
              <span className="text-terminal-green font-semibold">I{"'"}ve never stopped working since.</span>{" "}
              Bartended through school. Did what needed doing. That{"'"}s not a complaint — that{"'"}s a baseline.
            </p>
            <p>
              By my early twenties I was so burned out on computers I deliberately walked away.{" "}
              <span className="text-terminal-cyan">Got my real estate license. Made $10k a month.</span>{" "}
              Thought I was out. Then the brokerages figured out I could keep their networks running
              and dragged me back in — and honestly, they loved me for it. Computers weren{"'"}t done with me.
              Three years in real estate taught me how to sell, negotiate, and read a room.
              Every enterprise engagement since has used those skills.
            </p>
            <p>
              1997. Unisys. Fly-and-fix field team.{" "}
              <span className="text-terminal-green font-semibold">We rolled out the Y2K fix across the entire Social Security Administration.</span>{" "}
              Visited nearly every state in the US — Thursday to Monday, week after week.
              One of the largest coordinated government IT deployments in history. I was on the ground for it.
            </p>
            <p>
              2001. Tech bubble burst. Got laid off from a $250k job at GE Spacenet in Northern VA — living the life one day,
              back in Richmond with nothing the next. That year hit hard on multiple fronts.{" "}
              <span className="text-terminal-cyan">Building something wasn{"'"}t just about the money — it was about having something to show up for every day.</span>{" "}
              Unemployment running out, no plan.{" "}
              <span className="text-terminal-green font-semibold">
                So I downloaded pirated copies of Dreamweaver and Flash because I couldn{"'"}t afford Adobe,
                and taught myself HTML, CSS, Java, and Flash from scratch.
              </span>{" "}
              Built a portfolio. Landed VCU Art School, shops in Carytown, ecommerce clients. Started ProfilesPC —
              web, graphic design, security, and network consulting — $125k working from home.
              First thing I did when the money came in was buy a legal copy of the Adobe suite.
            </p>
            <p>
              That{"'"}s also where I first encountered automation. Dreamweaver added FTP — upload a site live
              without touching a terminal.{" "}
              <span className="text-terminal-cyan">A manual process, gone.</span>{" "}
              That thought never left.
            </p>
            <p>
              I{"'"}ve hardened the networks that move energy across continents, route the calls of hundreds of millions,
              and process the transactions of global finance.{" "}
              <span className="text-terminal-green font-semibold">
                When critical infrastructure needs to be secured — gas {"&"} oil majors, telecom carriers,
                Fortune 500 enterprises — I{"'"}m the one they call.
              </span>
            </p>
            <p>
              Zero Trust architecture isn{"'"}t a framework to me — it{"'"}s production code running across some of the most
              complex, high-stakes environments on the planet. I{"'"}ve seen what breaks. I{"'"}ve seen what holds.
            </p>
            <p>
              By night, I{"'"}m building what the industry doesn{"'"}t have yet: AI security tooling that applies the same
              runtime monitoring principles proven in network security to the new attack surface — LLMs.{" "}
              <span className="text-terminal-green">LLMGuardT2. CloudGuard. badash-killchain.</span>{" "}
              Not demos. Not tutorials. Real scanners, real detection, running in production.
            </p>
            <p>
              The shift from signature-based detection to behavioral ML in network security took a decade.
              In AI security, it{"'"}s happening in months. I{"'"}m not watching it happen —
              I{"'"}m <span className="text-terminal-cyan">building the guardrails</span>.
            </p>
            <p className="text-terminal-muted border-t border-terminal-border pt-4 mt-4">
              <span className="text-terminal-green">BadAshWednesdays</span> — weekly deep dives on AI security,
              SASE architecture, and building at the edge of what{"'"}s possible. No fluff. No theory. Just the work.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// CAREER.LOG"}</div>
          <div className="space-y-3">
            {timeline.map((t) => (
              <div key={t.company} className="glass-card p-4 flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <Zap size={14} className={t.current ? "text-terminal-green" : "text-terminal-dim"} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-sm font-bold text-terminal-text">{t.role}</div>
                  <div className={`font-mono text-sm ${t.current ? "text-terminal-cyan" : "text-terminal-muted"}`}>{t.company}</div>
                  <div className="font-mono text-xs text-terminal-dim mt-0.5">{t.detail}</div>
                </div>
                {t.current && (
                  <span className="ml-auto shrink-0 font-mono text-xs text-terminal-green border border-terminal-green/30 px-2 py-0.5 rounded-full">
                    ACTIVE
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Domains */}
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-4">{"// CAPABILITIES.MAP"}</div>
          <div className="grid md:grid-cols-2 gap-4">
            {domains.map((domain) => (
              <div key={domain.name} className="glass-card p-4">
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
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 font-mono text-sm">
          <a
            href="/blog"
            className="flex items-center gap-2 glass-card px-4 py-2 rounded hover:border-terminal-green hover:text-terminal-green transition-colors"
          >
            BadAshWednesdays ↗
          </a>
        </div>

      </section>
      <ReportLinks />
    </div>
  );
}
