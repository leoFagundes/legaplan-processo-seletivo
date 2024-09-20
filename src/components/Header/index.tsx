import Image from "next/image";
import styles from "./header.module.scss";
import logo from "@/assets/images/logo.png";

export default function Header() {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  };

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src={logo.src} width={150} height={36} alt="logo" />
        <h1 className={`${styles.heading} ${styles["welcome-title"]}`}>
          Bem-vindo de volta, Leonardo
        </h1>
        <span className={`${styles["text-regular"]} ${styles.date}`}>
          {formatDate(new Date())}
        </span>
      </div>
    </header>
  );
}
