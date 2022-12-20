import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./features/productList/productListSlice";
import isLoginReducer from "./features/isLogin/isLogin";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    isLogin: isLoginReducer,
  },
});
