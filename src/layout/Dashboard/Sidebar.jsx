import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-500 px-5 py-8 rounded h-[calc(100vh-25px)]">
      <ul className="flex flex-col gap-3 h-full">
        <li>
          <Link className="font-semibold text-white text-lg" to="/dashboard">
            All Blogs
          </Link>
        </li>
        <li>
          <Link className="font-semibold text-white text-lg" to="add-blog">
            Add Blog
          </Link>
        </li>
        <li className='mt-auto'>
          <Link className="font-medium text-white text-sm" to="/">
            Back to Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
