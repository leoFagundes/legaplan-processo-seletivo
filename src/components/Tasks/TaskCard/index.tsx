"use client";

import { TaskProps } from "@/types/types";
import styles from "./task.module.scss";
import { FiTrash } from "react-icons/fi";

interface TaskCardProps {
  task: TaskProps;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className={styles.container}>
      <span className={`${styles["text-regular"]} ${styles["task-label"]}`}>
        {task.label}
      </span>
      <FiTrash className={styles["trash-icon"]} size={20} />
    </div>
  );
}
