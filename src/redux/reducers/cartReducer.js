const intialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  totalSum: null,
  cartTotal: null,
};

export const cartReducer = (state = intialState, { payload, type }) => {
  switch (type) {
    case "ADD_TO_CART":
      state.products = payload.products;
      const item = state.products.find((product) => product.id === payload.id);
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );

      return {
        ...state,
        products: payload.products,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id
                ? { ...item, qty: payload.qty + item.qty }
                : item
            )
          : [...state.cart, { ...item, qty: payload.qty }],
        // cart: inCart
        //   ? state.cart.map((item) =>
        //       item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
        //     )
        //   : [...state.cart, { ...item, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case "ADJUST_ITEM_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: +payload.qty } : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "TOTAL_SUM":
      return {
        ...state,
        totalSum: state.cart.reduce(
          (sum, { price, qty }) => sum + price * qty,
          0
        ),
      };
    case "CART_TOTAL":
      return {
        ...state,
        cartTotal: state.cart.reduce((sum, { qty }) => sum + qty, 0),
      };
    default:
      return state;
  }
};
