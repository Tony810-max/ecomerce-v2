import React from "react";

import PriceCart from "@/components/PriceCart";
import { Separator } from "@/components/ui/separator";
import { CartContext } from "@/context/cartContext";

const TotalPrice = () => {
  const cartContext = React.useContext(CartContext);
  const subTotal = cartContext?.subTotal;

  return (
    <div className="space-y-4">
      <PriceCart title="Subtotal" price={subTotal} />
      <Separator />
      <PriceCart title="Shipping" price="Free" />
      <Separator />
      <PriceCart title="Total" price={subTotal} />
    </div>
  );
};

export default TotalPrice;
