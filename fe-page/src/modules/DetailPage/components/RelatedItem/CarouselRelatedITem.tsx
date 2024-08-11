import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardProduct from "@/components/CardProduct";
import { ProductContext } from "@/context/productContex";
import { IInfoProduct } from "../InfoProduct";

const CarouselRelatedITem: React.FC<IInfoProduct> = ({ dataProduct }) => {
  const dataContext = React.useContext(ProductContext);
  const dataProducts = dataContext?.dataProduct;

  const dataProductFilter = dataProducts?.filter(
    (product) => product?.category?._id === dataProduct?.category?._id
  );

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {dataProductFilter?.map((product) => (
          <CarouselItem key={product?.id} className="basis-1/4">
            <CardProduct
              idProduct={product?.id}
              discount={product?.discount}
              image={product?.image}
              name={product?.name}
              priceOrigin={product?.priceOrigin}
              rating={product?.rating}
              countReview={product?.numReview}
              salePercent={product?.salePercent}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselRelatedITem;
