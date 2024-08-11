import { phoneRegExp } from "@/types/common";
import * as yup from "yup";

export const profileSchema = yup
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

export const changePasswordSchema = yup
  .object()
  .shape({
    oldPassword: yup.string().required(),
    newPassword: yup.string().required(),
    confirmPassword: yup.string().required(),
  })
  .required();
