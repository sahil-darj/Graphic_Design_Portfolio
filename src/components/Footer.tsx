import { Instagram, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-[#070512] pt-12 pb-8 overflow-hidden">
      {/* Decorative Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff3388]/50 to-transparent shadow-[0_0_20px_#ff3388]" />
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#ff3388]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 select-none group cursor-pointer">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff3388] to-[#9933ff] p-[2px]">
              <div className="flex items-center justify-center w-full h-full bg-[#070512] rounded-[6px]">
                <span className="text-sm font-black text-[#ff3388]">S</span>
              </div>
            </div>
            <span className="text-xl tracking-wide">
              <span className="font-light text-white">SAHIL</span> <span className="font-bold text-[#ff3388]">DARJI</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="mailto:sahil@example.com"
              className="text-[#a09eab] hover:text-[#ff3388] transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,51,136,0.6)] hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://www.instagram.com/shaan_7art/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a09eab] hover:text-[#ff3388] transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,51,136,0.6)] hover:-translate-y-1"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-darji-30a609313/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a09eab] hover:text-[#ff3388] transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,51,136,0.6)] hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] text-center text-[14px] text-[#7a7885]">
          <p>Copyright © {new Date().getFullYear()} Sahil Darji | Designed in India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
