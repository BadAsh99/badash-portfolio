import type { Metadata } from "next";
import { ProHero } from "@/components/pro/ProHero";
import { ExperienceTimeline } from "@/components/pro/ExperienceTimeline";
import { SkillsGrid } from "@/components/pro/SkillsGrid";
import { FeaturedProjectsPro } from "@/components/pro/FeaturedProjectsPro";
import { ContactCTA } from "@/components/pro/ContactCTA";

export const metadata: Metadata = {
  title: "Ash Clements — Enterprise Security Consultant",
};

export default function ProHomePage() {
  return (
    <>
      <ProHero />
      <ExperienceTimeline />
      <SkillsGrid />
      <FeaturedProjectsPro />
      <ContactCTA />
    </>
  );
}
