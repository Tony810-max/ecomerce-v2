import { Input } from "@/components/ui/input";
import React from "react";
import SelectCategory from "./SelectCategory";
import { Button } from "@/components/ui/button";
import { ProductContext } from "@/context/productContex";
import { IProduct } from "@/types/common";

interface ISearch {
  onSetFilterProduct: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const SearchProduct: React.FC<ISearch> = ({ onSetFilterProduct }) => {
  const [valueInput, setValueInput] = React.useState("");
  const [valueCategory, setValueCategory] = React.useState("");
  const productContext = React.useContext(ProductContext);
  const { dataProduct } = productContext;

  const handleSearchProduct = () => {
    let filteredProducts = dataProduct;

    if (valueInput) {
      filteredProducts = filteredProducts?.filter((product) =>
        product?.name.toLowerCase().includes(valueInput.toLowerCase())
      );
    }

    if (valueCategory) {
      filteredProducts = filteredProducts?.filter(
        (product) =>
          product?.category?.name.toLowerCase() === valueCategory.toLowerCase()
      );
    }

    onSetFilterProduct(filteredProducts || []);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="font-sans text-lg font-semibold">List Of Product</span>
      <div className="flex items-center gap-2">
        <Input
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          placeholder="Search by name"
        />
        <SelectCategory onSetValueCategory={setValueCategory} />
        <div className="flex gap-2">
          <Button
            variant={"outline"}
            onClick={() => {
              setValueInput("");
              setValueCategory("");
              dataProduct && onSetFilterProduct(dataProduct);
            }}
          >
            Clear
          </Button>
          <Button variant={"destructive"} onClick={handleSearchProduct}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
