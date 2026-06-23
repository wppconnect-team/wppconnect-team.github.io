import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  y?: number;
  amount?: number;
  once?: boolean;
};

const buildVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

const RevealOnScroll: React.FC<Props> = ({
  delay = 0,
  y = 32,
  amount = 0.2,
  once = true,
  children,
  style,
  ...rest
}) => {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div style={style} {...(rest as any)}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={buildVariants(y)}
      transition={{ delay }}
      style={style}
      {...(rest as any)}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
