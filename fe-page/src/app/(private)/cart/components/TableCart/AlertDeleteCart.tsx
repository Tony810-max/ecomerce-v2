import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "../../../../../util/axios.customize";

import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { CartContext } from "@/context/cartContext";

interface IAlerDelete {
  idCartITem: string;
}

const AlertDeleteCart: React.FC<IAlerDelete> = ({ idCartITem }) => {
  const cartContext = React.useContext(CartContext);
  const fetchCartUser = cartContext?.fetchCartUser;

  const handleDeleteCart = async () => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/v1/carts/removeCart/${idCartITem}`
      );
      if (response) {
        toast.success("Cart deleted successfully");
        fetchCartUser();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          variant={"link"}
          className="font-sans text-red-600 hover:opacity-70"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure delete this cart?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="font-sans text-base">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteCart}
            className="font-sans text-base bg-[#ef4344] hover:bg-[#ef4344]/50"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDeleteCart;
