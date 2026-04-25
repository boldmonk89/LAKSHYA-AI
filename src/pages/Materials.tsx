import StudyMaterials from "@/components/StudyMaterials";
import VideoResources from "@/components/VideoResources";
import SelectionMusicPlayer from "@/components/SelectionMusicPlayer";

const Materials = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-start w-full">
      <div className="container mx-auto px-4 py-8 space-y-16 mt-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient glow">Study Materials</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive resources including OIR, TAT, WAT, SRT, and expert video guides.
          </p>
        </div>
        
        <StudyMaterials />
        <VideoResources />
        <SelectionMusicPlayer />
      </div>
    </div>
  );
};

export default Materials;
