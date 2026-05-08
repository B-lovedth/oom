import type { HTMLAttributes, ReactNode } from "react";
import styles from "./heading.module.scss";

type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  level?: HeadingLevel;
};

export function Heading({ children, level = 2, className = "", ...props }: HeadingProps) {
  const headingTagMap = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
  } as const;

  const Tag = headingTagMap[level];

  return (
    <Tag className={`${styles.heading} ${styles[`level${level}`]} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}