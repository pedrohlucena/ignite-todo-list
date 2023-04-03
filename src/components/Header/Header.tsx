import styles from "./Header.module.css";

import rocketImg from "../../assets/rocket.svg";

export function Header() {
  return (
    <header>
      <div className={styles.background}>
        <div className={styles.rocketAndToDo}>
          <img
            src={rocketImg}
            alt="Imagem cartoonizada de um foguete decolando"
          />
          <p>
            <span className={styles.to}>to</span>
            <span className={styles.do}>do</span>
          </p>
        </div>
      </div>
    </header>
  );
}
