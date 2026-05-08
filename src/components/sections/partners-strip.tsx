import { Container } from "@/components/layout/container";
import styles from "./partners-strip.module.scss";
import Image from "next/image";
import { Partner } from "@/types/site";
import { Title } from "../ui/title";



export function PartnersStrip({ partners }: Readonly<{ partners: Partner[] }>) {
  const loopedPartners = [...partners, ...partners];

  return (
    <section className={styles.strip}>
      <Container>
        <div className={styles.row}>
          <Title title="Our Trusted Partners" color="colored" />
          <div className={styles.marquee} aria-label="Partner logos">
            <div className={styles.track}>
              {loopedPartners.map((partner, index) => (
                <div className={styles.logo} key={`${partner.label}-${index}`}>
                  <Image
                    src={`/assets/partners/${partner.imgSrc}`}
                    alt={partner.label}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}