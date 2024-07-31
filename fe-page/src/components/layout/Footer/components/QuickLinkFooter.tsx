import React from "react";

const QuickLinkFooter = () => {
  return (
    <div className="space-y-6">
      <span className="font-sans text-white font-bold text-lg">Quick Link</span>
      <div className="flex flex-col gap-4">
        <span className="font-sans text-white">Privacy Policy</span>
        <span className="font-sans text-white">Terms Of Use</span>
        <span className="font-sans text-white">FAQ</span>
        <span className="font-sans text-white">Contact</span>
      </div>
    </div>
  );
};

export default QuickLinkFooter;
