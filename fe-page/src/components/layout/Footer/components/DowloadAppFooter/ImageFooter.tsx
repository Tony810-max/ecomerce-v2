import Image from "next/image";
import React from "react";

interface IImageFooter {
  srcImg: string;
  altImg: string;
  className?: string;
}

const ImageFooter: React.FC<IImageFooter> = ({ altImg, srcImg, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={srcImg} alt={altImg} priority unoptimized fill />
    </div>
  );
};

export default ImageFooter;
