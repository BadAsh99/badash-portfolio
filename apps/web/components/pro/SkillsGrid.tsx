import { domains, certifications } from "@/lib/pro-data";
import { TagBadge } from "@/components/shared/GlowBadge";

export function SkillsGrid() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto border-t border-terminal-border">
      <div className="mb-10">
        <div className="font-sans text-sm text-[#0080ff] mb-2 tracking-wide uppercase">Expertise</div>
        <h2 className="font-sans text-3xl font-bold text-white">Core Competencies</h2>
      </div>

      {/* Certifications */}
      <div className="flex flex-wrap gap-3 mb-10">
        {certifications.map((c) => (
          <div key={c.name} className="glass-card px-5 py-3 flex items-center gap-3">
            <span className="font-sans font-bold text-[#0080ff] text-sm">{c.name}</span>
            <span className="font-sans text-xs text-terminal-muted">{c.full}</span>
          </div>
        ))}
      </div>

      {/* Domain grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {domains.map((d) => (
          <div key={d.name} className="glass-card p-5">
            <div className="font-sans font-semibold text-white text-sm mb-3">{d.name}</div>
            <div className="flex flex-wrap gap-1.5">
              {d.items.map((item) => (
                <TagBadge key={item} tag={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
