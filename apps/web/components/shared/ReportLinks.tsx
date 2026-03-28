import { AlertTriangle, Phone } from "lucide-react";

const resources = [
  {
    category: "Child Safety",
    items: [
      {
        name: "NCMEC CyberTipline",
        description: "Report online child sexual exploitation — anonymous submissions accepted",
        link: "https://www.cybertipline.org",
        tip: null,
      },
      {
        name: "FBI Tips",
        description: "Report child exploitation and abuse to federal law enforcement",
        link: "https://tips.fbi.gov",
        tip: null,
      },
      {
        name: "Childhelp National Abuse Hotline",
        description: "24/7 anonymous crisis intervention and reporting — call or text",
        link: "https://www.childhelp.org/hotline",
        tip: "1-800-422-4453",
      },
      {
        name: "INHOPE",
        description: "International anonymous reporting — CSAM, 50+ countries",
        link: "https://www.inhope.org",
        tip: null,
      },
    ],
  },
  {
    category: "Animal Cruelty",
    items: [
      {
        name: "ASPCA Report Cruelty",
        description: "How and where to report animal abuse — anonymous tips accepted",
        link: "https://www.aspca.org/take-action/report-animal-cruelty",
        tip: null,
      },
      {
        name: "Humane Society",
        description: "Report animal cruelty anonymously — national resources and local referrals",
        link: "https://www.humanesociety.org/resources/report-animal-cruelty",
        tip: null,
      },
      {
        name: "Arizona Humane Society",
        description: "Report animal cruelty in Arizona — anonymous tips accepted",
        link: "https://www.azhumane.org/report-cruelty",
        tip: "602-997-7585",
      },
      {
        name: "Crime Stoppers",
        description: "Report animal cruelty anonymously — no name required, potential reward",
        link: "https://www.crimestoppers.org",
        tip: "1-800-222-8477",
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
          I spend a lot of time in dark corners of the internet. If you see something — child exploitation, animal cruelty — say something.
          All of these resources accept anonymous reports. You don{"'"}t have to give your name. You just have to make the call.
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
                  {item.tip && (
                    <div className="flex items-center gap-1.5 mt-1">
                      <Phone size={10} className="text-terminal-green" />
                      <span className="font-mono text-xs text-terminal-green">{item.tip}</span>
                      <span className="font-mono text-xs text-terminal-dim">— anonymous</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
