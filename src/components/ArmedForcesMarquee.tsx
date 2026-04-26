import LogoLoop from "./LogoLoop";

const ArmedForcesMarquee = () => {
  const forces = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Indian_Army_Emblem.svg", title: "Indian Army" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Indian_Navy_Emblem.svg", title: "Indian Navy" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Indian_Air_Force_Emblem.svg", title: "Indian Air Force" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Indian_Coast_Guard_emblem.png", title: "Coast Guard" },
    { src: "https://upload.wikimedia.org/wikipedia/en/3/37/National_Defence_Academy_%28India%29_logo.png", title: "NDA" },
    { src: "https://upload.wikimedia.org/wikipedia/en/5/5b/Indian_Military_Academy_logo.png", title: "IMA" },
    { src: "https://upload.wikimedia.org/wikipedia/en/e/e6/Indian_Air_Force_Academy_logo.png", title: "AFA" },
    { src: "https://upload.wikimedia.org/wikipedia/en/0/09/Indian_Naval_Academy_logo.png", title: "INA" }
  ];

  return (
    <div className="w-full bg-black/40 py-10 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary/40 font-bold text-center">
              Our Pride • The Armed Forces
          </p>
      </div>
      <LogoLoop 
        logos={forces}
        speed={40}
        logoHeight={60}
        gap={80}
        fadeOut
        fadeOutColor="#050505"
        pauseOnHover
      />
    </div>
  );
};

export default ArmedForcesMarquee;
