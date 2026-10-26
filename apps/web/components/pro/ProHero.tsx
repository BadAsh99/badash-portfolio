import { Award, MapPin, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "Winner's Circle", label: "Gray Swan Arena" },
  { value: "#26 / 282", label: "Breaking Ties" },
  { value: "183 breaks", label: "Hazard Hunt · Cyber" },
  { value: "47 models", label: "Frontier Models Tested" },
];

export function ProHero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-12">

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="font-sans text-sm text-[#0080ff] mb-3 tracking-wide uppercase">
            AI Red Team · Offensive Security
          </div>
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
            Ash Clements
          </h1>
          <p className="font-sans text-lg text-terminal-muted mb-4">
            AI Red Teamer · LLM &amp; Agent Security · Threat Hunting
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 font-sans text-xs font-medium text-[#0080ff] border border-[#0080ff]/30 bg-[#0080ff]/5 px-3 py-1 rounded-full">
              <Award size={11} /> Gray Swan Winner&apos;s Circle
            </span>
            <span className="flex items-center gap-1.5 font-sans text-xs text-terminal-muted border border-terminal-border px-3 py-1 rounded-full">
              PCNSE
            </span>
            <span className="flex items-center gap-1.5 font-sans text-xs text-terminal-muted border border-terminal-border px-3 py-1 rounded-full">
              Palo Alto Networks
            </span>
            <span className="flex items-center gap-1.5 font-sans text-xs text-terminal-muted border border-terminal-border px-3 py-1 rounded-full">
              <MapPin size={11} /> Phoenix, AZ
            </span>
          </div>

          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-4">
            I red-team frontier language models and AI agents, and I build the defenses that assume the attack
            already won. On Gray Swan{"'"}s arena I hold a Winner{"'"}s Circle profile: #26 of 282 in Breaking Ties,
            183 breaks in the Hazard Hunt cyber track, and 40 externally judged breaks across 47 frontier models.
            Behind the rankings is a 123-record corpus that turns every attempt, win or loss, into a falsifiable
            rule about when a behavior class is breakable at all.
          </p>
          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-4">
            I build the defenses too. AEGIS, a RAG pipeline built on the premise that prompt injection succeeds,
            tokenizes personal data before it ever reaches the model, so a successful injection walks away with
            tokens instead of people. Against a plaintext baseline that re-identified 100% of records from real
            embeddings, AEGIS re-identified 0% while matching retrieval utility, and placed second in
            Protegrity{"'"}s 2026 AI Pipeline Security Challenge.
          </p>
          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-4">
            Under it is seventeen years in enterprise security, nine of them at Palo Alto Networks, where I lead
            Prisma Access and Zero Trust implementations for Fortune 500 organizations across critical
            infrastructure, own the identity layer, validate public exploits and their variants almost daily, and
            sit in customer breach and zero-day response. PCNSE certified.
          </p>
          <p className="font-sans text-sm text-terminal-muted leading-relaxed max-w-xl mb-8">
            The conclusion I keep landing on is the one I reached about networks a decade ago. No single
            component can be its own last line of defense, because its judgment can always be talked around by
            someone patient enough. Intent can be talked around. Actions can be gated.
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
