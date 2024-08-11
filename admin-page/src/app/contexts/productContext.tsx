"use client";
import { API_URL, IProduct } from "@/types/common";
import axios from "axios";
import React from "react";

interface IProductContext {
  dataProduct: IProduct[] | null;
  fetchProduct: () => void;
  idLoading: boolean;
}

export const ProductContext = React.createContext<IProductContext>({
  dataProduct: [],
  fetchProduct: () => {},
  idLoading: true,
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dataProduct, setDataProduct] = React.useState<IProduct[] | null>(null);
  const [idLoading, setIsLoading] = React.useState(true);

  const fetchProduct = React.useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/products`);
      if (response) {
        setDataProduct(response?.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const context = React.useMemo(() => {
    return { dataProduct, fetchProduct, idLoading };
  }, [dataProduct, fetchProduct, idLoading]);

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
