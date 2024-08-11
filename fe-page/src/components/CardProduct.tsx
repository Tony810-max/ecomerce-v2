"use client";

import React from "react";
import Image from "next/image";
import { Eye, Heart, Trash2 } from "lucide-react";
import ReactStars from "react-rating-stars-component";
import axios from "../util/axios.customize";

import { Button } from "./ui/button";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import Link from "next/link";
import ROUTES from "@/types/routes";
import { useGetUser } from "@/hooks/useGetUser";

interface ICardProduct {
  idProduct: string;
  id?: string;
  priceOrigin: number;
  discount: number;
  name: string;
  rating?: number;
  countReview?: number;
  salePercent?: number;
  image: string;
  quantity?: number;
  trash?: boolean;
  isNewProduct?: boolean;
  fetchData?: () => void;
}

const CardProduct: React.FC<ICardProduct> = ({
  idProduct,
  name,
  discount,
  rating,
  countReview,
  priceOrigin,
  salePercent,
  image,
  quantity,
  trash,
  isNewProduct,
  fetchData,
}) => {
  const [open, setOpen] = React.useState(false);
  const { user } = useGetUser();

  const userID = user?._id;

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/carts/${idProduct}`, {
        quantity: quantity ? quantity : 1,
        userId: userID,
      });
      if (response) {
        toast.success("Added to cart");
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

  const handleAddWishlist = async () => {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v1/products/wishlist/${idProduct}`,
        {
          userId: userID,
        }
      );

      if (response) {
        toast.success("Added to wishlist");
        fetchData && fetchData();
      }
    } catch (error) {
      const errorAxios = error as AxiosError<{ message: string }>;
      const status = errorAxios?.response?.status;
      const message = errorAxios?.response?.data?.message;

      if (status === 400 || status === 404) {
        toast.error(message);
      }
    }
  };

  const handleDeleteWishlist = async () => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/v1/products/wishlist/${idProduct}`,
        {
          data: { userId: userID },
        }
      );

      if (response && fetchData) {
        toast.success("Removed wishlist successfully");
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="space-y-4 w-full hover:cursor-grabbing"
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
    >
      <div className="relative bg-[#f5f5f5] w-full px-10 py-9 rounded-md">
        <div className="relative w-48 h-44">
          <Image src={image} alt="imgFlashSales" fill priority unoptimized />
          {open && (
            <Button
              variant={"destructive"}
              className={`absolute font-sans text-base w-full bottom-[-30px]   ${
                open ? "animate__animated animate__slideInUp" : ""
              }`}
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          )}
        </div>
        {isNewProduct ? (
          <span className="absolute top-3 left-3 bg-[#0afd61] px-3 py-1 text-white rounded-lg">
            New
          </span>
        ) : (
          salePercent !== 0 && (
            <span className="absolute top-3 left-3 bg-[#db4444] px-3 py-1 text-white rounded-lg">
              -{salePercent}%
            </span>
          )
        )}

        <div className="absolute top-3 right-3 space-y-2">
          {trash ? (
            <Trash2
              size={28}
              fill="white"
              className="px-1 py-1 bg-white rounded-full hover:cursor-pointer hover:opacity-50 hover:text-red-600"
              onClick={handleDeleteWishlist}
            />
          ) : (
            <>
              <Heart
                size={28}
                fill="white"
                className="px-1 py-1 bg-white rounded-full hover:cursor-pointer hover:opacity-50 hover:bg-red-500"
                onClick={handleAddWishlist}
              />
              <Eye
                size={28}
                fill="white"
                className="px-1 py-1 bg-white rounded-full"
              />
            </>
          )}
        </div>
      </div>
      <div className="space-y-2 w-full">
        <span className="font-sans text-lg font-bold">{name}</span>
        <div className="space-x-3">
          <span className="font-sans text-base text-red-600 ">
            ${discount ? discount : priceOrigin}
          </span>
          <span className="font-sans text-base line-through text-[#494949]">
            {discount ? `$${priceOrigin}` : ""}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          {rating && (
            <div className="flex gap-2 items-center">
              <ReactStars
                count={5}
                edit={false}
                value={rating}
                size={24}
                activeColor="#ffd700"
              />
              <span className="font-sans text-base text-[#6e644f] font-bold">
                ({countReview})
              </span>
            </div>
          )}
          <Link
            href={`${ROUTES.PRODUCT}/${idProduct}`}
            className="hover:opacity-70"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
