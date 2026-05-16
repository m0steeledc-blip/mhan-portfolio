"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function MotionItem({ children, delay = 0, style, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} style={style}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
