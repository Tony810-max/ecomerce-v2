import React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

interface ICheckbox {
  defaulChecked: boolean;
  value: string;
  name: string;
  onSetMethodOrder: (value: string) => void;
}

const CheckboxLabel: React.FC<ICheckbox> = ({
  defaulChecked,
  name,
  onSetMethodOrder,
  value,
}) => {
  return (
    <div className="flex items-center gap-4">
      <Input
        className="w-fit"
        type="radio"
        value={value}
        defaultChecked={defaulChecked}
        name={"methodOrder"}
        onChange={(e) => onSetMethodOrder(e.target.value)}
      />
      <Label className="font-sans text-base">{name}</Label>
    </div>
  );
};

export default CheckboxLabel;
