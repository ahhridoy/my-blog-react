import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchBlogData from "../../redux/thunk/fetchBlogData";

const BlogDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const blog = useSelector((state) => state.blog);
  const { title, description, tag, image, date } = blog;

  useEffect(() => {
    dispatch(fetchBlogData(id));
  }, []);

  return (
    <div className="rounded-lg border grid grid-cols-3">
      {/* left side */}
      <div className="col-span-3 md:col-span-2 p-3 ">
        <div className="flex gap-3">
          <button className="text-gray-500 ">Prev</button>
          <button className="text-gray-500 ">Next</button>
        </div>
        <h2 className="text-gray-500 text-4xl font-bold my-5">{title}</h2>
        <p className="text-gray-500 font-normal">
          {description}
        </p>
        <p className="text-gray-500 font-bold my-3">#{tag}</p>
        <p className="text-gray-500 text-sm mb-1">{date}</p>
        <img
          src={image}
          alt={title}
          className="rounded-lg w-1/2"
        />
        <div className="flex justify-between items-center mt-4 border rounded-lg p-4">
          <button className="text-gray-500 font-bold">Like</button>
          <button className="text-gray-500 font-bold">Comment</button>
          <button className="text-gray-500 font-bold">Bookmark</button>
          <button className="text-gray-500 font-bold">Share</button>
        </div>
      </div>

      {/* right side */}
      <div className="col-span-1 border-l-2 p-3 details-page-right">
        {/* profile */}
        <div className="p-2 border rounded-lg flex items-center gap-3">
          <img
            src="/assets/trisha.jpg"
            alt="trisha"
            className="rounded-full w-12"
          />
          <div>
            <span className="text-gray-500 text-xl font-bold my-5">
             {title}
            </span>{" "}
            <br />
            <span className="text-gray-500">@username</span>
          </div>
        </div>

        {/* share blog */}
        <div className="p-2 border rounded-lg my-7">
          <p className="text-gray-500">Would you recommend this post?</p>
          <div className="flex items-center gap-4 my-3">
            <button className="text-gray-500 font-bold">Copy Link</button>
            <button className="text-gray-500 font-bold">Whatsapp</button>
            <button className="text-gray-500 font-bold">Facebook</button>
            <button className="text-gray-500 font-bold">Twitter</button>
          </div>
        </div>

        {/* recommended blogs */}
        <div className="p-2 border rounded-lg">
          <p className="text-gray-500 border-b-2 pb-2">You might like</p>

          {/* blogs */}
          <div className="flex my-3 gap-3">
            <img
              src="/assets/trisha.jpg"
              alt="trisha"
              className="rounded-full w-10 h-10"
            />
            <div>
              <span className="text-gray-500 text-lg font-bold">{title}</span>{" "}
              <br />
              <div className="flex gap-3">
                <span className="text-gray-500">235 Likes</span>
                <span className="text-gray-500">65 Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
