import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../../../../../util/axios.customize";

import LabelInput from "@/components/LabelInput";
import { Button } from "@/components/ui/button";
import { categorySchema } from "../../types/categorySchema";
import { useError } from "@/app/hooks/useError";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { CategoryContext } from "@/app/contexts/categoryContext";
type inputForm = {
  name: string;
  color: string;
  icon: string;
};

interface IFormCreateCategory {
  onSetOpen: (value: boolean) => void;
}

const FormCreateCategory: React.FC<IFormCreateCategory> = ({ onSetOpen }) => {
  const { handleError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categorySchema),
  });

  const categoryContext = React.useContext(CategoryContext);
  const { fetchCategory } = categoryContext;

  const handleCreateCategory = async (data: inputForm) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/categories`, {
        name: data?.name,
        color: data?.color,
        icon: data?.name,
      });

      if (response) {
        toast.success("Category created successfully");
        onSetOpen(false);
        fetchCategory();
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <form
      className="grid gap-4 py-4"
      onSubmit={handleSubmit(handleCreateCategory)}
    >
      <LabelInput
        errors={errors}
        label="Name"
        name="name"
        register={register}
      />
      <LabelInput
        errors={errors}
        label="Color"
        name="color"
        register={register}
      />
      <LabelInput
        errors={errors}
        label="Icon"
        name="icon"
        register={register}
      />

      <div className="flex justify-end">
        <Button variant={"destructive"}>Save changes</Button>
      </div>
    </form>
  );
};

export default FormCreateCategory;
