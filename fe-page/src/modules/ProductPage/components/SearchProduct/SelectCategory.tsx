import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryContext } from "@/context/categoryContext";

interface ISelect {
  onSetValueCategory: (value: string) => void;
}

const SelectCategory: React.FC<ISelect> = ({ onSetValueCategory }) => {
  const categoryContext = React.useContext(CategoryContext);
  const { dataCategory } = categoryContext;

  return (
    <Select onValueChange={onSetValueCategory}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {dataCategory?.map((category) => (
            <SelectItem value={category?.name} key={category?._id}>
              {category?.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
