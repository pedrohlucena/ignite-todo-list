import { v4 as uuidv4 } from "uuid";

import styles from "./TasksContainer.module.css";
import clipboardImg from "../../assets/clipboard.svg";

import { CallsignInNumbers } from "../CallsignInNumbers/CallsignInNumbers";
import { Task } from "../Task/Task";

import { useState } from "react";
import { XOfYCallsignInNumbers } from "../XOfYCallsignInNumbers/XOfYCallsignInNumbers";

export interface TaskData {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function TasksContainer() {
  // const tasks: Task[] = [];
  const [tasks, setTasks] = useState<TaskData[]>([
    {
      id: uuidv4(),
      title:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: 'Terminar o projeto "Ignite Feed"',
      isCompleted: true,
    },
    {
      id: uuidv4(),
      title: 'Terminar o projeto "ToDo List"',
      isCompleted: false,
    },
  ]);

  function changeTaskStatus(id: string) {
    const newTaskArray = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(newTaskArray);
  }

  return (
    <main>
      <header className={styles.tasksInfo}>
        <CallsignInNumbers
          text="Tarefas criadas"
          textColor="blue"
          indicativeNumber={tasks.length}
        />
        <XOfYCallsignInNumbers text="Concluídas" indicativeNumber={2} />
      </header>

      {tasks.length ? (
        <main className={styles.filledToDoList}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onChangeTaskStatus={changeTaskStatus}
              />
            );
          })}
        </main>
      ) : (
        <main className={styles.emptyToDoList}>
          <img src={clipboardImg} alt="Imagem cartoonizada de uma prancheta" />
          <div className={styles.noTasksText}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </main>
      )}
    </main>
  );
}
