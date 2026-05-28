import React from "react";

type Props = {
  color?: string;
  size?: number;
  blur?: number;
  opacity?: number;
  style?: React.CSSProperties;
};

const GlowEffect: React.FC<Props> = ({
  color = "var(--wpp-green)",
  size = 480,
  blur = 80,
  opacity = 0.25,
  style,
}) => (
  <div
    aria-hidden
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "9999px",
      background: color,
      filter: `blur(${blur}px)`,
      opacity,
      pointerEvents: "none",
      zIndex: 0,
      ...style,
    }}
  />
);

export default GlowEffect;
