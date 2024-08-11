import React from "react";
import ImageLogin from "./components/ImageLogin";
import ContentLogin from "./components/ContentLogin";

const Login = () => {
  return (
    <div className="bg-[#0062e6] w-full min-h-screen">
      <div className="flex justify-center items-center h-full">
        <ImageLogin />
        <ContentLogin />
      </div>
    </div>
  );
};

export default Login;
