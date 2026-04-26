import Hero from "@/components/Hero";
import WhatSSBDemands from "@/components/WhatSSBDemands";
import Motivation from "@/components/Motivation";
import JourneyTimeline from "@/components/JourneyTimeline";
import Contact from "@/components/Contact";
import DefenceAnalysisPreview from "@/components/DefenceAnalysisPreview";
import OfficerLifeGallery from "@/components/OfficerLifeGallery";
import QuickAccessResources from "@/components/QuickAccessResources";
import FluidBlueprint from "@/components/FluidBlueprint";

const Index = () => {
  return (
    <div className="w-full flex-grow">
      <Hero />
      <DefenceAnalysisPreview />
      <WhatSSBDemands />
      <Motivation />
      <OfficerLifeGallery />
      <JourneyTimeline />
      <QuickAccessResources />
      <Contact />
    </div>
  );
};

export default Index;

