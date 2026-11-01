import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="wpp-scroll-progress"
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        transformOrigin: "0%",
        background: "var(--wpp-grad-text)",
        zIndex: 1000,
        scaleX,
      }}
    />
  );
};

export default ScrollProgress;
