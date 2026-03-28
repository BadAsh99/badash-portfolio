import { experience } from "@/lib/pro-data";

export function ExperienceTimeline() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto border-t border-terminal-border">
      <div className="mb-10">
        <div className="font-sans text-sm text-[#0080ff] mb-2 tracking-wide uppercase">Career</div>
        <h2 className="font-sans text-3xl font-bold text-white">Experience</h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[#0080ff]/20 hidden md:block" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <div key={i} className="md:pl-8 relative">
              {/* Dot */}
              <div className={`absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full border-2 hidden md:block ${
                job.current
                  ? "bg-[#0080ff] border-[#0080ff]"
                  : "bg-terminal-bg border-[#0080ff]/40"
              }`} />

              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="font-sans font-semibold text-lg text-white">{job.role}</div>
                    <div className="font-sans text-base text-[#0080ff]">{job.company}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono text-xs text-terminal-muted">{job.period}</div>
                    <div className="font-mono text-xs text-terminal-dim mt-0.5">{job.location}</div>
                    {job.current && (
                      <span className="inline-block mt-1 font-sans text-xs text-[#0080ff] border border-[#0080ff]/30 px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="font-sans text-sm text-terminal-muted mb-3">{job.focus}</p>

                <ul className="space-y-1.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 font-sans text-sm text-terminal-text">
                      <span className="text-[#0080ff] mt-1 shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
