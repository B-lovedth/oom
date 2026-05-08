"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import { navItems } from "@/utils/navigation";
import styles from "./navbar.module.scss";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className={`${styles.header} ${isHomePage ? styles.homeHeader : ""}`}>
      <Container size="wide">
        <div className={styles.bar}>
          <Link className={styles.brand} href="/" onClick={() => setOpen(false)}>
            <Image
              className={styles.brandLogo}
              src={isHomePage ? "/logo.png" : "/logo-colored.png"}
              alt="WorkSheet"
              width={144}
              height={40}
              priority
            />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={`${styles.navLink} ${isHomePage ? styles.navLinkHome : ""}`}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button   href="/contact">
              Get a Consultation
            </Button>
            <button
              className={`${styles.menuButton} ${isHomePage ? styles.menuButtonHome : ""}`}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div id="mobile-nav" className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}>
          {navItems.map((item) => (
            <Link key={item.href} className={styles.mobileLink} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Button href="/contact" onClick={() => setOpen(false)}>
            Get in touch
          </Button>
        </div>
      </Container>
    </header>
  );
}