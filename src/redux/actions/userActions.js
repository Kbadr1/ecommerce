import axios from "axios";

export const getUserSuccess = (res) => {
  return {
    type: "GET_USER_SUCCESS",
    payload: {
      user: res.data,
    },
  };
};

export const getUserError = (err) => {
  return {
    type: "GET_USER_ERROR",
  };
};

export const getUser = () => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get("https://whispering-garden-92445.herokuapp.com/users/me", config)
      .then((res) => {
        dispatch(getUserSuccess(res));
      })
      .catch((err) => {
        dispatch(getUserError(err));
      });
  };
};
