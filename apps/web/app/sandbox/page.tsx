import type { Metadata } from "next";
import { SandboxSection } from "@/components/sandbox/SandboxSection";

export const metadata: Metadata = {
  title: "Prompt Injection Sandbox",
  description: "Interactive prompt injection demo. Send any message and see real-time injection detection.",
};

export default function SandboxPage() {
  return (
    <div className="pt-14 min-h-screen">
      <SandboxSection />
    </div>
  );
}
