import React, { useRef, useState } from "react";
import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "glass" | "solid";
  accent?: string;
  interactive?: boolean;
};

const Card: React.FC<Props> = ({
  variant = "glass",
  accent = "rgba(37, 211, 102, 0.35)",
  interactive = true,
  className,
  style,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -200, y: -200 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const base: React.CSSProperties = {
    position: "relative",
    isolation: "isolate",
    overflow: "hidden",
    padding: "1.75rem",
    borderRadius: "20px",
    border: "1px solid var(--wpp-border)",
    background:
      variant === "glass"
        ? "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))"
        : "var(--wpp-surface)",
    backdropFilter: variant === "glass" ? "blur(12px)" : undefined,
    transition: "border-color 240ms ease, transform 240ms ease",
    ...style,
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: -200, y: -200 })}
      className={clsx("wpp-card", className)}
      style={base}
      {...rest}
    >
      {interactive && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, ${accent}, transparent 60%)`,
            opacity: 0.6,
            pointerEvents: "none",
            transition: "opacity 240ms ease",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default Card;
