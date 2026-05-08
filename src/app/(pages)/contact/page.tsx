import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { PageHero } from "@/components/sections/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { contactChannels } from "@/utils/site-content";
import styles from "./page.module.scss";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Tell us what you are building and we will shape the interface around it."
        description="Use the form below or pick one of the direct channels if you want to move quickly."
        primaryAction={{ label: "Email us", href: "mailto:hello@worksheet.studio" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />

      <SectionWrapper>
        <div className={styles.contactGrid}>
          <Card className={styles.formCard} variant="elevated">
            <Badge tone="accent">Project request</Badge>
            <Heading level={2}>Share the outline of your project</Heading>
            <form className={styles.form}>
              <Input label="Name" name="name" placeholder="Your name" />
              <Input label="Email" name="email" type="email" placeholder="you@example.com" />
              <Input label="Company" name="company" placeholder="Company or team" />
              <Input
                label="What do you need?"
                name="message"
                as="textarea"
                rows={5}
                placeholder="Describe the pages, timeline, or constraints."
              />
              <Button type="submit">Send inquiry</Button>
            </form>
          </Card>

          <div className={styles.channels}>
            {contactChannels.map((channel) => (
              <Card key={channel.label} className={styles.channelCard}>
                <Badge tone="success">{channel.label}</Badge>
                <Heading level={3}>{channel.title}</Heading>
                <Text>{channel.description}</Text>
                <Button variant="ghost" href={channel.href}>
                  {channel.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}