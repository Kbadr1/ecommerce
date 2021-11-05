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

export const loginError = () => {
  return {
    type: "LOGIN_ERROR",
  };
};

export const login = (identifier, password, history) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post("https://whispering-garden-92445.herokuapp.com/auth/local", {
        identifier,
        password,
      })
      .then((res) => {
        dispatch(loginSuccess(res));
        localStorage.setItem("token", res.data.jwt);
        history.push("/");
      })
      .catch(() => {
        dispatch(loginError());
      });
  };
};
