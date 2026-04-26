import GlassSurface from "./GlassSurface";

const FluidBlueprint = () => {
  return (
    <section id="blueprint" className="relative min-h-[600px] w-full bg-[#050505] overflow-hidden py-24 flex items-center justify-center">
      {/* Dynamic Background Elements for Glass to Distort */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 bg-[url('/images/resources/ima-parade.jpeg')] bg-cover bg-fixed grayscale opacity-10" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center gap-12">
            <h2 className="text-5xl md:text-7xl font-bold text-center text-gradient glow tracking-tighter">
                THE SELECTION BLUEPRINT
            </h2>

            <GlassSurface
                width="100%"
                height="auto"
                borderRadius={40}
                distortionScale={-80}
                brightness={45}
                backgroundOpacity={0.05}
                className="max-w-5xl border border-white/10 group overflow-hidden"
                style={{ padding: '40px' }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30 uppercase tracking-widest">
                            AI-Driven Focus
                        </div>
                        <h3 className="text-3xl font-bold text-white leading-tight">
                            Magnify Your Officer Like Qualities (OLQs)
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our "Glass Blueprint" methodology brings focus to your training. 
                            Move your mouse over this surface to see how we distort the noise and 
                            leave only clarity for your SSB journey.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { title: "Psych Analysis", desc: "Deep dive into your TAT/WAT stories" },
                                { title: "Daily PPDT", desc: "Interactive community-driven practice" },
                                { title: "Strategic OIR", desc: "Master the basics with AI feedback" }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black text-xs font-bold mt-1 shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="relative aspect-square flex items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-black/40">
                        <img 
                            src="/images/resources/you-belong-here.jpeg" 
                            alt="Officer Motivation" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 text-xl font-bold text-white tracking-widest">
                            #DREAM_TO_UNIFORM
                        </div>
                    </div>
                </div>
            </GlassSurface>

            <p className="text-muted-foreground text-sm flex gap-4">
                <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" /> System Stable
                </span>
                <span className="opacity-40">|</span>
                <span>Interactivity: High</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default FluidBlueprint;
