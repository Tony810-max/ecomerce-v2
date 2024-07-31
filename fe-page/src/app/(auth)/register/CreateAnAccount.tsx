import React from "react";
import FormCreateAnAcount from "./FormCreateAnAcount";

const CreateAnAccount = () => {
  return (
    <div className="py-32 space-y-12 pl-32">
      <div className="flex flex-col gap-6">
        <span className="font-sans text-3xl font-semibold">
          Create an account
        </span>
        <span className="font-sans text-sm font-medium">
          Enter your details below
        </span>
      </div>
      <FormCreateAnAcount />
    </div>
  );
};

export default CreateAnAccount;
