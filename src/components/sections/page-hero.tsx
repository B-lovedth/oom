import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import styles from "./page-hero.module.scss";

type Action = {
  label: string;
  href: string;
};

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  primaryAction: Action;
  secondaryAction: Action;
};

export function PageHero({ badge, title, description, primaryAction, secondaryAction }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <Badge tone="accent">{badge}</Badge>
          <Heading level={1}>{title}</Heading>
          <Text size="lg" tone="muted">
            {description}
          </Text>
          <div className={styles.actions}>
            <Button href={primaryAction.href}>{primaryAction.label}</Button>
            <Button href={secondaryAction.href} variant="secondary">
              {secondaryAction.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}