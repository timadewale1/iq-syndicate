"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
};

export default function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.7,
  distance = 22,
  once = true,
  amount = 0.22,
}: Props) {
  return (
    <motion.div
      className={className}
      variants={fadeUp(distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
