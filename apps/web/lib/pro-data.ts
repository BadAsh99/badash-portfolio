export const experience = [
  {
    role: "Sr. Professional Services Consultant, SASE",
    company: "Palo Alto Networks",
    period: "2021 - Present",
    location: "Phoenix, AZ",
    focus: "SASE & AI Security · Enterprise Architecture · Professional Services",
    highlights: [
      "Lead complex Prisma Access (SASE) implementations for Fortune 500 organizations across oil & gas, telecom, and global financial services",
      "Architect Zero Trust network security for high-stakes enterprise environments: critical infrastructure, carrier-grade, global finance",
      "Ran proof-of-value work on Prisma AIRS, the AI runtime security platform, and built SCMReady, internal pre-cutover tooling for Panorama to Strata Cloud Manager migrations that two customers deployed after their own security teams approved it",
      "Red-team production language models in Gray Swan's frontier-lab-funded arena, and built AEGIS, a zero-exposure RAG pipeline that placed second in Protegrity's 2026 AI Pipeline Security Challenge",
    ],
    current: true,
  },
  {
    role: "Sr. Technical Support Engineer, SASE",
    company: "Palo Alto Networks",
    period: "June 2017 - 2021",
    location: "Phoenix, AZ",
    focus: "Prisma Access escalations · Lab reproduction · Knowledge base",
    highlights: [
      "Owned the hardest Prisma Access escalations, reproduced them in the lab and handed engineering the repro; several became shipped bug fixes",
      "Wrote the internal KBs and customer-facing troubleshooting guides that came out of those escalations",
      "Promoted to Sr. Professional Services Consultant in 2021",
    ],
    current: false,
  },
  {
    role: "Network Security Engineer",
    company: "American Express",
    period: "February 2016 - May 2017",
    location: "Phoenix, AZ",
    focus: "Enterprise firewall policy · Network segmentation · PCI-DSS",
    highlights: [
      "Migrated enterprise data center firewalls from legacy Cisco ASA to Palo Alto NGFW with automated rule conversion and validation",
      "Operated in a highly regulated PCI-DSS environment with direct exposure to financial-grade security standards",
      "Ran the HA clusters under continuous compliance in production and non-production",
    ],
    current: false,
  },
  {
    role: "Manager, Channel Development",
    company: "Allied Telecom Group",
    period: "2015 - 2016",
    location: "Nationwide",
    focus: "Telecom infrastructure · Channel partner relationships · Business development",
    highlights: [
      "Channel partner relationships and business development for a regional telecom provider",
      "Leveraged deep network engineering background to bridge technical and commercial conversations",
    ],
    current: false,
  },
  {
    role: "Sr. Network Security Engineer",
    company: "Independent Network Consultants (INC)",
    period: "2012 - 2015",
    location: "Nationwide",
    focus: "MSP · Enterprise network architecture · Security hardening · VPN architecture",
    highlights: [
      "Senior network security engineering at a dedicated MSP serving enterprise clients nationwide",
      "Enterprise network architecture, security hardening, firewall design, and VPN architecture",
      "Deepened the enterprise consulting skillset that feeds directly into current PAN work",
    ],
    current: false,
  },
  {
    role: "Sr. Network Security Engineer (Contractor)",
    company: "FDA",
    period: "2010 - 2012",
    location: "Washington, D.C.",
    focus: "Federal network security · Government infrastructure · Data center operations",
    highlights: [
      "Federal contractor given a dedicated office, rare for a contractor at the agency",
      "Spent the majority of time in the data center; deep hands-on federal infrastructure work",
      "Led unplanned DC recovery after a visitor hit the emergency power shutoff; had the data center back online in under 30 minutes",
    ],
    current: false,
  },
  {
    role: "Network Technician",
    company: "Cavalier Telephone",
    period: "2009 - 2010",
    location: "Richmond, VA",
    focus: "ISP / CLEC operations · Carrier networking · Network engineering",
    highlights: [
      "Carrier-grade networking at a regional CLEC, where enterprise networking fundamentals got built",
      "Earned CCNA certification during this role",
    ],
    current: false,
  },
];

