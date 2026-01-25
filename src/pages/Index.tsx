import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValueBlocksSection from "@/components/sections/ValueBlocksSection";
import StandardSection from "@/components/sections/StandardSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section id="services">
          <ValueBlocksSection />
        </section>
        <section id="about">
          <StandardSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="tech">
          <TechStackSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
