// ============================================================
// HERO
// ============================================================
export const HERO = {
  name: "Eduardo Peña",
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Places", href: "#places" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

// ============================================================
// ABOUT
// ============================================================
export const ABOUT = {
  headline: "Senior at UF building things at the intersection of code and design.",
  paragraphs: [
    "I'm a senior Computer Science student at the University of Florida with a minor in Digital Arts and Sciences. I like building things people actually use — most recently an iOS app for cutting household food waste.",
    "Outside school I'm usually somewhere with a camera. Lisbon, Porto, Budapest. I keep a running list of food places I won't shut up about.",
    "Joining Morgan Stanley as a Technology Analyst after graduation.",
  ],
  photoSrc: "/img/about/eddie.jpg", // we'll add the actual photo Day 5
  photoAlt: "Eduardo Peña",
} as const;

// ============================================================
// EXPERIENCE
// ============================================================
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;       // "May 2025 — Aug 2025"
  summary: string;
  bullets: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Incoming Technology Analyst",
    company: "Morgan Stanley",
    location: "New York, NY",
    period: "Starting 2026",
    summary: "Application and web development on the firm's technology platforms.",
    bullets: [
      "Met team at SHPE National Convention",
      "Focus on full-stack engineering across internal platforms",
    ],
  },
  {
    role: "Lead Backend Developer",
    company: "ByteWaste (Senior Capstone)",
    location: "Gainesville, FL",
    period: "Aug 2025 — Apr 2026",
    summary: "iOS app that cuts household food waste through pantry tracking and recipe matching.",
    bullets: [
      "Built Supabase backend with row-level security for multi-user pantries",
      "Integrated Edamam API for nutrition lookup and recipe search across 1,000+ scanned items",
      "Wired Mistral-hosted LLM via Navigator AI for waste-aware recipe recommendations",
      "Demoed at UF Senior Showcase, Rion Ballroom",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "University of Florida",
    location: "Gainesville, FL",
    period: "2024 — 2025",
    summary: "Research experience under faculty mentorship.",
    bullets: [
      "Created python program",
    ],
  },
  {
    role: "Member",
    company: "Society of Hispanic Professional Engineers (SHPE)",
    location: "UF Chapter",
    period: "2022 — Present",
    summary: "Active member; connected with industry recruiters at the national convention.",
    bullets: [
      "Connected with Bank of America and Morgan Stanley at SHPE National Convention 2024",
      "Mentorship work with first-generation engineering students",
    ],
  },
];

// ============================================================
// PROJECTS  (Day 4 will use these)
// ============================================================
export interface Project {
  title: string;
  blurb: string;
  description: string;
  tech: string[];
  imageSrc: string;
  links?: { label: string; href: string }[];
}

export const PROJECTS: Project[] = [
  {
    title: "ByteWaste",
    blurb: "iOS app for reducing household food waste",
    description: "Pantry tracking, expiration notifications, recipe matching, and gamification. Built with a team of four under Dr. Tie Liu.",
    tech: ["Swift", "SwiftUI", "Supabase", "Edamam API", "Mistral / Navigator AI"],
    imageSrc: "/img/projects/bytewaste.jpg",
    links: [
      { label: "GitHub", href: "#" }, // fill in real link
    ],
  },
  {
    title: "Pirate Ship Defense",
    blurb: "Arcade-style defense game in Processing",
    description: "Group project for an interactive media course. Wave-based enemy AI, scoring, multiple weapon types.",
    tech: ["Processing", "Java"],
    imageSrc: "/img/projects/pirate.jpg",
  },
  {
    title: "MemoryManager (Repto)",
    blurb: "Custom memory allocator in C",
    description: "Low-level systems project implementing malloc/free with first-fit allocation and coalescing.",
    tech: ["C", "Linux"],
    imageSrc: "/img/projects/memory.jpg",
  },
  {
    title: "Discord Auto-Claim Bot",
    blurb: "24/7 cloud-deployed monitoring bot",
    description: "Python bot that monitors target channels and executes claim actions automatically. Deployed to Railway for always-on operation.",
    tech: ["Python", "discord.py", "Railway"],
    imageSrc: "/img/projects/discord-bot.jpg",
  },
];

// ============================================================
// PLACES  (Day 5)
// ============================================================
export interface Place {
  city: string;
  country: string;
  year: string;
  takeaway: string;
  imageSrc: string;
}

export const PLACES: Place[] = [
  {
    city: "Lisbon",
    country: "Portugal",
    year: "2024",
    takeaway: "The pastéis de nata ruined every other custard tart for me.",
    imageSrc: "/img/places/lisbon.jpg",
  },
  {
    city: "Porto",
    country: "Portugal",
    year: "2024",
    takeaway: "Drink the green wine. Walk the bridge at sunset.",
    imageSrc: "/img/places/porto.webp",
  },
  {
    city: "Budapest",
    country: "Hungary",
    year: "2024",
    takeaway: "Thermal baths at 9am, ruin bars at 9pm.",
    imageSrc: "/img/places/budapest.webp",
  },
];

// ============================================================
// CONTACT
// ============================================================
export const CONTACT = {
  headline: "Let's talk.",
  email: "eduardojpena26@gmail.com", 
  socials: [
    { label: "GitHub", href: "https://github.com/YOUR_USERNAME" },
    { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME" },
  ],
} as const;