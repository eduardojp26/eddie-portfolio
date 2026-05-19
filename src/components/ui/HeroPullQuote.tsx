import { motion } from "framer-motion";

export function HeroPullQuote() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1.2 }}
      className="max-w-md text-right"
    >
      <span className="font-display italic text-terracotta text-7xl leading-none block mb-2">
        "
      </span>
      <p className="font-display italic text-3xl lg:text-4xl text-ink leading-[1.15] mb-4">
        Chasing better food and tighter code.
      </p>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
        — Eduardo, probably too often
      </p>
    </motion.div>
  );
}