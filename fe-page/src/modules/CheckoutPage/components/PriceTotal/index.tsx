"use client";
import React from "react";
import InfoProduct from "./InfoProduct";
import TotalPrice from "./TotalPrice";
import MethodOrder from "./MethodOrder";
import CouponCode from "./CouponCode";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/cartContext";

const PriceTotal = () => {
  const cartContext = React.useContext(CartContext);
  const dataCart = cartContext?.dataCart?.items;

  return (
    <div className="py-24 space-y-8">
      {dataCart?.map((cart) => (
        <InfoProduct
          key={cart?.id}
          image={cart?.product?.image}
          name={cart?.product?.name}
          price={cart?.product?.priceOrigin}
          quantity={cart?.quantity}
        />
      ))}

      <TotalPrice />
      <MethodOrder />
      <CouponCode />
      <Button
        variant={"destructive"}
        className="font-sans text-base py-4 px-12"
      >
        Place Order
      </Button>
    </div>
  );
};

export default PriceTotal;
