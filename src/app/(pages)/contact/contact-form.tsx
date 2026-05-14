"use client";

import { ValidationError, useForm } from "@formspree/react";

import { Button } from "@/components/ui/button";

import styles from "./page.module.scss";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mojrzbno");

  if (state.succeeded) {
    return (
      <div className={styles.formCard}>
        <p className={styles.successMessage}>Thanks for reaching out. We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Full Name</span>
        <input type="text" name="name" placeholder="Enter your name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </label>

      <label className={styles.field}>
        <span>Phone Number</span>
        <input type="tel" name="phone" placeholder="Enter your phone number" />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </label>

      <label className={styles.field}>
        <span>Email Address</span>
        <input type="email" name="email" placeholder="Enter your email address" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>

      <label className={styles.field}>
        <span>Leave Us a Message</span>
        <textarea name="message" rows={5} placeholder="Tell us how we can help" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </label>

      {state.errors && state.errors.getFormErrors().length > 0 ? (
        <p className={styles.errorMessage} role="alert">
          Please review the form and try again.
        </p>
      ) : null}

      <Button type="submit" variant="secondary" className={styles.submitButton} disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Contact Us"}
      </Button>
    </form>
  );
}
