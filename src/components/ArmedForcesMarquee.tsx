import LogoLoop from "./LogoLoop";

const ArmedForcesMarquee = () => {
  const pictures = [
    { src: "/images/motivational/ima-ota-parade.jpg", title: "Passing Out Parade" },
    { src: "/images/motivational/army-adg-pi.jpg", title: "Indian Army Pride" },
    { src: "/images/motivational/air-force-planes.jpg", title: "IAF Aviation" },
    { src: "/images/motivational/special-forces.jpg", title: "Special Forces" },
    { src: "/images/motivational/officer-summit.jpg", title: "Mountaineering Valor" },
    { src: "/images/motivational/army-snow.jpg", title: "Glacier Operations" },
    { src: "/images/motivational/officer-1.jpg", title: "Indian Army Officer" },
    { src: "/images/motivational/officer-2.jpg", title: "Leadership & Valor" }
  ];

  return (
    <div className="w-full bg-black/40 py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary/40 font-bold text-center">
              Our Pride • The Life of an Officer
          </p>
      </div>
      <LogoLoop 
        logos={pictures}
        speed={60}
        logoHeight={150} // Increased height for pictures
        gap={40}
        direction="left"
      />
    </div>
  );
};

export default ArmedForcesMarquee;
