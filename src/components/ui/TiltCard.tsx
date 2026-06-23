import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  children: React.ReactNode;
};

const TiltCard: React.FC<Props> = ({
  className,
  style,
  maxTilt = 8,
  children,
}) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rx = useSpring(rotateX, { stiffness: 250, damping: 18 });
  const ry = useSpring(rotateY, { stiffness: 250, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = e.clientX - r.left - r.width / 2;
    const cy = e.clientY - r.top - r.height / 2;
    rotateX.set((-cy / (r.height / 2)) * maxTilt);
    rotateY.set((cx / (r.width / 2)) * maxTilt);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        rotateX: rx,
        rotateY: ry,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
