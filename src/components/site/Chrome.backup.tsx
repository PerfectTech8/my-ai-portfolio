import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { mailLink, site, waLink } from "@/config/site";
import { WhatsAppIcon } from "./ui";


const links = ["Work", "Services", "Process", "About", "Contact"];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    onScroll();
    window.addEventListener("scroll", onScroll);
    document.addEventListener("click", onClick);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("click", onClick); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b bg-background/70 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <nav className="container-lux flex min-w-0 h-20 items-center justify-between gap-2">
        <a href="#top" className="shrink-0 font-serif text-xl tracking-wide sm:text-2xl">Nnanta <span className="text-gold">Charles</span></a>
        <ul className="hidden gap-10 lg:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-gold">{l}</a></li>
          ))}
        </ul>
        <div className="relative" ref={ref}>
          <button onClick={() => setOpen((o) => !o)} className="btn-gold shrink-0 !px-3 !py-2.5 !text-[10px] sm:!px-5 sm:!text-xs" aria-expanded={open}>Get in Touch</button>
          {open && (
            <div className="absolute right-0 mt-3 w-56 border bg-popover p-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-3 text-sm transition-colors hover:bg-accent hover:text-gold"><WhatsAppIcon /> WhatsApp</a>
              <a href={mailLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-3 text-sm transition-colors hover:bg-accent hover:text-gold"><Mail className="h-4 w-4 text-gold" strokeWidth={1.25} /> Email</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export function Floating() {
  return (
    <>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Message me on WhatsApp"
        className="group fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 bg-background/80 backdrop-blur transition-all duration-300 hover:border-gold md:bottom-8 md:right-8">
        <WhatsAppIcon className="h-6 w-6" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap border bg-popover px-3 py-2 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">Message me on WhatsApp</span>
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t bg-background/90 p-3 backdrop-blur-xl md:hidden">
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold !py-3"><WhatsAppIcon /> WhatsApp</a>
        <a href={mailLink()} target="_blank" rel="noopener noreferrer" className="btn-outline-gold !py-3"><Mail className="h-4 w-4" strokeWidth={1.25} /> Email</a>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t pb-28 pt-16 md:pb-12">
      <div className="container-lux grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Nnanta <span className="text-gold">Charles</span></p>
          <p className="mt-3 text-sm text-muted-foreground">{site.role}</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-gold">{l}</a></li>)}
        </ul>
        <div className="space-y-3 text-sm text-muted-foreground">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold"><WhatsAppIcon /> {site.whatsappDisplay}</a>
          <a href={mailLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold"><Mail className="h-4 w-4 text-gold" strokeWidth={1.25} /> {site.email}</a>
          <div className="flex gap-5 pt-2">
            {Object.entries(site.socials).map(([k, v]) => <a key={k} href={v} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.2em] hover:text-gold">{k}</a>)}
          </div>
        </div>
      </div>
      <div className="container-lux mt-14 flex justify-between border-t pt-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Nnanta Charles. All rights reserved.</span>
        <a href="#privacy" className="hover:text-gold" title="Privacy: enquiries are used only to respond to you and are never shared.">Privacy</a>
      </div>
    </footer>
  );
}
