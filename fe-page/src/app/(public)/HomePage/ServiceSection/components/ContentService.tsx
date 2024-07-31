import Image from "next/image";
import React from "react";

interface IContent {
  title: string;
  description: string;
  image: string;
}

const ContentService: React.FC<IContent> = ({ description, image, title }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-20 h-20">
        <Image
          src={image}
          alt="Service"
          fill
          priority
          unoptimized
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-sans text-base font-bold">
          {title}
        </span>
        <span className="font-sans text-sm font-semibold">
          {description}
        </span>
      </div>
    </div>
  );
};

export default ContentService;
