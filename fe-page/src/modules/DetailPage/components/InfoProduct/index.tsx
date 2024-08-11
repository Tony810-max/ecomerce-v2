"use client";
import React from "react";
import HeadingInfoProduct from "./HeadingInfoProduct";
import FormInfoProduct from "./FormInfoProduct";
import DeliveryInfoProduct from "./DeliveryInfoProduct";
import { Separator } from "@/components/ui/separator";
import { IProduct } from "@/types/common";

export interface IInfoProduct {
  dataProduct?: IProduct;
}

const InfoProduct: React.FC<IInfoProduct> = ({ dataProduct }) => {
  return (
    <div className="col-span-2 flex flex-col justify-between gap-4">
      <HeadingInfoProduct dataProduct={dataProduct} />
      <Separator />
      <FormInfoProduct />
      <DeliveryInfoProduct />
    </div>
  );
};

export default InfoProduct;
