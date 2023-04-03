import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

import "./global.css";
import styles from "./App.module.css";

import { PlusCircle } from "@phosphor-icons/react";
import { CallsignInNumbers } from "./components/CallsignInNumbers/CallsignInNumbers";

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
          <div className={styles.tasksInfo}>
            <CallsignInNumbers text="Tarefas criadas" textColor="blue" />
            <CallsignInNumbers text="Concluídas" textColor="purple" />
          </div>
        </div>
      </div>
    </div>
  );
}
