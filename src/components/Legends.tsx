import { Star, X } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const featuredMoment = {
  name: "Emraan Hashmi",
  role: "Bollywood Actor",
  image: "/Celeb/Emran Hasmi.webp", 
  description:
    "It was a pleasure meeting and spending time with such a talented and humble soul. Truly unforgettable!",
};

const legends = [
  { id: 1, name: "Emraan Hashmi", role: "Bollywood Actor", image: "/Celeb/Emran Hasmi.webp" },
  { id: 2, name: "Wazid Hashmi", role: "Brother of Emraan Hashmi", image: "/Celeb/Wazid Emran Hasmi.webp" },
  { id: 3, name: "Art Fiber GlassArt", role: "Creative Fiber Sculpture Studio", image: "/Celeb/Art Fiber GlassArt.webp" },
  { id: 4, name: "Smit Pandya", role: "Gujarati Actor / Comedian", image: "/Celeb/Smit Padya.webp" },
  { id: 5, name: "Paul Artist", role: "Social Media Influencer & Artist", image: "/Celeb/Paul Artist.webp" },
  { id: 6, name: "Emraan Hashmi B'day", role: "Celebrity Birthday Event", image: "/Celeb/Emran Hasmi Birthday.webp" },
  { id: 7, name: "Vikram Vedha Trailer", role: "Movie Promotion Event", image: "/Celeb/Vikram Vedha Event.webp" },
  { id: 8, name: "The Great Khali", role: "WWE Legend", image: "/Celeb/Khali.webp" },
  { id: 9, name: "Sunil Vishrani", role: "Gujarati Actor", image: "/Celeb/sunil vishrani.webp" },
  { id: 10, name: "Yash Soni", role: "Gujarati Film Actor", image: "/Celeb/yash soni.webp" },
  { id: 11, name: "3 ekka Event", role: "Gujarati Movie Cast", image: "/Celeb/3 ekka couple.webp" },
  { id: 12, name: "Mitra Gadhvi", role: "Gujarati Actor", image: "/Celeb/mitra ghadhvi.webp" },
  { id: 13, name: "Vishal Solanki", role: "TV Serial Actor", image: "/Celeb/vishal solanki.webp" },
  { id: 15, name: "Mansi Parekh", role: "Gujarati & Bollywood Actress", image: "/Celeb/MANSI PAREKH.webp" },
  { id: 16, name: "Chetan Dhanani", role: "Gujarati Actor", image: "/Celeb/CHETAN DHANANI.webp" },
  { id: 17, name: "Paresh Rawal", role: "Bollywood Veteran Actor", image: "/Celeb/PARESH RAWAL.webp" },
  { id: 18, name: "Moin Qureshi", role: "Gujarati TV Serial Actor", image: "/Celeb/moin qureshi.webp" },
  { id: 19, name: "Dhvanit Thaker", role: "Actor and Singer", image: "/Celeb/dhvanit thaker.webp" },
  { id: 20, name: "Deepak Bhurani", role: "Movie Critic", image: "/Celeb/deepak bhurani.webp" },
  { id: 14, name: "Yukti Randeria", role: "Gujarati Actress", image: "/Celeb/yukti randeria.webp" },
];

