"use client";
import axios, { AxiosError } from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ROUTES from "@/types/routes";
import { registerSchema } from "./types/registerSchema";
import { Label } from "@/components/ui/label";
import { API_URL } from "@/types/common";
import { useRouter } from "next/navigation";

type formRegister = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

const FormCreateAnAcount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const router = useRouter();

  const handleRegister = async (data: formRegister) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/users/register`, {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        password: data?.password,
      });
      if (response) {
        toast.success("User registration successful");

        setTimeout(() => {
          router.push(ROUTES.LOGIN);
        }, 1500);
      }
    } catch (error) {
      const errors = error as AxiosError<{ message: string }>;
      const status = errors?.response?.status;
      const errMessage = errors.response?.data?.message;

      if (status === 401 || status === 404 || status === 400)
        return toast.error(errMessage);

      console.error(errors);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
      <div className="space-y-2">
        <Label>Name</Label>
        <Input placeholder="name" {...register("name")} />
        {errors.name?.message && (
          <p className="text-red-600 font-sans text-sm capitalize">
            {errors.name?.message}
          </p>
        )}
      </div>

      <Input placeholder="email" {...register("email")} />
      {errors.email?.message && (
        <p className="text-red-600 font-sans text-sm capitalize">
          {errors.email?.message}
        </p>
      )}
      <Input placeholder="phone number" {...register("phone")} />
      {errors.phone?.message && (
        <p className="text-red-600 font-sans text-sm capitalize">
          {errors.phone?.message}
        </p>
      )}

      <Input type="password" placeholder="password" {...register("password")} />
      {errors.password?.message && (
        <p className="text-red-600 font-sans text-sm capitalize">
          {errors.password?.message}
        </p>
      )}

      <Button variant={"destructive"} className="font-sans text-base w-full">
        Create Account
      </Button>
      <div className="space-x-1 text-center">
        <span className="font-sans text-sm">Already have account?</span>
        <Link
          href={ROUTES.LOGIN}
          className="font-sans text-sm hover:opacity-70 hover:underline"
        >
          Log in
        </Link>
      </div>
    </form>
  );
};

export default FormCreateAnAcount;
