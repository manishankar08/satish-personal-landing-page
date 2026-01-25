import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle } from "lucide-react";

const qualities = [
  "Clean, well-documented code",
  "Scalable architecture patterns",
  "On-time delivery guarantee",
  "Ongoing support & maintenance",
];

const StandardSection = () => {
  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Satish Standard</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Clean Code.{" "}
              <span className="text-gradient">Manageable Results.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I don't just write code; I build systems that are easy to understand and update as your business grows. Whether it's PSD-to-WordPress or custom plugin development, my focus is always on quality and meeting your deadlines.
            </p>

            {/* Quality checklist */}
            <ul className="space-y-4 mb-10">
              {qualities.map((quality, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{quality}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg">
              View My Work History
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              {/* Code snippet visual */}
              <div className="bg-primary rounded-2xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <pre className="text-primary-foreground/80 overflow-x-auto">
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
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">2,688+</p>
                  <p className="text-sm text-muted-foreground">Hours Logged</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-accent">Top Rated</p>
                  <p className="text-sm text-muted-foreground">Upwork Status</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg glow-accent">
              ✓ Verified Expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardSection;
