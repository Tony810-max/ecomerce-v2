import Image from "next/image";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="relative w-1/2 h-44">
        <Image
          src={"/images/Cart/empty-cart.webp"}
          alt="imgEmptyCart"
          fill
          priority
          unoptimized
        />
      </div>
      <span className="font-sans text-lg italic font-bold capitalize">
        Your cart is empty
      </span>
    </div>
  );
};

export default EmptyCart;
