import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-glow/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-up">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/80 text-sm font-medium">
              Top-Rated Expert • 100% Job Success Score
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
            Full-Stack Development &{" "}
            <span className="text-gradient">Automation</span>{" "}
            That Scales Your Business.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up-delayed">
            Top-Rated Expert with 10+ years of experience, 2,600+ hours logged, and a 100% Job Success Score on Upwork.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delayed">
            <Button variant="hero" size="lg">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              View My Work
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/10 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">10+</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">100%</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">80+</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
