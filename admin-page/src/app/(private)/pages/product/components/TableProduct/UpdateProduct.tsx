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

const UpdateProduct = () => {
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
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
