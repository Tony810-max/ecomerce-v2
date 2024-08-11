import Image from "next/image";
import React from "react";

interface ISubImageProduct {
  imgSub?: string[];
}

const SubImageProduct: React.FC<ISubImageProduct> = ({ imgSub }) => {

  return (
    <div className="col-span-1 flex flex-col gap-4">
      {imgSub?.map((img, index) => (
        <div className="py-3 px-6 bg-[#f5f5f5] rounded-md" key={index}>
          <div className="relative w-full h-28  ">
            <Image src={img} alt="SubImage" fill unoptimized priority />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubImageProduct;
