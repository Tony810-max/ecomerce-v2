import ImageAuth from "@/components/ImageAuth";
import React from "react";
import LogInToExclisive from "./LogInToExclisive";

const Login = () => {
  return (
    <div className="container py-16 flex">
      <ImageAuth />
      <LogInToExclisive />
    </div>
  );
};

export default Login;
