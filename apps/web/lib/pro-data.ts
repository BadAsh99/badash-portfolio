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
      "Ran structured red-team exercises on a personal Prisma AIRS lab tenant (prompt injection, tool-use abuse, agent behaviors), and built SCMReady, a read-only parity checker for Panorama to Strata Cloud Manager migrations that was adopted internally, presented to principal and staff engineers, and requested by a Palo Alto Networks Unit 42 engineer for a customer migration",
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
    company: "American Express (contract via ConsultNet LLC)",
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
    role: "Channel Development Manager",
    company: "Allied Telecom Group",
    period: "2013 - 2015",
    location: "Arlington, VA",
    focus: "Enterprise renewal portfolio · Network-infrastructure contracts · Technical escalation",
    highlights: [
      "Managed an enterprise renewal portfolio and served as senior technical escalation point for complex network-infrastructure contracts across the DMV region",
      "Leveraged a deep network engineering background to bridge technical and commercial conversations",
    ],
    current: false,
  },
  {
    role: "Network Security Consultant",
    company: "Independent Network Consultants",
    period: "2010 - 2013",
    location: "Westminster, MD",
    focus: "Managed service provider · Network & security infrastructure · Team build-out",
    highlights: [
      "Delivered network and security infrastructure for enterprise clients: firewall and VPN deployment, device hardening, vulnerability assessment, and remediation",
      "Tasked by the owner to build out a specialized consulting team: hired and mentored engineers, including one who went on to earn CISSP and CISM and serve as an interim CISO",
      "Deepened the enterprise consulting skillset that feeds directly into current Palo Alto Networks work",
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
  { name: "HTB COAE", full: "Certified Offensive AI Expert (in progress)", issuer: "Hack The Box", year: "2026" },
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
