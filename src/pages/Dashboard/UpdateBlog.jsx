import React from "react";
import { useForm } from "react-hook-form";

const UpdateBlog = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const blog = {
      title: data.title,
      description: data.description,
      tag: data.tag,
      date: data.date,
    };
    console.log(blog);
  };
  return (
    <div className="flex justify-center items-center">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 justify-between bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full">
          <label
            className="mb-2 text-lg text-gray-500 font-medium"
            htmlFor="title"
          >
            Write Title
          </label>
          <input
            className="border-2 border-gray-400 rounded outline-0 p-1"
            type="text"
            id="title"
            name="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col w-full ">
          <label
            className="mb-2 text-lg text-gray-500 font-medium"
            htmlFor="description"
          >
            Write Description
          </label>
          <textarea
            className="border-2 border-gray-400 rounded outline-0 p-1"
            type="text"
            id="description"
            name="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col w-full ">
          <label
            className="mb-2 text-lg text-gray-500 font-medium"
            htmlFor="tag"
          >
            Write Tag
          </label>
          <input
            className="border-2 border-gray-400 rounded outline-0 p-1"
            type="text"
            id="tag"
            name="tag"
            {...register("tag")}
          />
        </div>
        <div className="flex flex-col w-full ">
          <label
            className="mb-2 text-lg text-gray-500 font-medium"
            htmlFor="image"
          >
            Write Image Link
          </label>
          <input
            className="border-2 border-gray-400 rounded outline-0 p-1"
            type="text"
            id="image"
            name="image"
            {...register("image")}
          />
        </div>
        <div className="flex flex-col w-full ">
          <label
            className="mb-2 text-lg text-gray-500 font-medium"
            htmlFor="date"
          >
            Write Date
          </label>
          <input
            className="border-2 border-gray-400 rounded outline-0 p-1"
            type="date"
            id="date"
            name="date"
            {...register("date")}
          />
        </div>
        <button
          className="px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500 mt-3"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
