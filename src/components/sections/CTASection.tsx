import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Calendar } from "lucide-react";

import content from "@/assets/content.json";

const CTASection = () => {
  const { cta } = content;

  return (
    <section className="py-48 mx-6 bg-foreground rounded-3xl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-background mb-6">
            {cta.title}{" "}
            <span className="text-accent italic">{cta.titleItalic}</span>
          </h2>
          <p className="text-lg md:text-xl text-background/70 mb-10 max-w-2xl mx-auto font-sans">
            {cta.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild variant="secondary" size="lg">
              <a href={cta.primaryCtaUrl} target="_blank" rel="noopener noreferrer">
                {cta.primaryCta}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-background/30 text-background bg-background/0 hover:bg-background/10 hover:text-background">
              <a href={cta.secondaryCtaUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                {cta.secondaryCta}
              </a>
            </Button>
          </div>

          {/* Contact info - no border, just background */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/10">
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-background/80 font-sans">
              {cta.availability}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
