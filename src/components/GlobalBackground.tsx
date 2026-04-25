import backgroundImage from "@/assets/soldiers-celebration.jpg";

const GlobalBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 h-screen w-screen pointer-events-none bg-site-fixed"
      style={{ '--site-bg-image': `url(${backgroundImage})` } as React.CSSProperties}
    />
  );
};

export default GlobalBackground;
