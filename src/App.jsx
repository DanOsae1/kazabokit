import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/Aboutus";
import Contact from "./pages/contact/Contactus";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NotFound from "./pages/notFound/Notfound";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
