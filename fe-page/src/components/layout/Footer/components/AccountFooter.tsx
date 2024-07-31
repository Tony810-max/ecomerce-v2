import ROUTES from "@/types/routes";
import Link from "next/link";
import React from "react";

const AccountFooter = () => {
  return (
    <div className="space-y-6">
      <span className="font-sans text-white font-bold text-lg">Account</span>
      <div className="flex flex-col gap-4">
        <Link href={ROUTES.PROFILE} className="font-sans text-white">
          My Account
        </Link>
        <div className="flex gap-1">
          <Link href={ROUTES.PROFILE} className="font-sans text-white">
            Login /
          </Link>
          <Link href={ROUTES.REGISTER} className="font-sans text-white">
            Register
          </Link>
        </div>
        <Link href={ROUTES.CART} className="font-sans text-white">
          Cart
        </Link>
        <Link href={""} className="font-sans text-white">
          Wishlist
        </Link>
        <Link href={ROUTES.PRODUCT} className="font-sans text-white">
          Shop
        </Link>
      </div>
    </div>
  );
};

export default AccountFooter;
