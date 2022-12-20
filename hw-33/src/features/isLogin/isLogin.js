import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorized: JSON.parse(localStorage.getItem("authorized")),
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

export default isLogin.reducer;
