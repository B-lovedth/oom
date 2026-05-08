import Image from "next/image";
import Link from "next/link";

import { Container } from "./container";
import styles from "./footer.module.scss";

const quickLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about" },
  { label: "Services", href: "/services" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "/assets/footer/instagram.png" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "/assets/footer/linkedIn.png" },
  { label: "Twitter", href: "https://x.com", icon: "/assets/footer/x.png" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container size="wide">
        <div className={styles.grid}>
          <div className={styles.subscribeBlock}>
            <h2 className={styles.heading}>Subscribe to be in touch with latest news</h2>

            <form className={styles.subscribeForm}>
              <label className={styles.srOnly} htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                className={styles.input}
                type="email"
                placeholder="Enter Email Address"
              />
              <button className={styles.subscribeButton} type="submit">
                Subscribe
              </button>
            </form>

            <div className={styles.logoWrap}>
              <Image src="/logo-colored.png" alt="OOM Professional Services" width={320} height={160} priority={false} />
            </div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.topRow}>
              <section>
                <h3 className={styles.sectionTitle}>Quick Links</h3>
                <nav className={styles.linkList} aria-label="Footer quick links">
                  {quickLinks.map((item) => (
                    <Link key={item.label} href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </section>

              <section>
                <h3 className={styles.sectionTitle}>Socials</h3>
                <div className={styles.socialList}>
                  {socialLinks.map((item) => (
                    <a key={item.label} href={item.href} className={styles.socialLink} target="_blank" rel="noreferrer">
                      <Image src={item.icon} alt="" width={22} height={22} className={styles.socialIcon} aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </section>
            </div>

            <section className={styles.officeBlock}>
              <h3 className={styles.sectionTitle}>Office Details</h3>

              <div className={styles.officeItem}>
                <Image src="/assets/footer/location.png" alt="" width={22} height={22} className={styles.officeIcon} aria-hidden="true" />
                <div>
                  <strong>Head Office:</strong>
                  <p>Suite 304, Famous Building, No. 74 Iheri/Ojodu Road, Lagos</p>
                </div>
              </div>

              <div className={styles.officeItem}>
                <Image src="/assets/footer/call.png" alt="" width={22} height={22} className={styles.officeIcon} aria-hidden="true" />
                <div>
                  <strong>Phone:</strong>
                  <p>(0201) 888 0420 | 0803 619 1414 | 0802 323 1269</p>
                </div>
              </div>

              <div className={styles.officeItem}>
                <Image src="/assets/footer/mail.png" alt="" width={22} height={22} className={styles.officeIcon} aria-hidden="true" />
                <div>
                  <strong>Email:</strong>
                  <p>info@oom.com.ng | oomprofessionalservices@gmail.com</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </footer>
  );
}