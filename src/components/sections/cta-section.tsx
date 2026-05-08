"use client"
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { Title } from "../ui/title";
import styles from "./cta-section.module.scss";
import Image from "next/image";

export function CtaSection() {
  return (
    <section className={styles.section} aria-labelledby="get-started-title">      
      <Image src="/vector.png" alt="" fill className={styles.ornamentLeft} />
      <Image src="/vector-top.png" alt="" fill className={styles.ornamentRight} />
      <div className={styles.overlay} />
      <Container>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <Title title="Get Started Today" color="white" />
          </div>

          <Heading level={2} id="get-started-title" className={styles.heading}>
            Take control of your financial future today
          </Heading>

          <Text className={styles.description}>
            Partner with experts who understand your goals and help you achieve lasting success. Let’s build a
            strategy tailored to your needs.
          </Text>

          <div className={styles.actions}>
            <Button href="/contact" variant="secondary" className={styles.button}>
              Get a Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
