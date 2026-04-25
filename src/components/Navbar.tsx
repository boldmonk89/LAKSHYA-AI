import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Materials", path: "/materials" },
    { name: "Community", path: "/community" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-premium px-4 py-3 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold text-gradient glow">
          LAKSHYA
        </Link>
        
        <div className="flex items-center space-x-1 md:space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm md:text-base font-medium transition-all duration-300",
                location.pathname === link.path
                  ? "bg-primary/20 text-primary-foreground text-shadow-sm"
                  : "text-foreground/80 hover:bg-white/10 hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
