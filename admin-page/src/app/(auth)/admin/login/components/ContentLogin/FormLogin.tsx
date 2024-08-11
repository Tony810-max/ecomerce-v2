"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../../../../../util/axios.customize";

import { Input } from "@/components/ui/input";
import { KeyRound, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loginSchema } from "../../types/loginSchema";
import { AxiosError } from "axios";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { useError } from "@/app/hooks/useError";
import { useRouter } from "next/navigation";
import ROUTES from "@/types/routes";

type formLogin = {
  email: string;
  password: string;
};

const FormLogin = () => {
  const { handleError } = useError();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();

  const handleLogin = async (data: formLogin) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/users/login`, {
        email: data?.email,
        password: data?.password,
      });
      if (response?.data?.user?.isAdmin === true) {
        toast.success("Login successfully");
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        localStorage.setItem("token", JSON.stringify(response?.data?.token));
        console.log(response);
        setTimeout(() => {
          router.replace(ROUTES.ADMIN);
        }, 1500);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
      <div className="relative">
        <Input className="px-10" {...register("email")} />
        <Mail className="absolute top-1/2 -translate-y-1/2 left-2" />
      </div>
      <div className="relative">
        <Input type="password" className="px-10" {...register("password")} />
        <KeyRound className="absolute top-1/2 -translate-y-1/2 left-2" />
      </div>
      <Button
        variant={"destructive"}
        className="font-sans text-lg bg-[#007cfe] w-full hover:bg-[#007cfe] hover:opacity-70"
      >
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
