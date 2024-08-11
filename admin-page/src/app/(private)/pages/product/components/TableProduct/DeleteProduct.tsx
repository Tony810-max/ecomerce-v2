import React from "react";
import axios from "../../../../../../util/axios.customize";

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
import { useError } from "@/app/hooks/useError";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { ProductContext } from "@/app/contexts/productContext";

export interface IDeleteProduct {
  idProduct: string;
}

const DeleteProduct: React.FC<IDeleteProduct> = ({ idProduct }) => {
  const { handleError } = useError();
  const productContext = React.useContext(ProductContext);
  const fetchProduct = productContext?.fetchProduct;

  const handleDeleteProduct = async () => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/v1/products/${idProduct}`
      );

      if (response) {
        toast.success("Product deleted successfully");
        fetchProduct();
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link" className="font-sans text-sm text-red-600">
          Delete
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
            className="font-sans text-base bg-[#ed4540] hover:bg-[#ed4540] hover:opacity-70"
            onClick={handleDeleteProduct}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProduct;
