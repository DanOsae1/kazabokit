import { ChevronDown } from "lucide-react";
import KazABokit from "@/assets/kazabokit-fcsf.png";
import { getImageUrl } from "@/utils/getImageUrlUtil/GetImageUrl";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-caribbean-white"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-caribbean-orange/20 to-caribbean-yellow/20"></div>
      </div>

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="tracking-in-expand">
            <span className="section-subtitle inline-block">
              French Caribbean Street Food
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6">
              <span className="text-caribbean-orange">Authentic</span> & Tasty
              <span className="text-caribbean-orange"> Bokits</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-md animate-fade-in-up">
            Experience the vibrant flavors of Guadeloupe, brought to you by our
            family-run business. A culinary journey through the Caribbean.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in">
            <a href="#menu" className="btn-primary">
              View Our Menu
            </a>
            <a href="#events" className="btn-secondary">
              Upcoming Events
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center slide-in-elliptic-top-fwd">
          <div className="relative">
            <div className="absolute -inset-4 bg-caribbean-yellow/20 rounded-full blur-xl"></div>
            <img
              src={getImageUrl(KazABokit)}
              alt="Kaz A Bokit Logo"
              className="w-full h-full max-w-2xl relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="text-caribbean-orange" />
      </a>
    </section>
  );
};

export default Hero;
