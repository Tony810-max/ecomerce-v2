import React from "react";
import ContentService from "./components/ContentService";

const ServiceSection = () => {
  return (
    <div className="flex justify-center py-16 gap-20">
      <ContentService
        description="Free delivery for all orders over $140"
        image="images/HomePage/Services1.webp"
        title="FREE AND FAST DELIVERY"
      />
      <ContentService
        description="Friendly 24/7 customer support"
        image="images/HomePage/Services2.webp"
        title="24/7 CUSTOMER SERVICE"
      />
      <ContentService
        description="MONEY BACK GUARANTEE"
        image="images/HomePage/Services3.webp"
        title="We reurn money within 30 days"
      />
    </div>
  );
};

export default ServiceSection;
