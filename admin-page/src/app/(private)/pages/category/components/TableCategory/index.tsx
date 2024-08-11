"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CategoryContext } from "@/app/contexts/categoryContext";
import DeleteCategory from "./DeleteCategory";
import UpdateCategory from "./UpdateCategory";
import ViewCategory from "../ViewCategory";
import { Skeleton } from "@/components/ui/skeleton";

const TableCategory = () => {
  const categoryContext = React.useContext(CategoryContext);
  const { dataCategories, isLoading } = categoryContext;

  return (
    <Table>
      <TableCaption>A list of your category .</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px] font-sans text-sm text-center font-bold">
            #
          </TableHead>
          <TableHead className="font-sans text-sm text-center font-bold">
            Name
          </TableHead>
          <TableHead className="font-sans text-sm text-center font-bold">
            View Detail
          </TableHead>
          <TableHead className="font-sans text-sm text-center font-bold">
            Update
          </TableHead>
          <TableHead className="font-sans text-sm text-center font-bold">
            Delete
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading
          ? Array.from({ length: 5 }, (data, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="w-[50px] h-4" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-4 text-center" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-4 text-center" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-4 text-center" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-4 text-center" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-4 text-center" />
                </TableCell>
              </TableRow>
            ))
          : dataCategories?.map((category, index) => (
              <TableRow key={category?._id}>
                <TableCell className="font-sans text-sm text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="font-sans text-sm text-center">
                  {category?.name}
                </TableCell>
                <TableCell className="font-sans text-sm text-center">
                  <ViewCategory category={category} />
                </TableCell>
                <TableCell className="font-sans text-sm text-center">
                  <UpdateCategory idCategory={category?._id} />
                </TableCell>
                <TableCell className="font-sans text-sm text-center">
                  <DeleteCategory idCategory={category?._id} />
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
};

export default TableCategory;
