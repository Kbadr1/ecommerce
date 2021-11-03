import axios from "axios";
export const loginRequest = (identifier, password) => {
  return {
    type: "LOGIN_REQUEST",
    payload: {
      identifier: identifier,
      password: password,
    },
  };
};

export const loginSuccess = (res) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: {
      user: res.data.user,
    },
  };
};

export const loginError = (err) => {
  return {
    type: "LOGIN_ERROR",
    payload: err,
  };
};

export const login = (identifier, password, history) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post("http://localhost:1337/auth/local", { identifier, password })
      .then((res) => {
        dispatch(loginSuccess(res));
        localStorage.setItem("token", res.data.jwt);
        history.push("/");
      })
      .catch((err) => {
        dispatch(loginError(err));
      });
  };
};
