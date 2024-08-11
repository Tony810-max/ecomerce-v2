import Image from "next/image";
import React from "react";

const ImageLogin = () => {
  return (
    <div className="relative rounded-l-lg w-1/4 h-1/2">
      <Image
        src={"/images/login/blue-creative.webp"}
        alt="imgLogin"
        fill
        unoptimized
        priority
      />
    </div>
  );
};

export default ImageLogin;
