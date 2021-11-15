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

export const productFetchRequest = () => {
  return {
    type: "PRODUCT_FETCH_REQUEST",
  };
};

export const productFetchSuccess = (product) => {
  return {
    type: "PRODUCT_FETCH_SUCCESS",
    payload: {
      product,
    },
  };
};

export const productFetchError = () => {
  return {
    type: "PRODUCT_FETCH_ERROR",
  };
};

export const productFetch = (id) => {
  return (dispatch) => {
    dispatch(productFetchRequest());
    axios
      .get(`https://whispering-garden-92445.herokuapp.com/products/${id}`)
      .then((res) => {
        dispatch(productFetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(productFetchError());
      });
  };
};
