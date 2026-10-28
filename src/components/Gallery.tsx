import { useState, useRef, useEffect, useCallback } from "react";
import {
  X, ChevronDown, Download, ExternalLink, FileText, ZoomIn
} from "lucide-react";

/* ─────────────────────────── interfaces ─────────────────────────── */
interface Artwork {
  id: number;
  title: string;
  category: string;
  medium: string;
  description: string;
  image: string;
}

interface Brochure {
  id: number;
  title: string;
  subtitle: string;
  file: string;
  color: string;         // kept for badge accent
  accentFrom: string;    // tailwind gradient start
  accentTo: string;      // tailwind gradient end
  cover: string;
}

/* ─────────────────────────── brochure data ──────────────────────── */
const brochures: Brochure[] = [
  { id: 5,  title: "SweetVerse",        subtitle: "Brand Brochure",             file: "/Assets/Brochure/SweetVerse  Brochure.pdf",                               color: "from-orange-500 to-amber-600",   accentFrom: "#f97316", accentTo: "#d97706", cover: "/Assets/Brochure/cover_SweetVerse  Brochure.pdf.jpg" },
  { id: 8,  title: "VIT Brochure",      subtitle: "Institute Brochure",          file: "/Assets/Brochure/VIT Brochure (1).pdf",                                   color: "from-red-600 to-rose-800",       accentFrom: "#dc2626", accentTo: "#9f1239", cover: "/Assets/Brochure/cover_VIT Brochure (1).pdf.jpg" },
  { id: 6,  title: "Vibrant India 2026",subtitle: "Exhibition Brochure",         file: "/Assets/Brochure/Vibrant_India_2026_Exhibition_Brochure (2).pdf",         color: "from-[#a033ff] to-[#ff3388]",   accentFrom: "#a033ff", accentTo: "#ff3388", cover: "/Assets/Brochure/cover_Vibrant_India_2026_Exhibition_Brochure (2).pdf.jpg" },
  { id: 7,  title: "Vibrant India 2026",subtitle: "Stainless Steel Conference",  file: "/Assets/Brochure/Vibrant_India_2026_Stainless_Steel_Conference (1).pdf",  color: "from-slate-500 to-zinc-700",     accentFrom: "#64748b", accentTo: "#3f3f46", cover: "/Assets/Brochure/cover_Vibrant_India_2026_Stainless_Steel_Conference (1).pdf.jpg" },
  { id: 10, title: "Brand Expo 2026",   subtitle: "Exhibition Brochure",         file: "/Assets/Vibrant new/Brochure/BRAND EXPO BROCHURE (1).pdf",                color: "from-blue-600 to-indigo-800",    accentFrom: "#2563eb", accentTo: "#3730a3", cover: "/Assets/Vibrant new/Brochure/cover_BRAND EXPO BROCHURE (1).pdf.jpg" },
  { id: 11, title: "Stainless Steel Expo", subtitle: "Official Brochure",        file: "/Assets/Vibrant new/Brochure/Stainless Steel Brochuree.pdf",              color: "from-cyan-600 to-blue-700",      accentFrom: "#0891b2", accentTo: "#1d4ed8", cover: "/Assets/Vibrant new/Brochure/cover_Stainless Steel Brochuree.pdf.jpg" },
  { id: 9,  title: "Website Development",subtitle: "Services Brochure",         file: "/Assets/Brochure/Website Development (1).pdf",                            color: "from-indigo-600 to-blue-800",    accentFrom: "#4f46e5", accentTo: "#1e40af", cover: "/Assets/Brochure/cover_Website Development (1).pdf.jpg" },
  { id: 1,  title: "Catalog Design",    subtitle: "& Product Photography",       file: "/Assets/Brochure/CATALOG DESIGN & PRODUCT PHOTOGRAPHY (1).pdf",           color: "from-violet-600 to-purple-800",  accentFrom: "#7c3aed", accentTo: "#6b21a8", cover: "/Assets/Brochure/cover_CATALOG DESIGN & PRODUCT PHOTOGRAPHY (1).pdf.jpg" },
  { id: 2,  title: "Mobile App",        subtitle: "Development",                 file: "/Assets/Brochure/Mobile App Development (1).pdf",                         color: "from-blue-600 to-cyan-700",      accentFrom: "#2563eb", accentTo: "#0e7490", cover: "/Assets/Brochure/cover_Mobile App Development (1).pdf.jpg" },
  { id: 3,  title: "Other Services",    subtitle: "Portfolio",                   file: "/Assets/Brochure/Other Services  (1).pdf",                                color: "from-emerald-600 to-teal-700",   accentFrom: "#059669", accentTo: "#0f766e", cover: "/Assets/Brochure/cover_Other Services  (1).pdf.jpg" },
  { id: 4,  title: "Social Media Mgmt", subtitle: "& Digital Marketing",         file: "/Assets/Brochure/Social Media Management & Digital Marketing (1).pdf",    color: "from-pink-600 to-rose-700",      accentFrom: "#db2777", accentTo: "#be123c", cover: "/Assets/Brochure/cover_Social Media Management & Digital Marketing (1).pdf.jpg" },
];

/* ─────────────────────────── category config ────────────────────── */

// Granular old category → broad display label
const CATEGORY_MAP: Record<string, string> = {
  socialmedia: "Social Media",
  group:       "LFA Club Projects",
  vibrant:     "Vibrant India",
  certificate: "Certificates",
  Logo:        "Branding & Logos",
  brochure:    "Brochures",
  stencil:     "Stencil",
  handmade:    "Handmade Art",
  celebrity:   "Celebrity Portraits",
  caricature:  "Caricatures",
  oilpainting: "Digital Oil Painting",
  UIUX:        "UI/UX Design",
  digital:     "Order Works",
};

