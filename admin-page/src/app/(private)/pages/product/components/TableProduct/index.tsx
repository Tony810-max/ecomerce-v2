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
import { ProductContext } from "@/app/contexts/productContext";
import ViewProduct from "./ViewProduct";
import AddSubImage from "./AddSubImage";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";
import { Skeleton } from "@/components/ui/skeleton";

const TableProduct = () => {
  const productContext = React.useContext(ProductContext);
  const { dataProduct, idLoading } = productContext;

  return (
    <Table>
      <TableCaption>A list of your products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px] text-center">#</TableHead>
          <TableHead className="font-sans text-sm text-center font-bold">
            Name
          </TableHead>
          <TableHead className="font-sans text-sm text-center font-bold">
            View Product
          </TableHead>
          <TableHead className="font-sans text-sm text-center font-bold">
            Add Sub Image
          </TableHead>
          <TableHead className="font-sans text-sm text-center font-bold">
            Update Product
          </TableHead>
          <TableHead className="font-sans text-sm text-center font-bold">
            Delete Product
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {idLoading
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
          : dataProduct?.map((product, index) => (
              <TableRow key={product?.id}>
                <TableCell className="font-sans text-sm text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="font-sans text-sm text-center font-semibold">
                  {product?.name}
                </TableCell>
                <TableCell className="font-sans text-sm text-center">
                  <ViewProduct product={product} />
                </TableCell>
                <TableCell className="font-sans text-sm text-center">
                  <AddSubImage idProduct={product?.id} />
                </TableCell>
                <TableCell className="font-sans text-sm text-center">
                  <UpdateProduct />
                </TableCell>
                <TableCell className="font-sans text-sm text-center">
                  <DeleteProduct idProduct={product?.id} />
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
};

export default TableProduct;
