const intialState = {
  productsLoading: false,
  productsError: false,
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "PRODUCTS_FETCH_REQUEST":
      return {
        ...state,
        productsLoading: true,
      };
    case "PRODUCTS_FETCH_SUCCESS":
      return {
        ...state,
        productsLoading: false,
        products: payload.products,
      };
    case "PRODUCTS_FETCH_ERROR":
      return {
        ...state,
        productsLoading: false,
        productsError: true,
      };
    default:
      return state;
  }
};
