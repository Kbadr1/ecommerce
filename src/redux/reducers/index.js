import { combineReducers } from "redux";
import { i18Reducer } from "./i18Reducer";
import { authReducer } from "./authReducer";
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";

const allReducers = combineReducers({
  i18Reducer,
  authReducer,
  categoriesReducer,
  productsReducer,
});

export default allReducers;
