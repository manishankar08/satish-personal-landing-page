import { Button } from "@/components/ui/button";
import caseStudyEcommercePerson from "@/assets/cs-ecommerce.jpg";
import caseStudySaasPerson from "@/assets/cs-analytics.jpg";
import content from "@/assets/content.json";

const CaseStudies = () => {
  const { caseStudies } = content;
  const images = [caseStudyEcommercePerson, caseStudySaasPerson];

  return (
    <section id="case-studies" className="container mx-auto pt-24 pb-16 md:pt-48 md:pb-24 bg-background">
      <div className="container-section">
        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Portrait Card */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img
                  src={images[index]}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                {/* Subtle bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Content inside card */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  {/* Category Label */}
                  <p className="text-xs font-medium text-white/90 uppercase tracking-wider">
                    {study.category}
                  </p>

                  {/* Title at bottom */}
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl leading-tight text-white">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Description below card */}
              <div className="space-y-4 text-center">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {study.description}
                </p>
                <Button
                  variant="outline"
                  className="block w-full gap-2 rounded-full px-8 h-12 text-base hover:bg-foreground hover:text-background"
                  asChild
                >
                  <a href={study.link} target="_blank" rel="noopener noreferrer">
                    View More
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
