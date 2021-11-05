const intialState = {
  isAuthinticated: localStorage.getItem("token") ? true : false,
  registerError: false,
  loginError: false,
  identifier: "",
  password: "",
  username: "",
  email: "",
  phone: "",
  user: {},
};

export const authReducer = (state = intialState, { payload, type }) => {
  switch (type) {
    // login
    case "LOGIN_REQUEST":
      return {
        ...state,
        identifier: payload.identifier,
        password: payload.password,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthinticated: true,
        loginError: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isAuthinticated: false,
        loginError: true,
      };
    // register
    case "REGISTER_REQUEST":
      return {
        ...state,
        username: payload.username,
        password: payload.password,
        email: payload.email,
        phone: payload.phone,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registerError: false,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        registerError: true,
      };
    // logout
    case "LOGOUT":
      return { ...state, isAuthinticated: false, user: {} };
    // user
    case "GET_USER_SUCCESS":
      return { ...state, user: payload.user };
    case "GET_USER_ERROR":
      return { ...state };
    default:
      return state;
  }
};
