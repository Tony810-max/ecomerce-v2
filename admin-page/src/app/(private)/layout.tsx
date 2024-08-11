"use client";
import React from "react";

import Header from "@/components/layouts/Header";
import { useRouter } from "next/navigation";
import ROUTES from "@/types/routes";
import { useGetUser } from "../hooks/useGetUser";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useGetUser();

  React.useEffect(() => {
    if (!user) return router.replace(ROUTES.LOGIN_ADMIN);
  }, [router, user]);

  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
