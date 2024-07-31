import ROUTES from "@/types/routes";
import Link from "next/link";
import React from "react";

const ViewAllProduct = () => {
  return (
    <div className="flex justify-center py-14">
      <Link
        href={ROUTES.PRODUCT}
        className="font-sans text-lg rounded-md bg-[#db4444] text-white py-4 px-12 hover:opacity-70"
      >
        View All Products
      </Link>
    </div>
  );
};

export default ViewAllProduct;
