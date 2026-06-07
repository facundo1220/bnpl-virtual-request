import styles from "./error.module.css";

type RequestErrorProps = {
  message: string;
  onBack: () => void;
};

function RequestError({ message, onBack }: RequestErrorProps) {
  return (
    <div className={styles["main-container"]}>
      <h2 className={styles["title"]}>No se pudo enviar la solicitud</h2>
      <p className={styles["message"]}>{message}</p>

      <button className={styles["back-button"]} onClick={onBack}>
        Volver
      </button>
    </div>
  );
}

export default RequestError;
