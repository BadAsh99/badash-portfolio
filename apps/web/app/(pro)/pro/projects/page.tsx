import type { Metadata } from "next";
import { FeaturedProjectsPro } from "@/components/pro/FeaturedProjectsPro";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsProPage() {
  return (
    <div className="pt-16 min-h-screen">
      <FeaturedProjectsPro />
    </div>
  );
}
