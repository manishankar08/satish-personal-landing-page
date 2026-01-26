const technologies = [
  { name: "PHP", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "CodeIgniter", category: "Backend" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "eCommerce" },
  { name: "Magento", category: "eCommerce" },
  { name: "JavaScript", category: "Frontend" },
  { name: "MySQL", category: "Database" },
  { name: "RESTful APIs", category: "Integration" },
  { name: "Stripe", category: "Payments" },
  { name: "PayPal", category: "Payments" },
  { name: "Zapier", category: "Automation" },
  { name: "Google Ads API", category: "Marketing" },
  { name: "Facebook API", category: "Marketing" },
  { name: "WooCommerce", category: "eCommerce" },
  { name: "Theme Development", category: "WordPress" },
  { name: "Plugin Development", category: "WordPress" },
  { name: "PSD to WordPress", category: "Design" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">Technical Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            A comprehensive toolkit for building scalable, maintainable web solutions.
          </p>
        </div>

        {/* Tech grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground cursor-default font-sans"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Category highlights - no border, just background */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {[
            { label: "Backend", icon: "⚙️" },
            { label: "Frontend", icon: "🎨" },
            { label: "eCommerce", icon: "🛒" },
            { label: "Automation", icon: "🔄" },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-secondary rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl mb-2 block">{category.icon}</span>
              <p className="font-semibold text-foreground font-sans">{category.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
