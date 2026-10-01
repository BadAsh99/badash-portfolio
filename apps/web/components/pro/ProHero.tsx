import { Award, MapPin, ExternalLink, FileText } from "lucide-react";
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
            Sr. Professional Services Consultant, SASE & AI Security
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
            Seventeen years in enterprise security, nine of them at Palo Alto Networks, where I lead complex
            Prisma Access implementations for Fortune 500 organizations across critical infrastructure:
            gas & oil, telecommunications, and global financial services. I own the identity layer on those
            engagements, validate public exploits and their variants almost daily, and sit in customer breach
            and zero-day response. PCNSE certified, with deep expertise in Zero Trust architecture.
          </p>
          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-4">
            For the past year I have also red-teamed production language models in Gray Swan{"'"}s
            frontier-lab-funded arena, where placements pay and the top finishers are recruited for private
            engagements. The defensive side of that work was graded too: AEGIS, a RAG pipeline that tokenizes
            personal data on ingest so a successful prompt injection walks away with tokens instead of personal data,
            placed second in Protegrity{"'"}s 2026 AI Pipeline Security Challenge.
          </p>
          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-8">
            The conclusion I keep landing on is the one I reached about networks a decade ago. No single
            component can be its own last line of defense, because its judgment can always be talked around by
            someone patient enough. The controls that hold sit at the action, the data, and the boundary.
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
            <a
              href="/Ash_Clements_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm px-5 py-2.5 glass-card text-terminal-text rounded hover:text-white transition-colors"
            >
              <FileText size={14} /> Resume (PDF)
            </a>
            <Link
              href="/pro/experience"
              className="flex items-center gap-2 font-sans text-sm px-5 py-2.5 glass-card text-terminal-text rounded hover:text-white transition-colors"
            >
              View Experience
            </Link>
          </div>
        </div>

        {/* Profile photo intentionally omitted pending a professional headshot.
            The previous asset carried badash99 branding, which does not belong
            on this domain. */}

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
