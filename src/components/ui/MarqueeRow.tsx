import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speedSec?: number;
  className?: string;
};

const MarqueeRow: React.FC<Props> = ({
  items,
  direction = "left",
  speedSec = 36,
  className,
}) => {
  const reduced = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <div
      className={className}
      style={{
        overflow: "hidden",
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "3rem",
          width: "max-content",
          willChange: reduced ? undefined : "transform",
        }}
        animate={
          reduced
            ? undefined
            : {
                x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
              }
        }
        transition={
          reduced
            ? undefined
            : { duration: speedSec, ease: "linear", repeat: Infinity }
        }
      >
        {doubled.map((it, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 auto",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--wpp-font-mono)",
              fontSize: "1rem",
              color: "var(--wpp-muted)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              padding: "0.5rem 1rem",
              border: "1px solid var(--wpp-border)",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {it}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeRow;
