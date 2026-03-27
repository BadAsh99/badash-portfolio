import type { Metadata } from "next";
import { PlaygroundSection } from "@/components/playground/PlaygroundSection";

export const metadata: Metadata = {
  title: "AI Security Playground",
  description: "Live OWASP LLM Top 10 scanner. Test LLM endpoints against 35+ attack payloads with semantic detection.",
};

export default function PlaygroundPage() {
  return (
    <div className="pt-14 min-h-screen">
      <PlaygroundSection />
    </div>
  );
}
