"use client";
import ROUTES from "@/types/routes";
import { useRouter } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  React.useEffect(() => {
    const user =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("user") || "null")
        : null;

    if (user) return router.replace(ROUTES.HOME);
  }, []);
  return <>{children}</>;
};

export default layout;
