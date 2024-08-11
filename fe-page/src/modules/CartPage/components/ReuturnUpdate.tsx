import React from "react";

import ROUTES from "@/types/routes";
import Link from "next/link";

const ReuturnUpdate = () => {
  return (
    <div>
      <Link
        href={ROUTES.PRODUCT}
        className="font-sans text-sm font-medium border rounded-md py-4 px-12 hover:opacity-70"
      >
        Return To Shop
      </Link>
    </div>
  );
};

export default ReuturnUpdate;
