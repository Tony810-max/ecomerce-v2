import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface ILabelInputView {
  label: string;
  value: string | number;
  className?: string;
}

const LabelInputView: React.FC<ILabelInputView> = ({
  label,
  value,
  className,
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label>{label}</Label>
      <Input value={value} disabled />
    </div>
  );
};

export default LabelInputView;
