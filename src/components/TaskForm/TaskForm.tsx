import { v4 as uuidv4 } from "uuid";

import { ChangeEvent, FormEvent, FormHTMLAttributes, useState } from "react";
import styles from "./TaskForm.module.css";
import { TaskData } from "../Task/Task";
import { PlusCircle } from "@phosphor-icons/react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { setTasksCallbackType } from "../../App";

interface TaskFormProps extends FormHTMLAttributes<HTMLFormElement> {
  tasks: TaskData[];
  onSetTasks: setTasksCallbackType;
}

export function TaskForm({ tasks, onSetTasks, ...props }: TaskFormProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskData = {
      id: uuidv4(),
      title: newTaskText,
      isCompleted: false,
    };

    onSetTasks([newTask, ...tasks]);
    setNewTaskText("");
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.taskForm} {...props}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
      />
      <Button
        text="Criar"
        type="submit"
        ButtonIcon={PlusCircle}
        onClick={handleCreateTask}
      />
    </form>
  );
}
