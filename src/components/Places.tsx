import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PLACES } from "../content/data";
import { FadeIn } from "./ui/FadeIn";

export function Places() {
  return (
    <section
      id="places"
      className="px-8 md:px-16 lg:px-24 py-24 md:py-32 bg-cream-deep"
    >
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-4">
          04 — Places
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-display font-semibold leading-[0.9] text-ink mb-6">
          <span className="block text-6xl md:text-8xl lg:text-9xl">Places</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl italic text-terracotta">
            I keep going back to
          </span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-sans text-lg md:text-xl text-ink-soft max-w-2xl mb-24 md:mb-32">
          I travel for the food and stay for the walks. Here's where I've been lately —
          and what I won't shut up about.
        </p>
      </FadeIn>

      {/* Asymmetric grid — places alternate columns and sizes */}
      <div className="space-y-32 md:space-y-48">
        {PLACES.map((place, i) => (
          <PlaceCard key={place.city} place={place} index={i} />
        ))}
      </div>
    </section>
  );
}

// ============================================================
// Each place — large image with editorial caption block
// ============================================================
interface PlaceCardProps {
  place: (typeof PLACES)[number];
  index: number;
}

function PlaceCard({ place, index }: PlaceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax — image scales slightly across scroll window
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);

  // Alternate layout: even = image right of center, odd = image left of center
  // We're going for asymmetric column starts, not 50/50 splits
  const isEven = index % 2 === 0;
  const imageColClass = isEven
    ? "md:col-span-8 md:col-start-3"
    : "md:col-span-8 md:col-start-2";

  return (
    <div ref={cardRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
      {/* Image — asymmetric placement */}
      <div className={imageColClass}>
        <FadeIn y={80}>
          <div className="aspect-[5/4] md:aspect-[3/2] bg-ink/5 rounded-sm overflow-hidden">
            <motion.img
              src={place.imageSrc}
              alt={`${place.city}, ${place.country}`}
              style={{ scale }}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </FadeIn>

        {/* Editorial caption — directly under image, mono */}
        <FadeIn delay={0.15}>
          <div className="flex items-baseline justify-between mt-4 max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {place.city}, {place.country}
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {place.year}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Pull-quote takeaway — opposite side, smaller column */}
      <div
        className={`
          md:col-span-3
          ${isEven ? "md:col-start-1 md:row-start-1" : "md:col-start-11 md:row-start-1"}
          flex flex-col justify-end pb-8
        `}
      >
        <FadeIn delay={0.25}>
          <span className="font-display italic text-terracotta text-5xl md:text-6xl leading-none mb-3">
            "
          </span>
          <p className="font-display italic text-xl md:text-2xl text-ink leading-tight">
            {place.takeaway}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}