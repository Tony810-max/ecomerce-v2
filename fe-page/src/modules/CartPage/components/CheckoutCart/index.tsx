import React from "react";
import CouponCheckout from "./CouponCheckout";
import TotalCart from "./TotalCart";
import { CartContext } from "@/context/cartContext";

const CheckoutCart = () => {
  const cartContext = React.useContext(CartContext);
  const dataCart = cartContext?.dataCart?.items;
  return (
    <div className="pt-20 flex gap-44">
      {dataCart && dataCart?.length > 0 && (
        <>
          <CouponCheckout />
          <TotalCart />
        </>
      )}
    </div>
  );
};

export default CheckoutCart;
