import { ComponentProps } from "react";
import styles from "./input.module.scss";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  placeholder: string;
}

export default function Input({ label, placeholder, ...props }: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles["text-regular"]}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        {...props}
        className={`${styles.input}`}
      />
    </div>
  );
}
