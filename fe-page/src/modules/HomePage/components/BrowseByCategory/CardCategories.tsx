import React from "react";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
interface ICardCategories {
  IconName: string;
  title: string;
}

const CardCategories: React.FC<ICardCategories> = ({ IconName, title }) => {
  const IconComponent = Icons[
    IconName as keyof typeof Icons
  ] as React.FC<LucideProps>;

  return (
    <div className="border py-6 px-14 rounded-md space-y-4 w-fit">
      <IconComponent size={32} className="text-center w-full" />
      <span className="block font-sans text-base capitalize">{title}</span>
    </div>
  );
};

export default CardCategories;
