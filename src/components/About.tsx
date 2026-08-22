import { motion } from "framer-motion";
import { ArrowRight, Palette, Brush, Briefcase, Sparkles, MapPin, Trophy } from "lucide-react";



export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#080810] text-white overflow-hidden py-10 lg:py-16 px-6 md:px-16 flex flex-col justify-center"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Corner glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 w-full">
        {/* ===== LEFT: Text Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 lg:gap-5"
        >
          {/* Heading with glowing line */}
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
                Me
              </span>
            </h2>
            <div className="relative w-full max-w-[280px] h-[2px] bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1.5 bg-white rounded-full shadow-[0_0_12px_#ffffff,0_0_20px_#ff3388]" />
            </div>
          </div>

          {/* Bio paragraphs */}
          <p className="text-neutral-300 leading-relaxed text-lg">
            I'm{" "}
            <span className="text-purple-400 font-bold">Sahil Darji</span>, an
            illustrator & graphic designer who loves turning imagination into
            reality — from hand-drawn portraits to polished digital art. I
            combine{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
              creativity and technology
            </span>{" "}
            to craft visual stories that inspire.
          </p>

          <p className="text-neutral-400 leading-relaxed text-base">
            Over the years, I've completed{" "}
            <span className="text-white font-semibold">
              100+ commissioned artworks
            </span>{" "}
            for clients across{" "}
            <span className="text-purple-300 font-semibold flex-inline items-center gap-1">
              <MapPin size={14} className="inline" /> India, London & Spain
            </span>{" "}
            — including custom caricatures, portraits, event posters, and brand
            designs that have wowed audiences globally.
          </p>

          <p className="text-neutral-400 leading-relaxed text-base">
            Currently serving as the{" "}
            <span className="text-pink-400 font-semibold">
              <Trophy size={14} className="inline mr-1" />
              Design Head of LFA (LJ University)
            </span>
            , leading all visual design for college magazines, cultural events &
            creative campaigns — shaping how thousands see and feel design.
          </p>

          {/* Skill Cards */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: <Palette className="text-purple-400" size={22} />, title: "Traditional Art", desc: "Oil, Stencil & Pencil Sketching", border: "hover:border-purple-500" },
              { icon: <Brush className="text-pink-400" size={22} />, title: "Digital Design", desc: "Photoshop, Illustrator & Canva", border: "hover:border-pink-500" },
              { icon: <Briefcase className="text-blue-400" size={22} />, title: "LFA Club", desc: "Design Head – Magazines & Events", border: "hover:border-blue-500" },
              { icon: <Sparkles className="text-teal-400" size={22} />, title: "Freelance", desc: "100+ Commissions Worldwide", border: "hover:border-teal-500" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className={`bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-4 ${card.border} transition-all duration-300 hover:bg-white/[0.07]`}
              >
                <div className="mb-2">{card.icon}</div>
                <h4 className="font-bold text-sm text-white mb-1">{card.title}</h4>
                <p className="text-xs text-neutral-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all active:scale-95"
            >
              View My Work <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* ===== RIGHT: Image Panel ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 items-center lg:items-end"
        >
          {/* Main image with glow border */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 rounded-3xl blur-sm opacity-70" />
            <div className="relative w-full max-w-md h-[320px] lg:h-[380px] rounded-3xl overflow-hidden border border-purple-500/30">
              <img
                src="/Assets/em.webp"
                alt="Sahil Darji"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* 3 Thumbnails */}
          <div className="flex gap-4 w-full max-w-md mt-2">
            {[
              { src: "/Assets/Profile.webp", alt: "Working on design", objectFit: "cover" },
              { src: "/logo.webp", alt: "Brand design", objectFit: "contain", bg: "bg-[#050816]" },
              { src: "/Assets/121.webp", alt: "Art exhibition", objectFit: "cover" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i + 0.4, duration: 0.5 }}
                className={`relative flex-1 h-[100px] lg:h-[120px] rounded-2xl overflow-hidden border border-purple-500/30 ${img.bg || 'bg-transparent'}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full h-full object-${img.objectFit}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
