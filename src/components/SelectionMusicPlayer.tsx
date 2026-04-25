import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, Music, Volume2, Selection } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const songs = [
  { title: "52 Bars", artist: "Karan Aujla", url: "/songs/52 Bars.mp3" },
  { title: "BAAWE", artist: "Raftaar", url: "/songs/BAAWE - Raftaar.mp3" },
  { title: "Wavy", artist: "Karan Aujla", url: "/songs/Wavy.mp3" },
  { title: "Winning Speech", artist: "Karan Aujla", url: "/songs/Winning Speech.mp3" },
];

const SelectionMusicPlayer = ({ className }: { className?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong = songs[currentSongIndex];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Autoplay blocked or error:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => console.log("Error playing song:", err));
    }
  }, [currentSongIndex]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div 
      ref={(el) => {
        if (el && !el.dataset.observed) {
          el.dataset.observed = 'true';
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, { threshold: 0.1 });
          observer.observe(el);
        }
      }}
      className={cn("w-full max-w-4xl mx-auto px-4 py-12 scroll-fade-up", className)}
    >
      <div className="glass-premium rounded-3xl p-6 md:p-8 relative overflow-hidden group border-primary/20 bg-black/40">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-700" />
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Album Art / Icon */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary/30 to-background flex items-center justify-center border border-primary/20 shadow-glow overflow-hidden shrink-0">
            <Music className={cn("w-12 h-12 md:w-16 md:h-16 text-primary animate-pulse-slow", isPlaying && "animate-spin-slow")} />
            {isPlaying && (
              <div className="absolute bottom-2 right-2 flex gap-1 items-end h-4">
                <div className="w-1 bg-primary animate-music-bar-1 h-3" />
                <div className="w-1 bg-primary animate-music-bar-2 h-4" />
                <div className="w-1 bg-primary animate-music-bar-3 h-2" />
              </div>
            )}
          </div>

          <div className="flex-grow text-center md:text-left space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Selection ho jayega toh kaunsa gana lagaoge story pe? 🇮🇳
            </h3>
            
            <div className="space-y-1">
              <p className="text-primary font-bold text-lg">{currentSong.title}</p>
              <p className="text-muted-foreground text-sm uppercase tracking-widest">{currentSong.artist}</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Button 
                  onClick={togglePlay}
                  variant="outline" 
                  size="icon" 
                  className="w-14 h-14 rounded-full border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300"
                >
                  {isPlaying ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}
                </Button>
                
                <Button 
                  onClick={nextSong}
                  variant="ghost" 
                  size="icon" 
                  className="w-10 h-10 rounded-full text-muted-foreground hover:text-primary"
                >
                  <SkipForward />
                </Button>

                <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                  <Volume2 className="w-4 h-4" />
                  <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/50 w-2/3" />
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </div>
          </div>
        </div>

        <audio 
          ref={audioRef} 
          src={currentSong.url} 
          onTimeUpdate={handleTimeUpdate}
          onEnded={nextSong}
        />
      </div>
    </div>
  );
};

export default SelectionMusicPlayer;
