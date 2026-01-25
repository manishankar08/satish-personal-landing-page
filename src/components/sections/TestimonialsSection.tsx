import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "He is a great web developer... able to complete tasks in a timely fashion. Reliable.",
    author: "Verified Client",
    role: "Upwork Project",
  },
  {
    quote: "Great to work with, very personable and does what he says he will do. Willing to work with tight timelines.",
    author: "Verified Client",
    role: "Upwork Project",
  },
];

const stats = [
  { value: "80+", label: "Successful Projects" },
  { value: "2,688+", label: "Total Hours" },
  { value: "100%", label: "Client Satisfaction" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Credibility Signals</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            What Clients Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 relative hover-lift"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
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
