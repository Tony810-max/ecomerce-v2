import React from "react";
import axios from "../../../../../util/axios.customize";
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
import { API_URL } from "@/types/common";
import { useError } from "@/hooks/useError";
import { toast } from "react-toastify";
import { OrderContext } from "@/context/orderContext";

interface ICancell {
  idOrder: string;
}

const CancellOrder: React.FC<ICancell> = ({ idOrder }) => {
  const { handleError } = useError();
  const orderContext = React.useContext(OrderContext);
  const { fetchOrderUser } = orderContext;

  const handleCancellOrder = async () => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/v1/orders/${idOrder}`
      );

      if (response) {
        toast.success("Order cancell successfully");
        fetchOrderUser();
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link" className="font-sans text-sm text-red-600">
          Cancell
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="font-sans text-base bg-[#da4543] hover:bg-[#da4543] hover:opacity-70"
            onClick={handleCancellOrder}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancellOrder;
