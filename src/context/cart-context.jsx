/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalPrice: 0,
  addToCart: (item) => {},
  removeFromCart: (itemId) => {},
});

let initialItems = [];
let initialPrice = 0;

const localItems = JSON.parse(localStorage.getItem("cartItems"));
const localPrice = localStorage.getItem("totalPrice");
if (localItems != null) {
  initialItems = localItems;
  initialPrice = Number(localPrice);
}

const defaultCartState = {
  items: initialItems,
  totalPrice: initialPrice,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedPrice =
      state.totalPrice + action.item.price * action.item.amount;
    const itemsArray = state.items;
    let updatedItems = [];
    let updatedItem;

    const foundItem = state.items.find((item) => item.id === action.item.id);

    if (foundItem) {
      const index = state.items.indexOf(foundItem);

      updatedItem = {
        ...foundItem,
        amount: foundItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    } else {
      updatedItems = itemsArray.concat(action.item);
    }

    return {
      items: updatedItems,
      totalPrice: updatedPrice,
    };
  }

  if (action.type === "REMOVE") {
    const updatedPrice =
      state.totalPrice - action.item.price * action.item.amount;
    const itemsArray = state.items;
    const updatedItems = itemsArray.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      totalPrice: updatedPrice,
    };
  }

  return defaultCartState;
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchActions] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addToCart = (item) => {
    dispatchActions({ type: "ADD", item: item });
  };

  const removeFromCart = (itemId) => {
    dispatchActions({ type: "REMOVE", id: itemId });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  localStorage.setItem("cartItems", JSON.stringify(cartContext.items));
  localStorage.setItem("totalPrice", cartContext.totalPrice);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
