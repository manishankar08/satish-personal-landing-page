import content from "@/assets/content.json";

const TechStackSection = () => {
  const { techStack } = content;

  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">{techStack.badge}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            {techStack.title}
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            {techStack.description}
          </p>
        </div>

        {/* Tech grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techStack.technologies.map((tech, index) => (
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
          {techStack.categories.map((category, index) => (
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
