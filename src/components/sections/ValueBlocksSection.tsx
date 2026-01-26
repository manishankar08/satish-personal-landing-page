import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Workflow, ShoppingCart, Puzzle, Zap } from "lucide-react";

const tabsData = [
  {
    id: "web-development",
    label: "Web Development",
    icon: Code2,
    title: "Custom websites that just work.",
    description: "WordPress, Shopify, Magento, and Laravel development tailored to your brand. Pixel-perfect execution with clean, maintainable code that scales with your business.",
    features: [
      "PSD/Figma to WordPress conversion",
      "Custom theme & plugin development",
      "Performance optimization",
      "Mobile-first responsive design",
    ],
  },
  {
    id: "ecommerce",
    label: "eCommerce Solutions",
    icon: ShoppingCart,
    title: "Stores that convert visitors to customers.",
    description: "High-converting online stores with seamless checkout experiences, inventory management, and payment integrations that boost your bottom line.",
    features: [
      "WooCommerce & Shopify setup",
      "Payment gateway integration",
      "Inventory management systems",
      "Abandoned cart recovery",
    ],
  },
  {
    id: "automation",
    label: "Automation & APIs",
    icon: Workflow,
    title: "Connect everything, automate the rest.",
    description: "Seamlessly connect tools with Zapier, custom scripts, and marketing API integrations. Spend less time on repetitive tasks and more on what matters.",
    features: [
      "Zapier workflow automation",
      "Google Ads & Facebook API",
      "CRM integrations",
      "Custom webhook handlers",
    ],
  },
  {
    id: "integrations",
    label: "Custom Integrations",
    icon: Puzzle,
    title: "APIs that speak your language.",
    description: "RESTful APIs, payment gateways (Stripe, PayPal), and third-party service connections that work reliably and scale effortlessly.",
    features: [
      "RESTful API development",
      "Stripe & PayPal integration",
      "Third-party service connections",
      "Webhook & callback handling",
    ],
  },
  {
    id: "support",
    label: "Support & Maintenance",
    icon: Zap,
    title: "Keep your systems running smoothly.",
    description: "Ongoing support, security updates, and performance monitoring to ensure your web presence stays fast, secure, and always available.",
    features: [
      "24/7 monitoring",
      "Security updates & patches",
      "Performance optimization",
      "Regular backups",
    ],
  },
];

const ValueBlocksSection = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeData = tabsData.find((tab) => tab.id === activeTab)!;

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            One truth everyone actually trusts:
          </h2>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-8">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-4 py-3 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-all whitespace-nowrap"
              >
                {tab.label.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="bg-secondary rounded-3xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl text-foreground mb-4">
                      {tab.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-sans mb-6">
                      {tab.description}
                    </p>
                    <ul className="space-y-3">
                      {tab.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-foreground font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual placeholder */}
                  <div className="bg-card rounded-2xl p-8 min-h-[280px] flex items-center justify-center">
                    <tab.icon className="w-24 h-24 text-muted-foreground/30" />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ValueBlocksSection;
