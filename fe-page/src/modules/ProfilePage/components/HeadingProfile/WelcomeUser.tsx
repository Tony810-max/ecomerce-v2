"use client";
import { useGetUser } from "@/hooks/useGetUser";
import React from "react";


const WelcomeUser = () => {
  const { user } = useGetUser();

  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm font-sans">Welcome!</span>
      <span className="text-sm font-sans text-[#cf4c42] font-semibold">{user?.name}</span>
    </div>
  );
};

export default WelcomeUser;
