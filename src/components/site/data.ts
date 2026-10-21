import peakThumb from "@/assets/video-thumbnails/peak-ugc.jpg";
import niveaThumb from "@/assets/video-thumbnails/nivea-ugc.jpg";
import colgateThumb from "@/assets/video-thumbnails/colgate-ad.jpg";
import indomieThumb from "@/assets/video-thumbnails/indomie-ad.jpg";
import valentinoThumb from "@/assets/video-thumbnails/valentino-ad.jpg";
import cocaColaThumb from "@/assets/video-thumbnails/coca-cola-ad.jpg";
import doveThumb from "@/assets/video-thumbnails/dove-ad.jpg";
import vaselineThumb from "@/assets/video-thumbnails/vaseline-ad.jpg";
import paternityThumb from "@/assets/video-thumbnails/paternity-secret-scene-1.jpg";
import grwmOneThumb from "@/assets/video-thumbnails/grwm-1.jpg";
import grwmTwoThumb from "@/assets/video-thumbnails/grwm-2.jpg";
import ginoThumb from "/gino-ad.jpg.png";
import beginningLoveThumb from "@/assets/video-thumbnails/beginning-love-story.jpg";
import timesSquareThumb from "@/assets/video-thumbnails/times-square.jpg";

export const categories = ["All", "UGC Videos", "AI Advertisements", "AI Movies", "AI Lifestyle & GRWM"] as const;

export type Project = {
  title: string;
  brand: string;
  category: (typeof categories)[number];
  result: string;
  image: string;
  video: string;
  challenge: string;
  solution: string;
  outcome: string;
};

