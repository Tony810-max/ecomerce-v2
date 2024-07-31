import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import React from "react";

const SubscribeFooter = () => {
  return (
    <div className="space-y-6">
      <span className="font-sans text-lg font-bold text-white">Exclusive</span>
      <div className="space-y-6">
        <span className="text-white text-lg font-sans font-semibold">Subscribe</span>
        <div className="space-y-4">
          <span className="text-white">Get 10% off your first order</span>
          <div className="relative">
            <Input placeholder="Enter your email" className="bg-dark" />
            <SendHorizontal
              color="black"
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer hover:opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeFooter;
