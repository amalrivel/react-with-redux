import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import homePageReducer from "./homePageReducer";

const rootReducer = combineReducers({
  imageReducer, homePageReducer
});

export default rootReducer;
