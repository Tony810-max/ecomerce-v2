import { cn } from "@/lib/utils";
import ROUTES from "@/types/routes";
import { Home, ShoppingBag, Layers3, Package } from "lucide-react";
import Link from "next/link";
import React from "react";

const DATA_SIDEBAR_ADMIN = [
  {
    title: "Home",
    href: ROUTES.ADMIN,
    icon: Home,
  },
  {
    title: "Product",
    href: ROUTES.PRODUCT,
    icon: Package,
  },
  {
    title: "Category",
    href: ROUTES.CATEGORY,
    icon: Layers3,
  },
  {
    title: "List Order",
    href: ROUTES.ORDER,
    icon: ShoppingBag,
  },
];

interface IContentSidebar {
  onSetOpen: (value: boolean) => void;
}

const ContentSidebarAdmin: React.FC<IContentSidebar> = ({ onSetOpen }) => {
  const [value, setValue] = React.useState(DATA_SIDEBAR_ADMIN[0]?.title);

  const handleChange = (title: string) => {
    onSetOpen(false); 
    setValue(title);
  };

  return (
    <div className="space-y-4">
      {DATA_SIDEBAR_ADMIN?.map((admin, index) => (
        <div
          className={cn(
            "flex items-center justify-center border gap-2 py-2 rounded-lg hover:opacity-50 hover:cursor-pointer",
            {
              "bg-red-600 text-white animate-slideInColor bg-gradient-to-r from-red-500 to-blue-500 bg-200%":
                value === admin?.title,
            }
          )}
          key={index}
          onClick={() => handleChange(admin?.title)}
        >
          <admin.icon />
          <Link href={admin?.href} className="font-sans text-lg">
            {admin?.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContentSidebarAdmin;
