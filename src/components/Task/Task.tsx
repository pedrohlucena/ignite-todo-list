import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { Radio } from "../Radio/Radio";
import { TaskData } from "../TasksContainer/TasksContainer";

interface TaskProps {
  task: TaskData;
  onChangeTaskStatus: (id: string) => void;
}

export function Task({ task, onChangeTaskStatus }: TaskProps) {
  const { id, title, isCompleted } = task;

  const titleClasses = [
    styles.taskTitle,
    isCompleted ? styles.crossedOutTitle : styles.normalTitle,
  ].join(" ");

  return (
    <div className={styles.task}>
      <div className={styles.radioAndTaskTitle}>
        <Radio
          taskId={id}
          isCompleted={isCompleted}
          onChangeTaskStatus={onChangeTaskStatus}
        />
        <p className={titleClasses}>{title}</p>
      </div>
      <Trash size={14} />
    </div>
  );
}
