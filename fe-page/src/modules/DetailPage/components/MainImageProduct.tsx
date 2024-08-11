import Image from "next/image";
import React from "react";

interface IMainImg {
  img?: string;
}

const MainImageProduct: React.FC<IMainImg> = ({ img }) => {
  return (
    <div className="col-span-2 w-full  bg-[#f5f5f5]">
      <div className="w-full py-36 px-7">
        <div className="relative w-full h-96 ">
          <Image
            src={img ? img : ""}
            alt="mainImage"
            fill
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default MainImageProduct;
