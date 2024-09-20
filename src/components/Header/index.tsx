import Image from "next/image";
import styles from "./header.module.scss";
import logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src={logo.src} width={150} height={36} alt="logo" />
        <h1 className={`${styles.heading}`}>Bem-vindo de volta, Marcus</h1>
        <span className={`${styles["text-regular"]} ${styles.date}`}>
          Segunda, 01 de dezembro de 2025
        </span>
      </div>
    </header>
  );
}