const DROPDOWN_CATEGORIES = [
  { id: "Logo",        label: "Branding & Logos" },
  { id: "digital",     label: "Order Works / Commissions" },
  { id: "UIUX",        label: "UI/UX Design" },
  { id: "handmade",    label: "Handmade Art" },
  { id: "celebrity",   label: "Celebrity Portraits" },
  { id: "caricature",  label: "Caricatures" },
  { id: "oilpainting", label: "Digital Oil Painting" },
  { id: "stencil",     label: "Stencil" },
  { id: "brochure",    label: "Brochures" },
  { id: "certificate", label: "Certificates" },
];

/* cells that need a light background because the artwork is transparent */
const TRANSPARENT_CELEBS = new Set([
  "/Assets/celeb/4 ravi kishan.webp",
  "/Assets/celeb/6 anand mahindra digital artwork.webp",
  "/Assets/celeb/8 vivek ranjan digital art.webp",
]);

/* ═══════════════════════════ MAIN COMPONENT ════════════════════════ */
function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [lightboxImage, setLightboxImage]   = useState<Artwork | null>(null);
  const [activePdf, setActivePdf]           = useState<Brochure | null>(null);
  const [visibleCount, setVisibleCount]     = useState(18);

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* close dropdown on outside click */
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  /* ESC closes modals */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setLightboxImage(null);
        setActivePdf(null);
        setDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const selectCategory = useCallback((id: string) => {
    setActiveCategory(id);
    setVisibleCount(18);
    setDropdownOpen(false);
  }, []);

  /* label helper */
  const activeLabel =
    activeCategory === "all" ? "All Work"
    : activeCategory === "socialmedia" ? "Social Media"
    : activeCategory === "group" ? "LFA Club Projects"
    : activeCategory === "vibrant" ? "Vibrant India"
    : activeCategory === "print" ? "Print & Editorial"
    : DROPDOWN_CATEGORIES.find(d => d.id === activeCategory)?.label ?? "All Work";

  const isMoreActive = DROPDOWN_CATEGORIES.some(d => d.id === activeCategory);

  /* ─────── artwork data ──────────────────────────────────────────── */
  const artworks: Artwork[] = [
  // ── Vibrant India Posts (1, 2, 3, 4, 5 first!) ──
  { "id": 601, "title": "Brand Expo Post 1",         "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/1.jpg" },
  { "id": 602, "title": "Brand Expo Post 2",         "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/2.jpg" },
  { "id": 603, "title": "Brand Expo Post 3",         "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/3.jpg" },
  { "id": 604, "title": "Brand Expo Post 4",         "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/4.jpg" },
  { "id": 605, "title": "Brand Expo Post 5",         "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/5.webp" },
  { "id": 606, "title": "Brand Expo Post",           "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/Brand Expo post 1.jpg" },
  { "id": 607, "title": "Brand Expo Post",           "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/Brand Expo post 2.jpg" },
  { "id": 608, "title": "Brand Expo Post",           "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/Brand Expo post 3.jpg" },
  { "id": 609, "title": "Brand Expo Post",           "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/Brand Expo post 4.jpg" },
  { "id": 610, "title": "Brand Expo Post",           "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/Brand Expo post 9.jpg" },
  { "id": 611, "title": "Brand Expo Post",           "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/Brand Expo post 11.jpg" },
  { "id": 612, "title": "Brand Expo 9-10",           "category": "vibrant", "medium": "Brand Expo Exhibition",    "description": "Vibrant India Brand Expo official post.", "image": "/Assets/Vibrant new/Brand Expo 9-10.webp" },
  { "id": 613, "title": "Brand Expo Visitor Banner", "category": "vibrant", "medium": "Exhibition Banner",       "description": "Vibrant India Brand Expo visitor guide banner.", "image": "/Assets/Vibrant new/brand expo visitor.webp" },
  { "id": 614, "title": "Navratri Festive Post",     "category": "vibrant", "medium": "Festival Greeting",        "description": "Vibrant India festive greeting post.", "image": "/Assets/Vibrant new/navratri2.webp" },
  { "id": 615, "title": "Social Media 14-10",        "category": "vibrant", "medium": "Social Media Post",        "description": "Vibrant India official social post.", "image": "/Assets/Vibrant new/Social media 14-10.jpg" },
  { "id": 616, "title": "Stainless Steel Post 2",    "category": "vibrant", "medium": "Conference & Expo Post",   "description": "Vibrant India Stainless Steel post.", "image": "/Assets/Vibrant new/Stainless steel 2.jpg" },
  { "id": 617, "title": "Stainless Steel Post 8-10", "category": "vibrant", "medium": "Conference & Expo Post",   "description": "Vibrant India Stainless Steel post.", "image": "/Assets/Vibrant new/Stainless Steel Post 8-10.jpg" },
  { "id": 501, "title": "KP Industries",             "category": "vibrant", "medium": "Magazine & Exhibition",    "description": "Vibrant India B2B Exhibition & Magazine design.", "image": "/Assets/Vibrant India/KP Industries.png" },
  { "id": 502, "title": "Meta Foils",                "category": "vibrant", "medium": "Magazine & Exhibition",    "description": "Vibrant India B2B Exhibition & Magazine design.", "image": "/Assets/Vibrant India/META FOILS.png" },
  { "id": 503, "title": "Roop Alloys",               "category": "vibrant", "medium": "Magazine & Exhibition",    "description": "Vibrant India B2B Exhibition & Magazine design.", "image": "/Assets/Vibrant India/Roop Alloys.png" },
  { "id": 504, "title": "Shree Shyam",               "category": "vibrant", "medium": "Magazine & Exhibition",    "description": "Vibrant India B2B Exhibition & Magazine design.", "image": "/Assets/Vibrant India/SHREE SHYAM.png" },
  { "id": 505, "title": "Varahi Steel",              "category": "vibrant", "medium": "Magazine & Exhibition",    "description": "Vibrant India B2B Exhibition & Magazine design.", "image": "/Assets/Vibrant India/VARAHI STEEL.png" },
  // ── Existing Social Media Posts ──
  { "id": 261, "title": "Social Media Post",        "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/d1.png" },
  { "id": 262, "title": "Social Media Post",        "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/d2.png" },
  { "id": 1,   "title": "1 Social Media Post",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/1 Social Media Post.webp" },
  { "id": 2,   "title": "2 Sonu Nigam Concert Post","category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/2 Sonu Nigam Concert Post.webp" },
  { "id": 3,   "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/3.webp" },
  { "id": 4,   "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/4.webp" },
  { "id": 5,   "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/5.webp" },
  { "id": 6,   "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/6.webp" },
  { "id": 7,   "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/7.webp" },
  { "id": 8,   "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/8.webp" },
  { "id": 9,   "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/9.webp" },
  { "id": 11,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/11.webp" },
  { "id": 12,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/12.webp" },
  { "id": 13,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/13.webp" },
  { "id": 14,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/15.webp" },
  { "id": 15,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/16.webp" },
  { "id": 16,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/17.webp" },
  { "id": 17,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/18.webp" },
  { "id": 18,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/19.webp" },
  { "id": 20,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/21.webp" },
  { "id": 21,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/22.webp" },
  { "id": 22,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/23.webp" },
  { "id": 23,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/24.webp" },
  { "id": 24,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/Screenshot 2026-05-28 230223.webp" },
  { "id": 25,  "title": "Social Media Design",      "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/Screenshot 2026-05-28 230302.webp" },
  { "id": 26,  "title": "Task2 5",                  "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/task2-5.webp" },
  { "id": 263, "title": "Social Media Post",        "category": "socialmedia",  "medium": "Social Media Design",     "description": "Social media design project.",          "image": "/Assets/Social Media/2d8987c7-b5d5-4ee9-bfc4-9cd74f1abe46.png" },
  { "id": 27,  "title": "Oil Painting",             "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/.oil painting.webp" },
  { "id": 28,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/1.webp" },
  { "id": 29,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/2.webp" },
  { "id": 30,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/3.webp" },
  { "id": 31,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/04.webp" },
  { "id": 32,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/5.webp" },
  { "id": 33,  "title": "6 Order Work",             "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/6 Order Work..webp" },
  { "id": 34,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/6.webp" },
  { "id": 35,  "title": "7 Order Work",             "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/7 Order Work...webp" },
  { "id": 36,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/7.webp" },
  { "id": 37,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/8.webp" },
  { "id": 38,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/9.webp" },
  { "id": 39,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/10.webp" },
  { "id": 40,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/11.webp" },
  { "id": 41,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/12.webp" },
  { "id": 42,  "title": "Digital Art Project",      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/13.webp" },
  { "id": 43,  "title": "B14",                      "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/b14.webp" },
  { "id": 44,  "title": "Caricature Order Work",    "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/Caricature Odrer Work.webp" },
  { "id": 45,  "title": "Indore Order Work",        "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/INDORE ODRDER WORK.webp" },
  { "id": 46,  "title": "Indore Order Work",        "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/INDORE OREDR WORK.webp" },
  { "id": 47,  "title": "Oil Painting",             "category": "digital",       "medium": "Digital Art",             "description": "Digital art project.",                  "image": "/Assets/order/oil painting.webp" },
  { "id": 48,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/1.webp" },
  { "id": 49,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/3.webp" },
  { "id": 50,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/4.webp" },
  { "id": 51,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/5.webp" },
  { "id": 52,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/6.webp" },
  { "id": 53,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/7.webp" },
  { "id": 54,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/8.webp" },
  { "id": 55,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/9.webp" },
  { "id": 56,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/11.webp" },
  { "id": 57,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/12.webp" },
  { "id": 58,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/57e62ed2-3f68-42d7-908f-92362e5bc44e.webp" },
  { "id": 59,  "title": "Anime Art",                "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/ANIME.webp" },
  { "id": 60,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/e1f99109-7405-4b5c-835f-32861b1c0e3d.webp" },
  { "id": 61,  "title": "Indore Order Work",        "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/INDORE ODRDER WORK.webp" },
  { "id": 62,  "title": "Indore Order Work",        "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/INDORE OREDR WORK.webp" },
  { "id": 63,  "title": "Johnny Depp",              "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/JONY DEEP.webp" },
  { "id": 64,  "title": "KGF",                      "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/KGF.webp" },
  { "id": 65,  "title": "Pathaan",                  "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/PATHAAN.webp" },
  { "id": 66,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.09.28.webp" },
  { "id": 67,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.09.29 (1).webp" },
  { "id": 68,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.09.29.webp" },
  { "id": 69,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.15.17.webp" },
  { "id": 70,  "title": "Traditional Art",          "category": "handmade",      "medium": "Traditional Art",         "description": "Traditional art project.",               "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.15.18.webp" },
  { "id": 71,  "title": "LFA Project 1",            "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/1.webp" },
  { "id": 72,  "title": "LFA Project 2",            "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/2.webp" },
  { "id": 73,  "title": "LFA Project 3",            "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/3.webp" },
  { "id": 74,  "title": "LFA Project 4",            "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/4.webp" },
  { "id": 75,  "title": "LFA Project 5",            "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/5.webp" },
  { "id": 76,  "title": "LFA Project 6",            "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/6.webp" },
  { "id": 77,  "title": "LFA Project 7",            "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/7.webp" },
  { "id": 78,  "title": "LFA Project 8",            "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/8.webp" },
  { "id": 79,  "title": "LFA Project 9",            "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/9.webp" },
  { "id": 80,  "title": "LFA Project 10",           "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/10.webp" },
  { "id": 81,  "title": "LFA Project 11",           "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/11.webp" },
  { "id": 82,  "title": "LFA Project 12",           "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/12.webp" },
  { "id": 83,  "title": "LFA Project 13",           "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/13.webp" },
  { "id": 831, "title": "LFA Project 14",           "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/14.webp" },
  { "id": 832, "title": "LFA Project 15",           "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/15.webp" },
  { "id": 833, "title": "LFA Project 16",           "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/16.webp" },
  { "id": 834, "title": "LFA Project 17",           "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/17.webp" },
  { "id": 835, "title": "LFA Project L2",           "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/l2.webp" },
  { "id": 836, "title": "LFA Project L14",          "category": "group",         "medium": "Graphic Design",          "description": "LFA Club Project.",                     "image": "/Assets/LFA/l14.webp" },
  { "id": 84,  "title": "Emraan Hashmi",            "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/1 Emraan Hasmi.webp" },
  { "id": 85,  "title": "Virat Kohli",              "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/3 virat kholi.webp" },
  { "id": 86,  "title": "Ravi Kishan",              "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/4 ravi kishan.webp" },
  { "id": 87,  "title": "Vidya Balan",              "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/5 Sheni Vidya balan.webp" },
  { "id": 88,  "title": "Anand Mahindra",           "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/6 anand mahindra digital artwork.webp" },
  { "id": 89,  "title": "Sonu Sood",                "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/7 sonu sood.webp" },
  { "id": 90,  "title": "Vivek Ranjan Digital Art", "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/8 vivek ranjan digital art.webp" },
  { "id": 91,  "title": "Digital Portrait",         "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/9 Digital policition work.webp" },
  { "id": 92,  "title": "B10",                      "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/b10.webp" },
  { "id": 93,  "title": "Digital Vector Art",       "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/Digital Vector Art.webp" },
  { "id": 94,  "title": "Fakt Mahilao Mate",        "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/fakt mahilao mate.webp" },
  { "id": 95,  "title": "Forged In Fire",           "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/Forged in Fire.webp" },
  { "id": 96,  "title": "SRK Jawan Poster",         "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/SRK Jawan Poster.webp" },
  { "id": 97,  "title": "The Family Man",           "category": "celebrity",     "medium": "Digital Portrait",        "description": "Celebrity portrait.",                   "image": "/Assets/celeb/The Family Man.webp" },
  { "id": 98,  "title": "1 Laughter Chef",          "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/1 Laughter Chef.webp" },
  { "id": 99,  "title": "2 Laughter Chef",          "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/2 Laughter Chef.webp" },
  { "id": 100, "title": "6 Order Work",             "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/6 Order Work..webp" },
  { "id": 101, "title": "7 Order Work",             "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/7 Order Work...webp" },
  { "id": 102, "title": "Brijendra Kala",           "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/8 Brijendra Kala bollywood actor.webp" },
  { "id": 103, "title": "Gajraj Rao",               "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/9 Gajraj Rao bollywood actor.webp" },
  { "id": 104, "title": "Caricature Work",          "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/10 Caricature work.webp" },
  { "id": 105, "title": "Caricature Work",          "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/11 Caricature work.webp" },
  { "id": 106, "title": "Caricature Work",          "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/12 Caricature work.webp" },
  { "id": 107, "title": "Pawan Deep Caricature",    "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/13 Pawan Deep Caricature Work.webp" },
  { "id": 108, "title": "Caricature Order Work",    "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/Caricature Odrer Work.webp" },
  { "id": 109, "title": "Caricature Work",          "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/Caricature Work.webp" },
  { "id": 110, "title": "Emran",                    "category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/emran.webp" },
  { "id": 111, "title": "Sanjeev Kapoor Caricature","category": "caricature",    "medium": "Digital Caricature",      "description": "Caricature art.",                       "image": "/Assets/caricature/New caricature art for @sanjeevkapoor & @alyonakapoor 😃I hope you like it ❤️Dm me for order wor.webp" },
  { "id": 112, "title": "1 Oil Painting",           "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/1 oil painting.webp" },
  { "id": 113, "title": "3 Oil Painting",           "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/3  oil painting.webp" },
  { "id": 114, "title": "4 Oil Painting",           "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/4  oil painting.webp" },
  { "id": 115, "title": "5 Oil Painting",           "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/5  oil painting.webp" },
  { "id": 116, "title": "6 Oil Painting",           "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/6 oil painting.webp" },
  { "id": 117, "title": "7 Oil Painting",           "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/7 oil painting.webp" },
  { "id": 118, "title": "8 Oil Painting",           "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/8 oil painting.webp" },
  { "id": 119, "title": "9 Oil Painting",           "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/9 oil painting.webp" },
  { "id": 120, "title": "10 Oil Painting",          "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/10 oil painting.webp" },
  { "id": 121, "title": "11 Oil Painting",          "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/11 oil painting.webp" },
  { "id": 122, "title": "Oil Painting",             "category": "oilpainting",   "medium": "Digital Oil Painting",    "description": "Oil painting.",                         "image": "/Assets/oil/Oil Painting.webp" },
  { "id": 123, "title": "Logo Design",              "category": "Logo",          "medium": "Logo Design",             "description": "Logo design project.",                  "image": "/Assets/Logos/ChatGPT Image Mar 8, 2026, 04_21_31 PM.webp" },
  { "id": 124, "title": "Crypto Habibi Logo",       "category": "Logo",          "medium": "Logo Design",             "description": "Logo design project.",                  "image": "/Assets/Logos/Crypto Habibi Logo.webp" },
  { "id": 125, "title": "ENagar Logo",              "category": "Logo",          "medium": "Logo Design",             "description": "Logo design project.",                  "image": "/Assets/Logos/freepik__professional-vector-logo-for-enagar-representing-s__50600.webp" },
  { "id": 126, "title": "L14",                      "category": "Logo",          "medium": "Logo Design",             "description": "Logo design project.",                  "image": "/Assets/Logos/l14.webp" },
  { "id": 127, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/4.webp" },
  { "id": 128, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/5.webp" },
  { "id": 129, "title": "Antim Poster",             "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/Antim postar.webp" },
  { "id": 130, "title": "B4",                       "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/b4.webp" },
  { "id": 131, "title": "B12",                      "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/b12.webp" },
  { "id": 132, "title": "B13",                      "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/b13.webp" },
  { "id": 133, "title": "B15",                      "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/b15.webp" },
  { "id": 134, "title": "TKF Final Work",           "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/FINAL WORK OF TKF.webp" },
  { "id": 135, "title": "Goro",                     "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/goro.webp" },
  { "id": 136, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/PicsArt_07-10-09.43.36.webp" },
  { "id": 137, "title": "S2",                       "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/s2.webp" },
  { "id": 138, "title": "S5",                       "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/s5.webp" },
  { "id": 139, "title": "S6",                       "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/s6.webp" },
  { "id": 140, "title": "S10",                      "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/s10.webp" },
  { "id": 141, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/stencil 2 (1).webp" },
  { "id": 142, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/stencil 2 (2).webp" },
  { "id": 143, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/yeswecan_20210721_161044.webp" },
  { "id": 144, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/yeswecan_20210922_154932.webp" },
  { "id": 145, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/yeswecan_20211219_102700.webp" },
  { "id": 146, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/yeswecan_20220108_164305.webp" },
  { "id": 147, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/yeswecan_20220108_164434.webp" },
  { "id": 148, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/yeswecan_20220109_191628.webp" },
  { "id": 149, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/yeswecan_20220421_121800.webp" },
  { "id": 150, "title": "Stencil Art",              "category": "stencil",       "medium": "Digital Stencil",         "description": "Stencil art.",                          "image": "/Assets/stencil/yeswecan_20220425_084324.webp" },
  { "id": 151, "title": "Cinemood Website",         "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/Cinemood Website.webp" },
  { "id": 152, "title": "MediScope",                "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/MediScope.webp" },
  { "id": 153, "title": "Mobile App Design 1",      "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/Mobile App Deign  1.webp" },
  { "id": 154, "title": "Mobile App Design 3",      "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/Mobile App Deign  3.webp" },
  { "id": 155, "title": "Mobile App Design 2",      "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/Mobile App Deign 2.webp" },
  { "id": 156, "title": "Renteeasy Hero Section",   "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/Renteeasy Hero section.webp" },
  { "id": 157, "title": "ReWear",                   "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/ReWear.webp" },
  { "id": 158, "title": "UI/UX Design",             "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/Screenshot 2026-05-30 164438.webp" },
  { "id": 159, "title": "UI/UX Design",             "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/Screenshot 2026-05-30 164515.webp" },
  { "id": 160, "title": "UI/UX Design",             "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/Screenshot 2026-05-30 164543.webp" },
  { "id": 161, "title": "Ui1",                      "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/ui1.webp" },
  { "id": 162, "title": "Ui2",                      "category": "UIUX",          "medium": "UI/UX Design",            "description": "UI/UX design project.",                 "image": "/Assets/uiux/ui2.webp" },
  { "id": 163, "title": "Certificate Coordinator",  "category": "certificate",   "medium": "Certificate Design",      "description": "Certificate design project.",           "image": "/Assets/Certificate/Certificate Coordinator.webp" },
  { "id": 164, "title": "Certificate Core Member",  "category": "certificate",   "medium": "Certificate Design",      "description": "Certificate design project.",           "image": "/Assets/Certificate/Certificate Core Member.webp" },
  { "id": 165, "title": "Certificate Volunteer",    "category": "certificate",   "medium": "Certificate Design",      "description": "Certificate design project.",           "image": "/Assets/Certificate/Certificate Volunteer.webp" },
  { "id": 166, "title": "Hackovate Certificate 1",  "category": "certificate",   "medium": "Certificate Design",      "description": "Certificate design project.",           "image": "/Assets/Certificate/Hackovate Certificate 1.webp" },
  { "id": 167, "title": "Hackovate Certificate 2",  "category": "certificate",   "medium": "Certificate Design",      "description": "Certificate design project.",           "image": "/Assets/Certificate/Hackovate Certificate 2.webp" },
  { "id": 168, "title": "LFA Issue 22 Certificate 1","category": "certificate",  "medium": "Certificate Design",      "description": "Certificate design project.",           "image": "/Assets/Certificate/LFA Issue 22 Certifiacte  1.webp" },
  { "id": 169, "title": "LFA Issue 22 Certificate 2","category": "certificate",  "medium": "Certificate Design",      "description": "Certificate design project.",           "image": "/Assets/Certificate/LFA Issue 22 Certifiacte 2.webp" },
  { "id": 170, "title": "LFA Issue 22 Certificate 3","category": "certificate",  "medium": "Certificate Design",      "description": "Certificate design project.",           "image": "/Assets/Certificate/LFA Issue 22 Certifiacte 3.webp" },
];

  /* ─────── derived data ───────────────────────────────────────────── */
  const vibrantBrochures = brochures.filter(b => 
    b.title.toLowerCase().includes("vibrant") || 
    b.title.toLowerCase().includes("brand expo") || 
    b.title.toLowerCase().includes("stainless steel")
  );

  const filteredArtworks: Artwork[] =
    activeCategory === "all"      ? artworks
    : activeCategory === "print"  ? artworks.filter(a => a.category === "stencil")
    : activeCategory === "brochure" ? []  // brochures use separate list
    : artworks.filter(a => a.category === activeCategory);

  const showBrochures =
    activeCategory === "print" || activeCategory === "brochure" || activeCategory === "vibrant";

  const displayBrochures =
    activeCategory === "vibrant" ? vibrantBrochures : brochures;

  const visibleArtworks = filteredArtworks.slice(0, visibleCount);
  const hasMore = filteredArtworks.length > visibleCount;

  /* ═══════════════════════════════════════════════════════════════════
     RENDER
  ═══════════════════════════════════════════════════════════════════ */
  return (
    <section
      id="gallery"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#faf8ff 0%,#f5f0ff 40%,#fdf4ff 70%,#f8f9ff 100%)" }}
    >

      {/* ── Colorful Blurred Bubbles (Rich, Vibrant & Floating) ── */}
      <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        {/* Vibrant Magenta & Violet Bubble — Top Center Behind Heading */}
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full opacity-70 animate-float-1"
          style={{
            background: "radial-gradient(circle at 40% 40%, #ff2d92 0%, #a855f7 45%, #6366f1 70%, transparent 85%)",
            filter: "blur(55px)",
          }}
        />

        {/* Electric Cyan & Sky-Blue Bubble — Top Right */}
        <div
          className="absolute top-10 right-[-4%] w-[500px] h-[500px] rounded-full opacity-70 animate-float-2"
          style={{
            background: "radial-gradient(circle at 40% 40%, #06b6d4 0%, #3b82f6 55%, transparent 80%)",
            filter: "blur(50px)",
          }}
        />

        {/* Hot Pink & Coral Bubble — Top Left Behind Category Buttons */}
        <div
          className="absolute top-36 left-[-5%] w-[480px] h-[480px] rounded-full opacity-70 animate-float-3"
          style={{
            background: "radial-gradient(circle at 50% 50%, #f43f5e 0%, #ec4899 50%, transparent 80%)",
            filter: "blur(50px)",
          }}
        />

        {/* Warm Golden Amber & Tangerine Bubble — Mid Grid Center */}
        <div
          className="absolute top-[35%] left-[48%] -translate-x-1/2 w-[440px] h-[440px] rounded-full opacity-65 animate-float-1"
          style={{
            background: "radial-gradient(circle at 45% 45%, #fbbf24 0%, #f97316 55%, transparent 75%)",
            filter: "blur(55px)",
          }}
        />

        {/* Neon Emerald & Teal Bubble — Mid Right Side */}
        <div
          className="absolute top-[48%] -right-10 w-[460px] h-[460px] rounded-full opacity-65 animate-float-2"
          style={{
            background: "radial-gradient(circle at 40% 40%, #10b981 0%, #06b6d4 55%, transparent 75%)",
            filter: "blur(50px)",
          }}
        />

        {/* Deep Electric Purple & Indigo Bubble — Mid Left Side */}
        <div
          className="absolute top-[60%] -left-12 w-[520px] h-[520px] rounded-full opacity-70 animate-float-3"
          style={{
            background: "radial-gradient(circle at 40% 40%, #8b5cf6 0%, #4f46e5 60%, transparent 80%)",
            filter: "blur(55px)",
          }}
        />

        {/* Vibrant Rose & Fuchsia Bubble — Lower Center Right */}
        <div
          className="absolute top-[75%] right-[12%] w-[500px] h-[500px] rounded-full opacity-70 animate-float-1"
          style={{
            background: "radial-gradient(circle at 45% 45%, #ec4899 0%, #f43f5e 55%, transparent 80%)",
            filter: "blur(55px)",
          }}
        />

        {/* Bright Turquoise & Azure Bubble — Bottom Left */}
        <div
          className="absolute -bottom-16 left-[5%] w-[480px] h-[480px] rounded-full opacity-70 animate-float-2"
          style={{
            background: "radial-gradient(circle at 40% 40%, #38bdf8 0%, #6366f1 60%, transparent 80%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-3">
            Creative{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A collection of ideas, designs, and artistic expressions.
          </p>
        </div>

        {/* ── Category nav (5 outside + dropdown) ── */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">

          {/* 1. All Work */}
          <FilterPill
            label="All Work"
            active={activeCategory === "all"}
            onClick={() => selectCategory("all")}
          />

          {/* 2. Social Media */}
          <FilterPill
            label="Social Media"
            active={activeCategory === "socialmedia"}
            onClick={() => selectCategory("socialmedia")}
          />

          {/* 3. LFA Club Projects */}
          <FilterPill
            label="LFA Club Projects"
            active={activeCategory === "group"}
            onClick={() => selectCategory("group")}
          />

          {/* 4. Vibrant India */}
          <FilterPill
            label="Vibrant India"
            active={activeCategory === "vibrant"}
            onClick={() => selectCategory("vibrant")}
          />

          {/* 5. Print & Editorial */}
          <FilterPill
            label="Print & Editorial"
            active={activeCategory === "print"}
            onClick={() => selectCategory("print")}
          />

          {/* 6. More Categories dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(o => !o)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200
                ${isMoreActive
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-transparent shadow-lg shadow-purple-200"
                  : "bg-white/70 backdrop-blur border-white/80 text-gray-700 hover:bg-white hover:shadow-md shadow-sm"
                }`}
            >
              {isMoreActive ? activeLabel : "More Categories"}
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Glassmorphism dropdown */}
            {dropdownOpen && (
              <div
                role="listbox"
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 z-50 rounded-2xl overflow-hidden
                           border border-white/60 shadow-2xl shadow-purple-100/50"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <div className="p-1.5">
                  {DROPDOWN_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      role="option"
                      aria-selected={activeCategory === cat.id}
                      onClick={() => selectCategory(cat.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                        ${activeCategory === cat.id
                          ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-sm"
                          : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                        }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Gallery content ── */}

        {/* SPECIAL VIBRANT INDIA VIEW: Designs FIRST, then Brochures! */}
        {activeCategory === "vibrant" ? (
          <div>
            {/* 1. Magazine & Exhibition Designs (FIRST) */}
            {filteredArtworks.length > 0 && (
              <div className="mb-14">
                <SectionLabel>Magazine & Exhibition Designs</SectionLabel>
                <MasonryGrid
                  artworks={visibleArtworks.filter(a => a.title !== "L10")}
                  onCardClick={setLightboxImage}
                />
              </div>
            )}

            {/* 2. Vibrant India 2026 Brochures (SECOND - SWAPPED) */}
            {displayBrochures.length > 0 && (
              <div className="mb-12">
                <SectionLabel>Vibrant India 2026 Brochures</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayBrochures.map(b => (
                    <BrochureCard key={b.id} brochure={b} onOpen={setActivePdf} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : activeCategory === "UIUX" ? (
          /* Exact Curated Collage Layout for UIUX */
          (() => {
            const getImg = (kw: string) =>
              filteredArtworks.find(a => a.image.toLowerCase().includes(kw.toLowerCase()));

            const cinemood = getImg("cinemood");
            const naroda = getImg("164543");
            const rentEasy = getImg("renteeasy");
            const rewear = getImg("rewear");
            const tech = getImg("164515");
            const industrial = getImg("164438");

            const mobile1 = getImg("deign  3") || getImg("deign 3"); // CampusMart
            const mobile2 = getImg("ui1"); // Bharat Dark
            const mobile3 = getImg("deign  1") || getImg("deign 1"); // Food Categories
            const mobile4 = getImg("ui2"); // Bharat White
            const mobile5 = getImg("deign 2"); // TasteNow
            const mediscope = getImg("mediscope");

            const usedIds = [
              cinemood, naroda, rentEasy, rewear, tech, industrial,
              mobile1, mobile2, mobile3, mobile4, mobile5, mediscope
            ]
              .filter(Boolean)
              .map(a => a!.id);

            const otherArtworks = filteredArtworks.filter(a => !usedIds.includes(a.id));

            const renderUiCard = (artwork: Artwork | undefined) => {
              if (!artwork) return null;
              return (
                <div
                  key={artwork.id}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/15 bg-white/85 backdrop-blur-md border border-white/90 shadow-sm w-full h-full"
                  onClick={() => setLightboxImage(artwork)}
                >
                  <div className="w-full h-full relative overflow-hidden bg-gray-50/50">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white text-sm font-bold leading-tight drop-shadow">{artwork.title}</p>
                      <p className="text-purple-200 text-xs font-medium mt-0.5 drop-shadow">{artwork.medium || "UI/UX Design"}</p>
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
                      <ZoomIn size={14} className="text-gray-700" />
                    </div>
                  </div>
                </div>
              );
            };

            return (
              <div className="flex flex-col gap-5 w-full">
                {/* Main Split: Left (Cinemood & Mediscope) vs Right (Desktop mockups & Mobile row) */}
                <div className="flex flex-col lg:flex-row gap-5 w-full">
                  {/* Left Column: Cinemood (Spans full height naturally) + Mediscope */}
                  <div className="w-full lg:w-[28%] flex flex-col gap-5">
                    {renderUiCard(cinemood)}
                    {mediscope && (
                      <div className="w-full">
                        {renderUiCard(mediscope)}
                      </div>
                    )}
                  </div>

                  {/* Right Section: Contains the grid and mobile screens */}
                  <div className="w-full lg:w-[72%] flex flex-col gap-5">
                    {/* Top part of Right Section: 2 Columns with 3:2 ratio */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
                      {/* Left Side (Spans 3 cols): Naroda, RentEasy, Tech Opportunities */}
                      <div className="lg:col-span-3 flex flex-col gap-5">
                        {renderUiCard(naroda)}
                        {renderUiCard(rentEasy)}
                        {renderUiCard(tech)}
                      </div>

                      {/* Right Side (Spans 2 cols): ReWear, Industrial */}
                      <div className="lg:col-span-2 flex flex-col gap-5">
                        {renderUiCard(rewear)}
                        {renderUiCard(industrial)}
                      </div>
                    </div>

                    {/* Bottom part of Right Section: 5 Mobile Screens in exactly ONE row with the same size */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 w-full mt-auto">
                      {renderUiCard(mobile1)}
                      {renderUiCard(mobile2)}
                      {renderUiCard(mobile3)}
                      {renderUiCard(mobile4)}
                      {renderUiCard(mobile5)}
                    </div>
                  </div>
                </div>

                {/* Any remaining unmatched artworks */}
                {otherArtworks.length > 0 && (
                  <div className="mt-5">
                    <MasonryGrid artworks={otherArtworks} onCardClick={setLightboxImage} />
                  </div>
                )}
              </div>
            );
          })()
        ) : (
          /* ALL OTHER CATEGORIES */
          <div>
            {/* Brochures (shown for "print" and "brochure" filters) */}
            {showBrochures && (
              <div className="mb-12">
                {activeCategory === "print" && (
                  <SectionLabel>Brochures & Publications</SectionLabel>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayBrochures.map(b => (
                    <BrochureCard key={b.id} brochure={b} onOpen={setActivePdf} />
                  ))}
                </div>
              </div>
            )}

            {/* Stencil sub-header when print tab is active */}
            {activeCategory === "print" && filteredArtworks.length > 0 && (
              <SectionLabel>Stencil Art</SectionLabel>
            )}

            {/* ARTWORK MASONRY (No awkward empty spaces, seamless horizontal round-robin packing) */}
            {visibleArtworks.length > 0 && (
              <MasonryGrid
                artworks={visibleArtworks.filter(a => a.title !== "L10")}
                onCardClick={setLightboxImage}
              />
            )}
          </div>
        )}

        {/* Empty state (only for categories other than brochure) */}
        {visibleArtworks.length === 0 && !showBrochures && (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">No projects in this category yet.</p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(v => v + 18)}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white
                         bg-gradient-to-r from-purple-600 to-pink-500
                         hover:shadow-lg hover:shadow-purple-200 hover:scale-105
                         active:scale-95 transition-all duration-200"
            >
              <ChevronDown size={17} />
              Load More
              <span className="font-normal opacity-80">
                ({filteredArtworks.length - visibleCount} remaining)
              </span>
            </button>
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,5,30,0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20
                       flex items-center justify-center text-white hover:bg-white/20 transition-all"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div
            className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "rgba(255,255,255,0.97)" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-gray-50 flex items-center justify-center" style={{ maxHeight: "70vh" }}>
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full object-contain"
                style={{ maxHeight: "70vh" }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{lightboxImage.title}</h3>
              <p className="text-purple-600 text-sm font-semibold mb-1">
                {CATEGORY_MAP[lightboxImage.category] ?? lightboxImage.medium}
              </p>
              <p className="text-gray-500 text-sm">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── PDF Viewer ── */}
      {activePdf && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ background: "rgba(10,5,30,0.96)", backdropFilter: "blur(10px)" }}
          onClick={e => { if (e.target === e.currentTarget) setActivePdf(null); }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-white/[0.06] border-b border-white/10 flex-shrink-0 backdrop-blur">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow"
                style={{ background: `linear-gradient(135deg,${activePdf.accentFrom},${activePdf.accentTo})` }}
              >
                <FileText size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm leading-tight">{activePdf.title}</h3>
                <p className="text-white/50 text-xs">{activePdf.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={activePdf.file}
                download
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-xs font-bold
                           hover:opacity-90 transition-opacity shadow"
                style={{ background: `linear-gradient(135deg,${activePdf.accentFrom},${activePdf.accentTo})` }}
              >
                <Download size={13} /> Download
              </a>
              <button
                onClick={() => setActivePdf(null)}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15
                           flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          {/* iframe */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src={`${activePdf.file}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
              className="w-full h-full border-0"
              title={activePdf.title}
            />
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════ SUB-COMPONENTS ═══════════════════════════════ */

/** Pill filter button */
function FilterPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200
        ${active
          ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-transparent shadow-lg shadow-purple-200"
          : "bg-white/70 backdrop-blur border-white/80 text-gray-700 hover:bg-white hover:shadow-md shadow-sm"
        }`}
    >
      {label}
    </button>
  );
}

/** Small sub-section label */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
      <span className="text-xs font-bold uppercase tracking-widest text-purple-400">{children}</span>
      <div className="h-px flex-1 bg-gradient-to-l from-purple-200 to-transparent" />
    </div>
  );
}

/** Light-theme brochure card */
function BrochureCard({ brochure, onOpen }: { brochure: Brochure; onOpen: (b: Brochure) => void }) {
  return (
    <div
      onClick={() => onOpen(brochure)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white/85 backdrop-blur-md border border-white/90
                 shadow-sm hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Cover image — full, unobscured */}
      <div className="relative overflow-hidden bg-gray-50/80" style={{ aspectRatio: "4/3" }}>
        <img
          src={brochure.cover}
          alt={brochure.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        {/* PDF badge — top-right corner, small */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider shadow"
          style={{ background: `linear-gradient(135deg,${brochure.accentFrom},${brochure.accentTo})` }}
        >
          PDF
        </div>
        {/* Subtle zoom hint on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2.5 shadow">
            <ExternalLink size={16} className="text-gray-700" />
          </div>
        </div>
      </div>

      {/* Info panel — clean translucent surface */}
      <div className="p-4 bg-white/60">
        <h4 className="text-gray-900 font-bold text-base leading-tight truncate">{brochure.title}</h4>
        <p className="text-gray-500 text-sm mt-0.5 truncate">{brochure.subtitle}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100/80">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Brochure</span>
          <span
            className="flex items-center gap-1 text-xs font-semibold transition-colors duration-200"
            style={{ color: brochure.accentFrom }}
          >
            <FileText size={12} /> View PDF
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg,${brochure.accentFrom},${brochure.accentTo})` }}
      />
    </div>
  );
}

/** Light-theme artwork card */
const TRANSPARENT_CELEBS_ARR = [
  "/Assets/celeb/4 ravi kishan.webp",
  "/Assets/celeb/6 anand mahindra digital artwork.webp",
  "/Assets/celeb/8 vivek ranjan digital art.webp",
];

function ArtCard({ artwork, onClick }: { artwork: Artwork; onClick: () => void }) {
  const needsLightBg = TRANSPARENT_CELEBS_ARR.includes(artwork.image);
  return (
    <div
      className="group relative cursor-pointer rounded-2xl overflow-hidden w-full
                 bg-white/85 backdrop-blur-md border border-white/90 shadow-sm
                 hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-1.5 transition-all duration-300"
      onClick={onClick}
    >
      <div className={`relative overflow-hidden ${needsLightBg ? "bg-slate-100" : "bg-gray-50/50"}`}>
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        flex flex-col justify-end p-4">
          <p className="text-white text-sm font-bold leading-tight drop-shadow">{artwork.title}</p>
          <p className="text-purple-200 text-xs font-medium mt-0.5 drop-shadow">
            {CATEGORY_MAP[artwork.category] ?? artwork.medium}
          </p>
        </div>
        {/* Zoom icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur
                        flex items-center justify-center opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 shadow">
          <ZoomIn size={14} className="text-gray-700" />
        </div>
      </div>
    </div>
  );
}

function MasonryGrid({
  artworks,
  onCardClick,
}: {
  artworks: Artwork[];
  onCardClick: (artwork: Artwork) => void;
}) {
  const [cols, setCols] = useState(() => {
    if (typeof window !== "undefined") {
      const w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 768) return 2;
      if (w < 1280) return 3;
      return 4;
    }
    return 4;
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setCols(1);
      else if (w < 768) setCols(2);
      else if (w < 1280) setCols(3);
      else setCols(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns: Artwork[][] = Array.from({ length: cols }, () => []);
  artworks.forEach((art, idx) => {
    columns[idx % cols].push(art);
  });

  return (
    <div
      className={`grid gap-5 items-start ${
        cols === 1
          ? "grid-cols-1"
          : cols === 2
          ? "grid-cols-2"
          : cols === 3
          ? "grid-cols-3"
          : "grid-cols-4"
      }`}
    >
      {columns.map((colArtworks, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-5">
          {colArtworks.map(artwork => (
            <ArtCard
              key={artwork.id}
              artwork={artwork}
              onClick={() => onCardClick(artwork)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
