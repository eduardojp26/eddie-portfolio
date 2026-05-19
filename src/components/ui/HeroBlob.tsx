import { motion } from "framer-motion";

export function HeroBlob() {
  return (
    <div className="relative w-[40vw] h-[40vw] max-w-[600px] max-h-[600px]">
      {/* Two overlapping blurred blobs that drift independently */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-terracotta/25 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -25, 30, 0],
          y: [0, 30, -15, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-8 rounded-full bg-terracotta-deep/20 blur-2xl"
      />
      {/* A third smaller, sharper accent */}
      <motion.div
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -10, 15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-1/4 rounded-full bg-terracotta/15 blur-xl"
      />
    </div>
  );
}