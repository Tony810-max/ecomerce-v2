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

const BestSellingProducts = () => {
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
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/2 lg:basis-1/4">
            <CardProduct
              image="images/HomePage/flashSales1.webp"
              name="HAVIT HV-G92 Gamepad"
              rating={4}
              priceOrigin={260}
              discount={360}
              countReview={65}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/4">
            <CardProduct
              image="images/HomePage/flashSales1.webp"
              name="HAVIT HV-G92 Gamepad"
              rating={4}
              priceOrigin={260}
              discount={360}
              countReview={65}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/4">
            <CardProduct
              image="images/HomePage/flashSales1.webp"
              name="HAVIT HV-G92 Gamepad"
              rating={4}
              priceOrigin={260}
              discount={360}
              countReview={65}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/4">
            <CardProduct
              image="images/HomePage/flashSales1.webp"
              name="HAVIT HV-G92 Gamepad"
              rating={4}
              priceOrigin={260}
              discount={360}
              countReview={65}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BestSellingProducts;
