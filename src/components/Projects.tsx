import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../content/data";
import { FadeIn } from "./ui/FadeIn";

export function Projects() {
  return (
    <section
      id="projects"
      className="px-8 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-4">
          03 — Projects
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-display font-semibold leading-[0.9] text-ink mb-20 md:mb-32">
          <span className="block text-6xl md:text-8xl lg:text-9xl">Ideas</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl italic text-terracotta">
            came to life
          </span>
        </h2>
      </FadeIn>

      <div className="space-y-32 md:space-y-48">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isOdd = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.04]);
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const imageColClass = isOdd
    ? "md:col-span-7 md:col-start-6 md:order-2"
    : "md:col-span-7 md:col-start-1 md:order-1";

  const textColClass = isOdd
    ? "md:col-span-5 md:col-start-1 md:order-1"
    : "md:col-span-5 md:col-start-9 md:order-2";

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
    >
      <div className={imageColClass}>
        <FadeIn y={60}>
          <div className="aspect-video bg-cream-deep rounded-sm overflow-hidden">
            <motion.img
              src={project.imageSrc}
              alt={project.title}
              style={{ scale, y }}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </FadeIn>
      </div>

      <div className={textColClass}>
        <FadeIn delay={0.15}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
            {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
          </p>
          <h3 className="font-display text-4xl md:text-5xl text-ink mb-3 leading-[1.05]">
            {project.title}
          </h3>
          <p className="font-sans text-lg md:text-xl text-terracotta-deep mb-5">
            {project.blurb}
          </p>
          <p className="font-sans text-base md:text-lg text-ink-soft leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft border border-ink/20 px-3 py-1.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="flex gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-ink underline underline-offset-4 decoration-terracotta hover:decoration-2"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
}