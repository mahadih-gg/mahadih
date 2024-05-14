import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      {/* <SkillSection /> */}
      <ContactSection />
    </main>
  );
}
