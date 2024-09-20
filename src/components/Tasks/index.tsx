"use client";

import { useEffect, useState } from "react";
import styles from "./tasks.module.scss";
import { TaskProps } from "@/types/types";
import TaskCard from "./TaskCard";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    setTasks([
      {
        completed: false,
        label: "Lavar as mãos",
        date: new Date(),
      },
      {
        completed: false,
        label: "Fazer um bolo",
        date: new Date(),
      },
      {
        completed: false,
        label: "Lavar a louça",
        date: new Date(),
      },

      {
        completed: true,
        label: "Levar o lixo para fora",
        date: new Date(),
      },
    ]);
  }, []);

  const completedTasks = tasks.filter((task) => task.completed);
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <section className={styles.container}>
      {completedTasks.length > 0 && (
        <>
          <span
            className={`${styles["text-regular"]} ${styles["task-heading"]}`}
          >
            Suas tarefas de hoje
          </span>
          {completedTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </>
      )}
      {incompleteTasks.length > 0 && (
        <>
          <span
            className={`${styles["text-regular"]} ${styles["task-heading"]}`}
          >
            Tarefas finalizadas
          </span>
          {incompleteTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </>
      )}

      {tasks.length === 0 && (
        <span className={`${styles["text-regular"]} ${styles["task-heading"]}`}>
          Nenhuma tarefa na lista
        </span>
      )}
    </section>
  );
}
