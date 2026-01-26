import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-background flex items-center overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Meet badge */}
          <span className="text-accent text-xl md:text-2xl font-medium italic mb-4 block">
            Meet Satish
          </span>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-2">
            Your Full-Stack Developer,
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-10">
            <span className="text-muted-foreground italic">Delivered On Time.</span>
          </h1>

          {/* Subtitle with left border accent */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="border-l-2 border-border pl-6 py-4 text-center md:text-left">
              <p className="text-muted-foreground leading-relaxed font-sans">
                Not another unreliable freelancer. I work alongside your existing team, fixing your biggest pain first—whether that's WordPress chaos, eCommerce issues, or API black holes. Start small, prove value, expand when ready.
              </p>
            </div>
          </div>

          {/* Highlighted text */}
          <div className="mb-10">
            <p className="text-foreground font-medium font-sans">
              Your project stays on track. Your deadlines get met.
            </p>
            <p className="text-accent font-medium font-sans">
              I deliver it all. Or refine it. Your choice.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="lg">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
