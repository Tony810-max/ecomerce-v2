import React from "react";

import ImageAuth from "@/components/ImageAuth";
import CreateAnAccount from "../../modules/RegisterPage/components/CreateAnAccount";

const RegisterPage = () => {
  return (
    <div className="container pt-16 pb-36 flex">
      <ImageAuth />
      <CreateAnAccount />
    </div>
  );
};

export default RegisterPage;
