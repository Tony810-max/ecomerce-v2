import React from "react";
import LabelInputView from "../../../../../../../components/LabelInputView";
import { IViewProduct } from ".";
import Image from "next/image";

const ContentProduct: React.FC<IViewProduct> = ({ product }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="relative h-44 col-span-2">
        <Image
          src={product?.image}
          alt="imgProduct"
          fill
          priority
          unoptimized
        />
      </div>
      <LabelInputView label="Name" value={product?.name} />
      <LabelInputView label="Category" value={product?.category?.name} />
      <LabelInputView label="Description" value={product?.description} />
      <LabelInputView label="Price" value={product?.priceOrigin} />
      <LabelInputView label="Discount" value={product?.discount} />
      <LabelInputView label="Rating" value={product?.rating} />
      <LabelInputView label="Sale Percent" value={product?.salePercent} />
      <LabelInputView label="Count In Stock" value={product?.countInStock} />
    </div>
  );
};

export default ContentProduct;
