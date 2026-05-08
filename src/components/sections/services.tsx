
import Image from "next/image";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { Title } from "../ui/title";
import styles from "./services.module.scss";
import { Button } from "../ui/button";

type Service = {
  title: string;
  description: string;
  imgSrc: string;
};

type ServicesProps = {
  services: Service[];
};

export function Services({ services }: ServicesProps) {
  return (
    <SectionWrapper id="service" className={styles.services}>
      <Title title="Our Core Services" color="white" />
      <div className={styles.intro}>
        <Heading level={3} color="white">We use the latest technology and software to ensure accurate record-keeping</Heading>
       <Button href="/services" variant="secondary">Learn More</Button>
      </div>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={service.title} className={`${styles.row} ${index % 2 === 1 ? styles.reverse : ""}`}>
            <div className={styles.content}>
              <Heading level={3}>{service.title}</Heading>
              <Text>{service.description}</Text>
              <Button href="/services" variant="outline">Explore Services</Button>
            </div>
            <div className={styles.imageWrapper}>
              <Image src={`/assets/services/${service.imgSrc}`} alt={service.title} className={styles.image} fill />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}