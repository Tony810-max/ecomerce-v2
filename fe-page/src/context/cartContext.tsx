"use client";
import React, { createContext, useState, useMemo, useEffect } from "react";
import axios from "../util/axios.customize";
import { API_URL, ICartMain } from "@/types/common";
import { useGetUser } from "@/hooks/useGetUser";

interface ICartContext {
  dataCart: ICartMain | null;
  setSubTotal: React.Dispatch<React.SetStateAction<number | null>>;
  subTotal: number | null;
  fetchCartUser: () => void;
  methodOrder: string;
  setMethodOrder: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

export const CartContext = createContext<ICartContext>({
  dataCart: null,
  setSubTotal: () => {},
  subTotal: null,
  fetchCartUser: () => {},
  methodOrder: "cash",
  setMethodOrder: () => {},
  isLoading: false,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataCart, setDataCart] = useState<ICartMain | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [subTotal, setSubTotal] = useState<number | null>(null);
  const [methodOrder, setMethodOrder] = React.useState<string>("cash");

  const { user } = useGetUser();

  const fetchCartUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_URL}/api/v1/carts/me/${user?._id}`
      );

      if (response) {
        setDataCart(response?.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCartUser();
  }, []);

  const calculatedSubTotal = useMemo(() => {
    if (dataCart?.items) {
      const initialQuantities = dataCart?.items.map(
        (cart) => cart?.quantity || 0
      );
      return dataCart?.items.reduce((total, product, index) => {
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
      methodOrder,
      setMethodOrder,
      isLoading,
    };
  }, [
    dataCart,
    subTotal,
    setSubTotal,
    fetchCartUser,
    methodOrder,
    setMethodOrder,
    isLoading,
  ]);

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
