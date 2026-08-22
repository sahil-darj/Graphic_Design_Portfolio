import { useState } from "react";
import { Menu, X, ChevronRight, Download } from "lucide-react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Commissions from "./components/Commissions";
import Testimonials from "./components/Testimonials";
import Legends from "./components/Legends";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* ===== Navbar ===== */}
      <nav className="fixed top-0 w-full bg-neutral-950/90 backdrop-blur-md z-50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Name */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Sahil Darji Logo"
                className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
              />
              <span className="text-lg font-bold tracking-tight text-white hidden sm:block">
                SAHIL <span className="text-purple-500">DARJI</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "gallery", label: "Gallery" },
                { id: "commissions", label: "Commissions" },
                { id: "legends", label: "Legends" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-all rounded-full hover:bg-white/5"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Right side actions */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="/Sahil_Darji_CV.pdf" 
                download="Sahil_Darji_CV.pdf"
                className="p-2 text-neutral-400 hover:text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all flex items-center justify-center active:scale-95"
                title="Download CV"
              >
                <Download size={18} />
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 active:scale-95"
              >
                Let's Talk <ChevronRight size={16} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-300 hover:text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "gallery", label: "Gallery" },
                { id: "commissions", label: "Commissions" },
                { id: "legends", label: "Legends" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* ===== Sections ===== */}
      <Hero scrollToGallery={() => scrollToSection("gallery")} />
      <About />
      <Skills />
      <Gallery />
      <Commissions scrollToContact={() => scrollToSection("contact")} />
      <Testimonials />
      <Legends />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
