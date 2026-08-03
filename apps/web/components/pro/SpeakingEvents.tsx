const events = [
  {
    name: "OWASP GenAI Security Project",
    detail: "Networking event, Las Vegas",
    dates: "August 4, 2026",
  },
  {
    name: "Black Hat USA",
    detail: "Las Vegas",
    dates: "August 4 to 9, 2026",
  },
  {
    name: "Offensive AI Con",
    detail: "Black Hat week networking, Las Vegas",
    dates: "August 5, 2026",
  },
  {
    name: "DEF CON",
    detail: "Las Vegas",
    dates: "August 6 to 9, 2026",
  },
  {
    name: "Las Vegas AI Security Forum",
    detail: "Invited attendee",
    dates: "August 6, 2026",
  },
  {
    name: "HACKasan",
    detail: "Pentera, Black Hat week",
    dates: "August 2026",
  },
  {
    name: "AI Risk Summit and CISO Forum",
    detail: "SecurityWeek, Ritz-Carlton Half Moon Bay",
    dates: "August 11 to 12, 2026",
  },
  {
    name: "Age of AI Summit",
    detail: "Black Hills Information Security",
    dates: "August 14, 2026",
  },
];

export function SpeakingEvents() {
  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="font-sans text-sm uppercase tracking-widest text-[#0080ff] mb-2">
            Where I&apos;ll Be
          </div>
          <h2 className="text-3xl font-bold">August 2026</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Attending the AI security track across Black Hat, DEF CON, and the AI Risk Summit. If
            you are working on runtime security for AI systems and want to talk shop, find me at
            any of these.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.name}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-[#0080ff]"
            >
              <div className="text-base font-semibold leading-snug">{event.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{event.detail}</div>
              <div className="text-xs font-medium text-[#0080ff] mt-3">{event.dates}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
