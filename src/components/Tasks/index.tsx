"use client";

import { useEffect, useId, useState } from "react";
import styles from "./tasks.module.scss";
import { TaskProps } from "@/types/types";
import TaskCard from "./TaskCard";
import Button from "../Button";
import Modal from "../Modal";
import Input from "../Input";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const id = useId();

  useEffect(() => {
    setTasks([
      {
        id: id,
        completed: false,
        label: "Lavar as mãos",
        date: new Date(),
      },
      {
        id: id,
        completed: false,
        label: "Fazer um bolo",
        date: new Date(),
      },
      {
        id: id,
        completed: false,
        label: "Lavar a louça",
        date: new Date(),
      },

      {
        id: id,
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
      <div className={styles["task-content"]}>
        {incompleteTasks.length > 0 && (
          <>
            <span
              className={`${styles["text-regular"]} ${styles["task-heading"]}`}
            >
              Suas tarefas de hoje
            </span>
            {incompleteTasks.map((task, index) => (
              <TaskCard key={index} task={task} />
            ))}
          </>
        )}
        {completedTasks.length > 0 && (
          <>
            <span
              className={`${styles["text-regular"]} ${styles["task-heading"]}`}
            >
              Tarefas finalizadas
            </span>
            {completedTasks.map((task, index) => (
              <TaskCard key={index} task={task} />
            ))}
          </>
        )}

        {tasks.length === 0 && (
          <span
            className={`${styles["text-regular"]} ${styles["task-heading"]}`}
          >
            Nenhuma tarefa na lista
          </span>
        )}
      </div>
      <Button onClick={() => setCreateModalOpen(true)}>
        Adicionar nova tarefa
      </Button>
      <Modal
        isOpen={createModalOpen}
        header="Nova Tarefa"
        onClose={() => setCreateModalOpen(false)}
        onSubmit={() => ""}
      >
        <Input label="Titulo" placeholder="Digite" />
        <div className={styles.buttons}>
          <Button variant="ligth" onClick={() => setCreateModalOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={() => ""}>Adicionar</Button>
        </div>
      </Modal>
    </section>
  );
}
