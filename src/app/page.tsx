import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from "@/components/Header";

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#000000', 
      color: '#ffffff' 
    }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
