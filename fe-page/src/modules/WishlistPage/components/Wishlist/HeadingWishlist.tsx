import React from "react";
import axios from "../../../../util/axios.customize";

import { Button } from "@/components/ui/button";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useGetUser } from "@/hooks/useGetUser";

interface IHeading {
  count?: number;
  fetchProduct: () => void;
}

const HeadingWishlist: React.FC<IHeading> = ({ count, fetchProduct }) => {
  const { user } = useGetUser();

  const handleAddToBag = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/carts/wishlist/${user?._id}`
      );

      if (response) {
        toast.success(response?.data?.message);
        fetchProduct();
      }
    } catch (error) {
      const errors = error as AxiosError<{ message: string }>;
      const status = errors?.response?.status;
      const errMessage = errors.response?.data?.message;
      if (status === 401 || status === 404 || status === 404) {
        toast.error(errMessage);
      }
    }
  };

  return (
    <div className="flex justify-between items-center">
      <span className="font-sans text-lg font-semibold">
        Wishlist ({count})
      </span>
      <Button variant={"outline"} onClick={handleAddToBag}>
        Move All To Bag
      </Button>
    </div>
  );
};

export default HeadingWishlist;
