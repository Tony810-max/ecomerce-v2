"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ProductContext } from "@/context/productContex";
import CardProduct from "@/components/CardProduct";
import LoadingWishlist from "../../../../components/Loading";

const CarouselJustForYou = () => {
  const productContext = React.useContext(ProductContext);
  const dataProduct = productContext?.dataProduct;
  const isLoading = productContext?.isLoading;
  const dataForYou = dataProduct?.filter((product) => product?.rating > 4);
  const fetchData = productContext?.fetchProduct;

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {isLoading
          ? Array.from({ length: 4 }, (data, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <LoadingWishlist />
              </CarouselItem>
            ))
          : dataForYou?.map((data) => (
              <CarouselItem className="basis-1/4" key={data?.id}>
                <CardProduct
                  idProduct={data?.id}
                  discount={data?.discount}
                  salePercent={data?.salePercent}
                  image={data?.image}
                  name={data?.name}
                  priceOrigin={data?.priceOrigin}
                  rating={data?.rating}
                  countReview={data?.numReview}
                  isNewProduct={data?.isNewProduct}
                  fetchData={fetchData}
                  id={data?.id}
                />
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselJustForYou;
