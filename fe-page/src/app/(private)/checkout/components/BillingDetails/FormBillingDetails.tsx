"use client";
import React from "react";

import LabelInput from "@/components/LabelInput";
import { IForm } from ".";

const FormBillingDetails: React.FC<IForm> = ({ register, errors }) => {
  return (
    <form className="space-y-8">
      <LabelInput
        register={register}
        name="name"
        label="Full Name"
        required={true}
        errors={errors}
      />

      <LabelInput
        register={register}
        name="company"
        label="Company Name"
        required={true}
        errors={errors}
      />
      <LabelInput
        register={register}
        name="street"
        label="Street Address"
        required={true}
        errors={errors}
      />
      <LabelInput
        register={register}
        name="apartment"
        label="Apartment,floor"
        errors={errors}
      />
      <LabelInput
        register={register}
        name="town"
        label="Town City"
        required={true}
        errors={errors}
      />
      <LabelInput
        register={register}
        name="phone"
        label="Phone Number"
        required={true}
        errors={errors}
      />
      <LabelInput
        register={register}
        name="email"
        label="Email Address"
        required={true}
        errors={errors}
      />
    </form>
  );
};

export default FormBillingDetails;
