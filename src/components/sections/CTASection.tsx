import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-background mb-6">
            Ready to build something{" "}
            <span className="text-accent italic">exceptional?</span>
          </h2>
          <p className="text-lg md:text-xl text-background/70 mb-10 max-w-2xl mx-auto font-sans">
            Let's discuss how 10+ years of full-stack expertise can solve your technical challenges.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="secondary" size="lg">
              Get a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 hover:text-background">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>

          {/* Contact info - no border, just background */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background/10">
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-background/80 font-sans">
              Available for new projects • Quick response guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
