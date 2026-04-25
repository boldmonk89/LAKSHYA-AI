import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Instagram, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import backgroundImage from "@/assets/contact-background.jpg";

const ContactCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  
  return (
    <div
      ref={ref}
      className={`scroll-zoom ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      
      
      
      
      

     
    </section>
  );
};

export default Contact;
