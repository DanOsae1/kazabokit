import { useEffect } from "react";
import Hero from "@/components/hero/Hero.jsx";
import Menu from "@/components/menu/Menu";
import VideoSection from "@/components/video/VideoSection";
import EventsSection from "@/components/events/EventsSection";
import AboutUsSection from "@/components/aboutus/AboutUsSection";

const Home = () => { 
  useEffect(() => {
    const handleAnchorClick = (e) => {
      let target = e.target;
      while (target && target !== document) {
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
            break;
          }
        }
        target = target.parentElement;
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div>
      <Hero />
      <AboutUsSection />
      <Menu />
      <VideoSection />
      <EventsSection />
      {/* <Newsletter /> */}
    </div>
  );
};
export default Home;
