import { createBrowserRouter, Link } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import AllBlogs from "../pages/Dashboard/AllBlogs";
import UpdateBlog from "../pages/Dashboard/UpdateBlog";
import About from "../pages/Main/About";
import BlogDetails from "../pages/Main/BlogDetails";
import Blogs from "../pages/Main/Blogs";
import Home from "../pages/Main/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      // {
      //   path: "blogs",
      //   element: <Blogs />,
      // },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AllBlogs />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "update-blog/:id",
        element: <UpdateBlog />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="my-5 text-center">
        <h2 className="text-3xl text-red-400 my-2 font-bold">Ops</h2>
        <p className="font-bold mb-5">Page is not found</p>
        <Link className="text-green-400 underline" to="/">Back to home</Link>
      </div>
    ),
  },
]);

export default router;
