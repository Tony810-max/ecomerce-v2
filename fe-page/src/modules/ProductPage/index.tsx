"use client";
import React from "react";

import ContentProduct from "./components/ContentProduct";
import SearchProduct from "./components/SearchProduct";
import { IProduct } from "@/types/common";

const ProductPage = () => {
  const [filterProduct, setFilterProduct] = React.useState<IProduct[]>([]);

  return (
    <div className="container py-20 space-y-4">
      <SearchProduct onSetFilterProduct={setFilterProduct} />
      <ContentProduct
        dataProductFilter={filterProduct}
        onSetFilterProduct={setFilterProduct}
      />
    </div>
  );
};

export default ProductPage;
