import { combineReducers } from "redux";
import randomReducers from "./random";
import colorReducer from "./color";

export default combineReducers({
  random: randomReducers,
  color: colorReducer
});