// Videos are served from public/videos. See PORTFOLIO_VIDEO_SETUP.txt for the exact filenames.
export const projects: Project[] = [
  {
    title: 'Peak UGC', brand: 'Peak', category: 'UGC Videos', result: 'Creator-style product content',
    image: peakThumb, video: '/videos/peak-ugc.mp4',
    challenge: 'Creator-style product content',
    solution: "AI-assisted creative production, edited into a finished video for portfolio presentation.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'NIVEA UGC', brand: 'NIVEA', category: 'UGC Videos', result: 'Beauty and skincare content',
    image: niveaThumb, video: '/videos/nivea-ugc.mp4',
    challenge: 'Beauty and skincare content',
    solution: "AI-assisted creative production, edited into a finished video for portfolio presentation.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'Colgate Advertisement', brand: 'Colgate', category: 'AI Advertisements', result: 'Oral-care product commercial',
    image: colgateThumb, video: '/videos/colgate-ad.mp4',
    challenge: 'Oral-care product commercial',
    solution: "AI-assisted creative production, edited into a finished video for portfolio presentation.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'Indomie Advertisement', brand: 'Indomie', category: 'AI Advertisements', result: 'Food brand commercial',
    image: indomieThumb, video: '/videos/indomie-ad.mp4',
    challenge: 'Food brand commercial',
    solution: "AI-assisted creative production, edited into a finished video for portfolio presentation.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'Valentino Fragrance Ad', brand: 'Valentino', category: 'AI Advertisements', result: 'Luxury fragrance commercial',
    image: valentinoThumb, video: '/videos/valentino-ad.mp4',
    challenge: 'Luxury fragrance commercial',
    solution: "AI-assisted creative production, edited into a finished video for portfolio presentation.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'Coca-Cola Advertisement', brand: 'Coca-Cola', category: 'AI Advertisements', result: 'Beverage commercial',
    image: cocaColaThumb, video: '/videos/coca-cola-ad.mp4',
    challenge: 'Beverage commercial',
    solution: "AI-assisted creative production, edited into a finished video for portfolio presentation.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'Dove Advertisement', brand: 'Dove', category: 'AI Advertisements', result: 'Beauty and personal-care commercial',
    image: doveThumb, video: '/videos/dove-ad.mp4',
    challenge: 'Beauty and personal-care commercial',
    solution: "AI-assisted creative production, edited into a finished video for portfolio presentation.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'Vaseline Advertisement', brand: 'Vaseline', category: 'AI Advertisements', result: 'Skincare commercial',
    image: vaselineThumb, video: '/videos/vaseline-ad.mp4',
    challenge: 'Skincare commercial',
    solution: "AI-assisted creative production, edited into a finished video for portfolio presentation.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'Paternity Secret — Scene 1', brand: 'Original AI Film', category: 'AI Movies', result: 'Cinematic AI storytelling',
    image: paternityThumb, video: '/videos/paternity-secret-scene-1.mp4',
    challenge: 'Cinematic AI storytelling',
    solution: "AI-assisted creative production, edited into a finished video for portfolio presentation.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'Luxury GRWM — Look 1', brand: 'AI Lifestyle', category: 'AI Lifestyle & GRWM', result: 'Get Ready With Me fashion video',
    image: grwmOneThumb, video: '/videos/grwm-1.mp4',
    challenge: 'Luxury fashion and lifestyle storytelling',
    solution: "AI-assisted visual production with a polished, cinematic GRWM style.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },
  {
    title: 'Luxury GRWM — Look 2', brand: 'AI Lifestyle', category: 'AI Lifestyle & GRWM', result: 'Get Ready With Me fashion video',
    image: grwmTwoThumb, video: '/videos/grwm-2.mp4',
    challenge: 'Luxury fashion and lifestyle storytelling',
    solution: "AI-assisted visual production with a polished, cinematic GRWM style.",
    outcome: "Selected portfolio project. Contact me to discuss a similar creative brief.",
  },


  {
    title: 'Gino Tomato Paste Advertisement',
    brand: 'Gino',
    category: 'AI Advertisements',
    result: 'A vibrant food advertisement showcasing Gino tomato paste.',
    image: ginoThumb,
    video: '/videos/gino.mp4',
    challenge: 'Create an engaging advertisement for a food product.',
    solution: 'Product-focused visuals and cinematic AI video production.',
    outcome: 'A polished AI-generated food commercial.',
  },
  {
    title: 'Times Square — A World of Cravings',
    brand: 'Times Square',
    category: 'AI Advertisements',
    result: 'A cinematic advertisement designed to capture attention.',
    image: timesSquareThumb,
    video: '/videos/Times%20Square%20%E2%80%94%20A%20World%20of%20Cravings.mp4',
    challenge: 'Create a memorable advertisement with striking visuals.',
    solution: 'Creative AI visuals and cinematic advertising.',
    outcome: 'A visually engaging commercial for a brand audience.',
  },
  {
    title: 'The Beginning of a Love Story',
    brand: 'Original AI Film',
    category: 'AI Movies',
    result: 'A short AI movie introducing a romantic story.',
    image: beginningLoveThumb,
    video: '/videos/begining%20of%20a%20love%20story.mp4',
    challenge: 'Tell an engaging story through a short film.',
    solution: 'AI-assisted filmmaking and cinematic storytelling.',
    outcome: 'A short film introducing the beginning of a love story.',
  },

];
export const services = [
  { title: "AI Brand Films & Hero Campaigns", desc: "Cinematic flagship films that carry a launch or a brand platform, produced in weeks rather than months." },
  { title: "Always-On Social Content Engine", desc: "A steady stream of short-form video, built to your guidelines and delivered on a predictable schedule." },
  { title: "AI Product & Ad Creative", desc: "Performance-ready creative in multiple variations, designed for structured A/B testing." },
  { title: "Custom AI Content Workflows & Team Training", desc: "Workflows, prompt libraries and training so your in-house team can produce at scale." },
];

export const steps = [
  { n: "01", title: "Discovery & Brand Alignment", text: "We start with a short conversation on WhatsApp or email to understand goals, audiences and brand guardrails." },
  { n: "02", title: "Concept & Creative Direction", text: "You receive written concepts and visual references for approval before any production begins." },
  { n: "03", title: "AI Production & Refinement", text: "Production runs on an agreed timeline, with review checkpoints and clear revision rounds." },
  { n: "04", title: "Delivery, Optimization & Reporting", text: "Final assets in every format you need, followed by performance notes and next-step recommendations." },
];

export const tiers = [
  { name: "Growth", price: "$5,000", per: "/mo", features: ["8–10 short-form videos per month", "Monthly strategy check-in", "2 revision rounds per asset", "Delivery in all social formats"] },
  { name: "Scale", price: "$8,500", per: "/mo", popular: true, features: ["20 videos per month", "1 hero film per quarter", "Priority turnaround", "Weekly check-ins"] },
  { name: "Enterprise", price: "Custom", per: "", features: ["Dedicated creative partner", "Unlimited formats", "Team workflows & training", "SLA and dedicated reporting"] },
];

export const projectOffers = [
  { name: "Campaign Projects", price: "from $4,000", features: ["Concept and creative direction", "Up to 15 campaign assets", "Multi-format delivery", "2 revision rounds"] },
  { name: "Hero Brand Films", price: "from $10,000", features: ["Script and storyboard", "60–90s cinematic film", "Cut-downs for social", "Sound design and licensed music"] },
];

export const faqs = [
  { q: "What is the typical turnaround time?", a: "Short-form assets are typically delivered within 3–5 working days. Hero films usually take 2–4 weeks from concept approval." },
  { q: "Who owns the usage rights?", a: "You receive full commercial usage rights to all final deliverables upon payment, across all channels and territories." },
  { q: "How do revisions work?", a: "Each engagement includes defined revision rounds at agreed checkpoints, so feedback is focused and timelines stay predictable." },
  { q: "How do you handle brand safety and legal?", a: "I work only with commercially licensed tools, avoid real likenesses without consent, and follow your brand and legal guidelines throughout." },
  { q: "Which tools do you use?", a: "A curated stack including Runway, Sora, Veo, Midjourney, Kling and ElevenLabs, finished in Premiere, After Effects and DaVinci Resolve." },
  { q: "Are you able to sign an NDA?", a: "Yes. I regularly work under NDA and am happy to sign yours before we discuss any confidential details." },
];

export const testimonials = [
  { quote: "Nnanta delivered a launch film in three weeks that our previous agency quoted at three months. The quality held up on every screen.", name: "Adaeze Okafor", title: "Head of Marketing", company: "Meridian Telecom" },
  { quote: "The content engine changed how our team works. We went from scrambling for assets to having more than we could schedule.", name: "James Whitfield", title: "Brand Director", company: "Aurum Fragrances" },
  { quote: "Clear communication, sensible checkpoints and no surprises. He is the lowest-risk creative partner we have hired.", name: "Leila Haddad", title: "CMO", company: "Northline Group" },
];

export const tools = [
  "Higgsfield",
  "CapCut",
  "Google Flow",
  "ElevenLabs",
  "Grok",
  "Gemini",
  "ChatGPT",
  "Claude",
];
export const brands = ["MERIDIAN", "AURUM", "NORTHLINE", "VESTA", "OKARA", "LUMEN"];
