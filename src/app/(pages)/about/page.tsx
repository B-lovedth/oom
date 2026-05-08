import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { PageHero } from "@/components/sections/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { aboutHighlights, companyMilestones } from "@/utils/site-content";
import styles from "./page.module.scss";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="A focused operating system for teams that want clarity without the clutter."
        description="WorkSheet brings planning, execution, and reporting into one responsive interface so teams can move faster with fewer handoffs."
        primaryAction={{ label: "Talk to us", href: "/contact" }}
        secondaryAction={{ label: "See services", href: "/services" }}
      />

      <SectionWrapper>
        <div className={styles.aboutGrid}>
          <Card className={styles.statementCard} variant="elevated">
            <Badge tone="success">Why we built it</Badge>
            <Heading level={2}>One place to coordinate the full delivery loop.</Heading>
            <Text size="lg">
              The design centers on reducing friction: fewer context switches, fewer hidden states,
              and a clearer path from intent to outcome.
            </Text>
            <div className={styles.statementActions}>
              <Button href="/contact">Start a project</Button>
              <Button variant="ghost" href="/">
                Back home
              </Button>
            </div>
          </Card>

          <div className={styles.highlights}>
            {aboutHighlights.map((item) => (
              <Card key={item.title} className={styles.highlightCard}>
                <Badge tone="accent">{item.label}</Badge>
                <Heading level={3}>{item.title}</Heading>
                <Text>{item.description}</Text>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Milestones" title="How the product evolved">
        <div className={styles.timeline}>
          {companyMilestones.map((milestone) => (
            <Card key={milestone.year} className={styles.timelineCard} variant="outline">
              <span className={styles.timelineYear}>{milestone.year}</span>
              <Heading level={3}>{milestone.title}</Heading>
              <Text>{milestone.description}</Text>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}