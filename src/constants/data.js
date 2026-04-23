import { C } from "../design-system";

export const NAV_LINKS = ["Work", "Experience", "Skills", "Process", "Contact"];

export const HERO_STATS = [
  ["5+", "Years Exp."],
  ["27+", "Apps Shipped"],
  ["12+", "Store Releases"],
];

export const BRANDS = [
  "CODED REALITIES",
  "PRIME HR",
  "BROWN ONIONS",
  "ZINGO",
  "STATE LIFE",
  "SH SOLUTIONS",
  "PLAY STORE",
  "APP STORE",
  "FIREBASE",
  "ORACLE APEX",
];

export const PROJECTS = [
  // ── Live on stores ──────────────────────────────────────────
  {
    id: 9,
    title: "Pashmina Beauty Studio",
    tag: "Lifestyle · Beauty",
    desc: "Comprehensive beauty & wellness platform for Pashmina Beauty Studio. Clients book appointments, browse clinic-approved skincare products, track treatment progress, and receive personalised aesthetic care plans — with secure payments and smart notifications.",
    tech: ["React Native", "iOS", "Coded Realities"],
    bg: C.sage,
    accent: C.charcoal,
    textOnAccent: "#b7c6c2",
    storeLinks: {
      appStore: "https://apps.apple.com/us/app/pashmina-beauty-studio/id6761359574",
      website: "https://pashminabeauty.com/",
    },
  },
  {
    id: 8,
    title: "Sehat Sahulat Program",
    tag: "Healthcare",
    desc: "Mobile access to healthcare centers with a feedback and complaints pipeline — built for the national Sehat Sahulat program.",
    tech: ["Flutter", "Node.js", "Dart"],
    bg: C.charcoal,
    accent: C.yellow,
    textOnAccent: "#171e19",
    images: ["/projects/sehat.png", "/projects/kpk-cover.png"],
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.statelife.kpksspvtwo&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/state-life-sehat-card-plus/id6738374244",
    },
  },
  {
    id: 7,
    title: "Balochistan Health Card",
    tag: "Gov · Healthcare",
    desc: "Locates nearby healthcare centers via Google Maps, tracks remaining treatment balance, and routes citizen complaints.",
    tech: ["Flutter", "Google Maps", "APEX"],
    bg: C.yellow,
    accent: C.charcoal,
    textOnAccent: "#ffe17c",
    images: [
      "/projects/bhcp.png",
      "/projects/bhcp-2.png",
      "/projects/bhcp-home.png",
      "/projects/bhcp-map.png",
      "/projects/bhcp-balance.png",
      "/projects/bhcp-complaints.png",
      "/projects/bhcp-menu.png",
    ],
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.statelife.bhpssp&pcampaignid=web_share",
    },
  },
  // ── Privately distributed ───────────────────────────────────
  {
    id: 4,
    title: "Patient Management System",
    tag: "Healthcare",
    desc: "Geofenced doctor attendance with offline-ready visit forms, photo capture, and audio feedback across multiple hospitals.",
    tech: ["Flutter", "Oracle APEX", "iOS / Android"],
    bg: C.yellow,
    accent: C.charcoal,
    textOnAccent: "#ffe17c",
    images: [
      "/projects/pms.png",
      "/projects/pms-2.png",
      "/projects/pms-dashboard.png",
      "/projects/pms-attendance.png",
      "/projects/pms-complaints.png",
      "/projects/pms-hospital.png",
      "/projects/pms-report.png",
    ],
    privateDistribution: true,
  },
  {
    id: 5,
    title: "MOC File Management",
    tag: "iPad · Productivity",
    desc: "Custom canvas for annotating files with Apple Pencil. ML model converts handwritten remarks into computer-readable text.",
    tech: ["Flutter", "Apple Pencil", "ML Model"],
    bg: C.charcoal,
    accent: C.yellow,
    textOnAccent: "#171e19",
    images: [
      "/projects/moc.jpg",
      "/projects/moc-2.jpg",
      "/projects/moc-dashboard.jpg",
      "/projects/moc-canvas.jpg",
      "/projects/moc-edit.jpg",
      "/projects/moc-list.jpg",
      "/projects/moc-notes.jpg",
    ],
    device: "tablet",
    privateDistribution: true,
  },
  {
    id: 6,
    title: "Smart Clock",
    tag: "Sports · Lifestyle",
    desc: "Personalized football news, live match schedules, and an always-on clock. Unified mobile and tablet experience.",
    tech: ["React Native", "Node.js", "Responsive"],
    bg: C.sage,
    accent: C.charcoal,
    textOnAccent: "#b7c6c2",
    images: [
      "/projects/smart-clock.png",
      "/projects/smart-clock-2.png",
      "/projects/sc-dashboard.png",
      "/projects/sc-details.png",
      "/projects/sc-matches.png",
      "/projects/sc-preferences.png",
      "/projects/sc-ipad.png",
    ],
    privateDistribution: true,
  },
  // ── Placeholder work ────────────────────────────────────────
  {
    id: 1,
    title: "Pulse Dashboard",
    tag: "SaaS Product",
    desc: "Real-time analytics platform for e-commerce teams. Serves 50k+ daily users with sub-100ms query times.",
    tech: ["React", "D3.js", "Node.js"],
    bg: C.yellow,
    accent: C.charcoal,
    textOnAccent: "#ffe17c",
  },
  {
    id: 2,
    title: "Bloom Rebrand",
    tag: "Brand Identity",
    desc: "Full visual identity for a wellness startup — logo, typography, color system, motion language and design tokens.",
    tech: ["Figma", "Branding", "Design Sys."],
    bg: C.sage,
    accent: C.charcoal,
    textOnAccent: "#b7c6c2",
  },
  {
    id: 3,
    title: "Orbit CMS",
    tag: "Web Application",
    desc: "Headless CMS with a custom block editor and drag-and-drop layout engine. Reduced content ops time by 60%.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    bg: C.charcoal,
    accent: C.yellow,
    textOnAccent: "#171e19",
  },
];

