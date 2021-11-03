const intialState = {
  user: {},
};

export const userReducer = (state = intialState, { payload, type }) => {
  switch (type) {
    case "GET_USER_SUCCESS":
      return { ...state, user: payload.user };
    case "GET_USER_ERROR":
      return { ...state };
    default:
      return state;
  }
};
