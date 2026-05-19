import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCE, type ExperienceItem } from "../content/data";
import { FadeIn } from "./ui/FadeIn";

export function Experience() {
  // Track which entry is currently expanded (null = none).
  // We use a single state for "currently active" rather than per-row state,
  // so opening one row auto-closes the others. Cleaner UX.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="min-h-screen px-8 md:px-16 lg:px-24 py-24 md:py-32 bg-cream-deep"
    >
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-4">
          02 — Experience
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-display font-semibold leading-[0.9] text-ink mb-20 md:mb-28">
          <span className="block text-6xl md:text-8xl lg:text-9xl">How</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl italic text-terracotta">
            I got here
          </span>
        </h2>
      </FadeIn>

      {/* Timeline */}
      <div className="max-w-5xl">
        {EXPERIENCE.map((item, i) => (
          <FadeIn key={item.company + item.period} delay={0.05 * i} y={40}>
            <ExperienceRow
              item={item}
              index={i}
              total={EXPERIENCE.length}
              isActive={activeIndex === i}
              onToggle={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
              onHover={(hovered) => setActiveIndex(hovered ? i : null)}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// Individual row — handles its own hover/tap behavior
// ============================================================
interface ExperienceRowProps {
  item: ExperienceItem;
  index: number;
  total: number;
  isActive: boolean;
  onToggle: () => void;
  onHover: (hovered: boolean) => void;
}

function ExperienceRow({
  item,
  index,
  isActive,
  onToggle,
  onHover,
}: ExperienceRowProps) {
  return (
    <article
      className={`
        relative cursor-pointer group
        py-8 md:py-10
        ${index !== 0 ? "border-t border-ink/15" : ""}
      `}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onToggle}
      // Accessibility — let keyboard users open/close too
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
    >
      {/* Collapsed view — always visible */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline">
        {/* Period + location (left rail) */}
        <div className="md:col-span-3">
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-muted">
            {item.period}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted mt-1">
            {item.location}
          </p>
        </div>

        {/* Role + company (middle) */}
        <div className="md:col-span-8">
          <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
            {item.role}
          </h3>
          <p
            className={`
              font-sans text-base md:text-lg mt-1
              transition-colors duration-300
              ${isActive ? "text-terracotta" : "text-terracotta-deep"}
            `}
          >
            {item.company}
          </p>
        </div>

        {/* +/− indicator (right) */}
        <div className="md:col-span-1 flex md:justify-end items-start md:pt-2">
          <motion.span
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="font-mono text-2xl text-ink-soft inline-block"
            aria-hidden
          >
            +
          </motion.span>
        </div>
      </div>

      {/* Expanded view — animates in/out */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25, delay: isActive ? 0.1 : 0 },
            }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 mt-6">
              <div className="md:col-span-3" /> {/* spacer to align with period rail */}
              <div className="md:col-span-9 max-w-2xl">
                <p className="font-sans text-base md:text-lg text-ink-soft leading-relaxed mb-4">
                  {item.summary}
                </p>
                <ul className="space-y-2">
                  {item.bullets.map((b, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15 + bi * 0.05,
                        duration: 0.4,
                      }}
                      className="font-sans text-sm md:text-base text-ink-soft leading-relaxed pl-6 relative"
                    >
                      <span className="absolute left-0 top-2.5 w-3 h-px bg-terracotta" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}