import { ExternalLink } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto border-t border-terminal-border">
      <div className="mb-8">
        <div className="font-sans text-sm text-[#0080ff] mb-2 tracking-wide uppercase">Get in Touch</div>
        <h2 className="font-sans text-3xl font-bold text-white">Contact</h2>
        <p className="font-sans text-sm text-terminal-muted mt-3 max-w-xl">
          Available for consulting engagements, speaking opportunities, and technical advisory
          roles in enterprise security and AI security architecture.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://www.linkedin.com/in/ash-clements"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-[#0080ff] text-white rounded hover:bg-[#0066cc] transition-colors"
        >
          Connect on LinkedIn <ExternalLink size={14} />
        </a>
        <a
          href="https://github.com/BadAsh99"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-sans text-sm px-6 py-3 glass-card text-terminal-text rounded hover:text-white transition-colors"
        >
          GitHub — @BadAsh99 <ExternalLink size={14} />
        </a>
        <a
          href="https://badash99.dev"
          className="flex items-center gap-2 font-sans text-sm px-6 py-3 glass-card text-terminal-text rounded hover:text-white transition-colors"
        >
          Technical Blog ↗
        </a>
      </div>
    </section>
  );
}
