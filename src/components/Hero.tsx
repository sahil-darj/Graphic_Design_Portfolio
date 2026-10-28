import { motion } from "framer-motion";
import { ChevronRight, Instagram, PenTool } from "lucide-react";
import CinematicBackground from "./CinematicBackground";

interface HeroProps {
  scrollToGallery: () => void;
}

function Hero({ scrollToGallery }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black pt-20"
    >
      <CinematicBackground />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start max-w-xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-purple-500 flex-shrink-0" />
            <span className="text-purple-400 font-bold tracking-[0.18em] text-xs sm:text-sm uppercase drop-shadow-[0_1px_4px_rgba(168,85,247,0.8)]">
              Graphic Designer&nbsp;•&nbsp;Visual Artist
            </span>
          </motion.div>

          {/* Name — compact, balanced, two lines */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 select-none"
          >
            <h1 className="text-[clamp(3rem,9vw,6.5rem)] font-black leading-[0.88] tracking-tighter">
              <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                SAHIL
              </span>
              {" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(168,85,247,0.45)]">
                DARJI
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8 }}
            className="text-neutral-200 text-base sm:text-lg max-w-sm mb-9 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Turning ideas into bold visuals, memorable brands, and expressive art.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.8 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={scrollToGallery}
              className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white text-sm flex items-center gap-2 hover:shadow-[0_0_24px_rgba(99,102,241,0.45)] transition-all duration-300 active:scale-95"
            >
              View Projects <ChevronRight size={18} />
            </button>
            <a
              href="https://www.instagram.com/sahil_darji_art/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white/5 border border-white/10 rounded-xl font-bold text-white text-sm flex items-center gap-2 hover:bg-white/10 transition-all duration-300 active:scale-95 backdrop-blur-sm"
            >
              Instagram <Instagram size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Stats Card */}
        <div className="hidden lg:flex justify-end pr-16 xl:pr-24 mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hover:rotate-[-2deg] transition-transform duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 p-5 rounded-3xl w-[280px] shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600/40 to-purple-600/40 flex items-center justify-center border border-purple-500/30 flex-shrink-0">
                  <PenTool className="text-purple-400" size={22} />
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-0.5 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">100+</div>
                  <div className="text-purple-400 font-bold text-sm tracking-wide uppercase">Projects</div>
                  <div className="text-neutral-300 text-xs mt-0.5 font-medium">Creative Visual Designer</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
}

export default Hero;
