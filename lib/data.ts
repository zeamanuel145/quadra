// All copy, names and numbers are PLACEHOLDERS. Replace them with your own.

export type RoleId = "social" | "video" | "photo" | "code";

export const brand = {
  name: "quadra",
  tagline: "Build a brand people remember: content, cuts, frames and code from one team.",
  email: "hello@quadra.studio",
  phone: "+1 555 010 2040",
  address: ["12 Studio Lane", "Your City, Country"],
};

export const roles: Record<RoleId, { label: string; short: string }> = {
  social: { label: "Social media manager", short: "Social" },
  video: { label: "Video editor", short: "Video" },
  photo: { label: "Photographer", short: "Photo" },
  code: { label: "Software engineer", short: "Code" },
};

export type Person = {
  id: string;
  name: string;
  role: RoleId;
  bio: string;
  skills: string[];
  email: string;
};

export const team: Person[] = [
  {
    id: "maya",
    name: "Yafet yaregal",
    role: "social",
    bio: "Plans, writes and publishes content that grows communities. Strategy first, then a calendar you can actually keep.",
    skills: ["Content strategy", "Community", "Paid social", "Analytics"],
    email: "maya@quadra.studio",
  },
  {
    id: "leo",
    name: "Natan melaku ",
    role: "video",
    bio: "Cuts short-form reels and long-form stories with clean pacing, sound design and colour that matches your brand.",
    skills: ["Reels and Shorts", "Colour grading", "Motion graphics", "Sound"],
    email: "leo@quadra.studio",
  },
  {
    id: "nora",
    name: "Yared gebru",
    role: "photo",
    bio: "Shoots portraits, products and events in natural light, and delivers edited sets that are ready to post.",
    skills: ["Portraits", "Product", "Events", "Retouching"],
    email: "nora@quadra.studio",
  },
  {
    id: "sam",
    name: "Zeamanuel fetene",
    role: "code",
    bio: "Builds fast, accessible websites and web apps, from landing pages to full products with accounts and payments.",
    skills: ["Next.js", "TypeScript", "APIs", "Performance"],
    email: "sam@quadra.studio",
  },
];

export type Project = {
  id: string;
  title: string;
  role: RoleId;
  client: string;
  result: string;
  year: string;
};

export const projects: Project[] = [
  { id: "p1", title: "Launch campaign", role: "social", client: "Oak and Ember", result: "+212% reach in 8 weeks", year: "2026" },
  { id: "p2", title: "Brand reel", role: "video", client: "Northline Cycles", result: "1.4M views on Reels", year: "2026" },
  { id: "p3", title: "Spring catalogue", role: "photo", client: "Fold Studio", result: "120 edited product shots", year: "2026" },
  { id: "p4", title: "Booking platform", role: "code", client: "Clearwater Spa", result: "Load time under 1 second", year: "2026" },
  { id: "p5", title: "Creator growth plan", role: "social", client: "Daily Brew", result: "38K new followers", year: "2025" },
  { id: "p6", title: "Founder interview", role: "video", client: "Basecamp Labs", result: "Cut in 3 days", year: "2025" },
  { id: "p7", title: "Team portraits", role: "photo", client: "Veridian Group", result: "40 people in one day", year: "2025" },
  { id: "p8", title: "Client dashboard", role: "code", client: "Kemba Finance", result: "Used by 9K customers", year: "2025" },
];

export const clients = [
  "Oak and Ember", "Northline", "Fold Studio", "Clearwater",
  "Daily Brew", "Basecamp", "Veridian", "Kemba",
];

export const testimonials = [
  { quote: "They run our socials, edit our videos, shoot our products and built our site. One team, one brief, no chasing.", name: "Michael Kaizer", title: "CEO of Basecamp Corp" },
  { quote: "The reel Natan melaku cut for us got more views in a week than everything else we posted last year.", name: "Dana Whitfield", title: "Founder of Northline Cycles" },
  { quote: "Yared gebru made our whole team look relaxed and real. We use those portraits everywhere.", name: "Priya Raman", title: "People lead at Veridian" },
  { quote: "Zeamanuel fetene shipped the booking site early and it loads instantly on phones. Bookings went up the first month.", name: "Tom Okafor", title: "Owner of Clearwater Spa" },
  { quote: "Yafet yaregal gave us a content calendar we could stick to and our engagement doubled.", name: "Elise Moreau", title: "Marketing at Daily Brew" },
];

export const barData = [
  { m: "Jan", delivered: 46, open: 34 },
  { m: "Feb", delivered: 58, open: 48 },
  { m: "Mar", delivered: 74, open: 82 },
  { m: "Apr", delivered: 62, open: 52 },
  { m: "May", delivered: 54, open: 44 },
];

export const radar = [
  { k: "Strategy", v: 0.8 },
  { k: "Story", v: 0.92 },
  { k: "Craft", v: 0.96 },
  { k: "Speed", v: 0.7 },
  { k: "Code", v: 0.85 },
  { k: "Polish", v: 0.78 },
];

export const stats = [
  { label: "Projects", value: "150+", text: "Delivered across social, video, photo and web for clients in 12 countries." },
  { label: "Repeat clients", value: "92%", text: "Of our clients come back for a second project within a year." },
  { label: "Turnaround", value: "5 days", text: "Average time from brief to first draft, whichever craft you need." },
];

export const faqs = [
  { q: "What can you help me with?", a: "Social media management, video editing, photography and software development. Hire one of us for a single job, or the whole team for a full campaign." },
  { q: "Can I hire just one of you?", a: "Yes. Every project starts with the person whose craft you need, and we pull in the others only when it helps." },
  { q: "How do I start a project?", a: "Send us your email below or write to us directly. We reply within one working day with a few questions and a time to talk." },
  { q: "How long does a project take?", a: "A reel or photo set is usually 3 to 5 days. A content plan takes a week to set up. Websites take 3 to 6 weeks depending on size." },
  { q: "Can you work with my existing brand?", a: "Yes. Send us your logo, colours and any past content, and we will match them across posts, edits, photos and your site." },
];
