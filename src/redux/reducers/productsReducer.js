const intialState = {
  loading: false,
  error: null,
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "PRODUCTS_FETCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "PRODUCTS_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        products: payload.products,
      };
    case "PRODUCTS_FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
