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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-sans">The Satish Standard</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              Clean Code.{" "}
              <span className="text-accent italic">Manageable Results.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-sans">
              I don't just write code; I build systems that are easy to understand and update as your business grows. Whether it's PSD-to-WordPress or custom plugin development, my focus is always on quality and meeting your deadlines.
            </p>

            {/* Quality checklist */}
            <ul className="space-y-4 mb-10">
              {qualities.map((quality, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium font-sans">{quality}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg">
              View My Work History
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Visual card - no border, just background */}
          <div className="relative">
            <div className="bg-secondary rounded-3xl p-8 lg:p-10">
              {/* Code snippet visual */}
              <div className="bg-foreground rounded-2xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <pre className="text-background/80 overflow-x-auto">
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
                <div className="bg-card rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground font-sans">2,688+</p>
                  <p className="text-sm text-muted-foreground font-sans">Hours Logged</p>
                </div>
                <div className="bg-card rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-accent font-sans">Top Rated</p>
                  <p className="text-sm text-muted-foreground font-sans">Upwork Status</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg font-sans">
              ✓ Verified Expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardSection;
