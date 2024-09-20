import { ComponentProps } from "react";
import styles from "./checkbox.module.scss";
import { FiCheck } from "react-icons/fi";

interface CheckBoxProps extends ComponentProps<"input"> {}

export default function CheckBox({ checked, ...props }: CheckBoxProps) {
  return (
    <div className={`${styles.container} ${checked && styles.checked}`}>
      {checked && <FiCheck className={styles["check-icon"]} size={18} />}
      <input checked={checked} type="checkbox" {...props} />
    </div>
  );
}
