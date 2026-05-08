import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./input.module.scss";

type InputBaseProps = {
  label: string;
  helperText?: string;
  className?: string;
};

type TextInputProps = InputBaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
  };

type TextareaProps = InputBaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
  };

type InputProps = TextInputProps | TextareaProps;

export function Input(props: InputProps) {
  const { label, helperText, className = "" } = props;

  if ("as" in props && props.as === "textarea") {
    const { as: _as, ...textareaProps } = props;

    return (
      <label className={`${styles.field} ${className}`.trim()}>
        <span className={styles.label}>{label}</span>
        <textarea className={styles.control} {...textareaProps} />
        {helperText && <span className={styles.helper}>{helperText}</span>}
      </label>
    );
  }

  const { as: _as, ...inputProps } = props;

  return (
    <label className={`${styles.field} ${className}`.trim()}>
      <span className={styles.label}>{label}</span>
      <input className={styles.control} {...inputProps} />
      {helperText && <span className={styles.helper}>{helperText}</span>}
    </label>
  );
}