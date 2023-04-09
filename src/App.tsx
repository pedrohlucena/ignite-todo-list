import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

import "./global.css";
import styles from "./App.module.css";

import { PlusCircle } from "@phosphor-icons/react";
import { TasksContainer } from "./components/TasksContainer/TasksContainer";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskData } from "./components/Task/Task";

export function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

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

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <form onSubmit={handleCreateTask} className={styles.taskForm}>
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
          <TasksContainer
            tasks={tasks}
            onSetTasks={(newTasksArray: TaskData[]) => setTasks(newTasksArray)}
          />
        </div>
      </div>
    </div>
  );
}
