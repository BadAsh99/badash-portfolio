export const dynamic = "force-dynamic";

export interface ThreatItem {
  id: string;
  title: string;
  severity: "critical" | "high" | "medium";
  source: string;
  date: string;
  url: string;
  vendor?: string;
}

async function fetchCISAKEV(): Promise<ThreatItem[]> {
  try {
    const res = await fetch(
      "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const vulns = (data.vulnerabilities ?? []).slice(0, 8);
    return vulns.map((v: Record<string, string>) => ({
      id: v.cveID,
      title: `${v.cveID} — ${v.vulnerabilityName}`,
      severity: "critical" as const,
      source: "CISA KEV",
      date: v.dateAdded,
      url: `https://nvd.nist.gov/vuln/detail/${v.cveID}`,
      vendor: v.vendorProject,
    }));
  } catch {
    return [];
  }
}

async function fetchNVDRecent(): Promise<ThreatItem[]> {
  try {
    const params = new URLSearchParams({
      resultsPerPage: "6",
      startIndex: "0",
      cvssV3Severity: "HIGH",
    });
    const res = await fetch(
      `https://services.nvd.nist.gov/rest/json/cves/2.0?${params}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.vulnerabilities ?? []).map((item: Record<string, unknown>) => {
      const cve = item.cve as Record<string, unknown>;
      const descriptions = cve.descriptions as Array<{ lang: string; value: string }>;
      const desc = descriptions?.find((d) => d.lang === "en")?.value ?? "";
      const metrics = cve.metrics as Record<string, Array<{ cvssData: { baseScore: number } }>>;
      const cvssData = metrics?.cvssMetricV31?.[0]?.cvssData ?? metrics?.cvssMetricV30?.[0]?.cvssData;
      const score = cvssData?.baseScore ?? 0;
      const severity: ThreatItem["severity"] = score >= 9 ? "critical" : score >= 7 ? "high" : "medium";
      return {
        id: cve.id as string,
        title: `${cve.id} — ${desc.slice(0, 80)}${desc.length > 80 ? "..." : ""}`,
        severity,
        source: "NVD",
        date: (cve.published as string)?.slice(0, 10) ?? "",
        url: `https://nvd.nist.gov/vuln/detail/${cve.id}`,
      };
    });
  } catch {
    return [];
  }
}

export async function GET() {
  const [cisa, nvd] = await Promise.all([fetchCISAKEV(), fetchNVDRecent()]);

  const combined = [...cisa, ...nvd]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return Response.json({ items: combined, updated: new Date().toISOString() });
}
