// src/reducers/pizzaReducers.js
const initialState = {
  pizzas: [],
  drinks: [],
  burgers: [],
  pastas: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        pizzas: action.payload,
      };
    case "SET_DRINKS":
      return {
        ...state,
        drinks: action.payload,
      };
    case "SET_BURGERS":
      return {
        ...state,
        burgers: action.payload,
      };
    case "SET_PASTAS":
      return {
        ...state,
        pastas: action.payload,
      };
    // case "ADD_TO_CART":
    //   const updatedCart = [...state.cart, action.payload];
    //   localStorage.setItem("cart", JSON.stringify(updatedCart));
    //   return {
    //     ...state,
    //     cart: updatedCart,
    //   };
    // case "INCREASE_QUANTITY":
    //   const increasedCart = state.cart.map((item) =>
    //     item.id === action.payload
    //       ? { ...item, quantity: item.quantity + 1 }
    //       : item
    //   );
    //   localStorage.setItem("cart", JSON.stringify(increasedCart));
    //   return {
    //     ...state,
    //     cart: increasedCart,
    //   };
    // case "DECREASE_QUANTITY":
    //   const decreasedCart = state.cart.map((item) =>
    //     item.id === action.payload && item.quantity > 1
    //       ? { ...item, quantity: item.quantity - 1 }
    //       : item
    //   );
    //   localStorage.setItem("cart", JSON.stringify(decreasedCart));
    //   return {
    //     ...state,
    //     cart: decreasedCart,
    //   };
    // case "REMOVE_FROM_CART":
    //   const filteredCart = state.cart.filter(
    //     (item) => item.id !== action.payload
    //   );
    //   localStorage.setItem("cart", JSON.stringify(filteredCart));
    //   return {
    //     ...state,
    //     cart: filteredCart,
    //   };
    default:
      return state;
  }
};

export default pizzaReducer;
