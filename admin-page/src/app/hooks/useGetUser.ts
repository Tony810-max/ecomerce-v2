import ROUTES from "@/types/routes";
import { toast } from "react-toastify";

export const useGetUser = () => {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Log out successfully");
    setTimeout(() => {
      window.location.href = ROUTES.LOGIN_ADMIN;
    }, 1000);
  };

  return { user, handleLogout };
};
