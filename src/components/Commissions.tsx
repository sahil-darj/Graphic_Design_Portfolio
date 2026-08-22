import { Palette, Brush, Image, MessageCircle } from "lucide-react";

interface CommissionsProps {
  scrollToContact: () => void;
}

function Commissions({ scrollToContact }: CommissionsProps) {
  return (
    <>
      <style>{`
        .comm-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 50px;
          position: relative;
          z-index: 5;
        }
        @media (max-width: 768px) {
          .comm-grid {
            grid-template-columns: 1fr;
          }
        }
        .comm-card {
          background: #0f0f11;
          border-radius: 16px;
          padding: 30px 24px;
          position: relative;
          display: flex;
          align-items: center;
          gap: 24px;
          transition: transform 0.3s;
          border: 1px solid rgba(255,255,255,0.03);
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .comm-card:hover {
          transform: translateY(-2px);
        }
        /* Gradient bottom glow border */
        .comm-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px; /* border thickness */
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.9;
        }
        .card-yellow::before { background: radial-gradient(130% 100% at 50% 100%, rgba(251,191,36,0.6) 0%, rgba(251,191,36,0) 60%); }
        .card-pink::before { background: radial-gradient(130% 100% at 50% 100%, rgba(244,114,182,0.6) 0%, rgba(244,114,182,0) 60%); }
        .card-blue::before { background: radial-gradient(130% 100% at 50% 100%, rgba(96,165,250,0.6) 0%, rgba(96,165,250,0) 60%); }
        .card-green::before { background: radial-gradient(130% 100% at 50% 100%, rgba(74,222,128,0.6) 0%, rgba(74,222,128,0) 60%); }
        
        .comm-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(255,255,255,0.03);
        }
        .bg-create {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 16vw;
          font-weight: 900;
          color: rgba(255,255,255,0.015);
          pointer-events: none;
          letter-spacing: 0.1em;
          white-space: nowrap;
          z-index: 0;
        }
        .bg-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(168,85,247,0.05) 1px, transparent 1px);
          background-size: 38px 38px;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
      <section
        id="commissions"
        style={{
          background: "linear-gradient(180deg, #09090f 0%, #0c0814 50%, #09090f 100%)",
          padding: "100px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left Graphics - Dot Grid */}
        <div style={{ position: "absolute", top: "15%", left: "40px", opacity: 0.12, zIndex: 1, pointerEvents: "none" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={`dotL-${i}`} style={{ width: "3px", height: "3px", background: "#fff", borderRadius: "50%" }} />
            ))}
          </div>
        </div>

        {/* Right Graphics - Dot Grid */}
        <div style={{ position: "absolute", top: "10%", right: "40px", opacity: 0.12, zIndex: 1, pointerEvents: "none" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={`dotR-${i}`} style={{ width: "3px", height: "3px", background: "#fff", borderRadius: "50%" }} />
            ))}
          </div>
        </div>

        <div className="bg-dots" />
        {/* Huge background text */}
        <div className="bg-create">CREATE</div>

        {/* Left Graphic - Pen Tool Wireframe Detailed */}
        <div style={{ position: "absolute", top: "100px", left: "60px", opacity: 0.35, zIndex: 1, pointerEvents: "none" }}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            {/* Base nib shape */}
            <path d="M70 110 L100 110 L120 160 L85 190 L50 160 Z" stroke="#a855f7" strokeWidth="1.5" />
            <path d="M70 110 L50 60 L120 60 L100 110 Z" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Split line */}
            <line x1="85" y1="140" x2="85" y2="190" stroke="#a855f7" strokeWidth="1.5" />
            <circle cx="85" cy="140" r="3" fill="#000" stroke="#a855f7" strokeWidth="1.5" />
            {/* Upper nodes */}
            <rect x="67" y="107" width="6" height="6" fill="#000" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="97" y="107" width="6" height="6" fill="#000" stroke="#a855f7" strokeWidth="1.5" />
            {/* Bezier curves shooting out */}
            <path d="M40 90 C 50 100, 60 110, 70 110" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M130 90 C 120 100, 110 110, 100 110" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Node boxes on end of bezier */}
            <rect x="37" y="87" width="6" height="6" fill="#000" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="127" y="87" width="6" height="6" fill="#000" stroke="#a855f7" strokeWidth="1.5" />
            {/* Curving lines going way out left */}
            <path d="M37 90 C 15 80, 15 50, 45 40" stroke="#a855f7" strokeWidth="1" />
            <rect x="43" y="37" width="6" height="6" fill="#000" stroke="#a855f7" strokeWidth="1.5" />
            {/* Extra bezier handles */}
            <circle cx="20" cy="65" r="3" fill="none" stroke="#a855f7" strokeWidth="1" />
            <line x1="20" y1="65" x2="35" y2="87" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Right Graphic - Tablet Wireframe */}
        <div style={{ position: "absolute", top: "120px", right: "10px", opacity: 0.15, zIndex: 1 }}>
          <svg width="240" height="200" viewBox="0 0 240 200" fill="none" style={{ transform: "rotate(15deg)" }}>
            <rect x="20" y="20" width="180" height="120" rx="10" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="30" y="30" width="120" height="100" stroke="#a855f7" strokeWidth="1.5" />
            <circle cx="170" cy="50" r="8" stroke="#a855f7" strokeWidth="1.5" />
            <circle cx="170" cy="70" r="8" stroke="#a855f7" strokeWidth="1.5" />
            <line x1="200" y1="180" x2="230" y2="40" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 10 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "40px", position: "relative" }}>
            <h2
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                fontWeight: 800,
                margin: "0 0 14px",
                letterSpacing: "-1px",
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              Commission{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span
                  style={{
                    background: "linear-gradient(90deg,#a855f7,#f472b6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Work
                </span>
                {/* swoosh underline with glowing dot */}
                <svg
                  width="130%"
                  height="26"
                  viewBox="0 0 100 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    bottom: "-14px",
                    left: "-5%",
                    overflow: "visible",
                    pointerEvents: "none",
                  }}
                >
                  <path
                    d="M 0 24 Q 45 16 98 16"
                    stroke="url(#commGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="98" cy="16" r="3" fill="#fff" filter="drop-shadow(0 0 5px #f472b6)" />
                  <defs>
                    <linearGradient id="commGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            {/* Center glowing spark below text */}
            <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="#c084fc" filter="drop-shadow(0 0 8px #a855f7)" />
              </svg>
            </div>

            <p style={{ color: "#9ca3af", fontSize: "1.1rem", margin: "0 auto", maxWidth: "400px", lineHeight: 1.6 }}>
              Want a personalized artwork or digital design?<br />
              Let's collaborate and bring your vision to life.
            </p>
            <button 
              onClick={scrollToContact}
              style={{
                marginTop: "20px",
                padding: "10px 24px",
                borderRadius: "9999px",
                background: "linear-gradient(90deg, #a855f7, #ec4899)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(168, 85, 247, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.4)";
              }}
            >
              Book a Commission
            </button>
          </div>

          {/* Cards */}
          <div className="comm-grid">
            {/* Custom Portraits */}
            <div className="comm-card card-yellow">
              <div className="comm-icon-box">
                <Palette size={26} color="#fbbf24" strokeWidth={2} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>Custom Portraits</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>
                  Personalized oil, pencil, or digital portraits that capture emotion and detail.
                </p>
              </div>
            </div>

            {/* Caricatures */}
            <div className="comm-card card-pink">
              <div className="comm-icon-box">
                <Brush size={26} color="#f472b6" strokeWidth={2} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>Caricatures</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>
                  Playful and expressive caricature art — great for gifts and celebrations.
                </p>
              </div>
            </div>

            {/* Digital Illustrations */}
            <div className="comm-card card-blue">
              <div className="comm-icon-box">
                <Image size={26} color="#60a5fa" strokeWidth={2} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>Digital Illustrations</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>
                  Modern digital artwork crafted for personal, commercial, or social media use.
                </p>
              </div>
            </div>

            {/* Collaborations */}
            <div className="comm-card card-green">
              <div className="comm-icon-box">
                <MessageCircle size={26} color="#4ade80" strokeWidth={2} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>Collaborations</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>
                  Magazine designs, posters, branding, and creative partnerships.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Commissions;
