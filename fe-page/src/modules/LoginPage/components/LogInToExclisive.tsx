import React from "react";
import FormLogIn from "./FormLogIn";

const LogInToExclisive = () => {
  return (
    <div className="pl-32 py-56 w-full space-y-12">
      <div className="flex flex-col gap-6">
        <span className="font-sans text-3xl">Log in to Exclusive</span>
        <span className="font-sans text-sm">Enter your details below</span>
      </div>
      <FormLogIn />
    </div>
  );
};

export default LogInToExclisive;
