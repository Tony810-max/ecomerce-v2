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
import ViewShippingDetail from "./ViewShippingDetail";

export interface IViewShipping {
  address: string;
  phone: string;
  name: string;
}

const ViewShipping: React.FC<IViewShipping> = ({ address, phone, name }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="font-sans text-sm">
          View Detail
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you`re done.
          </DialogDescription>
        </DialogHeader>
        <ViewShippingDetail name={name} address={address} phone={phone} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewShipping;
