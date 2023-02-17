import { ADD_BLOG, DELETE_BLOG, FETCH_BLOG, FETCH_BLOGS, UPDATE_BLOG } from "../actionTypes/actionTypes";

export const fetchBlogs = (blogs) => {
  return {
    type: FETCH_BLOGS,
    payload: blogs,
  };
};

export const fetchBlog = (blog) => {
  return {
    type: FETCH_BLOG,
    payload: blog,
  };
};

export const addBlog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};

export const deleteBlog = (id) => {
  return {
    type: DELETE_BLOG,
    payload: id,
  };
};

export const updateBlog = (blog) => {
  return {
    type: UPDATE_BLOG,
    payload: blog,
  };
};
