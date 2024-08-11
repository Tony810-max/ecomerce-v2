import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../../../../../../util/axios.customize";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { subImageSchema } from "../../types/productSchemta";
import { useError } from "@/app/hooks/useError";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";

interface IAddSubImage {
  idProduct: string;
  onSetOpen: (value: boolean) => void;
}

const FormAddSubImage: React.FC<IAddSubImage> = ({ idProduct, onSetOpen }) => {
  const { handleError } = useError();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subImageSchema),
  });

  const handleAddSubImage = async (data: { images: string }) => {
    try {
      const formData = new FormData();
      const files = watch("images");
      if (files?.length === 0) return toast.error("No images found");

      if (files?.length > 4)
        return toast.error("The number of images exceeds the allowed limit ");

      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      const response = await axios.put(
        `${API_URL}/api/v1/products/gallery/${idProduct}`,
        formData
      );

      if (response) {
        toast.success("Add sub image successfully");
        onSetOpen(false);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(handleAddSubImage)}>
      <div className="space-y-4">
        <Label className="font-sans text-base font-bold">
          Choose sub image for product{" "}
          <span className="font-sans text-base font-bold italic text-red-600">
            (Max 4 Image)
          </span>
        </Label>
        <Input type="file" multiple accept="image/*" {...register("images")} />
      </div>
      {errors.images?.message && (
        <p className="font-sans text-sm text-red-600">
          {errors.images?.message}
        </p>
      )}

      <div className="flex justify-end"></div>
      <div className="flex justify-end">
        <Button variant={"destructive"} className="font-sans text-base">
          Add
        </Button>
      </div>
    </form>
  );
};

export default FormAddSubImage;
