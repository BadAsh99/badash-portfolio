import type { Metadata } from "next";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Security tooling built at the intersection of PAN-OS, GenAI, and cloud security.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-14 min-h-screen">
      <ProjectsSection />
    </div>
  );
}
