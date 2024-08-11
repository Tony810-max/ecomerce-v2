import React from "react";
import Link from "next/link";

import { CategoryContext } from "@/context/categoryContext";
import ROUTES from "@/types/routes";

const SidebarBanner = () => {
  const categoryContext = React.useContext(CategoryContext);
  const { dataCategory } = categoryContext;

  return (
    <div className="col-span-1 flex flex-col gap-4 items-center border border-l-0 border-t-0 border-b-0 border-r py-10">
      {dataCategory?.map((category) => (
        <Link
          key={category?._id}
          target="_blank"
          href={`${ROUTES.PRODUCT}?searchCategory=${category?.name}`}
          className="font-sans text-base font-semibold capitalize hover:opacity-50 hover:text-[#db4444] hover:font-bold"
        >
          {category?.name}
        </Link>
      ))}
    </div>
  );
};

export default SidebarBanner;
