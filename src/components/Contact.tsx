import { useRef, useState } from "react";
import { Mail, Instagram, Linkedin, Send, User, MessageSquare, PenLine } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSending(true);
    emailjs
      .sendForm(
        "service_is4t7ho",
        "template_g9u7nr3",
        form.current,
        "kK9XlVwZzwONRwPoX"
      )
      .then(
        () => {
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
          color: #a855f7;
          font-weight: 800;
        }
        .contact-input {
          width: 100%;
          padding: 11px 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
          box-sizing: border-box;
          font-family: inherit;
          transition: border-color 0.2s, background 0.2s;
        }
        .contact-input::placeholder { color: #4b5563; }
        .contact-input:focus {
          border-color: rgba(168,85,247,0.55);
          background: rgba(168,85,247,0.07);
        }
        .contact-link-row {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.2s;
        }
        .contact-link-row:hover { opacity: 0.85; }
        .contact-link-row:hover .ci-icon { transform: scale(1.07); }
        .ci-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .send-btn {
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(90deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          letter-spacing: 0.3px;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .send-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(168,85,247,0.45);
        }
        .send-btn:active:not(:disabled) { transform: translateY(0); }
        .send-btn:disabled {
          background: rgba(168,85,247,0.3);
          cursor: not-allowed;
        }
        .contact-card {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(168,85,247,0.22);
          border-radius: 18px;
          padding: 30px 26px;
          backdrop-filter: blur(12px);
          height: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        /* Right form card: gradient border purple → gold */
        .contact-card-form-wrap {
          border-radius: 18px;
          padding: 1px;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #f59e0b 100%);
          position: relative;
          height: 100%;
          display: flex;
          box-sizing: border-box;
        }
        .contact-card-form-inner {
          background: #0f0a1a;
          border-radius: 17px;
          padding: 30px 26px;
          backdrop-filter: blur(12px);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-section { padding: 60px 0 40px !important; }
        }
        @media (max-width: 480px) {
          .contact-heading { font-size: 2.2rem !important; }
        }
      `}</style>

      <section
        id="contact"
        className="contact-section"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(90,30,140,0.18) 0%, transparent 65%), linear-gradient(180deg,#09090f 0%,#0c0814 50%,#09090f 100%)",
          padding: "90px 0 70px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ToastContainer />

        {/* Star-dot background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(168,85,247,0.07) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            pointerEvents: "none",
          }}
        />

        {/* ── Paper plane – top left ── */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            top: "60px",
            left: "clamp(10px, 5vw, 60px)",
            opacity: 0.9,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 4px rgba(168,85,247,0.3))",
          }}
        >
          <svg width="220" height="160" viewBox="0 0 220 160" fill="none">
            <defs>
              <linearGradient id="trailGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
                <stop offset="40%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Long wavy dashed trail matching screenshot */}
            <path
              d="M 20 150 C 70 120, 50 80, 100 90 C 130 95, 140 85, 150 70"
              stroke="url(#trailGrad)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Plane Body */}
            <g transform="translate(135, 15) rotate(10)">
              {/* Main Body */}
              <path
                d="M 2 40 L 65 5 L 45 60 L 25 45 Z"
                stroke="#c084fc"
                strokeWidth="2.5"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Back wing flap */}
              <path
                d="M 25 45 L 20 62 L 35 52 L 25 45 Z"
                stroke="#c084fc"
                strokeWidth="2.5"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Center crease */}
              <line x1="25" y1="45" x2="65" y2="5" stroke="#c084fc" strokeWidth="2" />
            </g>
          </svg>
        </div>

        {/* ── Sparks – top right ── */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            top: "60px",
            right: "clamp(20px, 7vw, 90px)",
            opacity: 0.85,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 3px rgba(168,85,247,0.5))",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <g stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Top left spark */}
              <path d="M 22 28 L 30 12 L 28 12 L 20 28 Z" />
              {/* Middle right spark */}
              <path d="M 28 35 L 48 22 L 46 20 L 26 33 Z" />
              {/* Bottom right spark */}
              <path d="M 33 45 L 50 40 L 50 38 L 33 43 Z" />
            </g>
          </svg>
        </div>

        {/* ── Content wrapper ── */}
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Heading ── */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <h2
              className="contact-heading"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 3.9rem)",
                fontWeight: 800,
                margin: "0 0 14px",
                letterSpacing: "-1px",
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              Get In{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                {/* gradient text */}
                <span
                  style={{
                    background: "linear-gradient(90deg,#a855f7,#ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Touch
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
                  {/* The curved line */}
                  <path
                    d="M 0 24 Q 45 16 98 16"
                    stroke="url(#touchGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* The glowing dot */}
                  <circle cx="98" cy="16" r="3" fill="#fff" filter="drop-shadow(0 0 5px #f472b6)" />
                  <defs>
                    <linearGradient id="touchGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p style={{ color: "#9ca3af", fontSize: "1.05rem", margin: "0" }}>
              Have a project in mind? Let's{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#a855f7,#f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                create something amazing
              </span>{" "}
              together
            </p>
          </div>

          {/* ── Two-column grid ── */}
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              gap: "22px",
              alignItems: "stretch",
            }}
          >
            {/* ════════════ LEFT CARD ════════════ */}
            <div className="contact-card">
              {/* Header */}
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 8px",
                }}
              >
                Contact{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg,#a855f7,#ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Information
                </span>
              </h3>
              {/* Purple accent bar */}
              <div
                style={{
                  width: "34px",
                  height: "3px",
                  background: "linear-gradient(90deg,#a855f7,#ec4899)",
                  borderRadius: "2px",
                  marginBottom: "26px",
                }}
              />

              {/* Social rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {/* Email */}
                <a href="mailto:shaan7art@gmail.com" className="contact-link-row">
                  <div
                    className="ci-icon"
                    style={{ background: "linear-gradient(135deg,#6d28d9,#a855f7)" }}
                  >
                    <Mail size={19} color="#fff" />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>Email</p>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#e5e7eb", fontWeight: 500 }}>
                      shaan7art@gmail.com
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/shaan_7art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <div
                    className="ci-icon"
                    style={{ background: "linear-gradient(135deg,#6d28d9,#a855f7)" }}
                  >
                    <Instagram size={19} color="#fff" />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>Instagram</p>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#e5e7eb", fontWeight: 500 }}>
                      @shaan_7art
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sahil-darji-30a609313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <div
                    className="ci-icon"
                    style={{ background: "linear-gradient(135deg,#1e40af,#3b82f6)" }}
                  >
                    <Linkedin size={19} color="#fff" />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>LinkedIn</p>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#e5e7eb", fontWeight: 500 }}>
                      Sahil Darji
                    </p>
                  </div>
                </a>
              </div>

              {/* Quote box */}
              <div
                style={{
                  marginTop: "auto",
                  padding: "18px 18px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontSize: "2.8rem",
                    color: "rgba(168,85,247,0.35)",
                    lineHeight: 1,
                    fontFamily: "Georgia,serif",
                    position: "absolute",
                    top: "6px",
                    left: "14px",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  "
                </span>
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    margin: "18px 0 12px",
                  }}
                >
                  Whether you're interested in a custom artwork, digital design, or
                  collaboration, I'd love to hear from you. Let's discuss how we can bring
                  your{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg,#a855f7,#ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    creative vision
                  </span>{" "}
                  to life!
                </p>
                <div
                  style={{
                    width: "30px",
                    height: "2px",
                    background: "linear-gradient(90deg,#a855f7,#ec4899)",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>

            {/* ════════════ RIGHT CARD (Form) ════════════ */}
            <div className="contact-card-form-wrap">
              <div className="contact-card-form-inner">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  aria-label="Contact Form"
                  style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                >
                  {/* Name */}
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ color: "#6b7280", paddingTop: "27px", width: "20px", flexShrink: 0, display: "flex", justifyContent: "center" }}>
                      <User size={17} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label
                        htmlFor="user_name"
                        style={{ display: "block", fontSize: "0.83rem", color: "#d1d5db", marginBottom: "5px" }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        required
                        placeholder="Your name"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ color: "#6b7280", paddingTop: "27px", width: "20px", flexShrink: 0, display: "flex", justifyContent: "center" }}>
                      <Mail size={17} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label
                        htmlFor="user_email"
                        style={{ display: "block", fontSize: "0.83rem", color: "#d1d5db", marginBottom: "5px" }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        required
                        placeholder="your@email.com"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ color: "#6b7280", paddingTop: "27px", width: "20px", flexShrink: 0, display: "flex", justifyContent: "center" }}>
                      <PenLine size={17} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label
                        htmlFor="user_subject"
                        style={{ display: "block", fontSize: "0.83rem", color: "#d1d5db", marginBottom: "5px" }}
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="user_subject"
                        name="user_subject"
                        required
                        placeholder="Project Subject"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ color: "#6b7280", paddingTop: "27px", width: "20px", flexShrink: 0, display: "flex", justifyContent: "center" }}>
                      <MessageSquare size={17} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label
                        htmlFor="message"
                        style={{ display: "block", fontSize: "0.83rem", color: "#d1d5db", marginBottom: "5px" }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell me about your project..."
                        className="contact-input"
                        style={{ resize: "vertical" }}
                      />
                    </div>
                  </div>

                  {/* Send button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    aria-label="Send Contact Message"
                    className="send-btn"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                    <Send size={17} />
                  </button>
                </form>
              </div>  {/* contact-card-form-inner */}
            </div>   {/* contact-card-form-wrap */}


          </div> {/* grid */}

          {/* ── Signature Divider (Full Width) ── */}
          <div
            style={{
              marginTop: "52px",
              display: "flex",
              alignItems: "center",
              gap: "0",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Purple dot */}
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#a855f7",
                flexShrink: 0,
                boxShadow: "0 0 8px rgba(168,85,247,0.8)",
              }}
            />
            {/* Left line */}
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "linear-gradient(90deg, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0.15) 100%)",
              }}
            />
            {/* Cursive signature text with underline swoop */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <span
                style={{
                  fontFamily: "'Dancing Script', 'Pacifico', cursive",
                  fontSize: "1.8rem",
                  color: "rgba(168,85,247,0.8)",
                  letterSpacing: "0.5px",
                  padding: "0 22px",
                  whiteSpace: "nowrap",
                  fontWeight: 600,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Sahil Darji
              </span>
              {/* Swoop underline */}
              <svg
                width="100%"
                height="12"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "14%",
                  width: "80%",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              >
                <path
                  d="M 5 8 Q 50 2 95 10"
                  stroke="rgba(168,85,247,0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            {/* Right line */}
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "linear-gradient(90deg, rgba(168,85,247,0.15) 0%, transparent 100%)",
              }}
            />
          </div>

        </div>   {/* content wrapper */}
      </section>
    </>
  );
}

export default Contact;
