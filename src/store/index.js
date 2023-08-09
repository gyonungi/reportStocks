import { configureStore } from "@reduxjs/toolkit";
import { stockReducer } from "./stockslice";
export const store = configureStore({
  reducer: { stock: stockReducer },
});
