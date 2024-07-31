"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import BreadcrumbCheckout from "./components/BreadcrumbCheckout";
import BillingDetails from "./components/BillingDetails";

import { billSchema } from "./types/billSchema";
import PriceTotal from "./components/PriceTotal";

const CheckoutPage = () => {
  const [mounted, setMounted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(billSchema),
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckout = (data: unknown) => {
    data;
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="container pb-36">
      <BreadcrumbCheckout />
      <form
        className="grid grid-cols-2 gap-44"
        onSubmit={handleSubmit(handleCheckout)}
      >
        <BillingDetails register={register} errors={errors} />
        <PriceTotal />
      </form>
    </div>
  );
};

export default CheckoutPage;
