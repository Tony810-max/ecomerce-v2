"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardProduct from "@/components/CardProduct";
import { ProductContext } from "@/context/productContex";

const CarouselCardProduct = () => {
  const context = React.useContext(ProductContext);
  const dataProduct = context?.dataProduct;
  const filterSaleProduct = dataProduct?.filter(
    (product) => product.isSale === true
  );

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;


  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {filterSaleProduct?.map((product, index) => {
          if (index < 5)
            return (
              <CarouselItem className="basis-1/4" key={product?.id}>
                <CardProduct
                  userID={user?._id}
                  id={product?.id}
                  image={product?.image}
                  name={product?.name}
                  discount={product?.discount}
                  priceOrigin={product?.priceOrigin}
                  salePercent={product?.salePercent}
                  rating={product?.rating}
                  countReview={product?.countInStock}
                />
              </CarouselItem>
            );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselCardProduct;
