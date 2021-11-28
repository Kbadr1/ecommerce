import axios from "axios";

export const setSearchTerm = (searchTerm) => {
  return {
    type: "SET_SEARCH_TERM",
    payload: {
      searchTerm,
    },
  };
};
export const setQuery = (query) => {
  return {
    type: "SET_QUERY",
    payload: {
      query,
    },
  };
};

export const getProductsBySearchQuerySuccess = (filteredProducts) => {
  return {
    type: "GET_PRODUCTS_BY_SEARCH_QUERY_SUCCESS",
    payload: {
      filteredProducts,
    },
  };
};

export const getProductsBySearchQuery = (query) => {
  return (dispatch) => {
    axios
      .get(
        `https://whispering-garden-92445.herokuapp.com/products?_where[_or][0][en_name_contains]=${query}&_where[_or][1][ar_name_contains]=${query}`
      )
      .then((res) => {
        dispatch(getProductsBySearchQuerySuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
