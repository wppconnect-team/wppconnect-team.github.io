import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  splitBy?: "word" | "char";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: React.ElementType;
};

const AnimatedText: React.FC<Props> = ({
  text,
  splitBy = "word",
  className,
  style,
  delay = 0,
  as: Tag = "span",
}) => {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    );
  }
  const parts = splitBy === "word" ? text.split(/(\s+)/) : Array.from(text);
  return (
    <Tag className={className} style={{ ...style, display: "inline-block" }}>
      {parts.map((p, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * 0.03,
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {p}
        </motion.span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
