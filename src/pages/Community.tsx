import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Telegram from "@/components/Telegram";
import SSBBoards from "@/components/SSBBoards";
import DailyNews from "@/components/DailyNews";
import SSBTipsCarousel from "@/components/SSBTipsCarousel";
import ParentsInspiration from "@/components/ParentsInspiration";
import SelectionMusicPlayer from "@/components/SelectionMusicPlayer";

const Community = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-start w-full">
      <div className="container mx-auto px-4 py-8 space-y-16 mt-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient glow">Community & Updates</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with peers, stay updated with daily news, and get inspired by successful candidates and parents.
          </p>
        </div>
        
        <WhatsAppCommunity />
        <Telegram />
        <SSBBoards />
        <DailyNews />
        <SSBTipsCarousel />
        <ParentsInspiration />
        <SelectionMusicPlayer />
      </div>
    </div>
  );
};

export default Community;
