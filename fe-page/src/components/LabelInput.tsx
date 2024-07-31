"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface ILabelInput {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<any>;
}

const LabelInput: React.FC<ILabelInput> = ({
  label,
  placeholder,
  type,
  required,
  register,
  name,
  errors,
}) => {
  const errorMessage = errors[name]?.message
    ? String(errors[name]?.message)
    : null;
  return (
    <>
      <div className="space-y-2">
        <Label required={required} className="font-sans text-base">
          {label}
        </Label>
        <Input
          {...register(name, { required })}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
      {errorMessage && (
        <p className="font-sans text-sm text-red-600 capitalize">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default LabelInput;
