import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Clapperboard, Layers, Mail, Megaphone, Play, Plus, Workflow, X } from "lucide-react";
import hero from "@/assets/hero.jpg";

import ugcImg from "@/assets/hero-ugc.jpg";
import adImg from "@/assets/hero-ad.jpg";
import movieImg from "@/assets/hero-movie.jpg";
import { mailLink, site, waLink } from "@/config/site";
import { brands, categories, faqs, projectOffers, projects, services, steps, testimonials, tiers, tools, type Project } from "./data";
import { ContactPair, FadeUp, SectionHead, WhatsAppIcon } from "./ui";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  const previews = [
    { label: "UGC Videos", blurb: "Authentic creator-style product content", image: ugcImg },
    { label: "AI Advertisements", blurb: "Premium, product-focused ad creative", image: adImg },
    { label: "AI Movies", blurb: "Cinematic, story-driven AI films", image: movieImg },
  ];
  return (
    <section id="top" className="relative flex min-h-0 items-end overflow-hidden pb-0 pt-20 md:pb-0">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        {/* Replace with <video autoPlay muted loop playsInline src="..."> for a showreel */}
        <motion.img initial={{ scale: 1.12, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2.4, ease: "easeOut" }}
          src={hero} alt="Cinematic figure standing in a beam of golden light" width={1920} height={1088} className="h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-overlay to-overlay" />
        <div className="absolute left-[12%] top-[10%] h-72 w-72 rounded-full bg-violet/15 blur-[110px]" />
        <div className="absolute right-[8%] top-[22%] hidden h-96 w-96 rounded-full bg-gold/10 blur-[140px] md:block" />
        <div className="absolute right-[18%] top-[40%] hidden h-64 w-64 rounded-full bg-violet/10 blur-[120px] md:block" />
      </motion.div>
      <div className="container-lux">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="label-caps mb-8 !text-[16px] !text-violet">AI VIDEO CREATOR · VISUAL STORYTELLER</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1.2 }} className="max-w-5xl text-[clamp(38px,6vw,64px)] font-bold leading-[1.05] tracking-tight">
          Ideas Into Videos.<br />Stories Into Experiences.
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1.2 }}>
          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-muted-foreground md:text-[18px]">
            Creating engaging UGC, cinematic AI advertisements, and compelling AI movies that bring ideas to life.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 [&_a]:!text-[15px]">
            <a href="#work" className="btn-violet">Explore My Work</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-outline-violet">Let's Create Together</a>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previews.map((p, i) => (
              <a key={p.label} href="#work" className="group relative flex h-full flex-col border border-border bg-card/40 backdrop-blur-sm transition-colors duration-500 hover:border-violet/60">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.label} width={1280} height={800} loading={i === 0 ? "eager" : "lazy"} className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-overlay opacity-40 transition-opacity duration-500 group-hover:opacity-15" />
                  <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full border border-violet/70 bg-background/30 backdrop-blur-sm"><Play className="h-4 w-4 text-violet" strokeWidth={1.25} /></span>
                </div>
                <div className="flex-1 border-t border-violet/25 px-5 py-4">
                  <p className="text-[16px] font-medium tracking-wide text-violet">{p.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>



      </div>
    </section>
  );
}



export function Work() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const list = projects.filter((p) => cat === "All" || p.category === cat);
  return (
    <section id="work" className="pt-4 pb-8">
      <div className="container-lux">
        
      <SectionHead label="Selected Work" title={<>A world of ideas, <em className="text-gold">brought to life.</em></>} intro="Explore my creative work across UGC content, AI-powered advertising, and cinematic storytelling." />

        <div className="mb-12 flex flex-wrap gap-6 border-b pb-6">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`text-xs uppercase tracking-[0.2em] transition-colors ${cat === c ? "text-gold" : "text-muted-foreground hover:text-foreground"}`}>{c}</button>
          ))}
        </div>
        <motion.div layout className="grid items-stretch gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.button layout key={p.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                onClick={() => setActive(p)} className="group flex h-full flex-col text-left">
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                  <img src={p.image} alt={`${p.title} — ${p.brand}`} loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-overlay opacity-40 transition-opacity duration-500 group-hover:opacity-10" />
                  <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100"><Play className="h-4 w-4 text-gold" strokeWidth={1.25} /></span>
                </div>
               <p className="label-caps mt-4 min-h-0 !tracking-[0.2em] !text-muted-foreground">{p.brand} · {p.category}</p>
