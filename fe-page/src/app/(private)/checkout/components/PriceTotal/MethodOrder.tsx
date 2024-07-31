import CheckboxLabel from "@/components/CheckboxLabel";
import Image from "next/image";
import React from "react";

const MethodOrder = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <CheckboxLabel defaulchecked={true} name="Bank" />
        <div className="relative w-48 h-7">
          <Image
            src={"/images/Checkout/methodOrder.webp"}
            alt="methodOrder"
            fill
          />
        </div>
      </div>
      <CheckboxLabel defaulchecked={false} name="Cash on delivery" />
    </div>
  );
};

export default MethodOrder;
