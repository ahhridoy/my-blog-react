import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { blogReducer } from "./reduers/blogReducer";
import thunk from "redux-thunk";

const store = createStore(
  blogReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
