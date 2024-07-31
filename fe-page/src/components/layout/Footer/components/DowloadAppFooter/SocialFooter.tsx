import React from "react";
import ImageFooter from "./ImageFooter";

const SocialFooter = () => {
  return (
    <div className="flex gap-1">
      <ImageFooter
        altImg="Icon-Facebook"
        srcImg="images/HomePage/Icon-Facebook.webp"
        className="w-full h-5"
      />
      <ImageFooter
        altImg="icon-instagram"
        srcImg="images/HomePage/icon-instagram.webp"
        className="w-full h-5"
      />
      <ImageFooter
        altImg="Icon-Linkedin"
        srcImg="images/HomePage/Icon-Linkedin.webp"
        className="w-full h-5"
      />
      <ImageFooter
        altImg="Icon-Twitter"
        srcImg="images/HomePage/Icon-Twitter.webp"
        className="w-full h-5"
      />
    </div>
  );
};

export default SocialFooter;
