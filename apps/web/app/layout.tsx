import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Backdoor } from "@/components/shared/Backdoor";

export const metadata: Metadata = {
  title: {
    default: "BadAsh Security Lab",
    template: "%s | BadAsh Security Lab",
  },
  description:
    "AI security playground, OWASP LLM Top 10 scanner, and tools by Bash99 — SASE, SaaS security, and AI runtime security.",
  keywords: ["AI Security", "LLM Security", "OWASP", "Prompt Injection", "SASE", "SaaS Security", "Red Team"],
  authors: [{ name: "Bash99" }],
  openGraph: {
    type: "website",
    siteName: "BadAsh Security Lab",
    title: "BadAsh Security Lab",
    description: "Live AI security playground + OWASP LLM Top 10 scanner by Bash99",
  },
  twitter: {
    card: "summary_large_image",
    title: "BadAsh Security Lab",
    description: "Live AI security playground + OWASP LLM Top 10 scanner",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-terminal-bg text-terminal-text min-h-screen">
        <div style={{ display: "none" }} dangerouslySetInnerHTML={{ __html: "<!-- sys.backdoor: /pro | host: ashclements.dev | clearance_required: true -->" }} />
        <div className="scanline-overlay" />
        <Backdoor />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
