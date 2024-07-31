import PriceCart from "@/components/PriceCart";
import { Separator } from "@/components/ui/separator";
import React from "react";

const TotalPrice = () => {
  return (
    <div className="space-y-4">
      <PriceCart title="Subtotal" price="1750" />
      <Separator />
      <PriceCart title="Shipping" price="Free" />
      <Separator />
      <PriceCart title="Total" price="1750" />
    </div>
  );
};

export default TotalPrice;
