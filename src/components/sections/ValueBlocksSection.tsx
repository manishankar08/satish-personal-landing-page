import { Code2, Workflow, ShoppingCart, Puzzle } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "WordPress, Shopify, Magento, and Laravel development tailored to your brand with pixel-perfect execution.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description: "High-converting online stores with seamless checkout experiences, inventory management, and payment integrations.",
  },
  {
    icon: Workflow,
    title: "Automation & APIs",
    description: "Seamlessly connect tools with Zapier, custom scripts, and marketing API integrations (Google Ads/Facebook).",
  },
  {
    icon: Puzzle,
    title: "Custom Integrations",
    description: "RESTful APIs, payment gateways (Stripe, PayPal), and third-party service connections that just work.",
  },
];

const ValueBlocksSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">What I Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Comprehensive Technical Solutions
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Specialising in complex WordPress builds, high-converting eCommerce stores, and sophisticated API integrations.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group stat-card hover-lift"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueBlocksSection;
