import { CreateRequestResponse } from "../../repository";

import styles from "./result.module.css";

type RequestResultProps = {
  result: CreateRequestResponse;
  onBack: () => void;
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("es-CO");
}

function RequestResult({ result, onBack }: RequestResultProps) {
  return (
    <div className={styles["main-container"]}>
      <h2 className={styles["title"]}>Solicitud aprobada</h2>

      <div className={styles["field"]}>
        <span className={styles["label"]}>Monto</span>
        <span className={styles["value"]}>{result.amount}</span>
      </div>

      <div className={styles["field"]}>
        <span className={styles["label"]}>Tasa de interes</span>
        <span className={styles["value"]}>{result.interestRate}</span>
      </div>

      <div className={styles["field"]}>
        <span className={styles["label"]}>Fecha de expiracion</span>
        <span className={styles["value"]}>
          {formatDate(result.expirationDate)}
        </span>
      </div>

      <div className={styles["field"]}>
        <span className={styles["label"]}>Fechas de cuotas</span>
        <ul className={styles["list"]}>
          {result.installmentDates.map((date) => (
            <li key={date}>{formatDate(date)}</li>
          ))}
        </ul>
      </div>

      <button className={styles["back-button"]} onClick={onBack}>
        Volver
      </button>
    </div>
  );
}

export default RequestResult;
