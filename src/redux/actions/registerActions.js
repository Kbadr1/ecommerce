import axios from "axios";

export const registerRequest = (username, password, email, phone) => {
  return {
    type: "REGISTER_REQUEST",
    payload: {
      username: username,
      password: password,
      email: email,
      phone: phone,
    },
  };
};

export const registerSuccess = (res) => {
  return {
    type: "REGISTER_SUCCESS",
    payload: {
      user: res.data.user,
    },
  };
};

export const registerError = () => {
  return {
    type: "REGISTER_ERROR",
  };
};

export const register = (username, password, email, phone, history) => {
  return (dispatch) => {
    dispatch(registerRequest());
    axios
      .post("http://localhost:1337/auth/local/register", {
        username,
        password,
        email,
        phone,
      })
      .then((res) => {
        dispatch(registerSuccess(res));
        history.push("/login");
      })
      .catch(() => {
        dispatch(registerError());
      });
  };
};
