import React from "react";

import CardProduct from "@/components/CardProduct";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import ViewAllProduct from "@/components/ViewAllProduct";
import { ProductContext } from "@/context/productContex";

const ExploreOurProducts = () => {
  const productContext = React.useContext(ProductContext);
  const { isLoading, dataProduct } = productContext;
  return (
    <div className="py-16 space-y-14 ">
      <div className="space-y-5">
        <Title title="Our Products" />
        <span className="block font-sans text-3xl font-bold">
          Explore Our Products
        </span>
      </div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        {isLoading
          ? Array.from({ length: 8 }, (data, index) => <Loading key={index} />)
          : dataProduct?.map((data, index) => (
              <CardProduct
                idProduct={data?.id}
                image={data?.image}
                name={data?.name}
                priceOrigin={data?.priceOrigin}
                discount={data?.discount}
                rating={data?.rating}
                countReview={data?.numReview}
                key={index}
              />
            ))}
      </div>
      <ViewAllProduct />
    </div>
  );
};

export default ExploreOurProducts;
