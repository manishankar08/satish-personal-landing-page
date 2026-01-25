import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden pt-20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground text-sm font-medium">
              Top-Rated Expert • 100% Job Success Score
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-6 animate-fade-up">
            Full-Stack Development &{" "}
            <span className="text-accent italic">Automation</span>{" "}
            That Scales Your Business.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delayed font-sans">
            Top-Rated Expert with 10+ years of experience, 2,600+ hours logged, and a 100% Job Success Score on Upwork.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delayed">
            <Button variant="default" size="lg">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View My Work
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-sans font-bold text-foreground">10+</p>
              <p className="text-muted-foreground text-sm mt-1 font-sans">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-sans font-bold text-accent">100%</p>
              <p className="text-muted-foreground text-sm mt-1 font-sans">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-sans font-bold text-foreground">80+</p>
              <p className="text-muted-foreground text-sm mt-1 font-sans">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
