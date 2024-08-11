import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import CardProduct from "@/components/CardProduct";
import Autoplay from "embla-carousel-autoplay";
import { IProduct } from "@/types/common";
import LoadingWishlist from "../../../../components/Loading";

interface ICrouselWishlist {
  data?: IProduct[];
  isLoading?: boolean;
  fetchProduct?: () => void;
}

const CarouselWishlist: React.FC<ICrouselWishlist> = ({
  data,
  isLoading,
  fetchProduct,
}) => {
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
          : data?.map((wishlist) => (
              <CarouselItem key={wishlist?.id} className="basis-1/4">
                <CardProduct
                  idProduct={wishlist?.id}
                  discount={wishlist?.discount}
                  salePercent={wishlist?.salePercent}
                  image={wishlist?.image}
                  name={wishlist?.name}
                  priceOrigin={wishlist?.priceOrigin}
                  trash={true}
                  fetchData={fetchProduct}
                  id={wishlist?.id}
                />
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselWishlist;
