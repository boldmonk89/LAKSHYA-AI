import Hero from "@/components/Hero";
import WhatSSBDemands from "@/components/WhatSSBDemands";
import Motivation from "@/components/Motivation";
import JourneyTimeline from "@/components/JourneyTimeline";
import Contact from "@/components/Contact";
import DefenceAnalysisPreview from "@/components/DefenceAnalysisPreview";
import OfficerLifeGallery from "@/components/OfficerLifeGallery";
import QuickAccessResources from "@/components/QuickAccessResources";
import FluidBlueprint from "@/components/FluidBlueprint";
import ArmedForcesMarquee from "@/components/ArmedForcesMarquee";

const Index = () => {
  return (
    <div className="w-full flex-grow">
      <Hero />
      <DefenceAnalysisPreview />
      <FluidBlueprint />
      <WhatSSBDemands />
      <Motivation />
      <OfficerLifeGallery />
      <JourneyTimeline />
      <QuickAccessResources />
      <ArmedForcesMarquee />
      <Contact />
    </div>
  );
};

export default Index;

