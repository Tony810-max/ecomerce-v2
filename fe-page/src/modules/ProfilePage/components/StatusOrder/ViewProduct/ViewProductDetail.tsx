import React from "react";
import LabelInputView from "@/components/LabelInputView";
import { IViewProduct } from ".";
import Image from "next/image";

const ViewProductDetail: React.FC<IViewProduct> = ({ product }) => {
  console.log(product);
  return (
    <div className="space-y-4 max-h-96 overflow-auto">
      {product?.items?.map((product) => (
        <div key={product?.id} className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <LabelInputView
              name="Name"
              value={product?.product?.name}
              clasName="col-span-2"
            />
            <LabelInputView
              name="Category"
              value={product?.product?.category?.name}
            />
            <LabelInputView
              name="Price Origin"
              value={product?.product?.priceOrigin}
            />
            <LabelInputView
              name="Discount"
              value={product?.product?.discount}
            />
            <LabelInputView
              name="Sale Percent"
              value={product?.product?.salePercent}
            />
          </div>
          <div className="relative w-full min-h-40 ">
            <Image
              src={product?.product?.image}
              alt="imgProduct"
              fill
              priority
              unoptimized
            />
            {product?.product?.isNewProduct && (
              <span className="absolute right-4 top-4 bg-green-500 text-white py-1 px-4 rounded-md">
                New
              </span>
            )}
          </div>
        </div>
      ))}
      <LabelInputView name="" value="" />
    </div>
  );
};

export default ViewProductDetail;
