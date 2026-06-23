import React from "react";
import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "green" | "cyan" | "violet";
};

const colors: Record<NonNullable<Props["variant"]>, string> = {
  default: "rgba(255,255,255,0.06)",
  green: "rgba(37, 211, 102, 0.14)",
  cyan: "rgba(34, 211, 238, 0.14)",
  violet: "rgba(139, 92, 246, 0.14)",
};

const accents: Record<NonNullable<Props["variant"]>, string> = {
  default: "var(--wpp-muted)",
  green: "#34d978",
  cyan: "#22d3ee",
  violet: "#a78bfa",
};

const Badge: React.FC<Props> = ({
  variant = "default",
  className,
  style,
  children,
  ...rest
}) => (
  <span
    className={clsx("wpp-badge", className)}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.3rem 0.7rem",
      borderRadius: "9999px",
      background: colors[variant],
      color: accents[variant],
      border: `1px solid ${accents[variant]}33`,
      fontFamily: "var(--wpp-font-mono)",
      fontSize: "0.75rem",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      fontWeight: 600,
      ...style,
    }}
    {...rest}
  >
    {children}
  </span>
);

export default Badge;
