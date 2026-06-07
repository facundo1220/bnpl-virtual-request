import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";

import { schema } from "../components/requestForm/schema";
import {
  requestPNBLRepository,
  CreateRequestResponse,
} from "../repository";
import { useAppStore } from "@/shared/store/useAppStore";

const SUBMIT_REQUEST_LOADING_KEY = "requestPNBL:submitRequest";
const COLOMBIA_PHONE_PREFIX = "+57";
const DEFAULT_ERROR_MESSAGE = "Ocurrio un error al enviar la solicitud";

type Step = "form" | "result" | "error";

export function useRequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [step, setStep] = useState<Step>("form");
  const [result, setResult] = useState<CreateRequestResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE);

  const isLoading = useAppStore((state) =>
    state.isLoading(SUBMIT_REQUEST_LOADING_KEY)
  );
  const setLoading = useAppStore((state) => state.setLoading);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(SUBMIT_REQUEST_LOADING_KEY, true);

    try {
      const response = await requestPNBLRepository.createRequest({
        ...data,
        userPhoneNumber: `${COLOMBIA_PHONE_PREFIX}${data.userPhoneNumber}`,
      });

      setResult(response);
      setStep("result");
    } catch (error) {
      const message = isAxiosError(error)
        ? error.response?.data?.message ?? DEFAULT_ERROR_MESSAGE
        : DEFAULT_ERROR_MESSAGE;

      setErrorMessage(message);
      setStep("error");
    } finally {
      setLoading(SUBMIT_REQUEST_LOADING_KEY, false);
    }
  });

  const goBack = () => {
    setResult(null);
    setStep("form");
    reset();
  };

  return {
    register,
    errors,
    onSubmit,
    isLoading,
    step,
    result,
    errorMessage,
    goBack,
  };
}
