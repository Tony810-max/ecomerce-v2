import { phoneRegExp } from "@/types/common";
import * as yup from "yup";

export const billSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    company: yup.string().required(),
    street: yup.string().required(),
    apartment: yup.string().required(),
    town: yup.string().required(),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    email: yup.string().email("Invalid email").required(),
  })
  .required();
