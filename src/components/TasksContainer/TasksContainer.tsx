import styles from "./TasksContainer.module.css";
import clipboardImg from "../../assets/clipboard.svg";

import { CallsignInNumbers } from "../CallsignInNumbers/CallsignInNumbers";
import { Task, TaskData } from "../Task/Task";

import { XOfYCallsignInNumbers } from "../XOfYCallsignInNumbers/XOfYCallsignInNumbers";
import { setTasksCallbackType } from "../../App";

interface TasksContainerProps {
  tasks: TaskData[];
  onSetTasks: setTasksCallbackType;
}

export function TasksContainer({ tasks, onSetTasks }: TasksContainerProps) {
  function handleTaskStatusChange(id: string) {
    const newTaskArray = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    onSetTasks(newTaskArray);
  }

  const handleDeleteTask = (id: string) => {
    const newTaskArray = tasks.filter((task) => task.id !== id);
    onSetTasks(newTaskArray);
  };

  const completedTasksNumber = tasks.reduce(
    (completedTasksNumber, currentTask) => {
      return currentTask.isCompleted
        ? completedTasksNumber + 1
        : completedTasksNumber;
    },
    0
  );

  return (
    <main>
      <header className={styles.tasksInfo}>
        <CallsignInNumbers
          text="Tarefas criadas"
          textColor="blue"
          indicativeNumber={tasks.length}
        />
        <XOfYCallsignInNumbers
          text="Concluídas"
          indicativeNumber={completedTasksNumber}
          totalNumber={tasks.length}
        />
      </header>

      {tasks.length ? (
        <main className={styles.filledToDoList}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onChangeTaskStatus={handleTaskStatusChange}
                onDeleteTask={handleDeleteTask}
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
