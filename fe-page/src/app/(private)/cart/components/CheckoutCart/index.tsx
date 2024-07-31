import React from "react";
import CouponCheckout from "./CouponCheckout";
import TotalCart from "./TotalCart";

const CheckoutCart = () => {
  return (
    <div className="pt-20 flex gap-44">
      <CouponCheckout />
      <TotalCart />
    </div>
  );
};

export default CheckoutCart;
