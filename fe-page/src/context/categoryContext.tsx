import { API_URL, ICategory } from "@/types/common";
import axios from "axios";
import React from "react";

interface ICategoryContext {
  dataCategory: ICategory[];
  isLoading: boolean;
}

export const CategoryContext = React.createContext<ICategoryContext>({
  dataCategory: [],
  isLoading: true,
});

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dataCategory, setDataCategory] = React.useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/categories`);

      if (response) {
        setDataCategory(response?.data);
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
    return { dataCategory, isLoading };
  }, [dataCategory, isLoading]);

  return (
    <CategoryContext.Provider value={context}>
      {children}
    </CategoryContext.Provider>
  );
};
