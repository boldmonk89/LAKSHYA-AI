import FlowingMenu from "./FlowingMenu";

const resourceItems = [
  { link: "/materials", text: "OIR Practice Hub", image: "/images/motivational/officer-4.jpg" },
  { link: "/materials", text: "PPDT & TAT Stories", image: "/images/resources/tat-1.jpg" },
  { link: "/tools", text: "AI Psych Analyzer", image: "/images/resources/you-belong-here.jpeg" },
  { link: "/community", text: "SSB Recommendations", image: "/images/resources/ima-parade.jpeg" },
];

const QuickAccessResources = () => {
  return (
    <section id="quick-access" className="py-24 bg-black/60 border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient glow">
          Quick Access Resources
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Deep dive into the specialized tools and materials designed for your selection.
        </p>
      </div>

      <div className="h-[400px] border-y border-white/10">
        <FlowingMenu 
          items={resourceItems} 
          marqueeBgColor="#facc15" 
          marqueeTextColor="#000"
          speed={12}
        />
      </div>
    </section>
  );
};

export default QuickAccessResources;
