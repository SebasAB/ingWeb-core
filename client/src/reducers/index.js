import { combineReducers } from "redux";

import books from "./books";
import auth from "./auth";
import challenges from "./challenges";
import shelfs from "./shelfs";

export default combineReducers({
  auth,
  books,
  challenges,
  shelfs,
});
