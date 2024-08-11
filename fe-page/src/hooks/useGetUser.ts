import ROUTES from "@/types/routes";
import { toast } from "react-toastify";

export const useGetUser = (logOut?: boolean, updatePassword?: boolean) => {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    logOut && toast.success("Log out successfully");
    setTimeout(() => {
      window.location.href = ROUTES.LOGIN;
      updatePassword && toast.success("Please log in again to continue.");
    }, 1000);
  };

  return { user, handleLogout };
};
