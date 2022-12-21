import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorized: JSON.parse(localStorage.getItem("authorized")) ?? false,
};

export const isLogin = createSlice({
  name: "productList",
  initialState,
  reducers: {
    authorize: (state) => {
      state.authorized = true;
      localStorage.setItem("authorized", true);
    },
    unauthorize: (state) => {
      state.authorized = false;
      localStorage.setItem("authorized", false);
    },
  },
});

export const { authorize, unauthorize } = isLogin.actions;
export const selectIsLogin = (state) => state.isLogin.authorized;

export default isLogin.reducer;
