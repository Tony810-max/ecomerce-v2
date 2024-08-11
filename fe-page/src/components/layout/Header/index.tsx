"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

import ROUTES from "@/types/routes";
import DropdownUser from "./components/DropdownUser";
import { CartContext } from "@/context/cartContext";
import { ProductContext } from "@/context/productContex";
import { useGetUser } from "@/hooks/useGetUser";

const RoutePage = dynamic(() => import("./components/RoutePage"), {
  ssr: false,
});

const Header = () => {
  const [check, setCheck] = React.useState(false);

  const { user } = useGetUser();

  const cartContext = React.useContext(CartContext);
  const productContext = React.useContext(ProductContext);

  const dataCart = cartContext?.dataCart?.items;
  const dataWislist = productContext?.wishlistMe;

  React.useEffect(() => {
    if (user) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [user]);

  return (
    <div className="container flex items-center justify-between pt-10 pb-4">
      <span className="font-sans text-3xl font-bold py-2 block">Exclusive</span>
      <RoutePage />
      <div className="flex items-center gap-6">
        <Input
          className="bg-[##f5f5f5]"
          placeholder="What are you looking for?"
        />
        {check ? (
          <div className="flex gap-4">
            <Link href={ROUTES.WISHLIST} className="hover:opacity-50">
              <div className="relative">
                <Heart />
                <span className="absolute -top-1 -right-2 text-xs font-bold text-white bg-[#f8312f] px-1 rounded-full">
                  {dataWislist?.length}
                </span>
              </div>
            </Link>
            <Link href={ROUTES.CART} className="hover:opacity-50">
              <div className="relative">
                <ShoppingCart />
                <span className="absolute -top-1 -right-2 text-xs font-bold text-white bg-[#f8312f] px-1 rounded-full">
                  {dataCart?.length}
                </span>
              </div>
            </Link>
            <DropdownUser />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
