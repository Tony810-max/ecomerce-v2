import React from "react";

import SheetSideBarAdmin from "./components/SheetSideBarAdmin";
import WelComeAdmin from "./components/WelComeAdmin";

const Header = () => {
  return (
    <div className="flex justify-between py-10 px-5">
      <SheetSideBarAdmin />
      <WelComeAdmin />
    </div>
  );
};

export default Header;
