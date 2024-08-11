import * as yup from "yup";

export const productSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    description: yup.string().required(),
    discount: yup.string().required(),
    salePercent: yup.string().required(),
    image: yup.string().required(),
    price: yup.number().required(),
    category: yup.string().required(),
    countInStock: yup.string().required(),
  })
  .required();

export const subImageSchema = yup
  .object()
  .shape({
    images: yup.string().required(),
  })
  .required();
