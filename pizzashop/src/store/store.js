import sampleReducer from "../reducers/sampleReducer"; // Correct the import statement
import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: sampleReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: composeWithDevTools(),
});

export default store;
