import { fetchBlogs } from "../actions/blogActions";

const fetchBlogsData = () => {
  return async (dispatch, getState) => {
    await fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length) {
          dispatch(fetchBlogs(data.data));
        }
      });
  };
};

export default fetchBlogsData;
