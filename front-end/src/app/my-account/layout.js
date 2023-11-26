import React from "react";
import Dashboard from "./Dashboard";

const UserAccountLayout = ({ children }) => {
  return (
    <section>
      <div className="syner-container flex">
        <div className="w-[30%]">
          <Dashboard />
        </div>
        <div className="w-[70%]">{children}</div>
      </div>
    </section>
  );
};

export default UserAccountLayout;
