import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

import content from "@/assets/content.json";

const StandardSection = () => {
  const { standard } = content;

  return (
    <section className="pt-16 md:pt-24 pb-24 md:pb-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-6 items-center">

          {/* Visual card - no border, just background */}
          <div className="relative">
            <div className="bg-secondary rounded-3xl p-8 lg:p-10">
              {/* Code snippet visual */}
              <div className="bg-foreground rounded-2xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <pre className="text-background/80 overflow-x-auto">
                  <code>{`// Clean, maintainable code
class ProjectManager {
  constructor(client) {
    this.client = client;
    this.deadline = "on-time";
    this.quality = "exceptional";
  }

  async deliver() {
    return {
      status: "success",
      satisfaction: "100%"
    };
  }
}`}</code>
                </pre>
              </div>

              {/* Stats below code */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {standard.stats.map((stat, idx) => (
                  <div key={idx} className="bg-card rounded-xl p-4 text-center">
                    <p className="text-3xl text-foreground font-sans" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-sans">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 border border-foreground/10 text-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg font-sans">
              {standard.verifiedExpert}
            </div>
          </div>

          {/* Content */}
          <div className="md:pl-6 lg:pl-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">{standard.badge}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              {standard.title}{" "}
              <span className="text-foreground/60 italic">{standard.titleItalic}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-sans">
              {standard.description}
            </p>

            {/* Quality checklist */}
            <ul className="mb-10">
              {standard.qualities.map((quality, index) => (
                <li key={index} className="flex items-center gap-3 border-t py-4">
                  <CheckCircle className="w-5 h-5 text-foreground/60 flex-shrink-0" />
                  <span className="text-foreground font-medium font-sans">{quality}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="outline" size="lg" className="border-foreground/30 text-foreground bg-background hover:bg-foreground/10 hover:text-foreground">
              <a href={standard.ctaUrl}>
                {standard.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardSection;
