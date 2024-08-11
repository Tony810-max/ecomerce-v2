"use client";
import React from "react";
import HeadingWishlist from "./HeadingWishlist";
import CarouselWishlist from "./CarouselWishlist";
import { ProductContext } from "@/context/productContex";

const Wishlist = () => {
  const productContext = React.useContext(ProductContext);
  const wishlistMe = productContext?.wishlistMe;
  const isLoading = productContext?.isLoading;
  const fetchProduct = productContext?.fetchProduct;

  return (
    <div className="space-y-14">
      <HeadingWishlist count={wishlistMe?.length} fetchProduct={fetchProduct} />
      <CarouselWishlist
        data={wishlistMe}
        isLoading={isLoading}
        fetchProduct={fetchProduct}
      />
    </div>
  );
};

export default Wishlist;
