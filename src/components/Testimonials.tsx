import { useRef } from "react";
import { ChevronLeft, ChevronRight, Heart, Star, Quote, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const textReviews = [
  {
    id: 1,
    name: "Pooja Khatri",
    role: "Client",
    location: "Ahmedabad",
    text: "Sahil created 4–5 beautiful custom caricatures for our family, and every artwork felt so personal and full of emotion. I gifted them to my brothers on Raksha Bandhan, and everyone absolutely loved them! Amazing detailing, affordable pricing, and such a smooth experience. Highly recommended!",
  },
  {
    id: 2,
    name: "Happy Client",
    role: "Client",
    location: "Goa",
    text: "I got a caricature made for my wife, and Sahil delivered it incredibly fast without compromising on quality. The artwork looked creative, thoughtful, and beautifully made. Super quick service, great communication, and worth every penny!",
  },
  {
    id: 3,
    name: "Raj Hirve",
    role: "Client",
    location: "Indore",
    text: "Sahil made 3–4 custom sketches for me, and I genuinely loved the detailing and creativity in each piece. The work was delivered professionally and looked even better than expected. A talented artist who understands exactly what clients want!",
  },
  {
    id: 4,
    name: "Raj",
    role: "Client",
    location: "Pune",
    text: "Sahil created an amazing Crypto Habibi-style caricature for me, and the final artwork turned out even better than I imagined. The detailing, style, and creativity were spot on, giving it a unique and premium feel. Fast delivery, great communication, and truly impressive work!",
  },
  {
    id: 5,
    name: "Prakash Ratan",
    role: "Client from Spain",
    location: "Spain",
    text: "Sahil delivered 7-8 custom caricatures for our travel group, and every piece was full of life and creativity. His designs traveled with us across Europe — truly memorable work from a talented artist!",
  },
  {
    id: 6,
    name: "LFA Club Team",
    role: "Design & Media Department",
    location: "India",
    text: "Collaborating with Sahil on LFA's event posters, magazine layouts, and art campaigns has been inspiring. His innovative designs and strong sense of teamwork uplift the entire club's creative output.",
  },
  {
    id: 7,
    name: "Ashish Agrawal",
    role: "First Client - Nagpur",
    location: "India",
    text: "Sahil made my first handmade color pencil portrait so special! His precision, color sense, and quick delivery truly impressed me. I still have the artwork framed — a wonderful experience working with him.",
  }
];

// Duplicate the testimonials so Swiper has enough slides to infinite loop smoothly
const testimonials = [
  ...textReviews,
  ...textReviews.map(t => ({ ...t, id: t.id + 7 }))
];

function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#070512] py-20 sm:py-28 font-sans"
    >
      {/* Decorative Background Swirl */}
      <svg className="absolute top-[15%] left-0 w-[500px] h-[300px] opacity-70 pointer-events-none hidden md:block" viewBox="0 0 500 300" fill="none">
        <path d="M-50,200 C 100,280 250,50 350,100 C 450,150 450,250 300,250 C 100,250 150,50 250,20" stroke="url(#swirlGrad)" strokeWidth="1.5" className="drop-shadow-[0_0_8px_rgba(255,51,136,0.8)]" />
        <defs>
          <linearGradient id="swirlGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff3388" stopOpacity="0" />
            <stop offset="40%" stopColor="#ff3388" stopOpacity="1" />
            <stop offset="100%" stopColor="#9933ff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Sparkles */}
      <Star size={20} className="absolute top-[18%] left-[25%] text-[#ff3388] fill-[#ff3388] opacity-80 drop-shadow-[0_0_10px_#ff3388]" />
      <Star size={14} className="absolute top-[14%] right-[32%] text-[#ff3388] fill-[#ff3388] opacity-60 drop-shadow-[0_0_10px_#ff3388]" />
      <Star size={18} className="absolute top-[24%] right-[26%] text-[#ff3388] fill-[#ff3388] opacity-70 drop-shadow-[0_0_10px_#ff3388]" />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Auto Scrolling Gallery */}
      <div className="w-full overflow-hidden py-10 relative z-20 flex flex-col gap-6 bg-[#030108]/50">
        {/* Row 1 (Left) */}
        <div className="flex w-max animate-marquee-left gap-4 md:gap-6 pl-4 md:pl-6 hover:cursor-pointer">
          {[
            "/Assets/clients/0e24708d-e818-4ced-a6c4-b37ec94206ef.webp",
            "/Assets/clients/1.webp",
            "/Assets/clients/10.webp",
            "/Assets/clients/11.webp",
            "/Assets/clients/12.webp",
            "/Assets/clients/13.webp",
            "/Assets/clients/2.webp",
            "/Assets/clients/3.webp",
            "/Assets/clients/4.webp",
            "/Assets/clients/4ca5d0d9-a725-4f82-9752-6f8b1daea138.webp",
            "/Assets/clients/5.webp",
            "/Assets/clients/0e24708d-e818-4ced-a6c4-b37ec94206ef.webp",
            "/Assets/clients/1.webp",
            "/Assets/clients/10.webp",
            "/Assets/clients/11.webp",
            "/Assets/clients/12.webp",
            "/Assets/clients/13.webp",
            "/Assets/clients/2.webp",
            "/Assets/clients/3.webp",
            "/Assets/clients/4.webp",
            "/Assets/clients/4ca5d0d9-a725-4f82-9752-6f8b1daea138.webp",
            "/Assets/clients/5.webp",
          ].map((src, i) => (
            <img key={`r1-${i}`} src={src} alt="Client Art" className="h-[160px] md:h-[220px] lg:h-[260px] w-auto rounded-[16px] md:rounded-[24px] border border-[#ff3388]/40 shadow-[0_0_20px_rgba(255,51,136,0.15)] object-cover" draggable="false" loading="lazy" decoding="async" />
          ))}
        </div>
        
        {/* Row 2 (Right) */}
        <div className="flex w-max animate-marquee-right gap-4 md:gap-6 pr-4 md:pr-6 hover:cursor-pointer">
          {[
            "/Assets/clients/6.webp",
            "/Assets/clients/7.webp",
            "/Assets/clients/7ae44800-6dab-4064-bc1d-134d7c83fc92.webp",
            "/Assets/clients/8.webp",
            "/Assets/clients/9.webp",
            "/Assets/clients/IMG-20210206-WA0006.webp",
            "/Assets/clients/IMG-20210222-WA0010.webp",
            "/Assets/clients/IMG-20220411-WA0017.webp",
            "/Assets/clients/Screenshot_2023-02-25-19-48-36-05.webp",
            "/Assets/clients/d03caa06-e88c-48c7-bcc9-3f442068c786.webp",
            "/Assets/clients/s1.webp",
            "/Assets/clients/s2.webp",
            "/Assets/clients/6.webp",
            "/Assets/clients/7.webp",
            "/Assets/clients/7ae44800-6dab-4064-bc1d-134d7c83fc92.webp",
            "/Assets/clients/8.webp",
            "/Assets/clients/9.webp",
            "/Assets/clients/IMG-20210206-WA0006.webp",
            "/Assets/clients/IMG-20210222-WA0010.webp",
            "/Assets/clients/IMG-20220411-WA0017.webp",
            "/Assets/clients/Screenshot_2023-02-25-19-48-36-05.webp",
            "/Assets/clients/d03caa06-e88c-48c7-bcc9-3f442068c786.webp",
            "/Assets/clients/s1.webp",
            "/Assets/clients/s2.webp",
          ].map((src, i) => (
            <img key={`r2-${i}`} src={src} alt="Client Art" className="h-[160px] md:h-[220px] lg:h-[260px] w-auto rounded-[16px] md:rounded-[24px] border border-[#ff3388]/40 shadow-[0_0_20px_rgba(255,51,136,0.15)] object-cover" draggable="false" loading="lazy" decoding="async" />
          ))}
        </div>

        {/* Separator / Text */}
        <div className="w-full flex items-center justify-center gap-6 mt-8 mb-6 px-[10%] md:px-[20%]">
          <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent to-[#ff3388]/60 shadow-[0_0_10px_#ff3388]"></div>
          <div className="text-white/80 font-bold tracking-widest text-sm whitespace-nowrap flex items-center gap-2">
            <span className="text-[#a033ff] text-lg font-black tracking-tighter">∞</span> HAPPY CLIENTS
          </div>
          <div className="h-[1.5px] w-full bg-gradient-to-l from-transparent to-[#ff3388]/60 shadow-[0_0_10px_#ff3388]"></div>
        </div>
      </div>

      {/* Section container set to 1500px with 70px inline padding */}
      <div className="mx-auto w-full px-[20px] md:px-[70px] max-w-[1500px] relative mt-10">
        <div className="relative mx-auto max-w-4xl text-center z-10">
          
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff3388]/30 bg-[#2a133a]/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#ff3388] backdrop-blur-md">
            <Heart size={14} className="text-[#ff3388]" />
            CLIENT LOVE
          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[54px] tracking-wide">
            What My{" "}
            <span className="relative inline-block text-[#ff3388]">
              Clients Say
              <svg width="130%" height="26" viewBox="0 0 100 26" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute -bottom-[14px] -left-[5%] overflow-visible pointer-events-none">
                <path d="M 0 24 Q 45 16 98 16" stroke="url(#clientsGradient)" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <circle cx="98" cy="16" r="3" fill="#fff" filter="drop-shadow(0 0 5px #ff3388)" />
                <defs>
                  <linearGradient id="clientsGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ff3388" />
                    <stop offset="100%" stopColor="#ff3388" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-[#a09eab]">
            Over the years, I've had the privilege of working with amazing people and brands.<br className="hidden sm:block"/>
            Here's what they have to say about <span className="text-[#ff3388]">working with me</span>.
          </p>
        </div>

        {/* Auto Scrolling Text Reviews */}
        <div className="relative mt-12 w-full max-w-[1400px] mx-auto z-20 px-4 md:px-16">
          <Swiper
            className="text-review-slider w-full !pb-20 overflow-hidden"
            loop={true}
            centeredSlides={true}
            spaceBetween={24}
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-white/20 opacity-100',
              bulletActiveClass: '!bg-[#a855f7] !w-6 rounded-full transition-all duration-300',
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: true },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!h-auto">
                {({ isActive }) => (
                  <div className={`relative flex flex-col h-full w-full rounded-[16px] bg-[#0c0d1a] border transition-all duration-500 p-8 ${
                    isActive 
                      ? "border-[#a855f7] shadow-[0_0_25px_rgba(168,85,247,0.3)] opacity-100" 
                      : "border-white/5 opacity-50"
                  }`}>
                    
                    {/* Top: Quote and Stars */}
                    <div className="flex justify-between items-start mb-6">
                      <Quote size={28} className="text-[#a855f7] fill-[#a855f7] opacity-80" />
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={16} className="text-[#f59e0b] fill-[#f59e0b]" />
                        ))}
                      </div>
                    </div>

                    {/* Middle: Review Text */}
                    <p className="text-[14px] leading-[1.7] text-[#d1d5db] font-light mb-8 flex-grow">
                      {testimonial.text}
                    </p>

                    {/* Bottom: Separator & User Info */}
                    <div className="mt-auto">
                      <div className="h-[1px] w-full bg-white/5 mb-5"></div>
                      <div className="flex items-center gap-3">
                        <div className="w-[3px] h-12 bg-[#a855f7] rounded-full"></div>
                        <div>
                          <h3 className="text-[16px] font-bold text-white tracking-wide">{testimonial.name}</h3>
                          <p className="text-[13px] text-[#a855f7]">{testimonial.role}</p>
                          <div className="flex items-center gap-1 mt-1 text-white/50 text-[12px]">
                            <MapPin size={12} />
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom overlapping Quote Badge (only on active slide) */}
                    {isActive && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#a855f7] rounded-full flex items-center justify-center border-[4px] border-[#0c0d1a] shadow-[0_5px_15px_rgba(168,85,247,0.5)] z-20">
                        <Quote size={20} className="text-white fill-white" />
                      </div>
                    )}

                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 md:left-2 top-[45%] z-[60] flex h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0c0d1a] text-white transition-all duration-300 hover:border-[#a855f7] hover:bg-[#a855f7]/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            ref={nextRef}
            className="absolute right-0 md:right-2 top-[45%] z-[60] flex h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0c0d1a] text-white transition-all duration-300 hover:border-[#a855f7] hover:bg-[#a855f7]/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
          
          <style dangerouslySetInnerHTML={{__html: `
            .text-review-slider .swiper-pagination {
              bottom: 0px !important;
            }
          `}} />
        </div>

        {/* Footer Avatar Group */}
        <div className="mt-6 pb-10 flex flex-col items-center justify-center gap-4 text-center z-10 relative">
          <div className="flex items-center justify-center -space-x-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <img
                key={num}
                src={`/Assets/clients/${num}.webp`}
                alt={`Trusted client ${num}`}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-[3px] border-[#070512] object-cover relative"
                style={{ zIndex: 10 - num }}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/Assets/clients/1.webp";
                }}
              />
            ))}
            <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border-[3px] border-[#070512] bg-gradient-to-br from-[#ff3388] to-[#c040ff] text-[11px] sm:text-[13px] font-bold text-white shadow-[0_0_15px_rgba(255,51,136,0.5)] relative z-0">
              50+
            </div>
          </div>
          <p className="text-[14px] sm:text-[15px] font-medium text-[#a09eab]">
            Trusted by <span className="font-bold text-[#ff3388]">50+ amazing clients</span> across the world
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;

