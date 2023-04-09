import styles from "./CallsignInNumbers.module.css";

interface CallsignInNumbersProps {
  text: string;
  textColor: "blue" | "purple";
  indicativeNumber: number;
}

export function CallsignInNumbers({
  text,
  textColor,
  indicativeNumber,
}: CallsignInNumbersProps) {
  const textColorToApply = textColor === "blue" ? styles.blue : styles.purple;

  return (
    <div className={styles.callsignInNumbers}>
      <p className={textColorToApply}>{text}</p>
      <span>
        <p>{indicativeNumber}</p>
      </span>
    </div>
  );
}
