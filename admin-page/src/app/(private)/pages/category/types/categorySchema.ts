import * as yup from "yup";

export const categorySchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    color: yup.string().required(),
    icon: yup.string().required(),
  })
  .required();
