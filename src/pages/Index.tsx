import Hero from "@/components/Hero";
import WhatSSBDemands from "@/components/WhatSSBDemands";
import Motivation from "@/components/Motivation";
import JourneyTimeline from "@/components/JourneyTimeline";
import Contact from "@/components/Contact";
import DefenceAnalysisPreview from "@/components/DefenceAnalysisPreview";
import SelectionMusicPlayer from "@/components/SelectionMusicPlayer";

const Index = () => {
  return (
    <div className="w-full flex-grow">
      <Hero />
      <SelectionMusicPlayer />
      <DefenceAnalysisPreview />
      <SelectionMusicPlayer />
      <WhatSSBDemands />
      <SelectionMusicPlayer />
      <Motivation />
      <SelectionMusicPlayer />
      <JourneyTimeline />
      <SelectionMusicPlayer />
      <Contact />
      <SelectionMusicPlayer />
    </div>
  );
};

export default Index;
