import React from "react";
import CreateCategory from "./components/CreateCategory";
import TableCategory from "./components/TableCategory";
import { CategoryProvider } from "@/app/contexts/categoryContext";

const CategoryPage = () => {
  return (
    <div className="space-y-4">
      <CategoryProvider>
        <CreateCategory />
        <TableCategory />
      </CategoryProvider>
    </div>
  );
};

export default CategoryPage;
