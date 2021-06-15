import { createContext } from "react";

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      let x = state.filter((elem) => elem.id === action.value.id);
      if (x.length === 0) {
        state.push(action.value);
      }
      return state;
    case "remove":
      state.splice(action.index, 1);
      return state;
    case "addQuanity":
      state.map((elem) =>
        elem.id === action.id ? (elem.quantity += 1) : elem.quantity
      );
      return state;
    case "removeQuanity":
      state.map((elem) =>
        elem.id === action.id ? (elem.quantity -= 1) : elem.quantity
      );
      return state;
    default:
      return initialState;
  }
};

const cartContext = createContext({
  cart: initialState,
  setCart: cartReducer,
});

export default cartContext;
