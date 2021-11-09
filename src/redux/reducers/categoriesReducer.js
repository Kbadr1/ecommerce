const intialState = {
  categoriesLoading: false,
  categoriesError: false,
  categories: [],
  categoryLoading: false,
  categoryError: false,
  category: {},
  categoryProducts: [],
};

export const categoriesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "CATEGORIES_FETCH_REQUEST":
      return {
        ...state,
        categoriesLoading: true,
      };
    case "CATEGORIES_FETCH_SUCCESS":
      return {
        ...state,
        categoriesLoading: false,
        categories: payload.categories,
      };
    case "CATEGORIES_FETCH_ERROR":
      return {
        ...state,
        categoriesLoading: false,
        categoriesError: true,
      };
    case "CATEGORY_FETCH_REQUEST":
      return {
        ...state,
        categoryLoading: true,
      };
    case "CATEGORY_FETCH_SUCCESS":
      return {
        ...state,
        categoryLoading: false,
        category: payload.category,
        categoryProducts: payload.categoryProducts,
      };
    case "CATEGORY_FETCH_ERROR":
      return {
        ...state,
        categoryLoading: false,
        categoryError: true,
      };
    default:
      return state;
  }
};
