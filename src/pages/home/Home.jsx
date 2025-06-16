import { useEffect } from "react";
import Hero from "@/components/hero/Hero.jsx";
import AboutUs from "@/pages/aboutus/Aboutus";
import Menu from "@/components/menu/Menu";
import VideoSection from "@/components/video/VideoSection";
import EventsSection from "@/components/events/EventsSection";

import { initAnchorClickHandler } from "@/utils/handleAnchorClick/HandleAnchorClick.js";

const Home = () => {
  useEffect(() => {
    const cleanup = initAnchorClickHandler();
    return () => {
      cleanup();
    };
  }, []);
  return (
    <div>
      <Hero />
      <Menu />
      <AboutUs />
      <VideoSection />
      <EventsSection />
      {/* <Newsletter /> */}
    </div>
  );
};
export default Home;
