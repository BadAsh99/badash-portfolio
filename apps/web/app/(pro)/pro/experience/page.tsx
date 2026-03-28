import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/pro/ExperienceTimeline";
import { SkillsGrid } from "@/components/pro/SkillsGrid";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div className="pt-16 min-h-screen">
      <ExperienceTimeline />
      <SkillsGrid />
    </div>
  );
}
