import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import satishCandid from "@/assets/satish-profile.png";

import content from "@/assets/content.json";

const HeroSection = () => {
  const { hero } = content;

  return (
    <section className="relative min-h-[80vh] bg-background flex items-center overflow-hidden pt-24 pb-16">
      <div className="container max-w-none mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-6">
          <div className="flex flex-col items-center justify-center text-center p-6 lg:p-12">
            {/* Meet badge */}
            <span className="text-accent text-xl md:text-2xl font-medium mb-4 block">
              {hero.badge}
            </span>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-2">
              {hero.headline}
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-10">
              <span className="text-muted-foreground italic">{hero.headlineItalic}</span>
            </h1>

            {/* Subtitle with left border accent */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="border-x-2 border-border px-6 py-4 text-center md:text-left">
                <p className="text-muted-foreground leading-relaxed font-sans">
                  {hero.description}
                </p>
              </div>
            </div>

            {/* Highlighted text */}
            <div className="mb-10">
              {hero.highlights.map((text, idx) => (
                <p key={idx} className={`${idx === 0 ? "text-foreground" : "text-accent"} font-medium font-sans`}>
                  {text}
                </p>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="default" size="lg" className="bg-foreground text-background hover:bg-foreground/90 hover:text-background">
                <a href={hero.primaryCtaUrl} target="_blank" rel="noopener noreferrer">
                  {hero.primaryCta}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/30 text-foreground bg-background/0 hover:bg-foreground/10 hover:text-foreground  ">
                <a href={hero.secondaryCtaUrl}>{hero.secondaryCta}</a>
              </Button>
            </div>
          </div>

          {/* Hero Image - Candid Profile */}
          <div className="relative animate-fade-up animation-delay-400">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
              {/* Candid Image */}
              <div className="aspect-[1/1]">
                <img
                  src={satishCandid}
                  alt="Satish working at his desk"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
