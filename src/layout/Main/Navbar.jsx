import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div className="flex justify-between bg-gray-500 py-5 px-7 rounded">
      <div>
        <Link className="font-bold" to="/">
          <h4 className="text-white text-2xl">My Blog App</h4>
        </Link>
      </div>
      <div className="flex gap-3">
        <Link className="text-white font-medium text-lg" to="/home">Home</Link>
        {/* <Link className="text-white font-medium text-lg" to="/blogs">Blogs</Link> */}
        <Link className="text-white font-medium text-lg" to="/about">About</Link>
        <Link className="text-white font-medium text-lg" to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
