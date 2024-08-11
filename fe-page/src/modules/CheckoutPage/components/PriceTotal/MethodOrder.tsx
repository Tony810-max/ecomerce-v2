import CheckboxLabel from "@/components/CheckboxLabel";
import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import React from "react";

const MethodOrder = () => {
  const cartContext = React.useContext(CartContext);
  const onSetMethodOrder = cartContext.setMethodOrder;
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <CheckboxLabel
          value="bank"
          onSetMethodOrder={onSetMethodOrder}
          defaulChecked={false}
          name="Bank"
        />
        <div className="relative w-48 h-7">
          <Image
            src={"/images/Checkout/methodOrder.webp"}
            alt="methodOrder"
            fill
          />
        </div>
      </div>
      <CheckboxLabel
        value="cash"
        onSetMethodOrder={onSetMethodOrder}
        defaulChecked={true}
        name="Cash on delivery"
      />
    </div>
  );
};

export default MethodOrder;
