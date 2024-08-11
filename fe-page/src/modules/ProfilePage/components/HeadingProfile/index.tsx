import React from "react";
import BreadcrumbHeading from "./BreadcrumbHeading";
import WelcomeUser from "./WelcomeUser";

const HeadingProfile = () => {
  return (
    <div className="flex items-center justify-between">
      <BreadcrumbHeading />
      <WelcomeUser />
    </div>
  );
};

export default HeadingProfile;
