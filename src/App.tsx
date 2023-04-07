import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

import "./global.css";
import styles from "./App.module.css";

import { PlusCircle } from "@phosphor-icons/react";
import { TasksContainer } from "./components/TasksContainer/TasksContainer";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.inputAndButtonBox}>
            <Input placeholder="Adicione uma nova tarefa" />
            <Button text="Criar" ButtonIcon={PlusCircle} />
          </div>
          <TasksContainer />
        </div>
      </div>
    </div>
  );
}
