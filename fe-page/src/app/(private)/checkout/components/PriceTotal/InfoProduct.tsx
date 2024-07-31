import Image from "next/image";
import React from "react";

interface IInfoProduct {
  image: string;
  name: string;
  price: number;
}

const InfoProduct: React.FC<IInfoProduct> = ({ image, name, price }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="relative w-20 h-20">
          <Image src={image} alt={image} fill />
        </div>
        <span>{name}</span>
      </div>
      <span>{price}</span>
    </div>
  );
};

export default InfoProduct;
