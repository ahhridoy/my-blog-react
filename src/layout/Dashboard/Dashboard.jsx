import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 p-2">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3 container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
