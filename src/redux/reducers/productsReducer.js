const intialState = {
  productsLoading: false,
  productsError: false,
  productLoading: false,
  productError: false,
  products: [],
  product: {},
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
    case "PRODUCT_FETCH_REQUEST":
      return {
        ...state,
        productLoading: true,
      };
    case "PRODUCT_FETCH_SUCCESS":
      return {
        ...state,
        productLoading: false,
        product: payload.product,
      };
    case "PRODUCTS_FETCH_ERROR":
      return {
        ...state,
        productLoading: false,
        productError: true,
      };
    default:
      return state;
  }
};
