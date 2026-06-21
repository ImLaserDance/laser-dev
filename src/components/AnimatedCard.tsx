"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type AnimatedCardProps = HTMLMotionProps<"article">;

export function AnimatedCard({ className = "", children, ...props }: AnimatedCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.38, ease: "easeOut" }}
      className={`rounded-md border border-border bg-surface p-6 shadow-sm shadow-black/5 ${className}`}
      {...props}
    >
      {children}
    </motion.article>
  );
}
