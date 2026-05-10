import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import styles from "./page.module.scss";

const values = [
  { title: "Integrity", caption: "Client-First Approach", icon: "like-shapes" },
  { title: "Professionalism", caption: "Client-First Approach", icon: "user-tick" },
  { title: "Quality & Accuracy", caption: "Client-First Approach", icon: "chart-success" },
  { title: "Client-First Approach", caption: "Client-First Approach", icon: "user-tag" },
];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <Container size="wide">
          <div className={styles.heroGrid}>
            <div className={styles.heroVisualPrimary}>
              <Image src="/assets/about/img1.png" alt="Team member reviewing documents" fill className={styles.heroImage} priority />
            </div>

            <div className={styles.heroCopy}>
              <Heading level={1} className={styles.heroTitle}>
                Building trust through financial excellence
              </Heading>
              <Text className={styles.heroText}>
                We have grown into a firm respected for technical excellence and deep regulatory experience.
              </Text>
              <Button href="/contact" variant="primary">
                Get a Consultation
              </Button>
            </div>

            <div className={styles.heroStack} aria-hidden="true">
              <div className={styles.heroMiniCard}>
                <Image src="/assets/about/img2.png" alt="" fill className={styles.heroImage} />
              </div>
              <div className={styles.heroMiniCard}>
                <Image src="/assets/about/img3.png" alt="" fill className={styles.heroImage} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.storySection}>
        <Container size="wide">
          <div className={styles.storyGrid}>
            <div className={styles.storyVisual} aria-hidden="true">
              <div className={styles.storyImageCard}>
                <Image src="/assets/about/mission.png" alt="" fill className={styles.storyImage} />

                <div className={styles.storyBadgeGroup}>
                  <span className={styles.percentBadge}>70%</span>
                  <span className={styles.percentBadge}>5%</span>
                  <span className={styles.percentBadge}>25%</span>
                </div>

                <div className={styles.insightsChip}>
                  <span className={styles.insightsLabel}>User Insights</span>
                  <div className={styles.avatarRow}>
                    <span className={styles.avatar}>OO</span>
                    <span className={styles.avatar}>OM</span>
                    <span className={styles.avatar}>PS</span>
                    <span className={styles.avatar}>+</span>
                  </div>
                </div>

                <div className={styles.statChip}>+5k</div>
              </div>
            </div>

            <div className={styles.storyCopy}>
              <div className={styles.storyBlock}>
                <Heading level={2} className={styles.storyHeading}>
                  Our Vision
                </Heading>
                <Text className={styles.storyText}>
                  To be a foremost professional services firm, recognised for excellence, integrity, and innovation.
                </Text>
              </div>

              <div className={styles.storyBlock}>
                <Heading level={2} className={styles.storyHeading}>
                  Our Mission
                </Heading>
                <Text className={styles.storyText}>
                  To provide high-quality, value-driven professional services through technical expertise, ethical
                  standards, and client-focused solutions that enhance business performance, ensure regulatory
                  compliance, and promote sustainable growth for our clients and stakeholders.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.valuesSection}>
        <Container size="wide">
          <Heading level={2} className={styles.sectionTitle}>
            Our Values
          </Heading>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article key={value.title} className={styles.valueCard}>
                <Image src={`/assets/about/${value.icon}.png`} alt="" width={40} height={40} className={styles.valueIcon} />
                <Heading level={3} className={styles.valueTitle}>
                  {value.title}
                </Heading>
                <Text className={styles.valueCaption}>{value.caption}</Text>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.leaderSection}>
        <Container size="wide">
          <Heading level={2} className={styles.sectionTitle}>
            Our Dedicated Leader
          </Heading>

          <div className={styles.leaderCard}>
            <div className={styles.leaderImageWrap}>
              <Image src="/assets/about/founder.jpg" alt="OOM leadership portrait" fill className={styles.leaderImage} />
            </div>

            <div className={styles.leaderCopy}>
              <Text className={styles.leaderLead}>
                The OOM Team is led by Dr. Olanrewaju Ogunwale, Managing Partner, alongside a team of experienced
                Partners and Consultants with expertise spanning accounting, finance, taxation, and advisory services.
              </Text>
              <Text className={styles.leaderText}>
                With over 35 years of professional experience, particularly within Nigeria’s banking and financial
                services sector, Dr. Ogunwale brings a strong mix of technical knowledge, leadership, and strategic
                insight developed across both corporate and professional environments. He holds advanced academic
                qualifications in accounting and business administration, and is a Fellow of ICAN and an Associate
                Member of CITN, reflecting his commitment to professional excellence.
              </Text>
              <Text className={styles.leaderText}>
                Dr. Ogunwale began his career at NISUCO and later built a strong foundation in audit practice at
                Babatunde Sanni &amp; Co. before transitioning into the banking sector, where he held key roles at
                Afribank, City Express Bank, and Intercontinental Bank, rising to Area Business Executive.
              </Text>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}