import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import DemoSection from "@/components/sections/DemoSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <DemoSection />
      <DifferentiationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
