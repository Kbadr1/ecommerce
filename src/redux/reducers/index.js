import { combineReducers } from "redux";
import { i18Reducer } from "./i18Reducer";

const allReducers = combineReducers({
  i18Reducer,
});

export default allReducers;
