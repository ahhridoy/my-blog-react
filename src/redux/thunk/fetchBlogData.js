import { fetchBlog } from "../actions/blogActions";

const fetchBlogData = (id) => {
  return async (dispatch, getState) => {
    await fetch(`http://localhost:5000/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(fetchBlog(data));
        }
      });
  };
};

export default fetchBlogData;
