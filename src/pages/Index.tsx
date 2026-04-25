import Hero from "@/components/Hero";
import WhatSSBDemands from "@/components/WhatSSBDemands";
import Motivation from "@/components/Motivation";
import JourneyTimeline from "@/components/JourneyTimeline";
import Contact from "@/components/Contact";
import DefenceAnalysisPreview from "@/components/DefenceAnalysisPreview";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <div className="w-full flex-grow">
      <ParallaxBackground />
      <Hero />
      <DefenceAnalysisPreview />
      <WhatSSBDemands />
      <Motivation />
      <JourneyTimeline />
      <Contact />
    </div>
  );
};

export default Index;
