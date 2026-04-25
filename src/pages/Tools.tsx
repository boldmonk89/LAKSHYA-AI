import AIPsychAnalyzer from "@/components/AIPsychAnalyzer";
import PiqAnalyzer from "@/components/PiqAnalyzer";
import AIChatbot from "@/components/AIChatbot";
import SelectionMusicPlayer from "@/components/SelectionMusicPlayer";

const Tools = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-start w-full">
      <div className="container mx-auto px-4 py-8 space-y-16 mt-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient glow">AI Tools</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage advanced AI to analyze your psychology and PIQ, and get instant answers to your SSB queries.
          </p>
        </div>
        
        <AIPsychAnalyzer />
        <PiqAnalyzer />
        <AIChatbot />
        <SelectionMusicPlayer />
      </div>
    </div>
  );
};

export default Tools;
