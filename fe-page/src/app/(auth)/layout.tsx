"use client";
import ROUTES from "@/types/routes";
import { useRouter } from "next/navigation";
import React from "react";
import { useGetUser } from "../../hooks/useGetUser";

const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useGetUser();

  React.useEffect(() => {
    if (user) return router.replace(ROUTES.HOME);
  }, []);
  return <>{children}</>;
};

export default layout;
