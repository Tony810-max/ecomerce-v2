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

import { ChevronDown, LogOut, User } from "lucide-react";
import { useGetUser } from "@/app/hooks/useGetUser";

const WelComeAdmin = () => {
  const { handleLogout } = useGetUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        <span>Welcome , Admin</span>
        <ChevronDown size={12} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-around gap-2">
          <User />
          <span className="font-sans text-base font-semibold">Profile</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="justify-around gap-2"
          onClick={handleLogout}
        >
          <LogOut />
          <span className="font-sans text-base font-semibold">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WelComeAdmin;
