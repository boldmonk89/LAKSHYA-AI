import { Mail, Instagram, Send, Heart } from "lucide-react";
import founderImage from "@/assets/founder.jpg";
import SelectionMusicPlayer from "./SelectionMusicPlayer";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden border-t border-primary/10">
      <SelectionMusicPlayer className="mb-16" />
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          
          {/* About the Founder */}
          <div className="flex flex-col md:flex-row items-center gap-6 glass-premium p-8 rounded-2xl border border-primary/20">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img 
                  src={founderImage} 
                  alt="Founder" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-full shadow-lg">
                <Heart className="w-4 h-4 text-black fill-black" />
              </div>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-gradient mb-2">About the Founder</h3>
              <p className="text-foreground/90 font-medium italic mb-3">
                "Defence aspirant like u guys ... Jai Hind!"
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The SSB materials are priced at just <span className="text-primary font-bold">₹299</span> because of the immense hard work, research, and expert curation that went into building this complete library. This nominal contribution helps us maintain the AI (SSBGPT) and keep the platform running for fellow aspirants.
              </p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Email */}
            <div className="text-center p-4 glass rounded-xl">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-base font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:tejasraghav251@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors block truncate px-2">
                tejasraghav251@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div className="text-center p-4 glass rounded-xl">
              <Instagram className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-foreground mb-2">Instagram</h3>
              <a href="https://www.instagram.com/traghavvv/?hl=en" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-pink-500 transition-colors block">
                @traghavvv
              </a>
            </div>

            {/* Telegram */}
            <div className="text-center p-4 glass rounded-xl">
              <Send className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-foreground mb-2">Telegram</h3>
              <a href="https://t.me/scorchiee" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-blue-400 transition-colors block">
                @scorchiee
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            © 2025 LAKSHYASSB. Built by an aspirant, for the aspirants.
          </p>
          <div className="flex items-center gap-4 order-1 md:order-2">
            <span className="text-xs text-muted-foreground italic">
              सेवा, सम्मान, साहस - Service, Honor, Courage
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
