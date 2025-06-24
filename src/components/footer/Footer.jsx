import { Link } from "react-router-dom";
import Socials from "../socials/Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-caribbean-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              <span className="text-caribbean-orange">Kaz</span>
              <span className="text-white">A</span>
              <span className="text-caribbean-orange">Bokit</span>
            </h2>
            <p className="mt-2 text-white/70">French Caribbean Street Food</p>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <Socials />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/"
              className="text-white/80 hover:text-caribbean-orange transition-colors"
            >
              Home
            </a>
            <a
              href="/#about"
              className="text-white/80 hover:text-caribbean-orange transition-colors"
            >
              About
            </a>
            <a
              href="/#menu"
              className="text-white/80 hover:text-caribbean-orange transition-colors"
            >
              Menu
            </a>
            <a
              href="/#events"
              className="text-white/80 hover:text-caribbean-orange transition-colors"
            >
              Events
            </a>
            <Link
              to="/contact"
              className="text-white/80 hover:text-caribbean-orange transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/privacy-policy"
              className="text-white/80 hover:text-caribbean-orange transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="text-center text-white/60 text-sm">
          <p className="mb-4">
            &copy; {currentYear} Kaz A Bokit. All rights reserved.
          </p>
          <p className="flex justify-center items-center gap-1">
            Osaebros ltd &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
