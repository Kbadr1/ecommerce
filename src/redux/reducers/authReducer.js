const intialState = {
  isAuthinticated: localStorage.getItem("token") ? true : false,
  registerError: false,
  loginError: false,
  loginLoading: false,
  registerLoading: false,
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
        loginLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthinticated: true,
        loginError: false,
        loginLoading: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isAuthinticated: false,
        loginError: true,
        loginLoading: false,
      };
    // register
    case "REGISTER_REQUEST":
      return {
        ...state,
        username: payload.username,
        password: payload.password,
        email: payload.email,
        phone: payload.phone,
        registerLoading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registerError: false,
        registerLoading: false,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        registerError: true,
        registerLoading: false,
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
