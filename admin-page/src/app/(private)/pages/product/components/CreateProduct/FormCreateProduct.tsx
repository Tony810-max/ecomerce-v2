import React from "react";
import axios from "../../../../../../util/axios.customize";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { productSchema } from "../types/productSchemta";
import { Button } from "@/components/ui/button";
import LabelInput from "@/components/LabelInput";
import { toast } from "react-toastify";
import { useError } from "@/app/hooks/useError";
import { ProductContext } from "@/app/contexts/productContext";

type formInput = {
  name: string;
  description: string;
  price: number;
  category: string;
  countInStock: string;
};

interface IFormProduct {
  onSetOpen: (value: boolean) => void;
}

const FormCreateProduct: React.FC<IFormProduct> = ({ onSetOpen }) => {
  const { handleError } = useError();
  const productContext = React.useContext(ProductContext);
  const fetchProduct = productContext?.fetchProduct;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const handleCreateProduct = async (data: formInput) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("priceOrigin", data.price.toString());
      formData.append("category", data.category);
      formData.append("countInStock", data.countInStock.toString());
      formData.append("image", watch("image")[0]);

      const response = await axios.post(
        "http://localhost:3001/api/v1/products",
        formData
      );

      if (response) {
        onSetOpen(false);
        toast.success("Create Product Successfully");
        fetchProduct();
      }
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleCreateProduct)} className="space-y-6">
      <LabelInput
        errors={errors}
        label="Name"
        name="name"
        register={register}
      />
      <LabelInput
        errors={errors}
        label="Description"
        name="description"
        register={register}
      />
      <LabelInput
        type="file"
        errors={errors}
        label="Image"
        name="image"
        register={register}
      />

      <LabelInput
        errors={errors}
        label="Price"
        name="price"
        register={register}
      />

      <LabelInput
        errors={errors}
        label="Discount"
        name="discount"
        register={register}
      />

      <LabelInput
        errors={errors}
        label="sale Percent"
        name="salePercent"
        register={register}
      />

      <div>
        <Label>category</Label>
        <Input {...register("category")} />
      </div>

      <LabelInput
        errors={errors}
        label="Count In Stock"
        name="countInStock"
        register={register}
      />

      <div className="flex justify-end">
        <Button type="submit">Create Product</Button>
      </div>
    </form>
  );
};

export default FormCreateProduct;
