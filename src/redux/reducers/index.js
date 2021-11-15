import { combineReducers } from "redux";
import { i18Reducer } from "./i18Reducer";
import { authReducer } from "./authReducer";
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

const allReducers = combineReducers({
  i18Reducer,
  authReducer,
  categoriesReducer,
  productsReducer,
  cartReducer,
});

export default allReducers;
