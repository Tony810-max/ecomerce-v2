"use client";
import React from "react";

import { CartProvider } from "@/context/cartContext";
import FormOrder from "./components/FormOrder";
import BreadcrumbCheckout from "./components/BreadcrumbCheckout";

const CheckoutPage = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container pb-36">
      <BreadcrumbCheckout />
      <CartProvider>
        <FormOrder />
      </CartProvider>
    </div>
  );
};

export default CheckoutPage;
