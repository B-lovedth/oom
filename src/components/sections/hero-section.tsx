import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import styles from "./hero-section.module.scss";
import Image from "next/image";

type Stat = {
  value: string;
  label: string;
};

type HeroSectionProps = {
  badge: string;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  stats?: Stat[];
};

const defaultStats: Stat[] = [
  { value: "99.7%", label: "Client Revenue Stategy" },
  { value: "70%", label: "Tax Optimization" },
];

export function HeroSection({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats = defaultStats,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <Image src="/hero.png" alt="" fill className={styles.backgroundImage} />
      <div className={styles.overlay} />
      <Container size="wide">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <div className={styles.copyPanel}>
              <div className={styles.badgeRow}>
                <Image src="/assets/badge-icon.png" alt="" width={144} height={81} className={styles.badgeImage} />
                <span className={styles.badgeText}>{badge}</span>
              </div>

              <Heading level={2} className={styles.heading}>
                {title}
              </Heading>

              <Text size="lg" tone="default" className={styles.description}>
                {description}
              </Text>

              <div className={styles.actions}>
                <Button href={primaryAction.href} >
                  {primaryAction.label}
                </Button>
                <Button href={secondaryAction.href} variant="outline">
                  {secondaryAction.label}
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.glow} />
            <Card className={styles.dashboard} variant="glass">
              <div className={styles.dashboardTop}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <div className={styles.statContent}>
                      <span className={styles.statLabel}>{stat.label}</span>
                      <strong className={styles.statValue}>{stat.value}</strong>
                    </div>
                    <span className={styles.pill} />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

//  <div className={styles.metricRow}>
//                 <div>
//                   <span className={styles.metricLabel}>Weekly progress</span>
//                   <strong className={styles.metricValue}>82%</strong>
//                 </div>
//                 <div className={styles.chart} />
//               </div>
//               <div className={styles.cardGrid}>
//                 <div className={styles.smallCard}>
//                   <span>Plan</span>
//                   <strong>Ready</strong>
//                 </div>
//                 <div className={styles.smallCard}>
//                   <span>Review</span>
//                   <strong>Live</strong>
//                 </div>
//               </div>

//  <div className={styles.stats}>
//               {stats.map((stat) => (
//                 <Card
//                   key={stat.label}
//                   className={styles.statCard}
//                   variant="outline"
//                 >
//                   <strong>{stat.value}</strong>
//                   <span>{stat.label}</span>
//                 </Card>
//               ))}
//             </div>
