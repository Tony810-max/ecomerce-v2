import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ICartMain } from "@/types/common";
import ViewProductDetail from "./ViewProductDetail";

export interface IViewProduct {
  product: ICartMain;
}

const ViewProduct: React.FC<IViewProduct> = ({ product }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">View Detail</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View Detail Product</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you`re done.
          </DialogDescription>
        </DialogHeader>
        <ViewProductDetail product={product} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewProduct;
