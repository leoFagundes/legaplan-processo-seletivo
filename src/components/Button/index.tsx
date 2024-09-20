import { ComponentProps, ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "danger" | "light";
}

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.container} ${styles[variant]} ${styles["text-medium"]}`}
      {...props}
    >
      {children}
    </button>
  );
}
