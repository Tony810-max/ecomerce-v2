"use client";
import React from "react";
import { AxiosError } from "axios";

import axios from "../../../../util/axios.customize";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Minus, Plus } from "lucide-react";
import { toast } from "react-toastify";
import { API_URL } from "@/types/common";
import { useParams } from "next/navigation";
import { useGetUser } from "@/hooks/useGetUser";
import { useForm } from "react-hook-form";

const FormInfoProduct = () => {
  const { handleSubmit } = useForm();

  const { user } = useGetUser();
  const [value, setValue] = React.useState(1);

  const param = useParams();
  const idProduct = param?.id;

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/carts/${idProduct}`,
        {
          quantity: value,
          userId: user?._id,
        }
      );
      if (response) {
        toast.success("Added to cart");
      }
    } catch (error) {
      const errors = error as AxiosError<{ message: string }>;
      const status = errors?.response?.status;
      const errMessage = errors.response?.data?.message;
      if (status === 401 || status === 404 || status === 404) {
        toast.error(errMessage);
      }
    }
  };
  
  return (
    <form className="flex items-center gap-4" onSubmit={handleSubmit(handleAddToCart)}>
      <div className="flex items-center h-11">
        <Minus
          className="h-full border-l border-t border-b border-r-0 w-10 hover:opacity-50 hover:cursor-pointer"
          onClick={() =>
            setValue((prev) => {
              if (prev > 1) {
                return prev - 1;
              }
              return prev;
            })
          }
        />
        <Input
          type="string"
          className="rounded-none py-2 h-full"
          value={value < 0 ? 1 : value}
          onChange={(e) => {
            if (Number(e.target.value) > 20) {
              return 20;
            }
            return setValue(Number(e.target.value));
          }}
        />
        <Plus
          className="h-full border-l border-t border-b border-r-0 bg-[#db4444] w-10 hover:opacity-50 hover:cursor-pointer"
          color="white"
          onClick={() =>
            setValue((prev) => {
              if (prev >= 20) return prev;
              return prev + 1;
            })
          }
        />
      </div>
      <Button
        variant={"destructive"}
        className="font-sans text-base py-2 px-12"
      >
        Buy Now
      </Button>
      <Heart className="hover:opacity-50 hover:cursor-pointer" />
    </form>
  );
};

export default FormInfoProduct;
