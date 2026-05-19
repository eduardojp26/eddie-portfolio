import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function HeroDateline() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    // Update every second
    const interval = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8 }}
      className="pointer-events-auto border-l-2 border-terracotta pl-6 max-w-xs"
    >
      {/* Top row: city + status dot */}
      <div className="flex items-center gap-2 mb-3">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="block w-1.5 h-1.5 rounded-full bg-terracotta"
        />
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft">
          Currently in Gainesville, FL
        </p>
      </div>

      {/* Big live time */}
      <p className="font-display text-4xl md:text-5xl text-ink leading-none mb-3 tabular-nums">
        {time}
      </p>

      {/* Status line */}
      <p className="font-sans text-base text-ink-soft leading-relaxed mb-4">
        Wrapping up senior year. Joining Morgan Stanley after graduation.
      </p>

      {/* Local note */}
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        EST · 26.05°N, 82.32°W
      </p>
    </motion.div>
  );
}

function getTime(): string {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}