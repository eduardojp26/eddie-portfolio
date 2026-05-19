import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HERO } from "../content/data";

const SECTIONS = [
  { id: "home", label: "Home" },
  ...HERO.nav.map((n) => ({ id: n.href.slice(1), label: n.label })),
];

export function SideNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionEls = SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);

    const updateActive = () => {
      // Anchor point: 1/3 down the viewport.
      // Whichever section's top is closest to (but not past) this line wins.
      const anchor = window.scrollY + window.innerHeight / 3;

      let current = sectionEls[0];
      for (const el of sectionEls) {
        if (el.offsetTop <= anchor) {
          current = el;
        } else {
          break;
        }
      }
      setActiveId(current.id);
    };

    updateActive(); // Run once on mount
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:block"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col gap-5">
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                aria-label={`Jump to ${label}`}
                className="group flex items-center gap-3 cursor-pointer"
              >
                {/* Label appears on hover */}
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-ink opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {label}
                </motion.span>

                {/* The dot */}
                <motion.span
                  animate={{
                    scale: isActive ? 1.4 : 1,
                    backgroundColor: isActive
                      ? "var(--color-terracotta)"
                      : "var(--color-muted)",
                  }}
                  transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                  className="block w-2 h-2 rounded-full"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}