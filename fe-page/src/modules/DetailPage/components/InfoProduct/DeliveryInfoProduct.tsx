import { RefreshCw, Truck } from "lucide-react";
import React from "react";

const DeliveryInfoProduct = () => {
  return (
    <div>
      <div className="flex items-center gap-4 p-4 border border-[#808080] rounded-md">
        <Truck size={32} />
        <div className="flex flex-col justify-center">
          <span>Free Delivery</span>
          <span>Enter your postal code for Delivery Availability</span>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 border-[#808080] border-b border-l border-r border-t-0 rounded-md">
        <RefreshCw size={32} />
        <div className="flex flex-col justify-center">
          <span>Free Delivery</span>
          <span>Enter your postal code for Delivery Availability</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfoProduct;
