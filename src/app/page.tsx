import Header from "@/components/Header";
import styles from "./home.module.scss";
import Tasks from "@/components/Tasks";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Tasks />
    </div>
  );
}
