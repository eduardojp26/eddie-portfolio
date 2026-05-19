import { motion } from "motion/react";
import { HERO } from "../content/data";
import { TextReveal } from "./ui/TextReveal";
import { TextRoll } from "./ui/TextRoll";
import { HeroBlob } from "./ui/HeroBlob";
import { HeroDateline } from "./ui/HeroDateline";
// import { HeroPullQuote } from "./ui/HeroPullQuote";

export function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24"
    >
      {/* Tiny eyebrow label above the name */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-8"
      >
        Portfolio — 2026
      </motion.p>

      {/* The big name */}
      <h1 className="font-display font-semibold leading-[0.95] text-ink">
        <span className="block text-5xl md:text-7xl lg:text-9xl">
          <TextReveal text="Eduardo" delay={0.4} />
        </span>
        <span className="block text-5xl md:text-7xl lg:text-9xl italic text-terracotta">
          <TextReveal text="Peña" delay={0.7} />
        </span>
      </h1>

      {/* Nav links — cascade in below */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { delayChildren: 1.3, staggerChildren: 0.08 } },
        }}
        className="flex flex-wrap gap-x-8 gap-y-4 mt-16 font-sans text-lg md:text-xl"
      >
        {HERO.nav.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-ink hover:cursor-pointer"
          >
            <TextRoll text={item.label} />
          </motion.a>
        ))}
      </motion.nav>

      {/* Scroll hint at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="min-h-screen flex flex-col items-start px-8 md:px-16 lg:px-24 pt-32 md:pt-40 pb-24 relative"
      >
        ↓ Scroll
      </motion.div>
      {/* Hero right-side slot — swap component here to test variants */}
        <div className="hidden md:block absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none">
        {/* TRY ONE: */}
        {<HeroBlob />}
        {<HeroDateline /> }
        {/* ]<HeroPullQuote /> */}
        </div>
    </section>
  );
}