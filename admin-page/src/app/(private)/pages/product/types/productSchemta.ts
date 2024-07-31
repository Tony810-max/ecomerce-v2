import * as yup from "yup";

export const productSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    description: yup.string().required(),
    richDescription: yup.string().required(),
    image: yup.string().required(),
    brand: yup.string().required(),
    price: yup.number().required(),
    category: yup.string().required(),
    countInStock: yup.string().required(),
    rating: yup.string().required(),
    numReview: yup.string().required(),
    isFeatured: yup.string().required(),
  })
  .required();
