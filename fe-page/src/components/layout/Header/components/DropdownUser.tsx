"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, ShoppingBag, Star, User } from "lucide-react";
import { toast } from "react-toastify";
import ROUTES from "@/types/routes";

const DropdownUser = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Log out successfully");
    setTimeout(() => {
      window.location.href = ROUTES.LOGIN;
    }, 1000);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="space-x-2">
          <User />
          <span>Manage My Account</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="space-x-2">
          <ShoppingBag />
          <span>My Order</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="space-x-2">
          <Star />
          <span>My Reviews</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="space-x-2" onClick={handleLogout}>
          <LogOut />
          <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
