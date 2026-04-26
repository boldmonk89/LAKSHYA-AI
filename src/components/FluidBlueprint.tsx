import FluidGlass from "./FluidGlass";

const FluidBlueprint = () => {
  return (
    <section id="blueprint" className="relative h-[800px] w-full bg-black overflow-hidden border-y border-primary/20">
      <div className="absolute inset-0 z-0">
        <FluidGlass 
          mode="lens"
          lensProps={{
            scale: 2,
            ior: 1.2,
            thickness: 3,
            chromaticAberration: 0.05,
            anisotropy: 0.1
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center pointer-events-none">
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center max-w-4xl mx-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow">
            The Selection Blueprint
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Move your mouse to "Magnify" the core values. Our AI-driven approach 
            brings focus to your Officer Like Qualities (OLQs).
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <span className="px-4 py-2 rounded-full glass-premium text-primary text-sm font-bold border border-primary/30">
              CLARITY
            </span>
            <span className="px-4 py-2 rounded-full glass-premium text-primary text-sm font-bold border border-primary/30">
              FOCUS
            </span>
            <span className="px-4 py-2 rounded-full glass-premium text-primary text-sm font-bold border border-primary/30">
              VALOR
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default FluidBlueprint;
