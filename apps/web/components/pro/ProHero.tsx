import { Award, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "Fortune 500", label: "Enterprise Scale" },
  { value: "PCNSE", label: "PAN Certified" },
  { value: "Gas & Oil", label: "Critical Infrastructure" },
  { value: "Telecom", label: "Carrier Grade" },
];

export function ProHero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-12">

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="font-sans text-sm text-[#0080ff] mb-3 tracking-wide uppercase">
            Professional Profile
          </div>
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
            Ash Clements
          </h1>
          <p className="font-sans text-lg text-terminal-muted mb-4">
            Sr. Professional Services Consultant — SASE & AI Security
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 font-sans text-xs font-medium text-[#0080ff] border border-[#0080ff]/30 bg-[#0080ff]/5 px-3 py-1 rounded-full">
              <Award size={11} /> PCNSE
            </span>
            <span className="flex items-center gap-1.5 font-sans text-xs text-terminal-muted border border-terminal-border px-3 py-1 rounded-full">
              Palo Alto Networks
            </span>
            <span className="flex items-center gap-1.5 font-sans text-xs text-terminal-muted border border-terminal-border px-3 py-1 rounded-full">
              <MapPin size={11} /> Phoenix, AZ
            </span>
          </div>

          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-4">
            I got my first job at 15 — waiting tables, helping the family, buying computer parts with what was left.
            Never stopped working. By my early twenties I was so burned out on tech I got my real estate license
            and made $10k a month deliberately staying away from computers. Lasted three years before the industry
            hunted me down anyway: brokerages kept asking me to fix their networks, and I was too good at it to say no.
          </p>
          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-4">
            1997 — Unisys fly-and-fix team. We rolled out the Y2K remediation across the entire Social Security
            Administration. Nearly every state, Thursday to Monday, for two years straight.
            That{"'"}s where carrier-grade infrastructure stopped being theory and became instinct.
          </p>
          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-8">
            2001: tech bubble burst, laid off from GE Spacenet, back in Richmond with nothing.
            That year hit hard on multiple fronts. Building something wasn{"'"}t just about the money —
            it was about having something to show up for every day.
            Downloaded pirated Dreamweaver and Flash, taught myself HTML, CSS, Flash, and Java from scratch,
            built ProFilePC from zero — web, security, and network consulting — $125k working from home.
            First paycheck went to a legal Adobe license. That{"'"}s still how I operate: figure it out,
            put it back together better, pay it forward when you can.
          </p>
          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-8">
            Senior security consultant specializing in enterprise SASE deployments and AI security architecture.
            At Palo Alto Networks, I lead complex Prisma Access implementations for Fortune 500 organizations
            across critical infrastructure — gas & oil, telecommunications, and global financial services.
            PCNSE certified with deep expertise in Zero Trust architecture and the emerging field of AI runtime security.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/ash-clements-75b62b22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm font-medium px-5 py-2.5 bg-[#0080ff] text-white rounded hover:bg-[#0066cc] transition-colors"
            >
              LinkedIn Profile <ExternalLink size={14} />
            </a>
            <Link
              href="/pro/experience"
              className="flex items-center gap-2 font-sans text-sm px-5 py-2.5 glass-card text-terminal-text rounded hover:text-white transition-colors"
            >
              View Experience
            </Link>
          </div>
        </div>

        {/* Profile photo */}
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-[#0080ff]/20 shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_60px_rgba(0,128,255,0.15),0_20px_60px_rgba(0,0,0,0.3)]">
            <Image
              src="/profilepic.png"
              alt="Ash Clements"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14">
        {stats.map((s) => (
          <div key={s.label} className="glass-card p-4 text-center">
            <div className="font-sans text-sm font-semibold text-white">{s.value}</div>
            <div className="font-sans text-xs text-terminal-muted mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
