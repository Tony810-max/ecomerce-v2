import React from "react";
import FormLogin from "./FormLogin";

const ContentLogin = () => {
  return (
    <div className="bg-white w-1/4 h-1/2 flex flex-col gap-5 justify-center items-center">
      <span className="font-sans text-xl font-bold">Login into account</span>
      <FormLogin />
    </div>
  );
};

export default ContentLogin;
