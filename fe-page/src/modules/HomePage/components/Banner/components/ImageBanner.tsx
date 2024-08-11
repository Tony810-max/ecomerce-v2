import Image from "next/image";
import React from "react";

interface IImage {
  img: string;
}

const ImageBanner: React.FC<IImage> = ({ img }) => {
  return (
    <div className="relative w-full h-64">
      <Image src={img} alt="imgBanner" fill priority unoptimized />
    </div>
  );
};

export default ImageBanner;
