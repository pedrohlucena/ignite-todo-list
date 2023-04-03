import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import "./global.css";
import { Input } from "./components/Input/Input";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <Input placeholder="Adicione uma nova tarefa" />
        </div>
      </div>
    </div>
  );
}
