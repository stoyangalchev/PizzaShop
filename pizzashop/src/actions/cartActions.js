// src/actions/cartActions.js
export const addToCart = (pizza) => ({
  type: "ADD_TO_CART",
  payload: { ...pizza, quantity: 1 },
});

export const increaseQuantity = (_id) => ({
  type: "INCREASE_QUANTITY",
  payload: _id,
});

export const decreaseQuantity = (_id) => ({
  type: "DECREASE_QUANTITY",
  payload: _id,
});

export const removeFromCart = (_id) => ({
  type: "REMOVE_FROM_CART",
  payload: _id,
});
