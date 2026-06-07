import * as yup from "yup";

export const schema = yup.object({
  userIdNumber: yup.number().min(1).required("Cedula requerida"),
  userPhoneNumber: yup.number().required("Numero requerido"),
  amount: yup
    .number()
    .min(50000, "Almenos 50.000 COP")
    .max(50000000, "Maximo 50000000 COP")
    .required("Monto requerido is required"),
  installmentsCount: yup
    .number()
    .integer()
    .min(1)
    .max(12)
    .required("Numero de cuotas requerido"),
});
