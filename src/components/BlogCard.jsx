import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, title, image, date } = blog;
  return (
    <Link to={`/blog-details/${_id}`}>
      <div className="rounded-lg border p-3 hover:transition hover:shadow-lg hover:shadow-gray-500">
        <img src={image} alt={title} className="rounded-full w-12" />
        <h4 className="text-gray-500 text-2xl font-bold my-5">{title}</h4>
        <p className="text-gray-500 text-sm mb-1">{date}</p>
        <img src={image} alt={title} className="rounded-lg w-full" />
        <div className="flex justify-between items-center mt-4">
          <button className="text-gray-500 font-bold">Like</button>
          <button className="text-gray-500 font-bold">Comment</button>
          <button className="text-gray-500 font-bold">Share</button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
