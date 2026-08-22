import { useState } from "react";
import { 
  X, Image, PenTool, Palette, 
  Users, User, VenetianMask, Droplet, Hexagon, Scissors, 
  Layout, Heart, Award, BookOpen, FolderOpen, FileText, Download, ExternalLink
} from "lucide-react";

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
  color: string;
  cover: string;
}

const brochures: Brochure[] = [
  { id: 5, title: "SweetVerse", subtitle: "Brochure", file: "/Assets/Brochure/SweetVerse  Brochure.pdf", color: "from-orange-500 to-amber-600", cover: "/Assets/Brochure/cover_SweetVerse  Brochure.pdf.jpg" },
  { id: 8, title: "VIT Brochure", subtitle: "Institute Brochure", file: "/Assets/Brochure/VIT Brochure (1).pdf", color: "from-red-600 to-rose-800", cover: "/Assets/Brochure/cover_VIT Brochure (1).pdf.jpg" },
  { id: 6, title: "Vibrant India 2026", subtitle: "Exhibition Brochure", file: "/Assets/Brochure/Vibrant_India_2026_Exhibition_Brochure (2).pdf", color: "from-[#a033ff] to-[#ff3388]", cover: "/Assets/Brochure/cover_Vibrant_India_2026_Exhibition_Brochure (2).pdf.jpg" },
  { id: 7, title: "Vibrant India 2026", subtitle: "Stainless Steel Conference", file: "/Assets/Brochure/Vibrant_India_2026_Stainless_Steel_Conference (1).pdf", color: "from-slate-500 to-zinc-700", cover: "/Assets/Brochure/cover_Vibrant_India_2026_Stainless_Steel_Conference (1).pdf.jpg" },
  { id: 9, title: "Website Development", subtitle: "Services", file: "/Assets/Brochure/Website Development (1).pdf", color: "from-indigo-600 to-blue-800", cover: "/Assets/Brochure/cover_Website Development (1).pdf.jpg" },
  { id: 1, title: "Catalog Design", subtitle: "& Product Photography", file: "/Assets/Brochure/CATALOG DESIGN & PRODUCT PHOTOGRAPHY (1).pdf", color: "from-violet-600 to-purple-800", cover: "/Assets/Brochure/cover_CATALOG DESIGN & PRODUCT PHOTOGRAPHY (1).pdf.jpg" },
  { id: 2, title: "Mobile App", subtitle: "Development", file: "/Assets/Brochure/Mobile App Development (1).pdf", color: "from-blue-600 to-cyan-700", cover: "/Assets/Brochure/cover_Mobile App Development (1).pdf.jpg" },
  { id: 3, title: "Other Services", subtitle: "Portfolio", file: "/Assets/Brochure/Other Services  (1).pdf", color: "from-emerald-600 to-teal-700", cover: "/Assets/Brochure/cover_Other Services  (1).pdf.jpg" },
  { id: 4, title: "Social Media Management", subtitle: "& Digital Marketing", file: "/Assets/Brochure/Social Media Management & Digital Marketing (1).pdf", color: "from-pink-600 to-rose-700", cover: "/Assets/Brochure/cover_Social Media Management & Digital Marketing (1).pdf.jpg" },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("socialmedia");
  const [lightboxImage, setLightboxImage] = useState<Artwork | null>(null);
  const [activePdf, setActivePdf] = useState<Brochure | null>(null);

  const categories = [
    { id: "socialmedia",   label: "Social Media Post",       icon: <Image size={16} /> },
    { id: "group",        label: "LFA Club Projects",        icon: <Users size={16} /> },
    { id: "brochure",     label: "Brochure",                 icon: <BookOpen size={16} /> },
    { id: "digital",      label: "Order Works",              icon: <PenTool size={16} /> },
    { id: "handmade",     label: "Handmade Art",             icon: <Palette size={16} /> },
    { id: "celebrity",    label: "Celebrity Portraits",      icon: <User size={16} /> },
    { id: "caricature",   label: "Caricatures",              icon: <VenetianMask size={16} /> },
    { id: "oilpainting",  label: "Digital Oil Painting",     icon: <Droplet size={16} /> },
    { id: "Logo",         label: "Logo",                     icon: <Hexagon size={16} /> },
    { id: "stencil",      label: "Stencil",                  icon: <Scissors size={16} /> },
    { id: "UIUX",         label: "UI/UX Design",             icon: <Layout size={16} /> },
    { id: "certificate",  label: "Certificate",              icon: <Award size={16} /> },
  ];

  const artworks: Artwork[] = [
  {
    "id": 261,
    "title": "Social Media Post",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/d1.png"
  },
  {
    "id": 262,
    "title": "Social Media Post",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/d2.png"
  },
  {
    "id": 1,
    "title": "1 Social Media Post",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/1 Social Media Post.webp"
  },
  {
    "id": 2,
    "title": "2 Sonu Nigam Concert Post",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/2 Sonu Nigam Concert Post.webp"
  },
  {
    "id": 3,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/3.webp"
  },
  {
    "id": 4,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/4.webp"
  },
  {
    "id": 5,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/5.webp"
  },
  {
    "id": 6,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/6.webp"
  },
  {
    "id": 7,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/7.webp"
  },
  {
    "id": 8,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/8.webp"
  },
  {
    "id": 9,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/9.webp"
  },

  {
    "id": 11,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/11.webp"
  },
  {
    "id": 12,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/12.webp"
  },
  {
    "id": 13,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/13.webp"
  },
  {
    "id": 14,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/15.webp"
  },
  {
    "id": 15,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/16.webp"
  },
  {
    "id": 16,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/17.webp"
  },
  {
    "id": 17,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/18.webp"
  },
  {
    "id": 18,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/19.webp"
  },

  {
    "id": 20,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/21.webp"
  },
  {
    "id": 21,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/22.webp"
  },
  {
    "id": 22,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/23.webp"
  },
  {
    "id": 23,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/24.webp"
  },
  {
    "id": 24,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/Screenshot 2026-05-28 230223.webp"
  },
  {
    "id": 25,
    "title": "Social Media Design Project",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/Screenshot 2026-05-28 230302.webp"
  },
  {
    "id": 26,
    "title": "Task2 5",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/task2-5.webp"
  },

  {
    "id": 263,
    "title": "Social Media Post",
    "category": "socialmedia",
    "medium": "Social Media Design",
    "description": "Beautiful social media design project.",
    "image": "/Assets/Social Media/2d8987c7-b5d5-4ee9-bfc4-9cd74f1abe46.png"
  },
  {
    "id": 27,
    "title": "Oil Painting",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/.oil painting.webp"
  },
  {
    "id": 28,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/1.webp"
  },
  {
    "id": 29,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/2.webp"
  },
  {
    "id": 30,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/3.webp"
  },
  {
    "id": 31,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/04.webp"
  },
  {
    "id": 32,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/5.webp"
  },
  {
    "id": 33,
    "title": "6 Order Work",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/6 Order Work..webp"
  },
  {
    "id": 34,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/6.webp"
  },
  {
    "id": 35,
    "title": "7 Order Work",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/7 Order Work...webp"
  },
  {
    "id": 36,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/7.webp"
  },
  {
    "id": 37,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/8.webp"
  },
  {
    "id": 38,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/9.webp"
  },
  {
    "id": 39,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/10.webp"
  },
  {
    "id": 40,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/11.webp"
  },
  {
    "id": 41,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/12.webp"
  },
  {
    "id": 42,
    "title": "Digital Art Project",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/13.webp"
  },
  {
    "id": 43,
    "title": "B14",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/b14.webp"
  },
  {
    "id": 44,
    "title": "Caricature Odrer Work",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/Caricature Odrer Work.webp"
  },
  {
    "id": 45,
    "title": "INDORE ODRDER WORK",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/INDORE ODRDER WORK.webp"
  },
  {
    "id": 46,
    "title": "INDORE OREDR WORK",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/INDORE OREDR WORK.webp"
  },
  {
    "id": 47,
    "title": "Oil Painting",
    "category": "digital",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/order/oil painting.webp"
  },
  {
    "id": 48,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/1.webp"
  },
  {
    "id": 49,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/3.webp"
  },
  {
    "id": 50,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/4.webp"
  },
  {
    "id": 51,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/5.webp"
  },
  {
    "id": 52,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/6.webp"
  },
  {
    "id": 53,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/7.webp"
  },
  {
    "id": 54,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/8.webp"
  },
  {
    "id": 55,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/9.webp"
  },
  {
    "id": 56,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/11.webp"
  },
  {
    "id": 57,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/12.webp"
  },
  {
    "id": 58,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/57e62ed2-3f68-42d7-908f-92362e5bc44e.webp"
  },
  {
    "id": 59,
    "title": "ANIME",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/ANIME.webp"
  },
  {
    "id": 60,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/e1f99109-7405-4b5c-835f-32861b1c0e3d.webp"
  },
  {
    "id": 61,
    "title": "INDORE ODRDER WORK",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/INDORE ODRDER WORK.webp"
  },
  {
    "id": 62,
    "title": "INDORE OREDR WORK",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/INDORE OREDR WORK.webp"
  },
  {
    "id": 63,
    "title": "JONY DEEP",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/JONY DEEP.webp"
  },
  {
    "id": 64,
    "title": "KGF",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/KGF.webp"
  },
  {
    "id": 65,
    "title": "PATHAAN",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/PATHAAN.webp"
  },
  {
    "id": 66,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.09.28.webp"
  },
  {
    "id": 67,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.09.29 (1).webp"
  },
  {
    "id": 68,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.09.29.webp"
  },
  {
    "id": 69,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.15.17.webp"
  },
  {
    "id": 70,
    "title": "Traditional Art Project",
    "category": "handmade",
    "medium": "Traditional Art",
    "description": "Beautiful traditional art project.",
    "image": "/Assets/Handmade/WhatsApp Image 2026-05-30 at 16.15.18.webp"
  },
  {
    "id": 71,
    "title": "LFA Project 1",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/1.webp"
  },
  {
    "id": 72,
    "title": "LFA Project 2",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/2.webp"
  },
  {
    "id": 73,
    "title": "LFA Project 3",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/3.webp"
  },
  {
    "id": 74,
    "title": "LFA Project 4",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/4.webp"
  },
  {
    "id": 75,
    "title": "LFA Project 5",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/5.webp"
  },
  {
    "id": 76,
    "title": "LFA Project 6",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/6.webp"
  },
  {
    "id": 77,
    "title": "LFA Project 7",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/7.webp"
  },
  {
    "id": 78,
    "title": "LFA Project 8",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/8.webp"
  },
  {
    "id": 79,
    "title": "LFA Project 9",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/9.webp"
  },
  {
    "id": 80,
    "title": "LFA Project 10",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/10.webp"
  },
  {
    "id": 81,
    "title": "LFA Project 11",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/11.webp"
  },
  {
    "id": 82,
    "title": "LFA Project 12",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/12.webp"
  },
  {
    "id": 83,
    "title": "LFA Project 13",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/13.webp"
  },
  {
    "id": 831,
    "title": "LFA Project 14",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/14.webp"
  },
  {
    "id": 832,
    "title": "LFA Project 15",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/15.webp"
  },
  {
    "id": 833,
    "title": "LFA Project 16",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/16.webp"
  },
  {
    "id": 834,
    "title": "LFA Project 17",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/17.webp"
  },
  {
    "id": 835,
    "title": "LFA Project L2",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/l2.webp"
  },
  {
    "id": 836,
    "title": "LFA Project L14",
    "category": "group",
    "medium": "Graphic Design",
    "description": "LFA Club Project image.",
    "image": "/Assets/LFA/l14.webp"
  },
  {
    "id": 84,
    "title": "1 Emraan Hasmi",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/1 Emraan Hasmi.webp"
  },
  {
    "id": 85,
    "title": "3 Virat Kholi",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/3 virat kholi.webp"
  },
  {
    "id": 86,
    "title": "4 Ravi Kishan",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/4 ravi kishan.webp"
  },
  {
    "id": 87,
    "title": "5 Sheni Vidya Balan",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/5 Sheni Vidya balan.webp"
  },
  {
    "id": 88,
    "title": "6 Anand Mahindra Digital Artwork",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/6 anand mahindra digital artwork.webp"
  },
  {
    "id": 89,
    "title": "7 Sonu Sood",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/7 sonu sood.webp"
  },
  {
    "id": 90,
    "title": "8 Vivek Ranjan Digital Art",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/8 vivek ranjan digital art.webp"
  },
  {
    "id": 91,
    "title": "9 Digital Policition Work",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/9 Digital policition work.webp"
  },
  {
    "id": 92,
    "title": "B10",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/b10.webp"
  },
  {
    "id": 93,
    "title": "Digital Vector Art",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/Digital Vector Art.webp"
  },
  {
    "id": 94,
    "title": "Fakt Mahilao Mate",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/fakt mahilao mate.webp"
  },
  {
    "id": 95,
    "title": "Forged In Fire",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/Forged in Fire.webp"
  },
  {
    "id": 96,
    "title": "SRK Jawan Poster",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/SRK Jawan Poster.webp"
  },
  {
    "id": 97,
    "title": "The Family Man",
    "category": "celebrity",
    "medium": "Digital Art",
    "description": "Beautiful digital art project.",
    "image": "/Assets/celeb/The Family Man.webp"
  },
  {
    "id": 98,
    "title": "1 Laughter Chef",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/1 Laughter Chef.webp"
  },
  {
    "id": 99,
    "title": "2 Laughter Chef",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/2 Laughter Chef.webp"
  },
  {
    "id": 100,
    "title": "6 Order Work",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/6 Order Work..webp"
  },
  {
    "id": 101,
    "title": "7 Order Work",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/7 Order Work...webp"
  },
  {
    "id": 102,
    "title": "8 Brijendra Kala Bollywood Actor",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/8 Brijendra Kala bollywood actor.webp"
  },
  {
    "id": 103,
    "title": "9 Gajraj Rao Bollywood Actor",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/9 Gajraj Rao bollywood actor.webp"
  },
  {
    "id": 104,
    "title": "10 Caricature Work",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/10 Caricature work.webp"
  },
  {
    "id": 105,
    "title": "11 Caricature Work",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/11 Caricature work.webp"
  },
  {
    "id": 106,
    "title": "12 Caricature Work",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/12 Caricature work.webp"
  },
  {
    "id": 107,
    "title": "13 Pawan Deep Caricature Work",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/13 Pawan Deep Caricature Work.webp"
  },
  {
    "id": 108,
    "title": "Caricature Odrer Work",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/Caricature Odrer Work.webp"
  },
  {
    "id": 109,
    "title": "Caricature Work",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/Caricature Work.webp"
  },
  {
    "id": 110,
    "title": "Emran",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/emran.webp"
  },
  {
    "id": 111,
    "title": "New Caricature Art For & 😃I Hope You Like It ❤️",
    "category": "caricature",
    "medium": "Digital Caricature",
    "description": "Beautiful digital caricature project.",
    "image": "/Assets/caricature/New caricature art for @sanjeevkapoor & @alyonakapoor 😃I hope you like it ❤️Dm me for order wor.webp"
  },
  {
    "id": 112,
    "title": "1 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/1 oil painting.webp"
  },
  {
    "id": 113,
    "title": "3 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/3  oil painting.webp"
  },
  {
    "id": 114,
    "title": "4 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/4  oil painting.webp"
  },
  {
    "id": 115,
    "title": "5 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/5  oil painting.webp"
  },
  {
    "id": 116,
    "title": "6 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/6 oil painting.webp"
  },
  {
    "id": 117,
    "title": "7 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/7 oil painting.webp"
  },
  {
    "id": 118,
    "title": "8 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/8 oil painting.webp"
  },
  {
    "id": 119,
    "title": "9 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/9 oil painting.webp"
  },
  {
    "id": 120,
    "title": "10 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/10 oil painting.webp"
  },
  {
    "id": 121,
    "title": "11 Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/11 oil painting.webp"
  },
  {
    "id": 122,
    "title": "Oil Painting",
    "category": "oilpainting",
    "medium": "Digital Oil Painting",
    "description": "Beautiful digital oil painting project.",
    "image": "/Assets/oil/Oil Painting.webp"
  },
  {
    "id": 123,
    "title": "ChatGPT Image Mar 8, 2026, 04 21 31 PM",
    "category": "Logo",
    "medium": "Logo Design",
    "description": "Beautiful logo design project.",
    "image": "/Assets/Logos/ChatGPT Image Mar 8, 2026, 04_21_31 PM.webp"
  },
  {
    "id": 124,
    "title": "Crypto Habibi Logo",
    "category": "Logo",
    "medium": "Logo Design",
    "description": "Beautiful logo design project.",
    "image": "/Assets/Logos/Crypto Habibi Logo.webp"
  },
  {
    "id": 125,
    "title": "Logo Design Project",
    "category": "Logo",
    "medium": "Logo Design",
    "description": "Beautiful logo design project.",
    "image": "/Assets/Logos/freepik__professional-vector-logo-for-enagar-representing-s__50600.webp"
  },
  {
    "id": 126,
    "title": "L14",
    "category": "Logo",
    "medium": "Logo Design",
    "description": "Beautiful logo design project.",
    "image": "/Assets/Logos/l14.webp"
  },
  {
    "id": 127,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/4.webp"
  },
  {
    "id": 128,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/5.webp"
  },
  {
    "id": 129,
    "title": "Antim Postar",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/Antim postar.webp"
  },
  {
    "id": 130,
    "title": "B4",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/b4.webp"
  },
  {
    "id": 131,
    "title": "B12",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/b12.webp"
  },
  {
    "id": 132,
    "title": "B13",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/b13.webp"
  },
  {
    "id": 133,
    "title": "B15",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/b15.webp"
  },
  {
    "id": 134,
    "title": "FINAL WORK OF TKF",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/FINAL WORK OF TKF.webp"
  },
  {
    "id": 135,
    "title": "Goro",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/goro.webp"
  },
  {
    "id": 136,
    "title": "PicsArt 07 10 09 43 36",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/PicsArt_07-10-09.43.36.webp"
  },
  {
    "id": 137,
    "title": "S2",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/s2.webp"
  },
  {
    "id": 138,
    "title": "S5",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/s5.webp"
  },
  {
    "id": 139,
    "title": "S6",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/s6.webp"
  },
  {
    "id": 140,
    "title": "S10",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/s10.webp"
  },
  {
    "id": 141,
    "title": "Stencil 2 (1)",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/stencil 2 (1).webp"
  },
  {
    "id": 142,
    "title": "Stencil 2 (2)",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/stencil 2 (2).webp"
  },
  {
    "id": 143,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/yeswecan_20210721_161044.webp"
  },
  {
    "id": 144,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/yeswecan_20210922_154932.webp"
  },
  {
    "id": 145,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/yeswecan_20211219_102700.webp"
  },
  {
    "id": 146,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/yeswecan_20220108_164305.webp"
  },
  {
    "id": 147,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/yeswecan_20220108_164434.webp"
  },
  {
    "id": 148,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/yeswecan_20220109_191628.webp"
  },
  {
    "id": 149,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/yeswecan_20220421_121800.webp"
  },
  {
    "id": 150,
    "title": "Digital Stencil Project",
    "category": "stencil",
    "medium": "Digital Stencil",
    "description": "Beautiful digital stencil project.",
    "image": "/Assets/stencil/yeswecan_20220425_084324.webp"
  },
  {
    "id": 151,
    "title": "Cinemood Website",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/Cinemood Website.webp"
  },
  {
    "id": 152,
    "title": "MediScope",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/MediScope.webp"
  },
  {
    "id": 153,
    "title": "Mobile App Deign 1",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/Mobile App Deign  1.webp"
  },
  {
    "id": 154,
    "title": "Mobile App Deign 3",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/Mobile App Deign  3.webp"
  },
  {
    "id": 155,
    "title": "Mobile App Deign 2",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/Mobile App Deign 2.webp"
  },
  {
    "id": 156,
    "title": "Renteeasy Hero Section",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/Renteeasy Hero section.webp"
  },
  {
    "id": 157,
    "title": "ReWear",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/ReWear.webp"
  },
  {
    "id": 158,
    "title": "UI/UX Design Project",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/Screenshot 2026-05-30 164438.webp"
  },
  {
    "id": 159,
    "title": "UI/UX Design Project",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/Screenshot 2026-05-30 164515.webp"
  },
  {
    "id": 160,
    "title": "UI/UX Design Project",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/Screenshot 2026-05-30 164543.webp"
  },
  {
    "id": 161,
    "title": "Ui1",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/ui1.webp"
  },
  {
    "id": 162,
    "title": "Ui2",
    "category": "UIUX",
    "medium": "UI/UX Design",
    "description": "Beautiful ui/ux design project.",
    "image": "/Assets/uiux/ui2.webp"
  },
  {
    "id": 163,
    "title": "Certificate Coordinator",
    "category": "certificate",
    "medium": "Certificate Design",
    "description": "Beautiful certificate design project.",
    "image": "/Assets/Certificate/Certificate Coordinator.webp"
  },
  {
    "id": 164,
    "title": "Certificate Core Member",
    "category": "certificate",
    "medium": "Certificate Design",
    "description": "Beautiful certificate design project.",
    "image": "/Assets/Certificate/Certificate Core Member.webp"
  },
  {
    "id": 165,
    "title": "Certificate Volunteer",
    "category": "certificate",
    "medium": "Certificate Design",
    "description": "Beautiful certificate design project.",
    "image": "/Assets/Certificate/Certificate Volunteer.webp"
  },
  {
    "id": 166,
    "title": "Hackovate Certificate 1",
    "category": "certificate",
    "medium": "Certificate Design",
    "description": "Beautiful certificate design project.",
    "image": "/Assets/Certificate/Hackovate Certificate 1.webp"
  },
  {
    "id": 167,
    "title": "Hackovate Certificate 2",
    "category": "certificate",
    "medium": "Certificate Design",
    "description": "Beautiful certificate design project.",
    "image": "/Assets/Certificate/Hackovate Certificate 2.webp"
  },
  {
    "id": 168,
    "title": "LFA Issue 22 Certifiacte 1",
    "category": "certificate",
    "medium": "Certificate Design",
    "description": "Beautiful certificate design project.",
    "image": "/Assets/Certificate/LFA Issue 22 Certifiacte  1.webp"
  },
  {
    "id": 169,
    "title": "LFA Issue 22 Certifiacte 2",
    "category": "certificate",
    "medium": "Certificate Design",
    "description": "Beautiful certificate design project.",
    "image": "/Assets/Certificate/LFA Issue 22 Certifiacte 2.webp"
  },
  {
    "id": 170,
    "title": "LFA Issue 22 Certifiacte 3",
    "category": "certificate",
    "medium": "Certificate Design",
    "description": "Beautiful certificate design project.",
    "image": "/Assets/Certificate/LFA Issue 22 Certifiacte 3.webp"
  }
];

  // Filter artworks based on category
  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((art) => art.category === activeCategory);
  const transparentCelebs = [
    "/Assets/celeb/4 ravi kishan.webp",
    "/Assets/celeb/6 anand mahindra digital artwork.webp",
    "/Assets/celeb/8 vivek ranjan digital art.webp"
  ];

  return (
    <section id="gallery" className="py-20 bg-[#060714]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-2">
            Creative{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
              Gallery
              <svg width="130%" height="26" viewBox="0 0 100 26" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute -bottom-[14px] -left-[5%] overflow-visible pointer-events-none">
                <path d="M 0 24 Q 45 16 98 16" stroke="url(#galleryGradient)" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <circle cx="98" cy="16" r="3" fill="#fff" filter="drop-shadow(0 0 5px #f472b6)" />
                <defs>
                  <linearGradient id="galleryGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            A collection of handmade and digital artworks
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); }}
              className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#a033ff] to-[#ff3388] border-transparent text-white shadow-[0_0_15px_rgba(160,51,255,0.4)]"
                  : "bg-[#0c0d1a] border-white/5 text-neutral-400 hover:text-white hover:border-white/10 hover:bg-white/5"
              }`}
            >
              <span className={`${activeCategory === cat.id ? "text-white" : "text-[#a033ff]"}`}>
                {cat.icon}
              </span>
              {cat.label}
            </button>
          ))}
        </div>



        {/* Gallery Rendering */}
        {activeCategory === 'brochure' ? (
          /* PDF Brochure Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {brochures.map((brochure) => (
              <div
                key={brochure.id}
                onClick={() => setActivePdf(brochure)}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0c0d1a] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_40px_rgba(160,51,255,0.12)] hover:border-white/10"
              >
                {/* Image top panel */}
                <div className="relative h-56 w-full overflow-hidden bg-neutral-900 border-b border-white/[0.06]">
                  <img src={brochure.cover} alt={brochure.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d1a] via-[#0c0d1a]/20 to-transparent" />
                  <div className={`absolute top-3 right-3 bg-gradient-to-r ${brochure.color} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.5)]`}>PDF</div>
                </div>

                {/* Info panel */}
                <div className="p-5">
                  <h4 className="text-white font-bold text-base leading-tight">{brochure.title}</h4>
                  <p className="text-neutral-400 text-sm mt-0.5">{brochure.subtitle}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-600 uppercase tracking-widest font-semibold">Brochure</span>
                    <div className="flex items-center gap-1.5 text-[#a033ff] text-xs font-semibold group-hover:text-[#ff3388] transition-colors duration-300">
                      <ExternalLink size={12} />
                      View PDF
                    </div>
                  </div>
                </div>

                {/* Hover glow line */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${brochure.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        ) : activeCategory === 'UIUX' ? (
          /* Exact Collage Layout for UIUX */
          (() => {
            const getImg = (kw: string) => filteredArtworks.find(a => a.image.toLowerCase().includes(kw.toLowerCase()));
            
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

            const usedIds = [cinemood, naroda, rentEasy, rewear, tech, industrial, mobile1, mobile2, mobile3, mobile4, mobile5, mediscope]
              .filter(Boolean)
              .map(a => a!.id);
              
            const otherArtworks = filteredArtworks.filter(a => !usedIds.includes(a.id));

            const renderCard = (artwork: any) => {
              if (!artwork) return null;
              return (
                <div
                  key={artwork.id}
                  className="group relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_30px_rgba(160,51,255,0.15)] bg-transparent w-full h-full"
                  onClick={() => setLightboxImage(artwork)}
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[1.05]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <button 
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 hover:bg-[#ff3388]/60 hover:border-[#ff3388] z-10"
                    onClick={(e) => { e.stopPropagation(); }}
                  >
                    <Heart size={16} className="text-white" />
                  </button>
                </div>
              );
            };

            return (
              <div className="flex flex-col gap-5 w-full">
                {/* Main Split: Left (Cinemood) vs Right (Everything Else) */}
                <div className="flex flex-col lg:flex-row gap-5 w-full">
                  
                  {/* Left Column: Cinemood (Spans full height naturally) */}
                  <div className="w-full lg:w-[28%] flex flex-col gap-5">
                    {renderCard(cinemood)}
                    {mediscope && (
                      <div className="w-[260px]">
                        {renderCard(mediscope)}
                      </div>
                    )}
                  </div>
                  
                  {/* Right Section: Contains the grid and mobile screens */}
                  <div className="w-full lg:w-[72%] flex flex-col gap-5">
                    
                    {/* Top part of Right Section: 2 Columns with 3:2 ratio */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
                      
                      {/* Left Side (Spans 3 cols): Naroda, RentEasy, Tech Opportunities */}
                      <div className="lg:col-span-3 flex flex-col gap-5">
                        {renderCard(naroda)}
                        {renderCard(rentEasy)}
                        {renderCard(tech)}
                      </div>
                      
                      {/* Right Side (Spans 2 cols): ReWear, Industrial */}
                      <div className="lg:col-span-2 flex flex-col gap-5">
                        {renderCard(rewear)}
                        {renderCard(industrial)}
                      </div>
                    </div>

                    {/* Bottom part of Right Section: 5 Mobile Screens in exactly ONE row with the same size! */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 w-full mt-auto">
                      {renderCard(mobile1)}
                      {renderCard(mobile2)}
                      {renderCard(mobile3)}
                      {renderCard(mobile4)}
                      {renderCard(mobile5)}
                    </div>
                    
                  </div>
                </div>

                {/* Any remaining unmatched artworks */}
                {otherArtworks.length > 0 && (
                  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 w-full mt-5">
                    {otherArtworks.map(renderCard)}
                  </div>
                )}
              </div>
            );
          })()
        ) : activeCategory === 'group' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {filteredArtworks.map((artwork) => {
              const isWide = artwork.image.endsWith('11.webp');
              return (
                <div
                  key={artwork.id}
                  className={`group relative rounded-[20px] overflow-hidden border border-white/[0.03] bg-[#0c0d1a] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_30px_rgba(160,51,255,0.15)] ${
                    isWide ? 'col-span-1 sm:col-span-2' : 'col-span-1'
                  }`}
                  onClick={() => setLightboxImage(artwork)}
                >
                  <div className="w-full relative overflow-hidden flex items-center justify-center">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[1.05]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <h4 className="text-white text-base font-bold tracking-wide">{artwork.title}</h4>
                      <p className="text-purple-400 text-xs font-medium mt-0.5">{artwork.medium}</p>
                    </div>
                    <button 
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 hover:bg-[#ff3388]/40 hover:border-[#ff3388] z-10"
                      onClick={(e) => { e.stopPropagation(); }}
                    >
                      <Heart size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Standard Masonry Layout for all other categories */
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 w-full">
            {filteredArtworks
              .filter(a => a.title !== "L10")
              .map((artwork) => (
                <div
                  key={artwork.id}
                  className="break-inside-avoid mb-5 group relative rounded-[20px] overflow-hidden border border-white/[0.03] bg-[#0c0d1a] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_30px_rgba(160,51,255,0.15)]"
                  onClick={() => setLightboxImage(artwork)}
                >
                  {/* Artwork Image in Original Size */}
                  <div className="w-full relative overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className={`w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[1.05] ${transparentCelebs.includes(artwork.image) ? "bg-[#e2e8f0]" : ""}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>

                  {/* Heart Button */}
                  <button 
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 hover:bg-[#ff3388]/40 hover:border-[#ff3388] z-10"
                    onClick={(e) => { e.stopPropagation(); /* Prevent opening lightbox */ }}
                  >
                    <Heart size={16} className="text-white" />
                  </button>
                </div>
              ))}
          </div>
        )}



        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={32} />
            </button>

            <div className="max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-700">
              <div className="aspect-video flex items-center justify-center bg-black/20">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {lightboxImage.title}
                </h3>
                <p className="text-amber-400 mb-4">{lightboxImage.medium}</p>
                <p className="text-neutral-300">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* ===== PDF Viewer Modal ===== */}
        {activePdf && (
          <div
            className="fixed inset-0 z-[60] flex flex-col bg-black/95 backdrop-blur-md"
            onClick={(e) => { if (e.target === e.currentTarget) setActivePdf(null); }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-neutral-900/90 border-b border-white/[0.06] backdrop-blur-md flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${activePdf.color} flex items-center justify-center shadow-lg`}>
                  <FileText size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-tight">{activePdf.title}</h3>
                  <p className="text-neutral-400 text-xs">{activePdf.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activePdf.file}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#a033ff] to-[#ff3388] text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(160,51,255,0.3)]"
                >
                  <Download size={13} />
                  Download
                </a>
                <button
                  onClick={() => setActivePdf(null)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 relative overflow-hidden">
              <iframe
                src={`${activePdf.file}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                className="w-full h-full border-0"
                title={activePdf.title}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Gallery;
