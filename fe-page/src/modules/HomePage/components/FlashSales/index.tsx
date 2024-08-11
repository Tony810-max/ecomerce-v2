"use client";

import Title from "@/components/Title";
import React from "react";
import TimeSales from "./components/TimeSales";
import CarouselCardProduct from "./components/CarouselCardProduct";
import { Separator } from "@/components/ui/separator";
import ViewAllProduct from "@/components/ViewAllProduct";
import { ProductContext } from "@/context/productContex";

const FlashSalesSection = () => {
  const context = React.useContext(ProductContext);
  const dataProduct = context?.dataProduct;
  const isLoading = context?.isLoading;
  const filterSaleProduct = dataProduct?.filter(
    (product) => product.isSale === true
  );

  return (
    <div className="space-y-6">
      <Title title={"Today's"} />
      <div className="space-y-10">
        <div className="flex items-center gap-20">
          <span className="font-sans text-3xl font-bold">Flash Sales</span>
          {filterSaleProduct && filterSaleProduct?.length > 0 ? (
            <TimeSales />
          ) : (
            <span className="font-sans text-2xl text-[#db4444] font-semibold capitalize italic">
              No discounted products today
            </span>
          )}
        </div>
        <CarouselCardProduct
          isLoading={isLoading}
          filterSaleProduct={filterSaleProduct}
        />
      </div>
      <ViewAllProduct />
      <Separator />
    </div>
  );
};

export default FlashSalesSection;
