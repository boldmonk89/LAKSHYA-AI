import LogoLoop from "./LogoLoop";

const ArmedForcesMarquee = () => {
  const forces = [
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Indian_Army_Emblem.svg/300px-Indian_Army_Emblem.svg.png", 
      title: "Indian Army" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Indian_Navy_Emblem.svg/300px-Indian_Navy_Emblem.svg.png", 
      title: "Indian Navy" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Indian_Air_Force_Emblem.svg/300px-Indian_Air_Force_Emblem.svg.png", 
      title: "Indian Air Force" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Indian_Coast_Guard_emblem.png/300px-Indian_Coast_Guard_emblem.png", 
      title: "Coast Guard" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/National_Defence_Academy_%28India%29_logo.png/300px-National_Defence_Academy_%28India%29_logo.png", 
      title: "NDA" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Indian_Military_Academy_logo.png/300px-Indian_Military_Academy_logo.png", 
      title: "IMA" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Indian_Air_Force_Academy_logo.png/300px-Indian_Air_Force_Academy_logo.png", 
      title: "AFA" 
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Indian_Naval_Academy_logo.png/300px-Indian_Naval_Academy_logo.png", 
      title: "INA" 
    }
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
        logoHeight={50}
        gap={120} // Space them out more for clarity
        direction="left"
      />
    </div>
  );
};

export default ArmedForcesMarquee;
