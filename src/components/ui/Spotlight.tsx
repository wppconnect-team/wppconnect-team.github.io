import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  color?: string;
  size?: number;
  children?: React.ReactNode;
};

const Spotlight: React.FC<Props> = ({
  className,
  color = "rgba(37, 211, 102, 0.18)",
  size = 600,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const x = useSpring(mx, { stiffness: 150, damping: 20 });
  const y = useSpring(my, { stiffness: 150, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const onLeave = () => {
    mx.set(-9999);
    my.set(-9999);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          left: x,
          top: y,
          translateX: "-50%",
          translateY: "-50%",
          width: size,
          height: size,
          borderRadius: "9999px",
          background: `radial-gradient(circle at center, ${color}, transparent 60%)`,
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(20px)",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default Spotlight;
