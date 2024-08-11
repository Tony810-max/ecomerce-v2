"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardProduct from "@/components/CardProduct";
import Loading from "@/components/Loading";
import { IProduct } from "@/types/common";

interface ICardFlashSale {
  isLoading: boolean;
  filterSaleProduct?: IProduct[];
}

const CarouselCardProduct: React.FC<ICardFlashSale> = ({
  isLoading,
  filterSaleProduct,
}) => {
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
        {isLoading
          ? Array.from({ length: 4 }, (data, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <Loading />
              </CarouselItem>
            ))
          : filterSaleProduct?.map((product, index) => {
              if (index < 5)
                return (
                  <CarouselItem className="basis-1/4" key={product?.id}>
                    <CardProduct
                      idProduct={product?.id}
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
