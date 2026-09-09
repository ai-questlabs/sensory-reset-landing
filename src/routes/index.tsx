import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Ear,
  PenTool,
  Sparkles,
  Waves,
  Brain,
  Flower2,
  Atom,
  Gift,
  Instagram,
  Linkedin,
  Youtube,
  Play,
  ArrowRight,
} from "lucide-react";

import sensoryLogo from "@/assets/sensory-reset-logo.png.asset.json";
import heroImg from "@/assets/hero.jpg.asset.json";
import exp1 from "@/assets/exp1.jpg.asset.json";
import exp2 from "@/assets/exp2.jpg.asset.json";
import exp3 from "@/assets/exp3.jpg.asset.json";
import founder1 from "@/assets/f1.jpg.asset.json";
import founder2 from "@/assets/f2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sensory Reset — Relax. Reboot. Rejuvenate." },
      {
        name: "description",
        content:
          "Sensory Reset creates immersive sensory experiences that restore balance, elevate well-being and reconnect you with yourself. Explore experiences and membership.",
      },
      { property: "og:title", content: "Sensory Reset — Relax. Reboot. Rejuvenate." },
      {
        property: "og:description",
        content:
          "Immersive sensory experiences designed to restore balance, elevate well-being and reconnect individuals with themselves.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Membership", href: "#membership" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const PILLARS = [
  { icon: Waves, title: "Immersive", text: "Multi-sensory experiences designed for deep impact." },
  { icon: Brain, title: "Science-backed", text: "Rooted in psychology, neuroscience & mindfulness." },
  { icon: Flower2, title: "Holistic", text: "For mind, body and emotional well-being." },
  { icon: Atom, title: "Transformative", text: "Realignment that stays with you, beyond the session." },
];

const APPROACH = [
  { icon: Ear, title: "Listen", text: "We begin by tuning in — understanding your needs, your stressors, and your goals." },
  { icon: PenTool, title: "Design", text: "We craft personalised sensory experiences, just for you." },
  { icon: Sparkles, title: "Transform", text: "You step into a world that helps you reset, realign, and renew." },
];

const EXPERIENCES = [
  {
    tag: "relax",
    img: exp1.url,
    title: "Deep Relaxation",
    text: "Unwind and release stress through calming sensory immersion.",
  },
  {
    tag: "reboot",
    img: exp2.url,
    title: "Mind Reboot",
    text: "Reset mental clutter and recharge your focus and clarity.",
  },
  {
    tag: "rejuvenate",
    img: exp3.url,
    title: "Rejuvenation",
    text: "Replenish your energy and restore balance from within.",
  },
];

const PLANS = [
  {
    name: "Reset Essential",
    for: "For those beginning their wellness journey.",
    price: "₹2,999",
    perks: ["1 Experience / month", "10% off on add-ons", "Member-only content"],
    popular: false,
  },
  {
    name: "Reset Balance",
    for: "For those seeking consistent balance.",
    price: "₹4,999",
    perks: ["2 Experiences / month", "20% off on add-ons", "Priority booking", "Exclusive invites"],
    popular: true,
  },
  {
    name: "Reset Transform",
    for: "For those committed to transformation.",
    price: "₹8,999",
    perks: ["4 Experiences / month", "30% off on add-ons", "Priority booking", "Exclusive invites", "1:1 Wellness check-in"],
    popular: false,
  },
];

const FOUNDERS = [
  {
    img: founder1.url,
    name: "Tanushree Basu",
    role: "Founder",
    bio: "Tanushree is a creative entrepreneur with a deep passion for wellness, design, and storytelling. With over two decades of experience in building purpose-driven brands, she brings a unique blend of vision, intuition, and strategic insight to Sensory Reset. Her mission is to craft spaces and experiences that inspire transformation and inner renewal.",
  },
  {
    img: founder2.url,
    name: "Sona Mazumdar",
    role: "Founder",
    bio: "Sona is a wellness advocate and experience curator with a background in psychology and holistic well-being. Her keen understanding of the mind–body connection and commitment to conscious living shape the ethos of Sensory Reset, making it a sanctuary for relaxation, reflection, and rejuvenation.",
  },
];

function Divider() {
  return (
    <div className="mx-auto mt-6 flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-border" />
      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
      <span className="h-px w-16 bg-border" />
    </div>
  );
}

function Index() {
  const [filter, setFilter] = useState("all");
  const shown = EXPERIENCES.filter((e) => filter === "all" || e.tag === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center">
            <img src={sensoryLogo.url} alt="Sensory Reset" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
          </a>
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-cyan"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#membership" className="btn-ghost hidden sm:inline-flex">
            Book Experience
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="grid min-h-[calc(100svh-89px)] w-full items-center lg:grid-cols-2">
          <div className="px-6 py-16 sm:px-12 lg:px-[7.5vw] lg:py-24">
            <h1 className="font-display text-5xl leading-[1.15] font-light tracking-[0.12em] uppercase sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block brand-text">Relax.</span>
              <span className="block brand-text">Reboot.</span>
              <span className="block brand-text">Rejuvenate.</span>
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-muted-foreground lg:text-lg">
              Immersive experiences that restore balance, elevate well-being, and reconnect individuals with
              themselves.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <a href="#experiences" className="btn-brand">
                Our Experiences
              </a>
              <a href="#about" className="btn-ghost">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-visual relative min-h-[52vh] self-stretch overflow-hidden lg:min-h-0">
            <div className="absolute inset-10 rounded-full border border-cyan/30" aria-hidden />
            <img
              src={heroImg.url}
              width={1200}
              height={1200}
              alt="Woman in a state of calm surrounded by flowing sensory waves"
              className="hero-image absolute inset-0 h-full w-full object-cover object-center"
            />
            <svg className="hero-wave-overlay" viewBox="0 0 760 360" aria-hidden="true">
              <path d="M18 181 C120 90 205 270 315 178 S520 85 742 180" />
              <path d="M18 194 C125 112 213 252 322 192 S530 108 742 195" />
              <path d="M18 207 C130 134 220 236 330 206 S540 132 742 210" />
            </svg>
          </div>
        </div>

        {/* Welcome */}
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center lg:pt-28">
          <p className="text-sm tracking-[0.32em] uppercase text-muted-foreground">Welcome to Sensory Reset</p>
          <p className="mt-8 text-xl leading-10 font-light text-foreground/90 sm:text-2xl">
            A sanctuary for the mind and body. Through innovative sensory journeys, we guide you to a state of deep
            relaxation, renewal, and inner clarity.
          </p>
        </div>

        {/* Pillars */}
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4 lg:pb-28">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <Icon className="mx-auto h-10 w-10 stroke-1 text-cyan" />
              <h3 className="section-title mt-6 text-sm">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Band */}
      <section className="band-gradient px-6 py-16 text-center">
        <h2 className="section-title text-xl text-white">This is your reset</h2>
        <p className="mt-4 text-sm tracking-wide text-white/85">Step away from the noise. Step into yourself.</p>
        <a
          href="#membership"
          className="mt-8 inline-flex rounded-full bg-background px-8 py-3 text-[0.7rem] tracking-[0.2em] uppercase text-foreground transition-transform hover:-translate-y-0.5"
        >
          Book Your Experience
        </a>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title text-2xl">About Us</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              Sensory Reset was born from a shared vision to create immersive experiences that restore balance, elevate
              well-being, and reconnect individuals with themselves.
            </p>
            <a href="#founders" className="btn-ghost mt-8">
              Our Story
            </a>
          </div>
          <img
            src={sensoryLogo.url}
            alt="Sensory Reset logo"
            loading="lazy"
            className="mx-auto w-full max-w-sm object-contain"
          />
        </div>

        <div className="mt-20 text-center">
          <h3 className="section-title text-lg">Our Approach</h3>
          <Divider />
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {APPROACH.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="mx-auto h-8 w-8 stroke-1 text-violet" />
                <h4 className="section-title mt-5 text-[0.72rem]">{title}</h4>
                <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-gradient px-6 py-14 text-center">
        <h2 className="section-title text-lg text-white">Our Promise</h2>
        <p className="mt-4 text-sm leading-7 text-white/85">
          To hold space for you, to guide you inward,
          <br />
          and to help you return to your truest self.
        </p>
      </section>

      {/* Experiences */}
      <section id="experiences" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="section-title text-2xl">Our Experiences</h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-muted-foreground">
          Carefully curated immersive journeys designed to relax, heal, and transform.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["all", "relax", "reboot", "rejuvenate"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={
                t === filter
                  ? "rounded-full px-6 py-2 text-[0.65rem] tracking-[0.2em] uppercase text-primary-foreground [background:var(--gradient-brand)]"
                  : "rounded-full border border-border px-6 py-2 text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:border-cyan"
              }
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {shown.map((e) => (
            <article key={e.title} className="soft-card overflow-hidden text-left">
              <img src={e.img} alt={e.title} width={900} height={640} loading="lazy" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="section-title text-[0.75rem]">{e.title}</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{e.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-cyan">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band-gradient px-6 py-14 text-center">
        <h2 className="section-title text-lg text-white">Ready to begin your journey?</h2>
        <a
          href="#membership"
          className="mt-6 inline-flex rounded-full bg-background px-8 py-3 text-[0.7rem] tracking-[0.2em] uppercase text-foreground transition-transform hover:-translate-y-0.5"
        >
          Book Your Experience
        </a>
      </section>

      {/* Membership */}
      <section id="membership" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="section-title text-2xl">Membership</h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
          Become a part of the Sensory Reset community and enjoy exclusive benefits designed to support your well-being
          journey.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`soft-card relative flex flex-col p-8 text-left ${p.popular ? "ring-1 ring-cyan" : ""}`}
            >
              {p.popular && (
                <span className="absolute inset-x-0 top-0 rounded-t-2xl py-2 text-center text-[0.6rem] tracking-[0.25em] uppercase text-primary-foreground [background:var(--gradient-brand)]">
                  Most Popular
                </span>
              )}
              <Gift className={`h-7 w-7 stroke-1 text-violet ${p.popular ? "mt-8" : ""}`} />
              <h3 className="section-title mt-5 text-[0.75rem]">{p.name}</h3>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">{p.for}</p>
              <ul className="mt-6 space-y-2">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-xs leading-6 text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {perk}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg font-light">
                {p.price} <span className="text-xs text-muted-foreground">/ month</span>
              </p>
              <a href="#contact" className="btn-brand mt-6 w-full">
                Join Now
              </a>
            </div>
          ))}
        </div>
        <div className="band-gradient mt-12 flex flex-wrap items-center justify-center gap-4 rounded-2xl px-8 py-8 text-left">
          <Gift className="h-8 w-8 stroke-1 text-white" />
          <div>
            <h3 className="section-title text-[0.8rem] text-white">Members get more</h3>
            <p className="mt-2 text-xs leading-6 text-white/85">
              Special offers, early access, and curated wellness resources — only for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="section-title text-2xl brand-text">Founder Members</h2>
        <Divider />
        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-muted-foreground">
          The heart and vision behind Sensory Reset. Two lifelong learners, healers, and dreamers, coming together to
          create a space for transformation and renewal.
        </p>
        <div className="mt-14 grid gap-14 md:grid-cols-2">
          {FOUNDERS.map((f) => (
            <div key={f.name}>
              <div className="mx-auto w-fit rounded-full p-[2px] [background:var(--gradient-brand)]">
                <img
                  src={f.img}
                  alt={f.name}
                  width={480}
                  height={480}
                  loading="lazy"
                  className="h-44 w-44 rounded-full border-4 border-background object-cover"
                />
              </div>
              <h3 className="section-title mt-6 text-[0.85rem]">{f.name}</h3>
              <p className="mt-2 text-[0.65rem] tracking-[0.3em] uppercase text-cyan">{f.role}</p>
              <span className="mx-auto mt-4 block h-px w-10 bg-border" />
              <p className="mt-5 text-xs leading-6 text-muted-foreground">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="journal" className="band-gradient px-6 py-16 text-center">
        <p className="text-3xl font-light text-white/70">“</p>
        <p className="mx-auto max-w-lg text-lg leading-8 font-light text-white">
          Together, we invite you to pause, reset, and rediscover yourself.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={sensoryLogo.url} alt="Sensory Reset" loading="lazy" className="h-20 w-20 object-contain" />
            </div>
            <p className="mt-6 max-w-xs text-xs leading-6 text-navy-foreground/70">
              Immersive experiences that restore balance, elevate well-being, and reconnect individuals with themselves.
            </p>
            <div className="mt-6 flex gap-4 text-navy-foreground/70">
              <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
              <a href="#" aria-label="Video"><Play className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-[0.65rem] tracking-[0.25em] uppercase">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-xs text-navy-foreground/70">
              <li><a href="#about">About Us</a></li>
              <li><a href="#experiences">Experiences</a></li>
              <li><a href="#membership">Membership</a></li>
              <li><a href="#journal">Journal</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.65rem] tracking-[0.25em] uppercase">Support</h3>
            <ul className="mt-5 space-y-3 text-xs text-navy-foreground/70">
              <li><a href="#contact">FAQ</a></li>
              <li><a href="#contact">Privacy Policy</a></li>
              <li><a href="#contact">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.65rem] tracking-[0.25em] uppercase">Contact</h3>
            <ul className="mt-5 space-y-3 text-xs text-navy-foreground/70">
              <li>hello@sensoryreset.com</li>
              <li>+91 98765 43210</li>
              <li>New Delhi, India</li>
            </ul>
            <h3 className="mt-8 text-[0.65rem] tracking-[0.25em] uppercase">Newsletter</h3>
            <p className="mt-3 text-xs text-navy-foreground/70">Stay inspired. Stay connected.</p>
            <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs outline-none placeholder:text-navy-foreground/40 focus:border-cyan"
              />
              <button type="submit" className="btn-brand w-full">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-[0.65rem] text-navy-foreground/60">
          © 2026 Sensory Reset. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
