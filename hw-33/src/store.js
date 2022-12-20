import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./features/productList/productListSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});
