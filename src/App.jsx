import "./App.css";
import { useEffect } from "react";
import Hero from "@/components/hero/Hero.jsx";
import AboutUs from "@/pages/aboutus/Aboutus";
import Menu from "@/components/menu/Menu";
import VideoSection from "@/components/video/VideoSection"
import EventsSection from "@/components/events/EventsSection";
import Newsletter from "@/components/newsletter/Newsletter";
import Contact from "@/pages/contact/Contactus";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NotFound from "./pages/notFound/Notfound";

const App = () => {
  useEffect(() => {

    // Smooth scroll functionality for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top:
                element.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
      <VideoSection />
      <EventsSection />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
