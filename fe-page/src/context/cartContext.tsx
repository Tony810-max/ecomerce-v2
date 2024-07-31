"use client";
import React, { createContext, useState, useMemo, useEffect } from "react";
import axios from "../util/axios.customize";
import { API_URL, ICart } from "@/types/common";

interface ICartContext {
  dataCart: ICart[] | undefined;
  setSubTotal: React.Dispatch<React.SetStateAction<number | null>>;
  subTotal: number | null;
  fetchCartUser: () => void;
}

export const CartContext = createContext<ICartContext>({
  dataCart: [],
  setSubTotal: () => {},
  subTotal: null,
  fetchCartUser: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataCart, setDataCart] = useState<ICart[]>();
  const [subTotal, setSubTotal] = useState<number | null>(null);
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;

  const fetchCartUser = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/carts/me/${user?._id}`
      );

      if (response) {
        setDataCart(response?.data?.items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartUser();
  }, []);

  const calculatedSubTotal = useMemo(() => {
    if (dataCart) {
      const initialQuantities = dataCart.map((cart) => cart?.quantity || 0);
      return dataCart.reduce((total, product, index) => {
        const price =
          product?.product?.discount ?? product?.product?.priceOrigin;
        return total + price * initialQuantities[index];
      }, 0);
    }
    return null;
  }, [dataCart]);

  React.useEffect(() => {
    setSubTotal(calculatedSubTotal);
  }, [calculatedSubTotal]);

  const context = useMemo(() => {
    return {
      dataCart,
      setSubTotal,
      subTotal,
      fetchCartUser,
    };
  }, [dataCart, subTotal, setSubTotal, fetchCartUser]);

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
