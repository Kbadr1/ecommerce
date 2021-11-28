const intialState = {
  searchTerm: "",
  query: "",
  filteredProducts: [],
};

export const searchReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: payload.searchTerm };
    case "SET_QUERY":
      return { ...state, query: payload.query };
    case "GET_PRODUCTS_BY_SEARCH_QUERY_SUCCESS":
      return { ...state, filteredProducts: payload.filteredProducts };
    default:
      return state;
  }
};
