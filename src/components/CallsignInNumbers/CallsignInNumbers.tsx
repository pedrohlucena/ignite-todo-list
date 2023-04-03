import { useState } from "react";
import styles from "./CallsignInNumbers.module.css";

interface CallsignInNumbersProps {
  text: string;
  textColor: "blue" | "purple";
}

export function CallsignInNumbers({ text, textColor }: CallsignInNumbersProps) {
  const [count, setCount] = useState(0);

  const textColorToApply = textColor === "blue" ? styles.blue : styles.purple;

  return (
    <div className={styles.callsignInNumbers}>
      <p className={textColorToApply}>{text}</p>
      <span>
        <p>{count}</p>
      </span>
    </div>
  );
}
