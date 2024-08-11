import React from "react";
import { format } from "date-fns";

import LabelInputView from "@/components/LabelInputView";
import { IViewCategory } from ".";

const ContentCategory: React.FC<IViewCategory> = ({ category }) => {
  return (
    <div className="grid grid-cols-2 gap-4 py-4">
      <LabelInputView label="Name" value={category?.name} />
      <LabelInputView label="Color" value={category?.color} />
      <LabelInputView label="Icon" value={category?.icon} />
      <LabelInputView
        label="Date Update"
        value={format(new Date(category?.updateAt), "dd-MM-yyyy HH:mm")}
      />
    </div>
  );
};

export default ContentCategory;
