import type { HTMLAttributes, ReactNode } from "react";
import styles from "./text.module.scss";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  as?: "p" | "span";
  size?: "md" | "lg" | "sm";
  tone?: "default" | "muted";
};

export function Text({
  children,
  as = "p",
  size = "md",
  tone = "default",
  className = "",
  ...props
}: TextProps) {
  const Tag = as;

  return (
    <Tag className={`${styles.text} ${styles[size]} ${styles[tone]} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}