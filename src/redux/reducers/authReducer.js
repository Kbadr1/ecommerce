const intialState = {
  isAuthinticated: localStorage.getItem("token") ? true : false,
  identifier: "",
  password: "",
  username: "",
  email: "",
  phone: "",
};

export const authReducer = (state = intialState, { payload, type }) => {
  switch (type) {
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
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isAuthinticated: false,
      };

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
      };
    case "REGISTER_ERROR":
      return {
        ...state,
      };

    case "LOGOUT":
      return { ...state, isAuthinticated: false };
    default:
      return state;
  }
};
