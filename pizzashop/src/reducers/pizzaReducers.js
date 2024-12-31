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
   
    default:
      return state;
  }
};

export default pizzaReducer;
