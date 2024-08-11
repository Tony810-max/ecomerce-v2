import React from "react";

import Title from "@/components/Title";
import Link from "next/link";
import ROUTES from "@/types/routes";
import CardProduct from "@/components/CardProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProductContext } from "@/context/productContex";
import Loading from "@/components/Loading";
import Autoplay from "embla-carousel-autoplay";

const BestSellingProducts = () => {
  const productContext = React.useContext(ProductContext);
  const { dataProduct, isLoading } = productContext;

  return (
    <div className="py-16 space-y-5">
      <Title title="This Month" />
      <div className="flex justify-between items-center">
        <span className="font-sans text-3xl font-bold">
          Best Selling Products
        </span>
        <Link
          href={ROUTES.PRODUCT}
          className="font-sans text-sm text-white bg-[#db4444] rounded-lg py-4 px-12 hover:opacity-70"
        >
          View All
        </Link>
      </div>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {isLoading
            ? Array.from({ length: 5 }, (data, index) => (
                <CarouselItem key={index} className="basis-1/5">
                  <Loading />
                </CarouselItem>
              ))
            : dataProduct?.map((product) => (
                <CarouselItem
                  className="basis-1/2 lg:basis-1/4"
                  key={product?.id}
                >
                  <CardProduct
                    idProduct={product?.id}
                    image={product?.image}
                    name={product?.name}
                    rating={product?.rating}
                    priceOrigin={product?.priceOrigin}
                    discount={product?.discount}
                    countReview={product?.numReview}
                    salePercent={product?.salePercent}
                    isNewProduct={product?.isNewProduct}
                  />
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BestSellingProducts;
