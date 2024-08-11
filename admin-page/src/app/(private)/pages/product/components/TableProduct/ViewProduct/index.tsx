import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContentProduct from "./ContentProduct";
import { IProduct } from "@/types/common";

export interface IViewProduct {
  product: IProduct;
}

const ViewProduct: React.FC<IViewProduct> = ({ product }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"link"} className="font-sans text-sm">
          View Detail
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Product</DialogTitle>
          <DialogDescription>Detail Product description</DialogDescription>
        </DialogHeader>
        <ContentProduct product={product} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewProduct;
