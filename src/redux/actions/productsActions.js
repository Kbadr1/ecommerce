import axios from "axios";

export const productsFetchRequest = () => {
  return {
    type: "PRODUCTS_FETCH_REQUEST",
  };
};

export const productsFetchSuccess = (products) => {
  return {
    type: "PRODUCTS_FETCH_SUCCESS",
    payload: {
      products,
    },
  };
};

export const productsFetchError = () => {
  return {
    type: "PRODUCTS_FETCH_ERROR",
  };
};

export const productsFetch = () => {
  return (dispatch) => {
    dispatch(productsFetchRequest());
    axios
      .get("https://whispering-garden-92445.herokuapp.com/products")
      .then((res) => {
        dispatch(productsFetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(productsFetchError());
      });
  };
};
