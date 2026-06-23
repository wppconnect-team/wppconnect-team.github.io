import React from "react";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  as?: React.ElementType;
  gradient?: string;
};

const GradientText: React.FC<Props> = ({
  as: Tag = "span",
  gradient = "var(--wpp-grad-text)",
  style,
  children,
  ...rest
}) => (
  <Tag
    style={{
      backgroundImage: gradient,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      ...style,
    }}
    {...rest}
  >
    {children}
  </Tag>
);

export default GradientText;