function Legends() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section 
      id="legends" 
      className="relative w-full py-16 lg:py-20 overflow-hidden"
      style={{
        background: `radial-gradient(circle at top center, rgba(170,0,255,0.12), transparent 40%), linear-gradient(to bottom, #040816, #05091f, #02040f)`
      }}
    >
      {/* Huge Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[12vw] font-black text-white/[0.02] tracking-widest leading-none">
          LEGENDS
        </h1>
      </div>

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 space-y-3 lg:space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[#9933ff]"></div>
            <div className="flex items-center gap-2 text-[#a033ff] text-xs md:text-sm font-bold tracking-widest uppercase">
              <Star size={14} className="fill-[#a033ff]" />
              Special Memories
            </div>
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#9933ff]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight">
            Moments With{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#a033ff] to-[#ff3388]">
              Legends
              <svg width="130%" height="26" viewBox="0 0 100 26" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute -bottom-[14px] -left-[5%] overflow-visible pointer-events-none">
                <path d="M 0 24 Q 45 16 98 16" stroke="url(#legendsGradient)" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <circle cx="98" cy="16" r="3" fill="#fff" filter="drop-shadow(0 0 5px #ff3388)" />
                <defs>
                  <linearGradient id="legendsGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a033ff" />
                    <stop offset="100%" stopColor="#ff3388" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl font-light">
            Grateful for the amazing personalities I’ve met and the memories I’ll always cherish.
          </p>
        </div>

        {/* Featured Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16">
          {/* Left: Image Card */}
          <div className="w-full lg:w-3/5 group">
            <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] rounded-[24px] lg:rounded-[28px] overflow-hidden border border-white/5 shadow-[0_0_25px_rgba(180,0,255,0.18),0_0_60px_rgba(120,0,255,0.12)] transition-transform duration-700 hover:scale-[1.02]">
              {/* Blurred Background */}
              <img 
                src={featuredMoment.image} 
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110 pointer-events-none"
                aria-hidden="true"
              />
              {/* Foreground Image */}
              <img 
                src={featuredMoment.image} 
                alt={featuredMoment.name}
                className="relative w-full h-full object-contain filter brightness-[1.03] contrast-[1.05] saturate-[1.05] z-10"
                loading="lazy"
                decoding="async"
                onClick={() => setSelectedImage(featuredMoment.image)}
                style={{ cursor: 'pointer' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#a033ff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
              {/* Purple glow bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#a033ff] to-transparent opacity-50 z-20"></div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <span className="text-[#a033ff] text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-4">
              FEATURED MOMENT
              <div className="h-[1px] w-12 bg-[#a033ff]/40"></div>
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {featuredMoment.name}
            </h3>
            <span className="text-base lg:text-lg text-neutral-400 mb-6">
              {featuredMoment.role}
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-[#ff3388] to-transparent mb-6 lg:mb-8"></div>
            <p className="text-neutral-300 text-base lg:text-lg leading-relaxed font-light italic">
              "{featuredMoment.description}"
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full">
          
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.2}
            spaceBetween={24}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={true}
            grabCursor={true}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              }
            }}
            className="legends-slider !overflow-visible"
          >
            {legends.map((legend) => (
              <SwiperSlide key={legend.id}>
                <div 
                  onClick={() => setSelectedImage(legend.image)}
                  className="group relative w-full h-[300px] lg:h-[320px] max-w-[260px] mx-auto rounded-[20px] overflow-hidden bg-[#0a0a16]/80 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(170,0,255,0.2)] cursor-pointer"
                >
                  <div className="h-[65%] w-full overflow-hidden relative">
                    {/* Blurred background image */}
                    <img 
                      src={legend.image} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-40 scale-110"
                      aria-hidden="true"
                    />
                    {/* Foreground image */}
                    <img 
                      src={legend.image} 
                      alt={legend.name} 
                      className="relative w-full h-full object-contain filter brightness-[1.03] contrast-[1.05] saturate-[1.05] transition-transform duration-700 group-hover:scale-105 z-10"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="h-[35%] w-full flex flex-col justify-center p-4 lg:p-5 relative z-10">
                    <h4 className="text-white text-base lg:text-lg font-bold mb-1">{legend.name}</h4>
                    <span className="text-neutral-400 text-xs lg:text-sm font-light">{legend.role}</span>
                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-5 w-0 h-[2px] bg-gradient-to-r from-[#a033ff] to-[#ff3388] transition-all duration-500 group-hover:w-[40px]"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>



        </div>
      </div>
      
      {/* Global overrides for Swiper continuous marquee scroll */}
      <style>{`
        .legends-slider .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Legends;
