import { phoneRegExp } from "@/types/common";
import * as yup from "yup";

export const registerSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email("Invalid email.").required(),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    password: yup.string().required(),
  })
  .required();
