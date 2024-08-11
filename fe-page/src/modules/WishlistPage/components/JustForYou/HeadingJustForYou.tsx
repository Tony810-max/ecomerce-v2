import React from "react";

import Title from "@/components/Title";
import Link from "next/link";
import ROUTES from "@/types/routes";

const HeadingJustForYou = () => {
  return (
    <div className="flex items-center justify-between">
      <Title title="Just For You" />
      <Link
        href={ROUTES.PRODUCT}
        className="border text-sm border-black py-4 px-12 rounded-md font-semibold hover:opacity-70"
      >
        See All
      </Link>
    </div>
  );
};

export default HeadingJustForYou;
