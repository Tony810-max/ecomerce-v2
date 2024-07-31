import React from "react";

import ImageProduct from "./ImageProduct";

const ContentFeatured = () => {
  return (
    <div className="grid grid-cols-4 gap-8 grid-rows-8 min-h-[37.5rem]">
      <ImageProduct
        description="Black and White version of the PS5 coming out on sale."
        image="images/HomePage/Frame.webp"
        title="PlayStation 5"
        className="col-span-2 row-span-8"
      />
      <ImageProduct
        description="Featured woman collections that give you another vibe."
        image="images/HomePage/Frame 685.webp"
        title="Women’s Collections"
        className="col-span-2 row-span-4"
      />
      <ImageProduct
        description="Amazon wireless speakers"
        image="images/HomePage/Frame 686.webp"
        title="Speakers"
        className=" row-span-4"
      />
      <ImageProduct
        description="GUCCI INTENSE OUD EDP"
        image="images/HomePage/Frame 687.webp"
        title="Perfume"
        className=" row-span-4"
      />
    </div>
  );
};

export default ContentFeatured;
