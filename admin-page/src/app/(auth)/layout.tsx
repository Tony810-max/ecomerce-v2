"use client";
import React from "react";

import { useRouter } from "next/navigation";
import ROUTES from "@/types/routes";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;

  React.useEffect(() => {
    if (user) return router.replace(ROUTES.ADMIN);
  }, [router, user]);

  return <>{children}</>;
};

export default Layout;
