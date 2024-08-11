"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../../util/axios.customize";

import LabelInput from "@/components/LabelInput";
import { changePasswordSchema } from "../types/profileSchema";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { useGetUser } from "@/hooks/useGetUser";
import { Button } from "@/components/ui/button";

type formChangePassword = {
  oldPassword: string;
  confirmPassword: string;
  newPassword: string;
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const { user, handleLogout } = useGetUser(false, true);

  const handleChangePassord = async (data: formChangePassword) => {
    try {
      const resposne = await axios.patch(
        `${API_URL}/api/v1/users/change-password/${user?._id}`,
        {
          oldPassword: data.oldPassword,
          newPassword: data.confirmPassword,
        }
      );

      if (resposne) {
        toast.success("Password updated successfully");
        handleLogout();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full space-y-4 shadow-md px-6 py-5 animate__animated animate__bounceInLeft">
      <span className="font-sans text-lg text-[#d45d6c] font-bold">
        Password Change
      </span>
      <form onSubmit={handleSubmit(handleChangePassord)} className="space-y-4">
        <LabelInput
          type="password"
          errors={errors}
          label="Current Password"
          name="oldPassword"
          register={register}
          placeholder="Current Passwod"
        />
        <LabelInput
          type="password"
          errors={errors}
          label="New Password"
          name="newPassword"
          register={register}
          placeholder="New Password"
        />
        <LabelInput
          type="password"
          errors={errors}
          label="Confirm New Password"
          name="confirmPassword"
          register={register}
          placeholder="Confirm New Passwod"
        />
        <div className="flex justify-end">
          <Button
            variant={"destructive"}
            className="font-sans text-base text-white"
          >
            Change
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
