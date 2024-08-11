import React from "react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface ILabelInput {
  name: string;
  type?: string;
  value: string | number;
  clasName?: string;
}

const LabelInputView: React.FC<ILabelInput> = ({
  name,
  value,
  type,
  clasName,
}) => {
  return (
    <div className={`space-y-2 ${clasName}`}>
      <Label className="font-sans text-base font-semibold">{name}</Label>
      <Input type={type} value={value} disabled />
    </div>
  );
};

export default LabelInputView;
