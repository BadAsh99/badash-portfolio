import type { Metadata } from "next";
import "../../globals.css";
import { ProNavBar } from "@/components/pro/ProNavBar";
import { ProFooter } from "@/components/pro/ProFooter";
import { ProThemeProvider } from "@/components/pro/ProThemeProvider";
import { ProBackdoor } from "@/components/pro/ProBackdoor";

export const metadata: Metadata = {
  title: {
    default: "Ash Clements | AI Red Teamer & Security Engineer",
    template: "%s | Ash Clements",
  },
  description:
    "AI red teamer and security engineer. Gray Swan Winner's Circle, #26/282 in Breaking Ties, 183 Hazard Hunt cyber breaks across 47 frontier models. Builder of AEGIS. Seventeen years in enterprise security, PCNSE certified.",
  keywords: ["AI Red Team", "AI Security", "LLM Security", "Prompt Injection", "Agent Security", "Threat Hunting", "Gray Swan", "Palo Alto Networks", "PCNSE", "Zero Trust"],
  authors: [{ name: "Ash Clements" }],
  openGraph: {
    type: "profile",
    siteName: "Ash Clements",
    title: "Ash Clements | AI Red Teamer & Security Engineer",
    description: "AI red teamer and security engineer. Gray Swan Winner's Circle. Builder of AEGIS. Seventeen years in enterprise security.",
  },
};

export default function ProLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-terminal-bg text-terminal-text min-h-screen">
        <ProThemeProvider>
          <ProBackdoor />
          <ProNavBar />
          <main>{children}</main>
          <ProFooter />
        </ProThemeProvider>
      </body>
    </html>
  );
}
