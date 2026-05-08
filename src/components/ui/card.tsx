import type { HTMLAttributes, ReactNode } from "react";
import styles from "./card.module.scss";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: "default" | "elevated" | "outline" | "glass" | "ghost";
};

export function Card({ children, variant = "default", className = "", ...props }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}