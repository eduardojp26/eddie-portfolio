import { EXPERIENCE } from "../content/data";
import { FadeIn } from "./ui/FadeIn";

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-8 md:px-16 lg:px-24 py-24 md:py-32 bg-cream-deep"
    >
      {/* Section eyebrow */}
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-4">
          02 — Experience
        </p>
      </FadeIn>

      {/* Oversized two-line header (Lando move) */}
      <FadeIn delay={0.1}>
        <h2 className="font-display font-semibold leading-[0.9] text-ink mb-20 md:mb-28">
          <span className="block text-6xl md:text-8xl lg:text-9xl">Where</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl italic text-terracotta">
            I've been
          </span>
        </h2>
      </FadeIn>

      {/* Timeline */}
      <div className="max-w-5xl">
        {EXPERIENCE.map((item, i) => (
          <FadeIn key={item.company + item.period} delay={0.05 * i} y={40}>
            <article
              className={`
                grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-12
                ${i !== 0 ? "border-t border-ink/15" : ""}
              `}
            >
              {/* Period (left rail) */}
              <div className="md:col-span-3">
                <p className="font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-muted">
                  {item.period}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted mt-1">
                  {item.location}
                </p>
              </div>

              {/* Main content */}
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl text-ink mb-1">
                  {item.role}
                </h3>
                <p className="font-sans text-lg text-terracotta-deep mb-4">
                  {item.company}
                </p>
                <p className="font-sans text-base md:text-lg text-ink-soft leading-relaxed mb-4">
                  {item.summary}
                </p>
                <ul className="space-y-2">
                  {item.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="font-sans text-sm md:text-base text-ink-soft leading-relaxed pl-6 relative"
                    >
                      <span className="absolute left-0 top-2.5 w-3 h-px bg-terracotta" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}