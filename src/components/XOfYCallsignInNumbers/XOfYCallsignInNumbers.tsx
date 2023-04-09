import styles from "./XOfYCallsignInNumbers.module.css";

interface XOfYCallsignInNumbersProps {
  text: string;
  indicativeNumber: number;
  totalNumber: number;
}

export function XOfYCallsignInNumbers({
  text,
  indicativeNumber,
  totalNumber,
}: XOfYCallsignInNumbersProps) {
  return (
    <div className={styles.xOfYCallsignInNumbers}>
      <p>{text}</p>
      <span>
        {indicativeNumber !== 0 ? (
          <p>
            {indicativeNumber} de {totalNumber}
          </p>
        ) : (
          <p>{indicativeNumber}</p>
        )}
      </span>
    </div>
  );
}
