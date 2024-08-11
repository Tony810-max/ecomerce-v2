import React from "react";

import Title from "@/components/Title";
import CarouselRelatedITem from "./CarouselRelatedITem";
import { IInfoProduct } from "../InfoProduct";

const RelatedItem: React.FC<IInfoProduct> = ({ dataProduct }) => {
  return (
    <div className="py-36 w-full">
      <Title title="Related Item" />
      <CarouselRelatedITem dataProduct={dataProduct} />
    </div>
  );
};

export default RelatedItem;
