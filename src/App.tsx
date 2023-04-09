import { useState } from "react";

import { Header } from "./components/Header/Header";
import { TasksContainer } from "./components/TasksContainer/TasksContainer";

import { TaskData } from "./components/Task/Task";

import "./global.css";
import styles from "./App.module.css";
import { TaskForm } from "./components/TaskForm/TaskForm";

export type setTasksCallbackType = (newTasksArray: TaskData[]) => void;

export function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const setTasksCallback = (newTasksArray: TaskData[]) =>
    setTasks(newTasksArray);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <TaskForm tasks={tasks} onSetTasks={setTasksCallback} />
          <TasksContainer tasks={tasks} onSetTasks={setTasksCallback} />
        </div>
      </div>
    </div>
  );
}
