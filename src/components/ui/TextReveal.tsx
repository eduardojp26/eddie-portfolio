import { motion, type Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.04,
    },
  }),
};

const letter: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 100,
    },
  },
};

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const letters = Array.from(text);

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      aria-label={text}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          aria-hidden
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}