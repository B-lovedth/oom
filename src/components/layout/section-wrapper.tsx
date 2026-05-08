import type { ReactNode } from "react";
import { Container } from "./container";
import styles from "./section-wrapper.module.scss";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
};

export function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`.trim()}>
      <Container>
        {children}
      </Container>
    </section>
  );
}