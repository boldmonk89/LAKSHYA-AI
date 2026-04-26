import DomeGallery from "./DomeGallery";

const images = [
  { src: "/images/motivational/ima-ota-parade.jpg", alt: "IMA OTA Passing Out Parade" },
  { src: "/images/motivational/army-adg-pi.jpg", alt: "Indian Army ADG PI" },
  { src: "/images/motivational/air-force-planes.jpg", alt: "Air Force Aviation" },
  { src: "/images/motivational/army-snow.jpg", alt: "Army in Snow Conditions" },
  { src: "/images/motivational/battle-gewi-ridge.jpg", alt: "Battle of Gewi Ridge Inspiration" },
  { src: "/images/motivational/officer-1.jpg", alt: "Indian Army Officer" },
  { src: "/images/motivational/officer-2.jpg", alt: "Indian Armed Forces Personnel" },
  { src: "/images/motivational/officer-3.jpg", alt: "Military Pride" },
  { src: "/images/motivational/officer-4.jpg", alt: "Officer Training" },
  { src: "/images/motivational/officer-summit.jpg", alt: "Mountaineering and Valor" },
  { src: "/images/motivational/special-forces.jpg", alt: "Special Forces (BPFRON)" },
];

const OfficerLifeGallery = () => {
  return (
    <section id="motivational-wall" className="relative py-24 px-4 bg-black/40 overflow-hidden border-y border-primary/10">
      <div className="relative z-20 max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient glow">
          Wall of Honor: Life of an Officer
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto italic">
          "The life of an officer is not just a career, it's a legacy of courage and sacrifice."
        </p>
      </div>

      <div className="h-[600px] w-full relative">
        <DomeGallery 
          images={images}
          fit={0.7}
          minRadius={500}
          maxRadius={900}
          grayscale={false}
          overlayBlurColor="rgba(0, 0, 0, 0.8)"
        />
      </div>

      <div className="mt-12 text-center">
        <p className="text-primary font-bold tracking-widest uppercase text-sm animate-pulse">
           Explore the legacy • Feel the pride • Join the ranks 🇮🇳
        </p>
      </div>
    </section>
  );
};

export default OfficerLifeGallery;
