import backgroundImage from "@/assets/soldiers-celebration.jpg";

const GlobalBackground = () => {
  return (
    <div 
      className="fixed inset-0 -z-20 w-full h-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'blur(4px) brightness(0.4)',
      }}
    />
  );
};

export default GlobalBackground;
