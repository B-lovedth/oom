"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { Text } from "@/components/ui/text";

import { Title } from "../ui/title";
import styles from "./who-we-serve.module.scss";

type WhoWeServeCard = {
  number: string;
  title: string;
  description: string;
};

const cards: WhoWeServeCard[] = [
  {
    number: "01",
    title: "Government Agencies",
    description:
      "Strengthening public sector accountability through transparent audits and regulatory compliance.",
  },
  {
    number: "02",
    title: "Financial Institutions",
    description:
      "We work with internal finance teams that need audit support, compliance oversight, and practical process improvements.",
  },
  {
    number: "03",
    title: "Educational Institutions",
    description:
      "We help public-sector organizations strengthen accountability, improve transparency, and stay aligned with regulatory demands.",
  },
  {
    number: "04",
    title: "SMEs & Corporates",
    description:
      "We give founders and small teams the structure they need to manage tax, bookkeeping, and business decisions with confidence.",
  },
];

export function WhoWeServe() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateIsDesktop = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);

    return () => {
      mediaQuery.removeEventListener("change", updateIsDesktop);
    };
  }, []);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Title title="Who We Serve" color="colored" />
        </div>
        <div className={styles.grid} data-accordion={isDesktop ? "desktop" : "mobile"}>
          {cards.map((card, index) => {
            const isOpen = !isDesktop || openIndex === index;

            return (
              <article
                key={card.number}
                className={`${styles.card} ${isOpen ? styles.open : ""}`}
              >
                {isDesktop ? (
                  <button
                    type="button"
                    className={styles.toggle}
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? "Collapse" : "Expand"} ${card.title}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span
                      aria-hidden="true"
                      className={`${styles.toggleIcon} ${styles.plusIcon}`}
                    />
                    <span
                      aria-hidden="true"
                      className={`${styles.toggleIcon} ${styles.closeIcon}`}
                    />
                  </button>
                ) : null}

                <div className={styles.content}>
                  <div className={styles.number}>{card.number}</div>
                  <div className={styles.copy}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <Text className={`${styles.description} ${isOpen ? styles.descriptionOpen : ""}`}>
                      {card.description}
                    </Text>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
