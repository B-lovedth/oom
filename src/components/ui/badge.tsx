import type { HTMLAttributes, ReactNode } from "react";
import styles from "./badge.module.scss";
import Image from "next/image";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "default" | "accent" | "success";
};

export function Badge({ children, tone = "default", className = "", ...props }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[tone]} ${className}`.trim()} {...props}>
        <Image src="/assets/badge-icon.png" alt="" fill className={styles.icon}         sizes="(max-width: 768px) 100vw, 320px"
/>
      {children}
    </span>
  );
}