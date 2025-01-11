import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../reducers/contactReducers";
import pizzaReducer from "../reducers/pizzaReducers";
import cartReducer from "../reducers/cartReducers";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    pizza: pizzaReducer,
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
console.log(store.getState());

export default store;


