// src/actions/pizzaActions.js
import { pastaData, pizzaData, drinkData, burgerData } from "../data/data";

export const setPizzas = () => ({
  type: "SET_PIZZAS",
  payload: pizzaData,
});
export const setDrinks = () => ({
  type: "SET_DRINKS",
  payload: drinkData,
});
export const setBurgers = () => ({
  type: "SET_BURGERS",
  payload: burgerData,
});
export const setPastas = () => ({
  type: "SET_PASTAS",
  payload: pastaData,
});

// export const addToCart = (pizza) => ({
//   type: "ADD_TO_CART",
//   payload: { ...pizza, quantity: 1 },
// });

// export const increaseQuantity = (id) => ({
//   type: "INCREASE_QUANTITY",
//   payload: id,
// });

// export const decreaseQuantity = (id) => ({
//   type: "DECREASE_QUANTITY",
//   payload: id,
// });

// export const removeFromCart = (id) => ({
//   type: "REMOVE_FROM_CART",
//   payload: id,
// });
