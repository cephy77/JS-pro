import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorized: false,
};

export const isLogin = createSlice({
  name: "productList",
  initialState,
  reducers: {
    authorize: (state) => {
      state.authorized = true;
    },
    unauthorize: (state) => {
      state.authorized = false;
    },
  },
});

export const { authorize, unauthorize } = isLogin.actions;

export default isLogin.reducer;
