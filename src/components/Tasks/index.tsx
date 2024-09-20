"use client";

import { useState } from "react";
import styles from "./tasks.module.scss";
import { TaskProps } from "@/types/types";
import TaskCard from "./TaskCard";
import Button from "../Button";
import Modal from "../Modal";
import Input from "../Input";
import { v4 as uuidv4 } from "uuid";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>(() => {
    const storedTasks = localStorage.getItem("task-items");

    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [inputTask, setInputTask] = useState("");

  function handleCreateTask() {
    if (!inputTask.trim()) {
      console.log("Task vazia");
      return;
    }

    const newTask: TaskProps = {
      id: uuidv4(),
      completed: false,
      date: new Date(),
      label: inputTask,
    };

    setTasks([...tasks, newTask]);

    localStorage.setItem("task-items", JSON.stringify([...tasks, newTask]));

    setCreateModalOpen(false);
  }

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
              <TaskCard key={index} task={task} setTasks={setTasks} />
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
              <TaskCard key={index} task={task} setTasks={setTasks} />
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
        <Input
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          label="Titulo"
          placeholder="Digite"
        />
        <div className={styles.buttons}>
          <Button variant="ligth" onClick={() => setCreateModalOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleCreateTask}>Adicionar</Button>
        </div>
      </Modal>
    </section>
  );
}
