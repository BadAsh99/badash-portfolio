import type { Metadata } from "next";
import { ProHero } from "@/components/pro/ProHero";
import { ExperienceTimeline } from "@/components/pro/ExperienceTimeline";
import { SkillsGrid } from "@/components/pro/SkillsGrid";
import { FeaturedProjectsPro } from "@/components/pro/FeaturedProjectsPro";
import { SpeakingEvents } from "@/components/pro/SpeakingEvents";
import { ValuesSection } from "@/components/pro/ValuesSection";
import { ReportLinks } from "@/components/shared/ReportLinks";
import { ContactCTA } from "@/components/pro/ContactCTA";

export const metadata: Metadata = {
  title: { absolute: "Ash Clements | AI Red Teamer & Security Engineer" },
  openGraph: { title: "Ash Clements | AI Red Teamer & Security Engineer" },
  twitter: { title: "Ash Clements | AI Red Teamer & Security Engineer" },
};

export default function ProHomePage() {
  return (
    <>
      <ProHero />
      <ExperienceTimeline />
      <SkillsGrid />
      <FeaturedProjectsPro />
      <SpeakingEvents />
      <ValuesSection />
      <ReportLinks />
      <ContactCTA />
    </>
  );
}
