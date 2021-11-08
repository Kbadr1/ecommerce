import axios from "axios";

export const categoriesFetchRequest = () => {
  return {
    type: "CATEGORIES_FETCH_REQUEST",
  };
};

export const categoriesFetchSuccess = (categories) => {
  return {
    type: "CATEGORIES_FETCH_SUCCESS",
    payload: {
      categories,
    },
  };
};

export const categoriesFetchError = () => {
  return {
    type: "CATEGORIES_FETCH_ERROR",
  };
};

export const categoriesFetch = () => {
  return (dispatch) => {
    dispatch(categoriesFetchRequest());
    axios
      .get("https://whispering-garden-92445.herokuapp.com/categories")
      .then((res) => {
        dispatch(categoriesFetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(categoriesFetchError());
      });
  };
};

export const categoryFetchRequest = () => {
  return {
    type: "CATEGORY_FETCH_REQUEST",
  };
};

export const categoryFetchSuccess = (category) => {
  return {
    type: "CATEGORY_FETCH_SUCCESS",
    payload: {
      category,
    },
  };
};

export const categoryFetchError = () => {
  return {
    type: "CATEGORY_FETCH_ERROR",
  };
};

export const categoryFetch = (id) => {
  return (dispatch) => {
    dispatch(categoryFetchRequest());
    axios
      .get(`https://whispering-garden-92445.herokuapp.com/categories/${id}`)
      .then((res) => {
        dispatch(categoryFetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(categoryFetchError());
      });
  };
};
