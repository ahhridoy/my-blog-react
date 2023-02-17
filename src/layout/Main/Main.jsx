import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="p-2 h-[calc(100vh-25px)]">
      <div className="flex flex-col gap-3 h-full">
        <Navbar />
        <div className="container mx-auto my-5">
          <Outlet />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
