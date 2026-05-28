import React, { forwardRef } from "react";
import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLElement> & {
  variant?: "default" | "subtle" | "accent";
  compact?: boolean;
  id?: string;
};

const Section = forwardRef<HTMLElement, Props>(function Section(
  { variant = "default", compact = false, className, style, children, ...rest },
  ref
) {
  const padding = compact
    ? "clamp(3rem, 6vw, 5rem) 0"
    : "clamp(5rem, 9vw, 8rem) 0";

  const bg =
    variant === "subtle"
      ? "var(--wpp-bg-elev)"
      : variant === "accent"
      ? "var(--wpp-grad-card)"
      : "transparent";

  return (
    <section
      ref={ref}
      className={clsx("wpp-section", className)}
      style={{
        padding,
        background: bg,
        position: "relative",
        isolation: "isolate",
        ...style,
      }}
      {...rest}
    >
      {children}
    </section>
  );
});

export default Section;
