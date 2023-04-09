import styles from "./XOfYCallsignInNumbers.module.css";

interface XOfYCallsignInNumbersProps {
  text: string;
  indicativeNumber: number;
}

export function XOfYCallsignInNumbers({
  text,
  indicativeNumber,
}: XOfYCallsignInNumbersProps) {
  return (
    <div className={styles.xOfYCallsignInNumbers}>
      <p>{text}</p>
      <span>
        {indicativeNumber !== 0 ? (
          <p>{indicativeNumber} de 5</p>
        ) : (
          <p>{indicativeNumber}</p>
        )}
      </span>
    </div>
  );
}
