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
import ROUTES from "@/types/routes";
import Link from "next/link";
import { useGetUser } from "@/hooks/useGetUser";

const DropdownUser = () => {
  const { handleLogout } = useGetUser(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="space-x-2">
          <Link
            href={ROUTES.PROFILE}
            className="flex items-center gap-4 hover:opacity-70"
          >
            <User />
            <span>Manage My Account</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="space-x-2">
          <Link
            href={ROUTES.PROFILE}
            className="flex items-center gap-4 hover:opacity-70"
          >
            <ShoppingBag />
            <span>My Order</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="space-x-2">
          <Link
            href={ROUTES.PROFILE}
            className="flex items-center gap-4 hover:opacity-70"
          >
            <Star />
            <span>My Reviews</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="space-x-4 hover:opacity-70 hover:cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut />
          <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
