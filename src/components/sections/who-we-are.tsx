import { Heading } from "@/components/ui/heading";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import styles from "./who-we-are.module.scss";
import { Title } from "../ui/title";
import Image from "next/image";
import { Button } from "../ui/button";

export function WhoWeAre() {
  return (
    <SectionWrapper id="WhoWeAre" className={styles.whoWeAre}>
      <Title title="Who We Are" color="colored" />
      <div className={styles.grid}>
        <div className={styles.content}>
          <Heading level={2} className={styles.heading}>
            OOM Professional Services began in 2008 to provide world-class
            accounting and advisory support in Nigeria.{" "}
          </Heading>
          <Button variant="primary" className={styles.button}>Learn More</Button>{" "}
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/experience.png"
            fill
            alt="Who We Are"
            className={styles.image}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
