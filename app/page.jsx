import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
