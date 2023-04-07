import { useState } from "react";
import styles from "./Radio.module.css";

interface RadioProps {
  taskId: string;
  isCompleted: boolean;
  onChangeTaskStatus: (id: string) => void;
}

export function Radio({ taskId, isCompleted, onChangeTaskStatus }: RadioProps) {
  const handleClickRadio = () => onChangeTaskStatus(taskId);

  const classes = [
    styles.radio,
    isCompleted ? styles.checked : styles.unchecked,
  ].join(" ");

  return <input type="radio" className={classes} onClick={handleClickRadio} />;
}
