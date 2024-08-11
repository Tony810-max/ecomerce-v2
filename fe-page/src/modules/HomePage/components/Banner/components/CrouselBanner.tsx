import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ImageBanner from "./ImageBanner";

const CrouselBanner = () => {
  return (
    <Carousel
      className="col-span-4 p-10"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <ImageBanner img="/images/HomePage/banner1.webp" />
        </CarouselItem>
        <CarouselItem>
          <ImageBanner img="/images/HomePage/banner2.webp" />
        </CarouselItem>
        <CarouselItem>
          <ImageBanner img="/images/HomePage/banner3.webp" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CrouselBanner;
