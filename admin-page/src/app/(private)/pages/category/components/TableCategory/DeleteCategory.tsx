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
import { IIdCategory } from "./UpdateCategory";
import { useError } from "@/app/hooks/useError";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { CategoryContext } from "@/app/contexts/categoryContext";

const DeleteCategory: React.FC<IIdCategory> = ({ idCategory }) => {
  const { handleError } = useError();
  const categoryContext = React.useContext(CategoryContext);
  const { fetchCategory } = categoryContext;

  const handleDeleteCategory = async () => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/v1/categories/${idCategory}`
      );

      if (response) {
        toast.success("Category deleted successfully");
        fetchCategory();
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="link"
          className="font-sans text-sm font-bold text-red-600"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure delete this category?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="font-sans text-base bg-[#f14244] hover:bg-[#f14244] hover:opacity-70"
            onClick={handleDeleteCategory}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCategory;
