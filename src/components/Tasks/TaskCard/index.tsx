"use client";

import { TaskProps } from "@/types/types";
import styles from "./task.module.scss";
import { FiTrash } from "react-icons/fi";
import CheckBox from "@/components/CheckBox";
import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

interface TaskCardProps {
  task: TaskProps;
}

export default function TaskCard({ task }: TaskCardProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <CheckBox checked={task.completed} />
      <span
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
          <Button variant="ligth" onClick={() => setDeleteModalOpen(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => ""}>
            Deletar
          </Button>
        </div>
      </Modal>
    </div>
  );
}
