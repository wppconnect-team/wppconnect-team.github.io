import React from "react";
import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow";
};

const SIZES: Record<NonNullable<Props["size"]>, string> = {
  default: "1200px",
  wide: "1440px",
  narrow: "880px",
};

const Container: React.FC<Props> = ({
  size = "default",
  className,
  style,
  children,
  ...rest
}) => (
  <div
    className={clsx("wpp-container", className)}
    style={{
      width: "100%",
      maxWidth: SIZES[size],
      marginInline: "auto",
      paddingInline: "clamp(1.25rem, 3vw, 2rem)",
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Container;
