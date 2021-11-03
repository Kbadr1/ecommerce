export const logoutRequest = () => {
  return {
    type: "LOGOUT",
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    localStorage.removeItem("token");
  };
};
