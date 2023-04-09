import { Icon } from "@phosphor-icons/react";
import styles from "./Button.module.css";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  ButtonIcon: Icon;
}

export function Button({ text, ButtonIcon, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      <p>{text}</p>
      <ButtonIcon size={16} />
    </button>
  );
}
