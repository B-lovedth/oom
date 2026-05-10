import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { coreServices } from "@/utils/site-content";

import styles from "./page.module.scss";

export const metadata = {
  title: "Services",
};

const serviceMeta = [
  { icon: "/assets/services/icons/briefcase-tick.png" },
  { icon: "/assets/services/icons/document-text.png" },
  { icon: "/assets/services/icons/calculator.png" },
  { icon: "/assets/services/icons/shield-tick.png" },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <Container size="wide">
        <section className={styles.hero}>
          <Heading level={1} className={styles.title}>
            Explore our Services
          </Heading>
          <Text className={styles.subtitle}>
            We have grown into a firm respected for technical excellence and deep regulatory experience.
          </Text>
        </section>

        <section className={styles.grid} aria-label="Service offerings">
          {coreServices.map((service, index) => (
            <Card key={service.title} className={styles.serviceCard} variant="ghost">
              <div className={styles.imageWrap}>
                <Image
                  src={`/assets/services/${service.imgSrc}`}
                  alt={service.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardHeadingRow}>
                  <span className={styles.iconBubble} aria-hidden="true">
                    <Image
                      src={serviceMeta[index % serviceMeta.length].icon}
                      alt=""
                      width={22}
                      height={22}
                    />
                  </span>
                  <Heading level={3} className={styles.cardTitle}>
                    {service.title}
                  </Heading>
                </div>

                <Text className={styles.cardText}>{service.description}</Text>

                <Button href="/contact" variant="outline" className={styles.cardButton}>
                  Contact Us
                </Button>
              </div>
            </Card>
          ))}
        </section>
      </Container>
    </main>
  );
}