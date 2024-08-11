import ImageAuth from "@/components/ImageAuth";
import React from "react";
import LogInToExclisive from "../../modules/LoginPage/components/LogInToExclisive";

const LoginPage = () => {
  return (
    <div className="container py-16 flex">
      <ImageAuth />
      <LogInToExclisive />
    </div>
  );
};

export default LoginPage;
