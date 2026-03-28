import type { Metadata } from "next";
import "../../globals.css";
import { ProNavBar } from "@/components/pro/ProNavBar";
import { ProFooter } from "@/components/pro/ProFooter";
import { ProThemeProvider } from "@/components/pro/ProThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Ash Clements — Sr. Professional Services Consultant",
    template: "%s | Ash Clements",
  },
  description:
    "Sr. Professional Services Consultant at Palo Alto Networks. PCNSE certified. Securing Fortune 500, gas & oil, and telecom enterprises with Prisma Access and Zero Trust architecture.",
  keywords: ["Palo Alto Networks", "PCNSE", "SASE", "Prisma Access", "Zero Trust", "AI Security", "Professional Services"],
  authors: [{ name: "Ash Clements" }],
  openGraph: {
    type: "profile",
    siteName: "Ash Clements",
    title: "Ash Clements — Sr. Professional Services Consultant",
    description: "Enterprise SASE & AI Security consultant at Palo Alto Networks.",
  },
};

export default function ProLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-terminal-bg text-terminal-text min-h-screen">
        <ProThemeProvider>
          <ProNavBar />
          <main>{children}</main>
          <ProFooter />
        </ProThemeProvider>
      </body>
    </html>
  );
}