<h3 className="mt-1 min-h-0 text-3xl leading-tight transition-colors group-hover:text-gold">{p.title}</h3>
<p className="mt-2 min-h-0 text-sm leading-relaxed text-muted-foreground">{p.result}</p>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] overflow-y-auto bg-background/95 backdrop-blur-xl" onClick={() => setActive(null)}>
            <motion.div initial={{ y: 30 }} animate={{ y: 0 }} className="container-lux py-16" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActive(null)} aria-label="Close" className="mb-8 ml-auto flex h-10 w-10 items-center justify-center border hover:border-gold hover:text-gold"><X className="h-4 w-4" /></button>
              <div className="aspect-video w-full bg-card">
              <video
  key={active.video}
  src={active.video}
  title={active.title}
  autoPlay
  controls
  playsInline
  className="block w-full h-auto max-h-[65vh] object-contain rounded-xl"
  style={{
    width: "100%",
    height: "auto",
    maxHeight: "65vh",
    objectFit: "contain",
  }}
/>
              </div>
              <div className="mt-12 grid gap-12 md:grid-cols-[1fr_2fr]">
                <div>
                  <p className="label-caps">{active.brand}</p>
                  <h3 className="mt-3 text-5xl">{active.title}</h3>
                  <div className="mt-8"><ContactPair topic={`a project like "${active.title}"`} /></div>
                </div>
                <div className="grid gap-8 sm:grid-cols-3">
                  {[["Challenge", active.challenge], ["Solution", active.solution], ["Result", active.outcome]].map(([h, t]) => (
                    <div key={h} className="border-t pt-5"><p className="label-caps mb-3">{h}</p><p className="text-sm leading-relaxed text-muted-foreground">{t}</p></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const pains = [
  ["Traditional production is slow and expensive", "AI-powered production delivers in days, at a fraction of the cost of crews, locations and reshoots."],
  ["Content volume demands keep growing", "A repeatable workflow produces dozens of assets a month without growing your headcount."],
  ["Quality is inconsistent across channels", "Every asset is built from one visual system, so your brand looks the same on every screen."],
];

export function ProblemSolution() {
  return (
     <section className="border-t bg-card py-12 md:py-16"> 
      <div className="container-lux">
        <SectionHead label="The Problem → The Solution" title={<>Production built for <em className="text-gold">how brands work now.</em></>} />
        <div className="grid md:grid-cols-2">
          <p className="label-caps mb-6 hidden !text-muted-foreground md:block">The challenge</p>
          <p className="label-caps mb-6 hidden md:block md:pl-12">My approach</p>
          {pains.map(([p, s], i) => (
            <div key={p} className="contents">
              <div className="border-t py-8 md:pr-12"><p className="font-serif text-2xl text-muted-foreground">{p}</p></div>
              <div className="border-t py-8 md:border-l md:pl-12"><p className="flex gap-4 text-base leading-relaxed"><ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.25} />{s}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const icons = [Clapperboard, Layers, Megaphone, Workflow];
export function Services() {
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container-lux">
        <SectionHead label="Services" title={<>Four ways <em className="text-gold">to work together.</em></>} />
        <div className="grid border-l border-t md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[i] ?? Clapperboard;
            return (
              <FadeUp key={s.title} delay={i * 0.08} className="group border-b border-r p-10 transition-colors duration-500 hover:bg-card md:p-14">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1} />
                <h3 className="mt-10 text-3xl">{s.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a href={waLink(s.title)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">Enquire <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></a>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="border-t bg-card py-12 md:py-16">
      <div className="container-lux">
        <SectionHead label="Process" title={<>Clear steps. <em className="text-gold">No surprises.</em></>} intro="Approval checkpoints at every stage, predictable timelines, and one point of contact from first message to final delivery." />
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.12} className="relative border-t border-gold/40 pt-8">
              <span className="absolute -top-[5px] left-0 h-2 w-2 rounded-full bg-gold" />
              <p className="font-serif text-5xl text-gold">{s.n}</p>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="pricing" className="py-12 md:py-16">
      <div className="container-lux">
        <SectionHead label="Engagement Models" title={<>Investment, <em className="text-gold">clearly stated.</em></>} />
        <p className="label-caps mb-8 !text-muted-foreground">A — Monthly retainers</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1} className={`relative flex flex-col border p-10 ${t.popular ? "border-gold bg-card" : ""}`}>
              {t.popular && <span className="label-caps absolute -top-3 left-10 bg-background px-3">Most Popular</span>}
              <h3 className="text-3xl">{t.name}</h3>
              <p className="mt-6"><span className="font-serif text-5xl">{t.price}</span><span className="text-muted-foreground">{t.per}</span></p>
              <ul className="mt-8 flex-1 space-y-3 border-t pt-8">
                {t.features.map((f) => <li key={f} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.25} />{f}</li>)}
              </ul>
              <div className="mt-10"><ContactPair topic={`the ${t.name} retainer`} /></div>
            </FadeUp>
          ))}
        </div>
        <p className="label-caps mb-8 mt-20 !text-muted-foreground">B — Project-based</p>
        <div className="grid gap-6 md:grid-cols-2">
          {projectOffers.map((o) => (
            <FadeUp key={o.name} className="flex flex-col justify-between gap-8 border p-10 sm:flex-row">
              <div>
                <h3 className="text-3xl">{o.name}</h3>
                <p className="mt-2 font-serif text-2xl text-gold">{o.price}</p>
                <ul className="mt-6 space-y-2">{o.features.map((f) => <li key={f} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.25} />{f}</li>)}</ul>
              </div>
              <div className="self-end"><ContactPair topic={o.name} /></div>
            </FadeUp>
          ))}
        </div>
        <p className="mt-12 text-center font-serif text-xl italic text-muted-foreground">Limited availability: I take on {site.clientsPerQuarter} new clients per quarter.</p>
        <div className="mx-auto mt-24 max-w-3xl">
          <p className="label-caps mb-8 text-center">Questions</p>
          {faqs.map((f, i) => (
            <div key={f.q} className="border-t last:border-b">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-6 text-left font-serif text-xl transition-colors hover:text-gold" aria-expanded={open === i}>
                {f.q}<Plus className={`h-4 w-4 shrink-0 text-gold transition-transform duration-500 ${open === i ? "rotate-45" : ""}`} strokeWidth={1.25} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i] ?? testimonials[0]!;
  const go = (d: number) => setI((i + d + testimonials.length) % testimonials.length);
  return (
    <section className="border-t bg-card py-12 md:py-16">
      <div className="container-lux text-center">
        <p className="label-caps mb-12">Client words</p>
        <div className="mx-auto min-h-[16rem] max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.figure key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.6 }}>
              <blockquote className="font-serif text-3xl italic leading-snug md:text-5xl">“{t.quote}”</blockquote>
              <figcaption className="mt-10 text-sm"><span className="text-foreground">{t.name}</span><span className="text-muted-foreground"> — {t.title}, {t.company}</span></figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6">
          <button onClick={() => go(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center border transition-colors hover:border-gold hover:text-gold"><ArrowLeft className="h-4 w-4" strokeWidth={1.25} /></button>
          <span className="text-xs tracking-[0.2em] text-muted-foreground">0{i + 1} / 0{testimonials.length}</span>
          <button onClick={() => go(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center border transition-colors hover:border-gold hover:text-gold"><ArrowRight className="h-4 w-4" strokeWidth={1.25} /></button>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const why = [["Speed", "Weeks, not months, from brief to delivery."], ["Craft", "Film-grade art direction on every frame."], ["Reliability", "Fixed checkpoints and predictable timelines."], ["Strategic thinking", "Content planned around business outcomes."]];
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container-lux grid items-center gap-16 md:grid-cols-2">
        <FadeUp><img src="/images/my-photo.jpeg" alt="Portrait of Nnanta Charles" loading="lazy" width={896} height={1152} className="w-full object-cover grayscale-[30%]" /></FadeUp>
        <FadeUp delay={0.15}>
          <p className="label-caps mb-6">About</p>
          <h2 className="text-4xl leading-tight md:text-6xl">I Turn Ideas Into <em className="text-gold">Visual Experiences.</em></h2>
         
            <p className="mt-8 leading-relaxed text-muted-foreground">
              I'm Nnanta Charles, an AI video creator specializing in cinematic
              storytelling, AI-powered advertisements, and engaging visual content.
              I combine creativity with emerging AI tools to transform ideas into
              compelling videos for brands, businesses, and digital audiences.
              From product commercials to AI-generated films and lifestyle content,
              my focus is on creating visuals that capture attention and bring
              stories to life.
            </p>

          <ul className="mt-10 grid grid-cols-2 gap-6 border-t pt-8">
            {why.map(([h, d]) => <li key={h}><p className="font-serif text-xl text-gold">{h}</p><p className="mt-1 text-sm text-muted-foreground">{d}</p></li>)}
          </ul>
          <p className="label-caps mb-4 mt-10 !text-muted-foreground">Tools & technology</p>
          <div className="flex flex-wrap gap-2">{tools.map((t) => <span key={t} className="border px-3 py-1.5 text-xs text-muted-foreground">{t}</span>)}</div>
        </FadeUp>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-y bg-card py-16 text-center">
      <div className="container-lux">
        <FadeUp>
          <h2 className="mx-auto max-w-4xl text-5xl leading-[1.02] md:text-7xl">Ready to make content your <em className="text-gold">unfair advantage?</em></h2>
         <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
  Tell me about your brand and content goals. Let's explore how AI-powered video and creative solutions can help you reduce production costs, create more content, and stand out from the competition.
</p>
          <div className="mt-12 flex justify-center"><ContactPair size="lg" /></div>
          <p className="mt-6 text-xs tracking-[0.15em] text-muted-foreground">Typical response time: within {site.responseTime}.</p>
        </FadeUp>
      </div>
    </section>
  );
}

const field = "w-full border-b bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold";
export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as { name: string; email: string; company: string; budget: string; message: string };
    const body = `Name: ${d.name}\nWork email: ${d.email}\nCompany: ${d.company}\nBudget: ${d.budget}\n\n${d.message}`;
    window.open(mailLink(`${d.company || d.name}`, body), "_blank");
    setSent(true);
  };
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container-lux">
        <SectionHead label="Contact" title={<>Let's talk about <em className="text-gold">your next campaign.</em></>} />
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border p-8 transition-colors hover:border-gold">
              <div><p className="label-caps mb-3 !text-muted-foreground">WhatsApp</p><p className="font-serif text-3xl">{site.whatsappDisplay}</p></div>
              <WhatsAppIcon className="h-7 w-7" />
            </a>
            <a href={mailLink()} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border p-8 transition-colors hover:border-gold">
              <div className="min-w-0"><p className="label-caps mb-3 !text-muted-foreground">Email</p><p className="truncate font-serif text-2xl md:text-3xl">{site.email}</p></div>
              <Mail className="h-7 w-7 shrink-0 text-gold" strokeWidth={1} />
            </a>
            <div className="flex gap-8 pt-4">
              {Object.entries(site.socials).map(([k, v]) => <a key={k} href={v} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-gold">{k}</a>)}
            </div>
          </div>
          {sent ? (
            <div className="flex flex-col justify-center border p-12 text-center">
              <Check className="mx-auto h-8 w-8 text-gold" strokeWidth={1} />
              <h3 className="mt-6 text-3xl">Thank you.</h3>
              <p className="mt-3 text-sm text-muted-foreground">Your email app has opened with your enquiry ready to send. I'll reply personally within {site.responseTime}.</p>
              <button onClick={() => setSent(false)} className="mt-8 text-xs uppercase tracking-[0.2em] text-gold">Send another</button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-8 sm:grid-cols-2">
              <input name="name" required placeholder="Name" aria-label="Name" className={field} />
              <input name="email" type="email" required placeholder="Work email" aria-label="Work email" className={field} />
              <input name="company" placeholder="Company" aria-label="Company" className={field} />
              <select name="budget" aria-label="Budget range" defaultValue="" required className={`${field} [&>option]:bg-popover`}>
                <option value="" disabled>Budget range</option>
                <option>Under $5k</option><option>$5k – $10k</option><option>$10k – $25k</option><option>$25k+</option>
              </select>
              <textarea name="message" required rows={4} placeholder="Tell me about your project" aria-label="Message" className={`${field} resize-none sm:col-span-2`} />
              <button type="submit" className="btn-gold sm:col-span-2 sm:justify-self-start">Send Enquiry</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
