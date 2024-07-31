"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ROUTES from "@/types/routes";
import { loginSchema } from "./types/loginSchema";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";

type formLogin = {
  email: string;
  password: string;
};

const FormLogIn = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data: formLogin) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/users/login`, {
        email: data.email,
        password: data.password,
      });

      if (response) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));

        toast.success("Login successful");
        setTimeout(() => {
          window.location.href = ROUTES.HOME;
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
    <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
      <Input placeholder="enter your email" {...register("email")} />
      <Input
        type="password"
        placeholder="enter your password"
        {...register("password")}
      />
      <div className="flex items-center justify-between">
        <Button
          variant={"destructive"}
          className="font-sans text-base py-4 px-12"
        >
          Log in
        </Button>
        <Link
          href={ROUTES.FORGOTPASSWORD}
          className="font-sans text-sm text-red-600 hover:opacity-70 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};

export default FormLogIn;
