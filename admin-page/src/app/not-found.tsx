import React from "react";
import ROUTES from "@/types/routes";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container py-20 space-y-36 min-h-screen">
      <div className="flex flex-col justify-center items-center gap-20 h-full">
        <div className="flex flex-col gap-10 justify-center items-center">
          <span className="font-sans text-3xl font-bold">404 Not Found</span>
          <span>Your visited page not found. You may go home page.</span>
        </div>
        <Link
          href={ROUTES.HOME}
          className="font-sans text-lg py-4 px-12 text-white rounded-lg bg-[#db4444] hover:opacity-70"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
