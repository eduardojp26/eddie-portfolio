import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;          // how far to slide up from
  duration?: number;
}

export function FadeIn({
  children,
  delay = 0,
  className,
  y = 30,
  duration = 0.7,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}