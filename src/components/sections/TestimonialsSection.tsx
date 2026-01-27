import { Quote, Star } from "lucide-react";

import content from "@/assets/content.json";

const TestimonialsSection = () => {
  const { testimonials } = content;

  return (
    <section className="pt-24 pb-16 md:pt-48 md:pb-36 mx-6 relative bg-secondary rounded-3xl">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-6">
          {/* Section header */}
          <div className="max-w-3xl mb-16 md:pr-6 lg:pr-12">
            <div className="sticky top-24">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">{testimonials.badge}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground mt-4 mb-6">
                {testimonials.title}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base font-sans">{testimonials.description}</p>
            </div>
          </div>

          {/* Testimonial cards - no border, just background */}
          <div className="grid md:grid-cols-1 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
            {testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col bg-card border border-foreground/10 rounded-2xl p-8 relative hover-lift sticky top-24"
              >
                <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-lg text-foreground mb-16 leading-relaxed font-sans">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex flex-col gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-lg font-sans">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground font-sans">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground font-sans">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Stats bar - no border, just background */}
        <div className="bg-secondary rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {testimonials.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm md:text-base font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
