import React from "react";

import SidebarBanner from "./components/SidebarBanner";
import CrouselBanner from "./components/CrouselBanner";

const Banner = () => {
  return (
    <div className="py-10 grid grid-cols-5 gap-4">
      <SidebarBanner />
      <CrouselBanner />
    </div>
  );
};

export default Banner;
