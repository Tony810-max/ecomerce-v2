import React from "react";
import ReactStars from "react-rating-stars-component";
import { IInfoProduct } from ".";

const HeadingInfoProduct: React.FC<IInfoProduct> = ({ dataProduct }) => {
  const value = dataProduct?.rating;
  const stock = dataProduct?.countInStock;

  return (
    <div className="space-y-4">
      <span className="font-sans text-xl font-bold">{dataProduct?.name}</span>
      <div className="flex items-center gap-2">
        {value && (
          <ReactStars
            count={5}
            edit={false}
            value={value}
            size={24}
            activeColor="#ffab34"
          />
        )}
        <span className="font-sans text-[#7b7b7b] font-semibold">
          ({dataProduct?.numReview} Reviews)
        </span>
        |{" "}
        {stock && stock > 0 ? (
          <span className="font-sans text-sm font-bold text-[#5afea8]">
            In Stock ({stock})
          </span>
        ) : (
          <span className="font-sans text-sm text-red-600 font-bold">
            Out Of Stock ({stock})
          </span>
        )}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <span className="font-sans text-xl font-bold">$192.00</span>
          <span className="font-sans text-base line-through text-red-600">
            $200
          </span>
        </div>
        <span>
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </span>
      </div>
    </div>
  );
};

export default HeadingInfoProduct;
