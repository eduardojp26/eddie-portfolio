import { motion } from "framer-motion";

interface TextRollProps {
  text: string;
  className?: string;
}

export function TextRoll({ text, className }: TextRollProps) {
  const letters = Array.from(text);

  return (
    <motion.span
      className={className}
      initial="initial"
      whileHover="hovered"
      style={{ display: "inline-flex", overflow: "hidden", lineHeight: 1 }}
      aria-label={text}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            position: "relative",
            whiteSpace: "pre",
          }}
          aria-hidden
        >
          {/* Top letter — slides up and out on hover */}
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.3,
              ease: [0.65, 0, 0.35, 1],
              delay: i * 0.015,
            }}
          >
            {char}
          </motion.span>

          {/* Bottom letter (terracotta) — slides up from below */}
          <motion.span
            className="text-terracotta"
            style={{
              display: "inline-block",
              position: "absolute",
              left: 0,
              top: "100%",
            }}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.3,
              ease: [0.65, 0, 0.35, 1],
              delay: i * 0.015,
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}