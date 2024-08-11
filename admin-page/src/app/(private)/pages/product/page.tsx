"use client";
import React from "react";
import dynamic from "next/dynamic";

import TableProduct from "./components/TableProduct";
import { ProductProvider } from "@/app/contexts/productContext";

const CreateProduct = dynamic(() => import("./components/CreateProduct"), {
  ssr: false,
});

const ProductPage = () => {
  return (
    <div className="space-y-2">
      <ProductProvider>
        <CreateProduct />
        <TableProduct />
      </ProductProvider>
    </div>
  );
};

export default ProductPage;
