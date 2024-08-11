import ROUTES from "@/types/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IImageProduct {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const ImageProduct: React.FC<IImageProduct> = ({
  description,
  image,
  title,
  className,
}) => {
  return (
    <div
      className={`relative w-full h-full ${className}`}
    >
      <Image src={image} alt="ContentFeatured" fill priority unoptimized />
      <div className="absolute bottom-8 left-8 flex flex-col gap-4">
        <span className="font-sans text-white font-bold text-lg">{title}</span>
        <span className="font-sans text-white text-base">{description}</span>
        <Link
          href={ROUTES.PRODUCT}
          className="font-sans text-white font-semibold underline hover:opacity-70"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default ImageProduct;
