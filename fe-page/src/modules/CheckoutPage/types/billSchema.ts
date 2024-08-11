import { phoneRegExp } from "@/types/common";
import * as yup from "yup";

export const billSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    address: yup.string().required(),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
  })
  .required();
