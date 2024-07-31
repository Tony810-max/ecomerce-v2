"use client";
import React from "react";
import FormBillingDetails from "./FormBillingDetails";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IForm {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldErrors<any>;
}

const BillingDetails: React.FC<IForm> = ({ register, errors }) => {
  return (
    <div className="space-y-12">
      <span className="font-sans text-xl font-bold">Billing Details</span>
      <FormBillingDetails register={register} errors={errors} />
    </div>
  );
};

export default BillingDetails;
