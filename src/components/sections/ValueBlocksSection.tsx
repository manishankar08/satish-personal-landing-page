const timelineData = [
  {
    period: "Week 1",
    title: "Quick Wins",
    description: "Launch your first custom workflow and lock a clean data backbone—live on the floor, no rip-and-replace.",
    barHeights: [40, 55, 45, 60, 50, 65, 55, 70, 60, 75],
  },
  {
    period: "Month 1",
    title: "Building Momentum",
    description: "Add three high-leverage workflows and connect what's already in place; spreadsheets fade, one source of truth emerges.",
    barHeights: [45, 60, 50, 65, 55, 70, 60, 75, 65, 80],
  },
  {
    period: "Quarter 1",
    title: "Full Integration",
    description: "Run dynamic, shift-level planning in minutes—constraints respected, change windows honored, audit trail by default.",
    barHeights: [50, 65, 55, 70, 60, 75, 65, 80, 70, 85],
  },
  {
    period: "Year 1",
    title: "Complete Transformation",
    description: "You're not drafting an AI plan—you're operating one on a foundation built in weeks, phasing out legacy pieces on your timeline.",
    barHeights: [55, 70, 60, 75, 65, 80, 70, 85, 75, 90],
  },
];

const ValueBlocksSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Roadmap
          </span>
        </div>

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground font-display">
            Your Roadmap to Full Capability, Accelerated
          </h2>
        </div>

        {/* Subtitle with left border */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="border-l-2 border-border pl-6 py-2">
            <p className="text-muted-foreground leading-relaxed text-center md:text-left">
              The tools that kept plants predictable for 40 years were built for static workflows — and they're slowing your ability to react to today's pace of change. The next decade belongs to operations that learn every day and adapt in hours.
            </p>
          </div>
        </div>

        {/* Timeline cards */}
        <div className="bg-secondary rounded-3xl p-6 lg:p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineData.map((item, index) => (
              <div
                key={item.period}
                className="bg-card rounded-2xl p-6 hover-lift relative"
              >
                {/* Bar chart visualization */}
                <div className="flex items-end justify-between gap-1 h-32 mb-6">
                  {item.barHeights.map((height, barIndex) => (
                    <div
                      key={barIndex}
                      className="flex-1 bg-muted rounded-t-sm transition-all duration-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                  {/* Orange dot indicator */}
                  <div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-accent" />
                </div>

                {/* Period label */}
                <h3 className="text-xl font-display text-foreground mb-2">
                  {item.period}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueBlocksSection;
