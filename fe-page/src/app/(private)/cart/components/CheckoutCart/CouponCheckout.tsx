import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const CouponCheckout = () => {
  return (
    <div className="flex gap-4">
      <Input placeholder="Coupon Code" />
      <Button variant={"destructive"} className="font-sans text-sm py-4 px-12">
        Apply Coupon
      </Button>
    </div>
  );
};

export default CouponCheckout;
