import Image from "next/image";
import React from "react";

interface IInfoProduct {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const InfoProduct: React.FC<IInfoProduct> = ({
  image,
  name,
  price,
  quantity,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="relative w-20 h-20">
          <Image src={image} alt={image} fill />
        </div>
        <span>{name}</span>
      </div>
      <div className="flex flex-col gap-2 justify-between h-full">
        <div className="flex gap-2">
          <span className="font-sans text-lg font-bold">Price:</span>
          <span className="font-sans text-lg">{price}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-sans text-lg font-bold">Quantity:</span>
          <span className="font-sans text-lg">{quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
