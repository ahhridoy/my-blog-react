import {
  ADD_BLOG,
  DELETE_BLOG,
  FETCH_BLOG,
  FETCH_BLOGS,
  UPDATE_BLOG,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  blog: {},
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case FETCH_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    default:
      return state;
  }
};
