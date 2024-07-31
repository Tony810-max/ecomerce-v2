import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="container">{children}</main>;
};

export default layout;
