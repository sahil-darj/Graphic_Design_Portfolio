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
        <div className="flex flex-col items-start max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-purple-500" />
            <span className="text-purple-400 font-bold tracking-[0.2em] text-sm uppercase drop-shadow-[0_1px_4px_rgba(168,85,247,0.8)]">
              Graphic Designer • Visual Artist
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col leading-[0.85] select-none mb-8"
          >
            <h1 className="text-6xl sm:text-7xl md:text-[140px] font-black text-white tracking-tighter drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] [text-shadow:2px_2px_0px_rgba(0,0,0,0.8),0_0_40px_rgba(0,0,0,0.6)]">
              SAHIL
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-[140px] font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] drop-shadow-[0_0_30px_rgba(0,0,0,0.9)] drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              DARJI
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-lg md:text-xl max-w-md mb-10 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)] [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Crafting bold visuals, brands & digital experiences that leave a lasting impression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={scrollToGallery}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white flex items-center gap-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95"
            >
              View Projects <ChevronRight size={20} />
            </button>
            <a
              href="#"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-bold text-white flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm"
            >
              Instagram <Instagram size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Stats Card */}
        <div className="hidden lg:flex justify-end pr-16 xl:pr-24 mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative transform hover:rotate-[-2deg] transition-transform duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 p-5 rounded-3xl w-[280px] shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600/40 to-purple-600/40 flex items-center justify-center border border-purple-500/30">
                  <PenTool className="text-purple-400" size={22} />
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-0.5 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">100+</div>
                  <div className="text-purple-400 font-bold text-sm tracking-wide uppercase">
                    Projects
                  </div>
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
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
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
