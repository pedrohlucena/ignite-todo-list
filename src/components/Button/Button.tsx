import { Icon } from "@phosphor-icons/react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  ButtonIcon: Icon;
}

export function Button({ text, ButtonIcon }: ButtonProps) {
  return (
    <button className={styles.button}>
      <p>{text}</p>
      <ButtonIcon size={16} />
    </button>
  );
}
