import { ReactNode } from "react";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  header: string;
  children: ReactNode;
  onSubmit: VoidFunction;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  header,
}: ModalProps) {
  return (
    <>
      {isOpen && (
        <section onClick={onClose} className={styles.container}>
          <div onClick={(e) => e.stopPropagation()} className={styles.content}>
            <h2 className={styles.heading}>{header}</h2>
            {children}
          </div>
        </section>
      )}
    </>
  );
}
