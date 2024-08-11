"use client";
import React from "react";
import axios from "axios";
import { useParams } from "next/navigation";

import { API_URL, IProduct } from "@/types/common";

import BreadcrumHeading from "./components/BreadcrumHeading";
import InfoProduct from "./components/InfoProduct";
import SubImageProduct from "./components/SubImageProduct";
import MainImageProduct from "./components/MainImageProduct";
import RelatedItem from "./components/RelatedItem";
import { cn } from "@/lib/utils";

const DetailProduct = () => {
  const [dataProduct, setDataProduct] = React.useState<IProduct>();

  const param = useParams();
  const idProduct = param?.id;

  const handleFetchDetailProduct = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/products/${idProduct}`
      );

      if (response) {
        setDataProduct(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    handleFetchDetailProduct();
  }, []);

  return (
    <div className="container">
      <BreadcrumHeading name={dataProduct?.name} />
      <div
        className={cn("flex justify-between h-full gap-4", {
          "grid grid-cols-5 gap-6":
            dataProduct && dataProduct?.images?.length > 0,
        })}
      >
        {dataProduct && dataProduct?.images?.length > 0 && (
          <SubImageProduct imgSub={dataProduct?.images} />
        )}
        <MainImageProduct img={dataProduct?.image} />
        <InfoProduct dataProduct={dataProduct} />
      </div>
      <RelatedItem dataProduct={dataProduct} />
    </div>
  );
};

export default DetailProduct;
