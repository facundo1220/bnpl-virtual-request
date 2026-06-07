"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";

import styles from "./form.module.css";

type RequestFormProps = {
  register: UseFormRegister<any>;
  onSubmit: (event?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors;
  isLoading: boolean;
};

function RequestForm({
  register,
  onSubmit,
  errors,
  isLoading,
}: RequestFormProps) {
  return (
    <form className={styles["main-container"]} onSubmit={onSubmit}>
      <div className={styles["field"]}>
        <label className={styles["label"]}>Cedula de usuario</label>
        <input
          required
          type="number"
          className={styles["input"]}
          {...register("userIdNumber")}
        />
        {errors.userIdNumber && (
          <span className={styles["field-error"]}>
            {errors.userIdNumber.message as string}
          </span>
        )}
      </div>

      <div className={styles["field"]}>
        <label className={styles["label"]}>Celular de usuario</label>
        <input
          required
          type="number"
          className={styles["input"]}
          {...register("userPhoneNumber")}
        />
        {errors.userPhoneNumber && (
          <span className={styles["field-error"]}>
            {errors.userPhoneNumber.message as string}
          </span>
        )}
      </div>

      <div className={styles["field"]}>
        <label className={styles["label"]}>Monto a pedir</label>
        <input
          required
          type="number"
          className={styles["input"]}
          {...register("amount")}
        />
        {errors.amount && (
          <span className={styles["field-error"]}>
            {errors.amount.message as string}
          </span>
        )}
      </div>

      <div className={styles["field"]}>
        <label className={styles["label"]}>Numero de cuotas</label>
        <input
          required
          type="number"
          className={styles["input"]}
          {...register("installmentsCount")}
        />
        {errors.installmentsCount && (
          <span className={styles["field-error"]}>
            {errors.installmentsCount.message as string}
          </span>
        )}
      </div>

      <button
        type="submit"
        className={styles["submit-button"]}
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Subir"}
      </button>
    </form>
  );
}

export default RequestForm;
