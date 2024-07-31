import { Button } from "@/components/ui/button";
import ROUTES from "@/types/routes";
import Link from "next/link";
import React from "react";

const ReuturnUpdate = () => {
  return (
    <div className="flex items-center justify-between ">
      <Link
        href={ROUTES.PRODUCT}
        className="font-sans text-sm font-medium border rounded-md py-4 px-12 hover:opacity-70"
      >
        Return To Shop
      </Link>
      <Button variant={"outline"} className="font-sans text-sm py-4 px-12">
        Update Cart
      </Button>
    </div>
  );
};

export default ReuturnUpdate;
