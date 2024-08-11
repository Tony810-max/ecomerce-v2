import React from "react";
import { cn } from "@/lib/utils";

const DATA_SIDEBAR_PROFILE = [
  {
    HEADING: "Manage My Account",
    TITLE: ["My Profile", "Change Password"],
  },
  {
    HEADING: "My Orders",
    TITLE: ["Status Order", "My Cancellations"],
  },
  {
    HEADING: "My WishList",
    TITLE: [],
  },
];

interface ISidebar {
  title: string;
  onSetTitle: (title: string) => void;
}

const SidebarProfile: React.FC<ISidebar> = ({ onSetTitle, title }) => {
  return (
    <div className="space-y-6">
      {DATA_SIDEBAR_PROFILE?.map((sidbar, index) => (
        <div key={index}>
          <div className="flex flex-col gap-4">
            <span className="font-sans text-base font-bold">
              {sidbar?.HEADING}
            </span>
            <div className="font-sans flex flex-col gap-2 pl-4 text-[#949494]">
              {sidbar?.TITLE?.length > 0 &&
                sidbar?.TITLE?.map((titleSidebar, index) => (
                  <span
                    key={index}
                    onClick={() => onSetTitle(titleSidebar)}
                    className={cn(
                      "font-sans text-sm hover:cursor-pointer hover:text-[#e44042] hover:opacity-50 hover:font-semibold",
                      {
                        "text-[#e44042] font-semibold": titleSidebar === title,
                      }
                    )}
                  >
                    {titleSidebar}
                  </span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarProfile;
