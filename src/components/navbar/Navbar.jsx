import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import kazabokitLogo from "@/assets/kazalogotransp.png";
import { getImageUrl } from "@/utils/getImageUrlUtil/GetImageUrl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Menu", href: "/#menu" },
    { name: "Events", href: "/#events" },
    { name: "Contact", href: "/contact" },
  ];

  const finalNavLinks = navLinks.map((link) => {
    if (link.name.match("Contact")) {
      return (
        <Link key={link.name} to={link.href} className="nav-link">
          {link.name}
        </Link>
      );
    } else {
      return (
        <a key={link.name} href={link.href} className="nav-link">
          {link.name}
        </a>
      );
    }
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center">
          {" "}
          <img
            src={getImageUrl(kazabokitLogo)}
            alt="KazA Bokit Logo"
            className="h-10 w-auto mr-3"
            loading="lazy"
          />
          <h1 className="text-2xl md:text-3xl font-display font-bold">
            <span className="text-caribbean-orange">Kaz</span>
            <span className="text-caribbean-black">A</span>
            <span className="text-caribbean-orange">Bokit</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {finalNavLinks}
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-caribbean-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {finalNavLinks}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
