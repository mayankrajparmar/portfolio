import { HeroSection } from "@/components/home/hero";
import { SkillSection } from "@/components/home/skills";
import { PublicLayout } from "@/components/layouts";

export default function Home() {
  return (
    <section className="w-full">
      <PublicLayout title="Mayank Raj Parmar | Full Stack Web Developer">
        <div className="w-full relative h-full ">
          <HeroSection />
          <SkillSection />
        </div>
      </PublicLayout>
    </section>
  );
}
