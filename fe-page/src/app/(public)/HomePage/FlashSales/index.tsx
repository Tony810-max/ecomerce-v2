"use client";

import Title from "@/components/Title";
import React from "react";
import TimeSales from "./components/TimeSales";
import CarouselCardProduct from "./components/CarouselCardProduct";
import { Separator } from "@/components/ui/separator";
import ViewAllProduct from "@/components/ViewAllProduct";

const FlashSalesSection = () => {
  return (
    <div className="space-y-6">
      <Title title={"Today's"} />
      <div className="space-y-10">
        <div className="flex items-center gap-20">
          <span className="font-sans text-3xl font-bold">Flash Sales</span>
          <TimeSales />
        </div>
        <CarouselCardProduct />
      </div>
      <ViewAllProduct />
      <Separator />
    </div>
  );
};

export default FlashSalesSection;
