import React from "react";

import { ProductProivder } from "@/context/productContex";
import dynamic from "next/dynamic";

const FlashSalesSection = dynamic(
  () => import("./(public)/HomePage/FlashSales")
);

const BestSellingProducts = dynamic(
  () => import("./(public)/HomePage/BestSellingProducts")
);

const BrowseByCategory = dynamic(
  () => import("./(public)/HomePage/BrowseByCategory")
);

const ExploreOurProducts = dynamic(
  () => import("./(public)/HomePage/ExploreOurProducts")
);

const Featured = dynamic(() => import("./(public)/HomePage/Featured"), {
  loading: () => <p>Loading...</p>,
});

const ServiceSection = dynamic(
  () => import("./(public)/HomePage/ServiceSection")
);

const HomePage = () => {
  return (
    <div className="container">
      <ProductProivder>
        <FlashSalesSection />
      </ProductProivder>
      <BrowseByCategory />
      <BestSellingProducts />
      <ExploreOurProducts />
      <Featured />
      <ServiceSection />
    </div>
  );
};

export default HomePage;
