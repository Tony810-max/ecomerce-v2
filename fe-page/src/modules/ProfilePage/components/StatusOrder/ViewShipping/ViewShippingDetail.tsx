import LabelInputView from "@/components/LabelInputView";
import React from "react";
import { IViewShipping } from ".";

const ViewShippingDetail: React.FC<IViewShipping> = ({
  address,
  phone,
  name,
}) => {
  return (
    <div className="grid gap-4 py-4">
      <LabelInputView name="Name" value={name ? name : "None Name"} />
      <LabelInputView name="Address" value={address} />
      <LabelInputView name="Phone" value={phone} />
    </div>
  );
};

export default ViewShippingDetail;
