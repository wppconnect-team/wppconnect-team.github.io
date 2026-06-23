import React from "react";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

type Variant = "primary" | "ghost" | "outline";
type Size = "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsAnchor = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a"; href: string };
type AsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type Props = AsAnchor | AsButton;

const styles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "var(--wpp-green)",
    color: "#07080a",
    boxShadow: "var(--wpp-glow-green)",
    border: "1px solid rgba(37, 211, 102, 0.4)",
  },
  ghost: {
    background: "rgba(255, 255, 255, 0.04)",
    color: "var(--wpp-text)",
    border: "1px solid var(--wpp-border)",
    backdropFilter: "blur(8px)",
  },
  outline: {
    background: "transparent",
    color: "var(--wpp-text)",
    border: "1px solid var(--wpp-border)",
  },
};

const Button: React.FC<Props> = (props) => {
  const reduced = useReducedMotion();
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    style,
    ...rest
  } = props as BaseProps & { style?: React.CSSProperties; [k: string]: any };

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "var(--wpp-font-sans)",
    fontWeight: 600,
    fontSize: size === "lg" ? "1.05rem" : "0.95rem",
    padding: size === "lg" ? "0.95rem 1.6rem" : "0.7rem 1.25rem",
    borderRadius: "12px",
    textDecoration: "none",
    cursor: "pointer",
    letterSpacing: "-0.01em",
    transition: "transform 200ms ease, box-shadow 200ms ease, filter 200ms ease",
    ...styles[variant],
    ...style,
  };

  const hover = reduced
    ? undefined
    : variant === "primary"
    ? { scale: 1.03, filter: "brightness(1.05)" }
    : { scale: 1.02, background: "rgba(255, 255, 255, 0.07)" };

  const tap = reduced ? undefined : { scale: 0.97 };

  const isAnchor = props.as === "a" || "href" in props;
  const MotionComp: any = isAnchor ? motion.a : motion.button;

  return (
    <MotionComp
      className={clsx("wpp-button", className)}
      style={base}
      whileHover={hover}
      whileTap={tap}
      {...rest}
    >
      {children}
    </MotionComp>
  );
};

export default Button;
