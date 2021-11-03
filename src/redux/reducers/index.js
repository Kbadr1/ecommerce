import { combineReducers } from "redux";
import { i18Reducer } from "./i18Reducer";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

const allReducers = combineReducers({
  i18Reducer,
  authReducer,
  userReducer,
});

export default allReducers;
