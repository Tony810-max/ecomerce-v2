import React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ICheckbox {
  defaulchecked: boolean;
  name: string;
}

const CheckboxLabel: React.FC<ICheckbox> = ({ defaulchecked, name }) => {
  return (
    <div className="flex items-center gap-4">
      <Checkbox defaultChecked={defaulchecked} />
      <Label className="font-sans text-base">{name}</Label>
    </div>
  );
};

export default CheckboxLabel;
