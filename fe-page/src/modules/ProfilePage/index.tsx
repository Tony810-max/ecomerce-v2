"use client";
import React from "react";

import HeadingProfile from "./components/HeadingProfile";
import SidebarProfile from "./components/SidebarProfile";
import UpdateProfile from "./components/UpdateProfile";
import ChangePassword from "./components/ChangePassword";
import StatusOrder from "./components/StatusOrder";
import ListCancellOrder from "./components/ListCancellOrder";
import { OrderContext } from "@/context/orderContext";

const ProfilePage = () => {
  const [title, setTitle] = React.useState("My Profile");

  React.useEffect(() => {
    if (title === "My Cancellations") {
      setStatus("Cancelled");
    } else {
      setStatus("Pending");
    }
  }, [title]);

  const orderContext = React.useContext(OrderContext);
  const { setStatus } = orderContext;

  const render = () => {
    switch (title) {
      case "My Profile":
        return <UpdateProfile />;

      case "Change Password":
        return <ChangePassword />;

      case "Status Order":
        return <StatusOrder />;

      case "My Cancellations":
        return <ListCancellOrder />;

      default:
        break;
    }
  };

  return (
    <div className="container py-20 space-y-20">
      <HeadingProfile />
      <div className="flex gap-24">
        <SidebarProfile title={title} onSetTitle={setTitle} />
        {render()}
      </div>
    </div>
  );
};

export default ProfilePage;
