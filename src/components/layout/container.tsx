import type { ReactNode } from "react";
import styles from "./container.module.scss";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  return <div className={`${styles.container} ${styles[size]} ${className}`.trim()}>{children}</div>;
}