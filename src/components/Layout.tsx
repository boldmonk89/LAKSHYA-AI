import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";
import SiteIntroOnce from "./SiteIntroOnce";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <ScrollToTop />
      <SiteIntroOnce ms={15000} tryAutoplayFirst />
      <Navbar />
      
      {/* Main content wrapper */}
      <main className="flex-grow pt-20 flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