export const SKILLS = [
  {
    icon: "▲",
    title: "Mobile Development",
    desc: "Flutter and React Native for cross-platform iOS and Android apps. 7 releases across the Play Store and App Store.",
  },
  {
    icon: "⊞",
    title: "Frontend Dev",
    desc: "React, Next.js, TypeScript. Fast, accessible, and tested. Performance is non-negotiable.",
  },
  {
    icon: "✦",
    title: "AI-First Workflows",
    desc: "MCP, agentic AI, and AI-accelerated planning and implementation — practical speed, not trend-chasing.",
  },
  {
    icon: "◉",
    title: "Team Leadership",
    desc: "Sprint planning, code review, mentorship, and removing delivery blockers for frontend and mobile teams.",
  },
  {
    icon: "⬛",
    title: "API Integration",
    desc: "REST, GraphQL, Firebase, Oracle APEX, PL/SQL — connecting products to the data and tools users rely on.",
  },
  {
    icon: "◎",
    title: "Product Development",
    desc: "Figma-to-development execution, release management, and end-to-end ownership from requirements to App Store.",
  },
];

export const STEPS = [
  {
    num: "01",
    label: "Discover",
    desc: "Deep-dive into your goals, users, and competitive landscape before writing a single line of code.",
    color: C.sage,
  },
  {
    num: "02",
    label: "Design",
    desc: "Rapid iteration from sketches to high-fidelity mockups. Feedback loops built in from day one.",
    color: C.yellow,
  },
  {
    num: "03",
    label: "Deliver",
    desc: "Clean, documented code shipped on time. Optimized for performance and handoff-ready.",
    color: "#fff",
  },
];

export const PROCESS_STATS = [
  ["27+", "Apps Delivered"],
  ["5+", "Years Experience"],
  ["12+", "Store Releases"],
  ["100%", "On-Time Delivery"],
];

export const PERSONAS = [
  {
    role: "For Startups",
    headline: "Go from idea to launch, fast.",
    points: ["MVP in 4–6 weeks", "Investor-ready design", "Scalable foundation"],
    bg: C.sage,
    textColor: "#000",
    shadowColor: "#000",
  },
  {
    role: "For Scale-Ups",
    headline: "Redesign. Rebuild. Outperform.",
    points: ["Conversion rate optimization", "Design system rollout", "Full-stack modernization"],
    bg: C.yellow,
    textColor: "#000",
    shadowColor: "#000",
    featured: true,
  },
  {
    role: "For Agencies",
    headline: "White-label design & dev.",
    points: ["Senior overflow capacity", "NDA-friendly", "Consistent on deadline"],
    bg: C.dark,
    textColor: "#fff",
    shadowColor: "#ffe17c",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Saad is a calm, composed, and dependable professional who consistently demonstrates readiness to take on challenging tasks. His strong problem-solving mindset drives innovative improvements in his work. He is quick to learn new skills and remains highly productive in all assigned responsibilities. Saad will undoubtedly be a valuable asset to any organization he serves.",
    author: "Tariq Mahmood",
    role: "System Architect & Information Security Expert",
    stars: 5,
  },
  {
    quote: "Working with Saad transformed our product. The attention to design detail and technical depth is unlike anything I'd seen before.",
    author: "Sheroze",
    role: "Coded Realities",
    stars: 5,
  },
  {
    quote: "Our conversion rate jumped 34% post-redesign. Saad understood our users better than our own team did.",
    author: "Lena R.",
    role: "Head of Product, Orbit",
    stars: 5,
  },
];

