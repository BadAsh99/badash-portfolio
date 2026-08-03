const schedule = [
  { name: "OWASP GENAI PROJECT", when: "AUG 4", status: "confirmed" },
  { name: "BLACK HAT USA", when: "AUG 4-9", status: "confirmed" },
  { name: "OFFENSIVE AI CON", when: "AUG 5", status: "confirmed" },
  { name: "DEF CON", when: "AUG 6-9", status: "confirmed" },
  { name: "AI SECURITY FORUM LV", when: "AUG 6", status: "confirmed" },
  { name: "HACKASAN", when: "AUG", status: "confirmed" },
  { name: "AGE OF AI SUMMIT", when: "AUG 14", status: "confirmed" },
];

const DOT_WIDTH = 26;

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-terminal-green text-sm mb-2">{"// SECTION 05"}</div>
        <h2 className="text-3xl font-bold font-mono text-terminal-text mb-6">
          Vegas<span className="text-terminal-green">.august</span>
        </h2>

        <div className="glass-card rounded p-6 font-mono text-sm overflow-x-auto">
          <div className="text-terminal-muted mb-4">
            <span className="text-terminal-green">ash@badash99</span>:~$ ./schedule --august
          </div>

          <div className="space-y-1.5 min-w-max">
            {schedule.map((item) => (
              <div key={item.name} className="flex items-baseline gap-1 whitespace-nowrap">
                <span className="text-terminal-text">{item.name}</span>
                <span className="text-terminal-border select-none">
                  {".".repeat(Math.max(3, DOT_WIDTH - item.name.length))}
                </span>
                <span className="text-terminal-muted">{item.when}</span>
                <span className="text-terminal-green ml-2">{item.status}</span>
              </div>
            ))}
          </div>

          <div className="text-terminal-muted mt-5 pt-4 border-t border-terminal-border">
            come find me. breaking things in public all week.
            <span className="text-terminal-green animate-pulse ml-1">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}
