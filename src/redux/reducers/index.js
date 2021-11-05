import { combineReducers } from "redux";
import { i18Reducer } from "./i18Reducer";
import { authReducer } from "./authReducer";

const allReducers = combineReducers({
  i18Reducer,
  authReducer,
});

export default allReducers;
