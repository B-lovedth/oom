import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { PageHero } from "@/components/sections/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { services } from "@/utils/site-content";
import styles from "./page.module.scss";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Implementation, content, and systems support for teams shipping a polished product experience."
        description="We structure the work so the interface, messaging, and motion all reinforce the same story."
        primaryAction={{ label: "Book a call", href: "/contact" }}
        secondaryAction={{ label: "Learn more", href: "/about" }}
      />

      <SectionWrapper eyebrow="What we do" title="Services designed around the user journey">
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <Card key={service.title} className={styles.serviceCard}>
              <Badge tone="accent">{service.scope}</Badge>
              <Heading level={3}>{service.title}</Heading>
              <Text>{service.description}</Text>
              <ul className={styles.serviceList}>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Card className={styles.serviceCta} variant="elevated">
          <div>
            <Badge tone="success">Next step</Badge>
            <Heading level={2}>Get a delivery plan tailored to your timeline.</Heading>
            <Text size="lg">
              We can adapt the system to marketing sites, product dashboards, and multi-page brand
              experiences.
            </Text>
          </div>
          <Button href="/contact">Request an estimate</Button>
        </Card>
      </SectionWrapper>
    </>
  );
}