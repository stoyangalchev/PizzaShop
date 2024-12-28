// src/reducers/pizzaReducers.js
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      const increasedCart = state.cart.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(increasedCart));
      return {
        ...state,
        cart: increasedCart,
      };
    case "DECREASE_QUANTITY":
      const decreasedCart = state.cart.map((item) =>
        item._id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(decreasedCart));
      return {
        ...state,
        cart: decreasedCart,
      };
    case "ADD_TO_CART":
      const itemExists = state.cart.find(
        (item) => item._id === action.payload._id
      );
      let updatedCart;
      if (itemExists) {
        
        updatedCart = state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
      
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return {
        ...state,
        cart: filteredCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
