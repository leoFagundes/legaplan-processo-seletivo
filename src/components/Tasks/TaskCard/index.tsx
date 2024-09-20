"use client";

import { TaskProps } from "@/types/types";
import styles from "./task.module.scss";
import { FiTrash } from "react-icons/fi";
import CheckBox from "@/components/CheckBox";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

interface TaskCardProps {
  task: TaskProps;
  setTasks: Dispatch<SetStateAction<TaskProps[]>>;
}

export default function TaskCard({ task, setTasks }: TaskCardProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const updateLocalStorage = (tasks: TaskProps[]) => {
    localStorage.setItem("task-items", JSON.stringify(tasks));
    setTasks(tasks);
  };

  function handleToggleTask() {
    const storedTasks = localStorage.getItem("task-items");

    if (storedTasks) {
      const tasks: TaskProps[] = JSON.parse(storedTasks);
      const updatedTasks = tasks.map((storedTask) => {
        if (storedTask.id === task.id) {
          return { ...storedTask, completed: !storedTask.completed };
        }
        return storedTask;
      });

      updateLocalStorage(updatedTasks);
    }
  }

  function handleDeleteTask() {
    const storedTasks = localStorage.getItem("task-items");

    if (storedTasks) {
      const tasks: TaskProps[] = JSON.parse(storedTasks);
      const updatedTasks = tasks.filter(
        (storedTask) => storedTask.id !== task.id
      );

      updateLocalStorage(updatedTasks);
      setDeleteModalOpen(false);
    }
  }

  return (
    <div className={styles.container}>
      <CheckBox checked={task.completed} onChange={handleToggleTask} />
      <span
        onClick={handleToggleTask}
        className={`${styles["text-regular"]} ${styles["task-label"]} ${
          task.completed && styles.checked
        }`}
      >
        {task.label}
      </span>
      <FiTrash
        className={styles["trash-icon"]}
        size={20}
        onClick={() => setDeleteModalOpen(true)}
      />
      <Modal
        isOpen={deleteModalOpen}
        header="Deletar Tarefa"
        onClose={() => setDeleteModalOpen(false)}
        onSubmit={() => ""}
      >
        <span className={`${styles["text-regular"]} ${styles["modal-text"]}`}>
          Tem certeza que você deseja deletar essa tarefa?
        </span>
        <div className={styles.buttons}>
          <Button variant="light" onClick={() => setDeleteModalOpen(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDeleteTask}>
            Deletar
          </Button>
        </div>
      </Modal>
    </div>
  );
}
