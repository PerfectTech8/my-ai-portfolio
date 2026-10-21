import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { mailLink, waLink } from "@/config/site";

export function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} text-whatsapp`} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42zm8.02-17.45A11.3 11.3 0 0 0 12.04.75C5.8.75.72 5.83.72 12.07c0 2 .52 3.94 1.51 5.65L.62 23.6l6.01-1.58a11.3 11.3 0 0 0 5.41 1.38h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.03-1.18-5.87-3.31-8.01z" />
    </svg>
  );
}

export function ContactPair({ topic, size = "sm" }: { topic?: string; size?: "sm" | "lg" }) {
  const pad = size === "sm" ? "!px-4 !py-2.5 !text-xs" : "";
  return (
    <div className="flex flex-wrap gap-3">
      <a href={waLink(topic)} target="_blank" rel="noopener noreferrer" className={`btn-gold ${pad}`}>
        <WhatsAppIcon /> {size === "lg" ? "Message Me on WhatsApp" : "WhatsApp"}
      </a>
      <a
  href={mailLink(topic)}
  target="_blank"
  rel="noopener noreferrer"
  className={`btn-outline-gold ${pad} inline-flex items-center justify-center text-center`}
>
  {size === "lg" ? "Email Me" : "Email"}
</a>
    </div>
  );
}

export function SectionHead({ label, title, intro }: { label: string; title: ReactNode; intro?: string }) {
  return (
    <FadeUp className="mb-16 max-w-3xl">
      <p className="label-caps mb-6">{label}</p>
      <h2 className="text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      {intro && <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </FadeUp>
  );
}
