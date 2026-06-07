"use client";

import { useRequestForm } from "../../hooks/useRequestForm";

import RequestForm from "../requestForm";
import RequestResult from "../requestResult";
import RequestError from "../requestError";

function RequestFlow() {
  const {
    register,
    onSubmit,
    errors,
    isLoading,
    step,
    result,
    errorMessage,
    goBack,
  } = useRequestForm();

  if (step === "result" && result) {
    return <RequestResult result={result} onBack={goBack} />;
  }

  if (step === "error") {
    return <RequestError message={errorMessage} onBack={goBack} />;
  }

  return (
    <RequestForm
      register={register}
      onSubmit={onSubmit}
      errors={errors}
      isLoading={isLoading}
    />
  );
}

export default RequestFlow;
