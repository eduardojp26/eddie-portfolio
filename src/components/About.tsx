import { ABOUT } from "../content/data";
import { FadeIn } from "./ui/FadeIn";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-8 md:px-16 lg:px-24 py-24 md:py-32"
    >
      {/* Section eyebrow */}
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-4">
          01 — About
        </p>
      </FadeIn>

      {/* Two-column layout: photo left (sticky), text right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mt-12">
        {/* Photo */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="md:sticky md:top-24">
            <FadeIn y={40}>
              <div className="aspect-[4/5] w-full bg-cream-deep rounded-sm overflow-hidden">
                <img
                  src={ABOUT.photoSrc}
                  alt={ABOUT.photoAlt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // graceful fallback while we don't have the real photo yet
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mt-3">
                {ABOUT.photoAlt}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-7 lg:col-span-8 md:col-start-6 lg:col-start-6">
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink mb-12">
              {ABOUT.headline}
            </h2>
          </FadeIn>

          <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed text-ink-soft max-w-2xl">
            {ABOUT.paragraphs.map((para, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1}>
                <p>{para}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}