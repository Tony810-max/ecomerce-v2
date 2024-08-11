"use client";
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
import FormCreateProduct from "./FormCreateProduct";

const CreateProduct = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant={"destructive"} className="font-sans text-sm">
          Create Product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[48rem] overflow-auto">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <FormCreateProduct onSetOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateProduct;
