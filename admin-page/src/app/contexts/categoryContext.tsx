"use client";
import { API_URL, ICategory } from "@/types/common";
import axios from "axios";
import React from "react";

interface ICategoryContext {
  dataCategories: ICategory[];
  fetchCategory: () => void;
  isLoading: boolean;
}

export const CategoryContext = React.createContext<ICategoryContext>({
  dataCategories: [],
  fetchCategory: () => {},
  isLoading: true,
});

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dataCategories, setDataCategories] = React.useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/categories`);

      if (response) {
        console.log(response);
        setDataCategories(response?.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCategory();
  }, []);

  const context = React.useMemo(() => {
    return { dataCategories, fetchCategory, isLoading };
  }, [dataCategories, isLoading]);

  return (
    <CategoryContext.Provider value={context}>
      {children}
    </CategoryContext.Provider>
  );
};
