import { Code, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Custom Web & eCommerce",
    description: "WordPress, Shopify, Magento, and Laravel development tailored to your brand.",
  },
  {
    icon: Zap,
    title: "Automation & APIs",
    description: "Seamlessly connect tools with Zapier, custom scripts, and marketing API integrations (Google Ads/Facebook).",
  },
];

const ValueBlocksSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Solutions
          </span>
        </div>

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground font-display">
            Comprehensive Technical Solutions
          </h2>
        </div>

        {/* Subtitle with left border */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="border-l-2 border-border pl-6 py-2">
            <p className="text-muted-foreground leading-relaxed text-center md:text-left">
              Specialising in complex WordPress builds, high-converting eCommerce stores, and sophisticated API integrations.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="bg-secondary rounded-3xl p-6 lg:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 hover-lift relative"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display text-foreground mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Orange dot indicator */}
                <div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueBlocksSection;
