import CardProduct from "@/components/CardProduct";
import Title from "@/components/Title";
import ViewAllProduct from "@/components/ViewAllProduct";
import React from "react";

const DATA_EXPLOREOUR = [
  {
    image: "images/HomePage/flashSales1.webp",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 160,
    rating: 4,
    countReview: 88,
  },
  {
    image: "images/HomePage/flashSales1.webp",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 160,
    rating: 4,
    countReview: 88,
  },
  {
    image: "images/HomePage/flashSales1.webp",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 160,
    rating: 4,
    countReview: 88,
  },
  {
    image: "images/HomePage/flashSales1.webp",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 160,
    rating: 4,
    countReview: 88,
  },
  {
    image: "images/HomePage/flashSales1.webp",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 160,
    rating: 4,
    countReview: 88,
  },
  {
    image: "images/HomePage/flashSales1.webp",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 160,
    rating: 4,
    countReview: 88,
  },
  {
    image: "images/HomePage/flashSales1.webp",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 160,
    rating: 4,
    countReview: 88,
  },
  {
    image: "images/HomePage/flashSales1.webp",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 160,
    rating: 4,
    countReview: 88,
  },
];

const ExploreOurProducts = () => {
  return (
    <div className="py-16 space-y-14 ">
      <div className="space-y-5">
        <Title title="Our Products" />
        <span className="block font-sans text-3xl font-bold">
          Explore Our Products
        </span>
      </div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        {DATA_EXPLOREOUR?.map((data, index) => (
          <CardProduct
            image={data?.image}
            name={data?.name}
            priceOrigin={data?.price}
            discount={data?.discount}
            rating={data?.rating}
            countReview={data?.countReview}
            key={index}
          />
        ))}
      </div>
      <ViewAllProduct />
    </div>
  );
};

export default ExploreOurProducts;
