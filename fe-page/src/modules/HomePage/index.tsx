"use client";
import React from "react";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./components/Banner"));

const FlashSalesSection = dynamic(() => import("./components/FlashSales"));

const BestSellingProducts = dynamic(
  () => import("./components/BestSellingProducts")
);

const BrowseByCategory = dynamic(() => import("./components/BrowseByCategory"));

const ExploreOurProducts = dynamic(
  () => import("./components/ExploreOurProducts")
);

const Featured = dynamic(() => import("./components/Featured"));

const ServiceSection = dynamic(() => import("./components/ServiceSection"));

const HomePage = () => {
  return (
    <div className="container min-h-screen">
      <Banner />
      <FlashSalesSection />
      <BrowseByCategory />
      <BestSellingProducts />
      <ExploreOurProducts />
      <Featured />
      <ServiceSection />
    </div>
  );
};

export default HomePage;
