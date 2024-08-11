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
import FormAddSubImage from "./FormAddSubImage";
import { IDeleteProduct } from "../DeleteProduct";

const AddSubImage: React.FC<IDeleteProduct> = ({ idProduct }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <FormAddSubImage idProduct={idProduct} onSetOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default AddSubImage;
