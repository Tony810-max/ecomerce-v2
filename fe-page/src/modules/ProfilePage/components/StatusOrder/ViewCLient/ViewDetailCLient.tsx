import LabelInputView from "@/components/LabelInputView";
import React from "react";
import { IViewClient } from ".";

const ViewDetailCLient: React.FC<IViewClient> = ({ user }) => {
  return (
    <div className="space-y-4">
      <LabelInputView name="Name" value={user?.name} />
      <LabelInputView name="Address" value={user?.street} />
      <LabelInputView name="Phone" value={user?.city} />
      <LabelInputView name="Email" value={user?.email} />
    </div>
  );
};

export default ViewDetailCLient;