// Pre-2009 history. Preserved here, not rendered on the professional timeline,
// which matches the seventeen-year window the resume uses. The full story lives
// on the badash99.dev about page.
export const earlyExperience = [
  {
    role: "Founder / Owner",
    company: "ProFilesPC",
    period: "2001 - 2008",
    location: "Richmond, VA",
    focus: "Web development · Security consulting · Network infrastructure",
    highlights: [
      "Founded after the 2001 tech bubble collapse, built from nothing, no capital, no investors",
      "Web, security, and network consulting: clients included VCU Art School and regional ecommerce",
      "Grew to six-figure revenue; sold stake in 2008",
      "Ran network buildouts alongside web work (switches, firewalls, VPNs), the beginning of what became a career in enterprise infrastructure",
    ],
    current: false,
  },
  {
    role: "Network Operations",
    company: "iDirect",
    period: "2001",
    location: "Reston, VA",
    focus: "Satellite communications · NOC support · Global installs",
    highlights: [
      "Satellite communications NOC support: global satellite installs, direct continuation of Spacenet carrier work",
      "Flagged a suspicious support call where reported coordinates didn't match stated location, escalated to director; FBI and DOD on site by morning",
      "Laid off post-9/11 along with most of the industry",
    ],
    current: false,
  },
  {
    role: "Network Engineer",
    company: "GE Spacenet",
    period: "1999 - 2001",
    location: "Herndon, VA",
    focus: "Satellite communications · Carrier infrastructure · Technical leadership",
    highlights: [
      "Averaged 100+ support calls/week against a team average of 35. Every PM requested him by name",
      "Promoted to manager in 3 months. Declined to stay technical; company created a senior title and gave the raise anyway",
      "Satellite communications engineering at one of the early satellite broadband pioneers",
    ],
    current: false,
  },
  {
    role: "Field Engineer, Y2K Remediation",
    company: "Unisys",
    period: "1997 - 1999",
    location: "Nationwide",
    focus: "Y2K remediation · Federal government · Social Security Administration",
    highlights: [
      "Part of the fly-and-fix team that executed Y2K remediation across the entire Social Security Administration",
      "Visited nearly every US state over two years, Thursday-to-Monday travel cadence at peak",
      "One of the largest coordinated government IT deployments in US history",
    ],
    current: false,
  },
  {
    role: "Licensed Real Estate Agent",
    company: "Real Estate",
    period: "1994 - 1997",
    location: "Richmond, VA",
    focus: "Residential sales · Client relations · Business development",
    highlights: [
      "Six-figure income in residential sales before the industry pulled him back into tech",
      "Three years of negotiation, client management, and closing, skills that quietly inform every enterprise engagement since",
      "The escape didn't last: local real estate firms discovered he knew networks, and pulled him back into tech",
    ],
    current: false,
  },
];

export const certifications = [
  { name: "PCNSE", full: "Palo Alto Networks Certified Network Security Engineer", issuer: "Palo Alto Networks", year: "2024" },
  { name: "CISSP", full: "Certified Information Systems Security Professional (candidate)", issuer: "ISC2", year: "2026" },
];

export const domains = [
  {
    name: "SASE & Network Security",
    items: ["Prisma Access", "GlobalProtect", "PAN-OS", "SD-WAN", "Zero Trust", "PCNSE"],
  },
  {
    name: "AI Security",
    items: ["OWASP LLM Top 10", "Prompt Injection", "Indirect Prompt Injection", "LLM Red Teaming", "AI Runtime Security", "Agentic Tool-Use Security", "Semantic Detection"],
  },
  {
    name: "Cloud Security",
    items: ["Azure", "AWS", "GCP", "Terraform IaC", "CIS Benchmarks", "Prisma Cloud"],
  },
  {
    name: "Professional Services",
    items: ["Enterprise Architecture", "Fortune 500 Deployments", "Critical Infrastructure", "Technical Leadership", "Stakeholder Management"],
  },
];
