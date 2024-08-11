"use client";
import React from "react";
import axios from "axios";
import { useGetUser } from "@/hooks/useGetUser";
import { API_URL, IProduct, IUser } from "@/types/common";

interface IProductContext {
  setDataProduct: React.Dispatch<React.SetStateAction<IProduct[] | undefined>>;
  dataProduct: IProduct[] | undefined;
  wishlistMe: IProduct[] | undefined;
  fetchProduct: () => void;
  isLoading: boolean;
  user: IUser | null;
}

export const ProductContext = React.createContext<IProductContext>({
  dataProduct: [],
  wishlistMe: [],
  isLoading: true,
  fetchProduct: () => {},
  user: null,
  setDataProduct: () => {},
});

export const ProductProivder = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dataProduct, setDataProduct] = React.useState<IProduct[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const { user } = useGetUser();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/products/`);

      if (response) {
        setDataProduct(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const wishlistMe = dataProduct?.filter((product) => {
    if (product?.wishlist?.length === 0) return;
    return product?.wishlist?.map((wishlist) => wishlist === user?._id);
  });

  React.useEffect(() => {
    fetchProduct();
  }, []);

  const context = React.useMemo(() => {
    return {
      dataProduct,
      wishlistMe,
      isLoading,
      fetchProduct,
      user,
      setDataProduct,
    };
  }, [dataProduct, wishlistMe, isLoading, fetchProduct, user]);

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
