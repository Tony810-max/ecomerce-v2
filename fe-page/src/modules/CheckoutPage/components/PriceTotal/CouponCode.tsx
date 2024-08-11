import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const CouponCode = () => {
  return (
    <div className="flex gap-4 items-center">
      <Input placeholder="Coupon Code" />
      <Button type="button" variant={"destructive"}>
        Apply Coupon
      </Button>
    </div>
  );
};

export default CouponCode;
