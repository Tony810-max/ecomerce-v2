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
import { IUser } from "@/types/common";
import ViewDetailCLient from "./ViewDetailCLient";

export interface IViewClient {
  user: IUser;
}

const ViewClient: React.FC<IViewClient> = ({ user }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">View Detail</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View Client</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you`re done.
          </DialogDescription>
        </DialogHeader>
        <ViewDetailCLient user={user} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewClient;
