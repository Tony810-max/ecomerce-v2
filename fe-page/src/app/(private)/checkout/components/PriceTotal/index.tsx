"use client";
import React from "react";
import InfoProduct from "./InfoProduct";
import TotalPrice from "./TotalPrice";
import MethodOrder from "./MethodOrder";
import CouponCode from "./CouponCode";
import { Button } from "@/components/ui/button";

const PriceTotal = () => {
  return (
    <div className="py-24 space-y-8">
      <InfoProduct
        image="/images/HomePage/flashSales1.webp"
        name="LCD Monitor"
        price={650}
      />
      <InfoProduct
        image="/images/HomePage/Monitor-Cart-Small.webp"
        name="LCD Monitor"
        price={650}
      />
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