export const EXPERIENCE = [
  {
    company: "Freelance",
    role: "Freelance Mobile & Frontend Developer",
    period: "2021 — Present · 5+ yrs",
    location: "Remote",
    points: [
      "Shipped 15+ apps for freelance clients across healthcare, productivity, e-commerce, and internal tools.",
      "Delivered end-to-end builds from requirements and UI implementation to release support and post-launch maintenance.",
      "Worked directly with founders and teams to scope MVPs, prioritize features, and ship on deadline.",
    ],
    accent: C.yellow,
  },
  {
    company: "Coded Realities",
    role: "Frontend & Mobile Architect",
    period: "Feb 2026 — Present",
    location: "Arizona, United States (Remote)",
    points: [
      "Leads a cross-functional team delivering AI-powered solutions and MVPs within a one-month cadence.",
      "Drives sprint planning, delegation, and execution to keep delivery aligned with business goals.",
      "Mentors developers and champions an AI-first workflow across planning and implementation.",
    ],
    accent: C.yellow,
  },
  {
    company: "Prime Human Resource Services",
    role: "System Specialist · IT Support Officer · Senior Office Assistant",
    period: "Feb 2023 — Feb 2026 · 3 yrs 1 mo",
    location: "Islāmābād, Pakistan",
    points: [
      "Shipped 4 apps to the Play Store and 3 to the App Store across healthcare and internal products.",
      "Built Vector-to-Text variations (image + text, embedded results) and deployed ML models on-device and server-side.",
      "Owned iOS-specific work including Apple Pencil support on iPad, plus the in-house 2FA system and audio models.",
      "Integrated Oracle APEX APIs, PL/SQL queries, Firebase (storage + notifications), and Google Maps for hospital locators.",
    ],
    accent: C.sage,
  },
  {
    company: "Brown Onions",
    role: "Mobile Developer",
    period: "Nov 2024 — Feb 2025",
    location: "United Arab Emirates (Remote)",
    points: [
      "Delivered mobile features against tight timelines for a UAE-based product team.",
    ],
    accent: C.yellow,
  },
  {
    company: "Zingo",
    role: "Mobile Application Developer",
    period: "Feb 2024 — Jun 2024",
    location: "Pakistan (Contract)",
    points: [
      "Built a responsive, cross-platform e-commerce app for SH Solutions spanning Windows, macOS, and the web.",
      "Converted Figma designs into high-fidelity Flutter UI and integrated Firebase for real-time data and third-party APIs.",
      "Favored building core functionality from scratch over third-party packages for long-term scalability and maintainability.",
    ],
    accent: C.sage,
  },
  {
    company: "State Life Insurance Corporation of Pakistan",
    role: "Intern",
    period: "Jan 2023 — Feb 2023",
    location: "Islāmābād, Pakistan",
    points: [
      "First hands-on exposure to enterprise mobile and backend development.",
    ],
    accent: C.yellow,
  },
];

export const EDUCATION = {
  school: "National University of Computer and Emerging Sciences",
  degree: "Bachelor of Science in Computer Science",
  period: "2018 — 2022",
};

export const CERTIFICATIONS = [
  "Fundamentals for Istio — Solo.io",
  "Model Context Protocol (MCP): Hands-On with Agentic AI",
  "GitOps Certified for Argo",
  "Crash Course on Python",
];

export const FOOTER_COLS = [
  {
    title: "Navigate",
    links: [
      { label: "Work",       section: "work" },
      { label: "Experience", section: "experience" },
      { label: "Skills",     section: "skills" },
      { label: "Process",    section: "process" },
      { label: "Contact",    section: "contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Mobile Development" },
      { label: "Frontend Dev" },
      { label: "AI-First Workflows" },
      { label: "Team Leadership" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/saadtanveer-hope" },
      { label: "GitHub",   href: "https://github.com/SaadTanveer14" },
      { label: "Instagram", href: "https://www.instagram.com/sata_dev" },
      { label: "Email",    href: "mailto:saad.tanveer11400@gmail.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy" },
      { label: "Terms of Use" },
      { label: "Cookie Policy" },
    ],
  },
];
