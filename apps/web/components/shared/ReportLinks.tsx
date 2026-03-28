import { AlertTriangle } from "lucide-react";

const resources = [
  {
    category: "Child Safety",
    items: [
      {
        name: "NCMEC CyberTipline",
        description: "Report online child sexual exploitation",
        link: "https://www.cybertipline.org",
      },
      {
        name: "FBI Tips",
        description: "Report child exploitation and abuse to federal law enforcement",
        link: "https://tips.fbi.gov",
      },
      {
        name: "INHOPE",
        description: "International network for reporting CSAM — 50+ countries",
        link: "https://www.inhope.org",
      },
    ],
  },
  {
    category: "Animal Cruelty",
    items: [
      {
        name: "ASPCA Report Cruelty",
        description: "How and where to report animal abuse in your area",
        link: "https://www.aspca.org/take-action/report-animal-cruelty",
      },
      {
        name: "Humane Society",
        description: "Report animal cruelty — national resources and local referrals",
        link: "https://www.humanesociety.org/resources/report-animal-cruelty",
      },
    ],
  },
];

export function ReportLinks() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto border-t border-terminal-border">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle size={14} className="text-red-500" />
          <span className="font-mono text-red-500 text-sm font-bold tracking-wide uppercase">Report It</span>
        </div>
        <p className="font-mono text-xs text-terminal-muted max-w-2xl leading-relaxed">
          I spend a lot of time in dark corners of the internet. If you see something — child exploitation, animal cruelty — say something. These are the resources that actually do something about it.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((section) => (
          <div key={section.category} className="glass-card p-5">
            <div className="font-mono text-xs text-terminal-green font-bold mb-4 tracking-wide">
              {section.category.toUpperCase()}
            </div>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-terminal-cyan hover:text-terminal-green transition-colors font-semibold"
                  >
                    {item.name} ↗
                  </a>
                  <p className="font-mono text-xs text-terminal-dim mt-0.5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
