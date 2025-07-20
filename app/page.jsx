import CoursesSection from "@/components/CoursesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoursesSection />
    </div>
  );
}
