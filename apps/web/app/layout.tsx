import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "BadAsh Security Lab",
    template: "%s | BadAsh Security Lab",
  },
  description:
    "AI security playground, OWASP LLM Top 10 scanner, and portfolio of Ash Clements — Sr. SASE & AI Security Consultant at Palo Alto Networks.",
  keywords: ["AI Security", "LLM Security", "OWASP", "Prompt Injection", "SASE", "Palo Alto Networks", "Red Team"],
  authors: [{ name: "Ash Clements" }],
  openGraph: {
    type: "website",
    siteName: "BadAsh Security Lab",
    title: "BadAsh Security Lab",
    description: "Live AI security playground + OWASP LLM Top 10 scanner by Ash Clements",
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
        <div className="scanline-overlay" />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
