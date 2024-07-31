import React from "react";

import { LucideProps } from "lucide-react";

interface ICardCAtegories {
  Icon: React.ComponentType<LucideProps>;
  title: string;
}

const CardCategories: React.FC<ICardCAtegories> = ({ Icon, title }) => {
  return (
    <div className="border py-6 px-14 rounded-md space-y-4 w-fit">
      <Icon size={32} className="text-center w-full" />
      <span className="block font-sans text-base ">{title}</span>
    </div>
  );
};

export default CardCategories;
