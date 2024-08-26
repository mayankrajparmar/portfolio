import { Projects } from "@/components/home";
import { ContactSection } from "@/components/home/contact";
import { DevSection } from "@/components/home/devs";
import { ExperienceSection } from "@/components/home/experience";
import { ExpertiseSection } from "@/components/home/expertise";
import { HeroSection } from "@/components/home/hero";
import { SkillSection } from "@/components/home/skills";
import { TrackSection } from "@/components/home/track";
import { PublicLayout } from "@/components/layouts";

export default function Home() {
  return (
    <section className="w-full">
      <PublicLayout title="Mayank Raj Parmar | Full Stack Web Developer">
        <div className="w-full relative h-full ">
          <HeroSection />
          <SkillSection />
          <ExpertiseSection />
          <ExperienceSection />
          <Projects />
          <DevSection />
          <ContactSection />
          <TrackSection />
        </div>
      </PublicLayout>
    </section>
  );
}
