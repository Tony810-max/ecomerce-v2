"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../../util/axios.customize";

import LabelInput from "@/components/LabelInput";
import { Button } from "@/components/ui/button";
import { profileSchema } from "../types/profileSchema";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { useGetUser } from "@/hooks/useGetUser";
import { useError } from "@/hooks/useError";

type formProfile = {
  name: string;
  address: string;
  phone: string;
};

const UpdateProfile = () => {
  const { user } = useGetUser();
  const { handleError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: user?.name,
      address: user?.address,
      phone: user?.phone,
    },
  });

  const handleUpdateProfile = async (data: formProfile) => {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v1/users/updateProfile/${user?._id}`,
        {
          name: data.name,
          address: data.address,
          phone: data.phone,
        }
      );

      if (response) {
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="py-10 px-20  w-full space-y-4 shadow-md animate__animated animate__fadeInLeft">
      <span className="font-sans text-[#d45d6c] text-lg font-semibold">
        Edit Your Profile
      </span>
      <form
        className="grid grid-cols-2 gap-x-12 gap-y-6"
        onSubmit={handleSubmit(handleUpdateProfile)}
      >
        <LabelInput
          label="Name"
          name="name"
          register={register}
          errors={errors}
        />
        <LabelInput
          label="Phone"
          name="phone"
          errors={errors}
          register={register}
        />
        <LabelInput
          label="Address"
          name="address"
          errors={errors}
          register={register}
          className="col-span-2"
        />
        <div className="flex justify-end col-span-2">
          <Button variant={"destructive"} className="font-sans text-base">
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
