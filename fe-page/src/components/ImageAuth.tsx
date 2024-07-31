import Image from "next/image";
import React from "react";

const ImageAuth = () => {
  return (
    <div className="relative w-1/2">
      <Image
        src={"images/Auth/SideImage.webp"}
        alt="SideImage"
        fill
        priority
        unoptimized
      />
    </div>
  );
};

export default ImageAuth;
