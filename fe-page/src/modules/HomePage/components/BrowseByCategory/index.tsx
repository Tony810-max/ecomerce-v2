import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";

import { CategoryContext } from "@/context/categoryContext";
import SkeletonCategory from "./SkeletonCategory";
import CardCategories from "./CardCategories";

const BrowseByCategory = () => {
  const categoryContext = React.useContext(CategoryContext);
  const { dataCategory, isLoading } = categoryContext;

  return (
    <div className="py-20 space-y-14">
      <div className="space-y-5">
        <Title title="Categories" />
        <span className="block font-sans text-3xl font-bold">
          Browse By Category
        </span>
      </div>
      <Carousel>
        <CarouselContent>
          {isLoading
            ? Array.from({ length: 6 }, (data, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 md:basis-1/4 lg:basis-1/6"
                >
                  <SkeletonCategory />
                </CarouselItem>
              ))
            : dataCategory?.map((category) => (
                <CarouselItem
                  className="basis-1/1 md:basis-1/4 lg:basis-1/6"
                  key={category._id}
                >
                  <CardCategories
                    IconName={category.icon}
                    title={category.name}
                  />
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>

      <Separator />
    </div>
  );
};

export default BrowseByCategory;
