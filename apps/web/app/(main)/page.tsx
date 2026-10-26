import { HeroSection } from "@/components/hero/HeroSection";
import { PlaygroundSection } from "@/components/playground/PlaygroundSection";
import { SandboxSection } from "@/components/sandbox/SandboxSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SecurityFeed } from "@/components/security/SecurityFeed";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="border-t border-terminal-border" />
      <PlaygroundSection />
      <div className="border-t border-terminal-border" />
      <SandboxSection />
      <div className="border-t border-terminal-border" />
      <ProjectsSection />
      <div className="border-t border-terminal-border" />
      <SecurityFeed />
    </>
  );
}
