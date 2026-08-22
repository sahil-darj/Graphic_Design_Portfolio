import { motion } from "framer-motion";
import {
  PenTool, Brush, Layout, Stamp, Palette, Edit3, Type, User,
  Monitor, Star, ClipboardList, Smile, Trophy,
} from "lucide-react";

export default function Skills() {
  const artisticSkills = [
    { name: "Pencil Sketching", icon: <PenTool size={14} /> },
    { name: "Digital Illustration", icon: <Brush size={14} /> },
    { name: "Logo Design", icon: <Layout size={14} /> },
    { name: "Stenciling", icon: <Stamp size={14} /> },
    { name: "Oil Painting", icon: <Palette size={14} /> },
    { name: "Concept Art", icon: <Edit3 size={14} /> },
    { name: "Typography", icon: <Type size={14} /> },
    { name: "Character Design", icon: <User size={14} /> },
  ];
  return (
    <section id="skills" className="relative w-full pt-20 pb-12 overflow-hidden min-h-screen flex flex-col bg-[#030108]">
      {/* Absolute Background Elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050016] via-[#06001c] to-[#030108]"></div>
      
      {/* Purple 3D Blob - Left Bottom Corner */}
      <img 
        src="/a6f7d7a8-2d9b-4980-8ba7-ef67bc8623a5.webp" 
        alt="" 
        className="absolute -bottom-[40px] -left-[40px] w-[220px] md:w-[280px] lg:w-[320px] h-auto object-contain z-[1] opacity-90 pointer-events-none drop-shadow-[0_0_30px_rgba(160,51,255,0.3)]"
      />
      


      <div className="max-w-[1450px] w-full mx-auto px-4 md:px-8 relative z-10 flex flex-col h-full mt-4">
        
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_auto_1.1fr] gap-6 lg:gap-8 items-stretch mb-6 lg:mb-8">
          
          {/* Left Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-end relative z-20 lg:row-span-2 h-full"
          >
            {/* Premium Background Typography */}
            <div 
              className="absolute left-0 top-[-40px] lg:top-[-81px] z-[-1] pointer-events-none select-none flex flex-col gap-[1rem] opacity-[0.22]"
              style={{ lineHeight: 0.9 }}
            >
              <h1 
                className="text-[110px] lg:text-[160px] font-black bg-gradient-to-r from-[#e33288] via-[#751ccf] to-[#1e0842] text-transparent bg-clip-text uppercase tracking-[0.02em] whitespace-nowrap m-0 p-0 antialiased"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                CREATIVE
              </h1>
              <h1 
                className="text-[110px] lg:text-[160px] font-black bg-gradient-to-r from-[#c42873] via-[#5c1099] to-[#12042b] text-transparent bg-clip-text uppercase tracking-[0.02em] whitespace-nowrap m-0 p-0 antialiased"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                SKILLS
              </h1>
            </div>
            
            <div className="relative mt-[20px]">

              <div className="flex items-center gap-3 mb-3 relative z-10">
                <span className="text-[#ff3388] text-sm font-bold">—</span>
                <span className="text-[#c186d1] text-[11px] font-bold tracking-[0.25em] uppercase">
                  WHAT I DO BEST
                </span>
              </div>
              
              <h2 className="text-[44px] md:text-5xl lg:text-[68px] font-bold text-white leading-[1] tracking-tight">
                Creative Skills.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3388] to-[#a033ff]">
                  Real Impact.
                </span>
              </h2>
              
              <p className="text-[#9693a5] text-[14px] font-light leading-[1.6] max-w-[380px] mt-4 tracking-wide relative z-10">
                I blend creativity with the right tools to<br />
                design visuals that speak, connect<br />
                and leave a lasting impression.
              </p>

              <div className="mt-[-0.5rem] relative self-start inline-block z-10">
                <span className="text-[52px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#ff3388] to-[#9533ff] opacity-100" style={{ fontFamily: "'Dancing Script', Pacifico, cursive", paddingRight: '10px' }}>
                  Sahil Darji
                </span>
              </div>
            </div>

            <div className="mt-10 relative p-5 rounded-[20px] bg-[#0c0514]/60 backdrop-blur-[16px] border border-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.4)] max-w-[360px]">
              <div className="text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-[#ff3388] to-[#a033ff] absolute top-3 left-4 opacity-90 leading-none">“</div>
              
              <div className="relative z-10 pt-5 flex items-center justify-between gap-4">
                <p className="text-[#9693a5] text-[13px] font-normal leading-[1.6]">
                  Every design is a solution,<br />
                  every <span className="text-[#ff3388]">color</span> is an <span className="text-[#a033ff]">emotion</span>.
                </p>
                {/* Precise Hand-drawn Loop Arrow SVG matching reference */}
                <svg width="45" height="40" viewBox="0 0 100 100" fill="none" className="shrink-0 drop-shadow-[0_0_8px_rgba(160,51,255,0.4)]">
                  <path d="M 5 85 C 30 90, 45 80, 55 55 C 60 30, 30 30, 30 55 C 30 80, 45 80, 60 65 C 75 50, 85 40, 95 28" stroke="url(#loopArrowGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
                  <path d="M 65 30 L 95 28 L 85 52" stroke="url(#loopArrowGrad)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="loopArrowGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a033ff" />
                      <stop offset="100%" stopColor="#ff3388" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Center Logo Area - Moved Up, Bigger, Tighter */}
          <div className="relative flex items-center justify-center h-[380px] lg:h-[460px] w-full max-w-[440px] mx-auto my-4 lg:my-0 lg:-mt-6 z-10 lg:-ml-4 self-center">
             
             {/* Center Massive Glow Bloom */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#a033ff] rounded-full blur-[110px] opacity-[0.35] mix-blend-screen pointer-events-none"></div>
             
             {/* Glowing Custom Image Logo - NO BACKGROUND BOX */}
             <motion.div 
                animate={{ scale: [1, 1.05, 1], filter: ["drop-shadow(0 0 35px rgba(160,51,255,0.8))", "drop-shadow(0 0 60px rgba(160,51,255,1))", "drop-shadow(0 0 35px rgba(160,51,255,0.8))"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 flex items-center justify-center w-40 h-40 lg:w-48 lg:h-48"
             >
                <img 
                  src="/logo.webp" 
                  alt="Sahil Darji" 
                  className="w-full h-full object-contain" 
                  style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.6)) drop-shadow(0 0 40px rgba(160,51,255,0.9))" }}
                />
             </motion.div>

             {/* Multiple Orbit Rings - Larger */}
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] rounded-full border-[1.5px] border-[#a033ff]/50 shadow-[inset_0_0_20px_rgba(160,51,255,0.3)]"
             >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#ffffff,0_0_40px_#a033ff]"></div>
             </motion.div>

             <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[360px] h-[360px] lg:w-[440px] lg:h-[440px] rounded-full border-[1px] border-[#ff3388]/30 shadow-[0_0_30px_rgba(255,51,136,0.15)]"
             >
                <div className="absolute bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#ff3388] rounded-full shadow-[0_0_15px_#ff3388,0_0_30px_#ff3388]"></div>
             </motion.div>
          </div>

          {/* Right Side Panels - Tighter Vertically, Moved Left via Layout */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4 lg:space-y-5 relative z-20 w-full lg:-ml-8 self-center"
          >
            {/* Card 1: Artistic Skills */}
            <div className="relative bg-[#0c0d1a]/80 backdrop-blur-[32px] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(180,0,255,0.1)] rounded-[24px] p-5 group">
              {/* Extreme sharp corner highlight top-left */}
              <div className="absolute top-0 left-[5%] w-[30%] h-[1px] bg-gradient-to-r from-transparent via-[#ff3388] to-transparent shadow-[0_0_10px_#ff3388]"></div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff3388] to-[#a033ff] flex items-center justify-center shadow-[0_0_20px_rgba(255,51,136,0.4)]">
                    <PenTool size={16} className="text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-white text-lg font-bold tracking-wide">Artistic Skills</h3>
                </div>
                <div className="grid grid-cols-3 gap-1 opacity-20">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {artisticSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                    <span className="text-[#ff3388] flex items-center justify-center w-6">{skill.icon}</span>
                    <span className="text-white/70 text-xs">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Software Proficiency */}
            <div className="relative bg-[#0c0d1a]/80 backdrop-blur-[32px] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(180,0,255,0.1)] rounded-[24px] p-5 group">
              {/* Extreme sharp corner highlight top-left */}
              <div className="absolute top-0 left-[5%] w-[30%] h-[1px] bg-gradient-to-r from-transparent via-[#4d66ff] to-transparent shadow-[0_0_10px_#4d66ff]"></div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4d66ff] to-[#a033ff] flex items-center justify-center shadow-[0_0_20px_rgba(77,102,255,0.4)]">
                    <Monitor size={16} className="text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-white text-lg font-bold tracking-wide">Software Proficiency</h3>
                </div>
                <div className="flex gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#4d66ff]/50 transition-colors duration-300"></div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                  <img src="/Assets/logo/photohsop.webp" alt="Photoshop" className="w-6 h-6 object-contain rounded-md" />
                  <span className="text-white/70 text-xs">Photoshop</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                  <img src="/Assets/logo/canva.webp" alt="Canva" className="w-6 h-6 object-contain rounded-md" />
                  <span className="text-white/70 text-xs">Canva</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                  <img src="/Assets/logo/figma.webp" alt="Figma" className="w-6 h-6 object-contain rounded-md" />
                  <span className="text-white/70 text-xs">Figma</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                  <img src="/Assets/logo/autodesk.webp" alt="Sketchbook" className="w-6 h-6 object-contain rounded-md" />
                  <span className="text-white/70 text-xs">Sketchbook</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                  <img src="/Assets/logo/inshot.webp" alt="InShot" className="w-6 h-6 object-contain rounded-md" />
                  <span className="text-white/70 text-xs">InShot</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                  <img src="/Assets/logo/lightroom.webp" alt="Lightroom" className="w-6 h-6 object-contain rounded-md" />
                  <span className="text-white/70 text-xs">Lightroom</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                  <img src="/Assets/logo/ai.webp" alt="Illustrator" className="w-6 h-6 object-contain rounded-md" />
                  <span className="text-white/70 text-xs flex gap-1">Illustrator <span className="opacity-50">(Basic)</span></span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                  <img src="/Assets/logo/coreldraw.webp" alt="CorelDRAW" className="w-6 h-6 object-contain rounded-md" />
                  <span className="text-white/70 text-xs flex gap-1">CorelDRAW <span className="opacity-50">(Basic)</span></span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] transition-colors p-2 rounded-xl border border-white/[0.05]">
                  <img src="/Assets/logo/ob.webp" alt="Obsidian" className="w-6 h-6 object-contain rounded-md" />
                  <span className="text-white/70 text-xs flex gap-1">Obsidian <span className="opacity-50">(Basic)</span></span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Horizontal Stats Row - Spanning Center and Right Columns */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="lg:col-start-2 lg:col-span-2 bg-[#0c0d1a]/60 backdrop-blur-[24px] border border-white/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-[24px] p-5 lg:px-8 lg:py-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 relative z-20"
          >
             {/* Stat 1 */}
             <div className="flex items-center gap-4 group w-full lg:w-auto">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(77,102,255,0.15)] group-hover:border-[#4d66ff]/40 group-hover:shadow-[0_0_20px_rgba(77,102,255,0.3)] transition-all">
                 <ClipboardList className="text-[#4d66ff]" size={22} />
               </div>
               <div>
                 <h3 className="text-white text-[26px] font-bold font-sans leading-none tracking-tight">100+</h3>
                 <p className="text-[#9693a5] text-[11px] font-normal tracking-wide mt-1.5">Projects Completed</p>
               </div>
             </div>

             {/* Stat 2 */}
             <div className="flex items-center gap-4 group w-full lg:w-auto">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,51,136,0.15)] group-hover:border-[#ff3388]/40 group-hover:shadow-[0_0_20px_rgba(255,51,136,0.3)] transition-all">
                 <Smile className="text-[#ff3388]" size={22} />
               </div>
               <div>
                 <h3 className="text-white text-[26px] font-bold font-sans leading-none tracking-tight">50+</h3>
                 <p className="text-[#9693a5] text-[11px] font-normal tracking-wide mt-1.5">Happy Clients</p>
               </div>
             </div>

             {/* Stat 3 */}
             <div className="flex items-center gap-4 group w-full lg:w-auto">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,51,136,0.15)] group-hover:border-[#ff3388]/40 group-hover:shadow-[0_0_20px_rgba(255,51,136,0.3)] transition-all">
                 <Trophy className="text-[#ff3388]" size={22} />
               </div>
               <div>
                 <h3 className="text-white text-[26px] font-bold font-sans leading-none tracking-tight">5+</h3>
                 <p className="text-[#9693a5] text-[11px] font-normal tracking-wide mt-1.5">Years Experience</p>
               </div>
             </div>

             {/* Stat 4 */}
             <div className="flex items-center gap-4 group w-full lg:w-auto">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(160,51,255,0.15)] group-hover:border-[#a033ff]/40 group-hover:shadow-[0_0_20px_rgba(160,51,255,0.3)] transition-all">
                 <Star className="text-[#a033ff]" size={22} />
               </div>
               <div>
                 <h3 className="text-white text-[26px] font-bold font-sans leading-none tracking-tight">100%</h3>
                 <p className="text-[#9693a5] text-[11px] font-normal tracking-wide mt-1.5">Creative Dedication</p>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
