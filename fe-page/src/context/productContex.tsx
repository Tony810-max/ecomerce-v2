"use client";
import { API_URL, IProduct } from "@/types/common";
import axios from "axios";
import React from "react";

interface IProductContext {
  dataProduct: IProduct[] | undefined;
}

export const ProductContext = React.createContext<IProductContext>({
  dataProduct: [],
});

export const ProductProivder = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dataProduct, setDataProduct] = React.useState<IProduct[]>();
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/products`);

      if (response) {
        setDataProduct(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchProduct();
  }, []);

  const context = React.useMemo(() => {
    return {
      dataProduct,
    };
  }, [dataProduct]);

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
