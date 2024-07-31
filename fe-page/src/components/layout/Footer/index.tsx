import React from "react";
import SubscribeFooter from "./components/SubscribeFooter";
import SupportFooter from "./components/SupportFooter";
import AccountFooter from "./components/AccountFooter";
import QuickLinkFooter from "./components/QuickLinkFooter";
import DowloadAppFooter from "./components/DowloadAppFooter";

const Footer = () => {
  return (
    <div className="container grid grid-cols-5 bg-black py-20 gap-20">
      <SubscribeFooter />
      <SupportFooter />
      <AccountFooter />
      <QuickLinkFooter />
      <DowloadAppFooter />
    </div>
  );
};

export default Footer;
