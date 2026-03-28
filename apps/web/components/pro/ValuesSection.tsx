import { Heart } from "lucide-react";

const causes = [
  {
    name: "St. George's Camp",
    location: "Orkney Springs, VA",
    description:
      "I grew up going to St. George's Camp because people at my church donated so kids like me could go. Now that I do well, I pay it forward — funding spots for underprivileged kids to have the same experience I did.",
    link: "https://www.shrinemont.com",
    linkLabel: "Shrine Mont / St. George's Camp ↗",
  },
  {
    name: "St. Mary's Food Bank",
    location: "Phoenix, AZ",
    description:
      "One of the largest food banks in the United States. I give time and money here because food insecurity is a solvable problem and no one in Phoenix should go hungry.",
    link: "https://www.firstfoodbank.org",
    linkLabel: "St. Mary's Food Bank ↗",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto border-t border-terminal-border">
      <div className="mb-10">
        <div className="font-sans text-sm text-[#0080ff] mb-2 tracking-wide uppercase">Beyond the Work</div>
        <h2 className="font-sans text-3xl font-bold text-white">What I Care About</h2>
        <p className="font-sans text-terminal-muted text-base mt-3 max-w-xl leading-relaxed">
          The work funds the mission. The mission is bigger than the work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {causes.map((cause) => (
          <div key={cause.name} className="glass-card p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <Heart size={16} className="text-[#0080ff] mt-1 shrink-0" />
              <div>
                <div className="font-sans font-semibold text-white text-base">{cause.name}</div>
                <div className="font-sans text-xs text-terminal-muted mt-0.5">{cause.location}</div>
              </div>
            </div>
            <p className="font-sans text-sm text-terminal-muted leading-relaxed">
              {cause.description}
            </p>
            <a
              href={cause.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#0080ff] hover:text-white transition-colors mt-auto"
            >
              {cause.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
