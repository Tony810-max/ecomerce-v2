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

import ContentCategory from "./ContentCategory";
import { ICategory } from "@/types/common";

export interface IViewCategory {
  category: ICategory;
}

const ViewCategory: React.FC<IViewCategory> = ({ category }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="font-sans text-sm">
          View Detail
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View Detail Category</DialogTitle>
          <DialogDescription>Detail category</DialogDescription>
        </DialogHeader>
        <ContentCategory category={category} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewCategory;
