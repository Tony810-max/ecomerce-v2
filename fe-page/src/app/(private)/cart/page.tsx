"use client";

import React from "react";
import BreadcrumbCart from "./components/BreadcrumbCart";
import TableCart from "./components/TableCart";
import ReuturnUpdate from "./components/ReuturnUpdate";
import CheckoutCart from "./components/CheckoutCart";
import { CartProvider } from "@/context/cartContext";

const CartPage = () => {
  return (
    <div className="container">
      <BreadcrumbCart />
      <div className="pb-36">
        <CartProvider>
          <div className="space-y-6">
            <TableCart />
            <ReuturnUpdate />
          </div>
          <CheckoutCart />
        </CartProvider>
      </div>
    </div>
  );
};

export default CartPage;
