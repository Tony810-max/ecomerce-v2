import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ROUTES from "@/types/routes";
import { Slash } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container py-20 space-y-36">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROUTES.HOME}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-sans font-bold">
              404 Error
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col justify-center items-center gap-20">
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
