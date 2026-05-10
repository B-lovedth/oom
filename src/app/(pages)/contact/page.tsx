import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/ui/heading";

import styles from "./page.module.scss";

export const metadata = {
  title: "Contact",
};

const contactCards = [
  {
    icon: "/assets/footer/call.png",
    title: "Give Us a Call",
    detail: "081029938475, 0819233348589",
  },
  {
    icon: "/assets/footer/location.png",
    title: "Our Location",
    detail: "081029938475, 0819233348589",
  },
  {
    icon: "/assets/footer/mail.png",
    title: "Send Us an Email",
    detail: "Hello@OOM.com",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <Container size="wide">
        <section className={styles.hero}>
          <Heading level={1} className={styles.title}>
            Contact Us
          </Heading>
          <p className={styles.subtitle}>
            We have grown into a firm respected for technical excellence and deep regulatory experience.
          </p>
        </section>

        <section className={styles.layout}>
          <div className={styles.formColumn}>
            <form
              className={styles.formCard}
              action="https://example.com/contact-demo-endpoint"
              method="post"
            >
              <label className={styles.field}>
                <span>Full Name</span>
                <input type="text" name="fullName" placeholder="Enter Your Name" />
              </label>

              <label className={styles.field}>
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="Enter Your Phone Number" />
              </label>

              <label className={styles.field}>
                <span>Email Address</span>
                <input type="email" name="email" placeholder="Enter Your Email Address" />
              </label>

              <label className={styles.field}>
                <span>Leave Us a Message</span>
                <textarea name="message" rows={5} placeholder="Your Message Here" />
              </label>

              <Button type="submit" variant="secondary" className={styles.submitButton}>
                Contact Us
              </Button>
            </form>
          </div>

          <div className={styles.infoColumn}>
            {contactCards.map((card) => (
              <article key={card.title} className={styles.infoCard}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Image src={card.icon} alt="" width={20} height={20} />
                </span>
                <div className={styles.infoCopy}>
                  <h2 className={styles.infoTitle}>{card.title}</h2>
                  <p className={styles.infoDetail}>{card.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}