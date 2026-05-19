import { motion } from "framer-motion";
import { CONTACT } from "../content/data";
import { FadeIn } from "./ui/FadeIn";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-8 md:px-16 lg:px-24 py-24 md:py-32 flex flex-col justify-center"
    >
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-4">
          05 — Contact
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-display font-semibold leading-[0.9] text-ink mb-12 md:mb-16">
          <span className="block text-6xl md:text-8xl lg:text-9xl">Let's</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl italic text-terracotta">
            talk.
          </span>
        </h2>
      </FadeIn>

      {/* Big email link — the primary action */}
      <FadeIn delay={0.2}>
        <a
          href={`mailto:${CONTACT.email}`}
          className="group inline-flex items-baseline gap-3 mb-12 w-fit"
        >
          <span className="font-display text-3xl md:text-5xl lg:text-6xl text-ink leading-tight underline underline-offset-[0.15em] decoration-terracotta decoration-2 group-hover:decoration-[3px] transition-all">
            {CONTACT.email}
          </span>
          <motion.span
            className="font-display text-3xl md:text-5xl lg:text-6xl text-terracotta inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 8 }}
          >
            ↗
          </motion.span>
        </a>
      </FadeIn>

      {/* Or grab via social */}
      <FadeIn delay={0.3}>
        <div className="flex flex-col gap-4 max-w-md">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-2">
            Or find me on
          </p>
          <ul className="flex flex-col gap-3">
            {CONTACT.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-baseline gap-2 font-sans text-lg md:text-xl text-ink-soft hover:text-ink transition-colors"
                >
                  <span className="underline underline-offset-4 decoration-ink/20 group-hover:decoration-terracotta">
                    {social.label}
                  </span>
                  <span className="text-muted text-sm group-hover:translate-x-1 transition-transform inline-block">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* Footer signoff */}
      <FadeIn delay={0.5}>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mt-24 md:mt-32">
          Designed & built by Eduardo Peña — 2026
        </p>
      </FadeIn>
    </section>
  );
}