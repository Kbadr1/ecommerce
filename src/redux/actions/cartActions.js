export const addToCart = (id, qty) => {
  return (dispatch, getState) => {
    const appState = getState();
    const products = appState.productsReducer.products;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        products,
        qty,
      },
    });
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id,
    },
  };
};

export const adjustItemQty = (id, qty) => {
  return {
    type: "ADJUST_ITEM_QTY",
    payload: {
      id,
      qty,
    },
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const totalSum = () => {
  return {
    type: "TOTAL_SUM",
  };
};

export const cartTotal = () => {
  return {
    type: "CART_TOTAL",
  };
};
