import React from "react";
import JustForYou from "./components/JustForYou";
import Wishlist from "./components/Wishlist";

const WishlistPage = () => {
  return (
    <div className="container py-20 space-y-20">
      <Wishlist />
      <JustForYou />
    </div>
  );
};

export default WishlistPage;
