import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import styles from "./why-choose-us.module.scss";
import { Title } from "../ui/title";
import Image from "next/image";
import { Heading } from "../ui/heading";

type Step = {
  index: string;
  imgSrc: string;
  description: string;
};

type WhyChooseUsProps = {
  steps: Step[];
};

export function WhyChooseUs({ steps }: WhyChooseUsProps) {
  return (
    <SectionWrapper
      id="process"
    >
      <Title title="Why Choose Us" color="colored"/>
      <Heading level={3} className={styles.heading}>Expert Guidance, Proven Results</Heading>
      <div className={styles.grid}>
        {steps.map((step) => (
          <Card key={step.index} className={styles.card} variant="ghost">
            <Image src={`/assets/why-choose/${step.imgSrc}`} alt={`Step ${step.index}`} width={64} height={64} />
            <Text as="p" className={styles.text}>{step.description}</Text>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}