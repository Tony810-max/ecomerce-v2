import Title from "@/components/Title";
import React from "react";
import ContentFeatured from "./components/ContentFeatured";

const Featured = () => {
  return (
    <div className="py-16 space-y-14">
      <div className="space-y-5">
        <Title title="Featured" />
        <span className="block font-sans text-3xl font-bold">New Arrival</span>
      </div>
      <ContentFeatured />
    </div>
  );
};

export default Featured;
