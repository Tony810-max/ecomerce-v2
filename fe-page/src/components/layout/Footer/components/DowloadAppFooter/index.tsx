import React from "react";
import ImageFooter from "./ImageFooter";
import SocialFooter from "./SocialFooter";

const DowloadAppFooter = () => {
  return (
    <div className="space-y-6">
      <span className="font-sans text-white">Dowload App</span>
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="font-sans text-[#b3b3b3]">
            Save $3 with App New User Only
          </span>
          <div className="flex gap-1">
            <ImageFooter
              altImg="AppStore"
              srcImg="/images/HomePage/AppStore.webp"
              className="w-full h-8"
            />

            <ImageFooter
              altImg="GooglePlay"
              srcImg="/images/HomePage/GooglePlay.webp"
              className="w-full h-8"
            />
          </div>
        </div>
        <SocialFooter />
      </div>
    </div>
  );
};

export default DowloadAppFooter;
