import type { Metadata } from "next";
import { ContactCTA } from "@/components/pro/ContactCTA";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen">
      <ContactCTA />
    </div>
  );
}
