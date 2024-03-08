"use client";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="space-y-8">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </div>
  );
}
