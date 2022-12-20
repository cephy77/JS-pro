import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: false,
};

export const getUsers = createAsyncThunk("productList/getUsers", () => {
  return fetch("http://localhost:4000/users")
    .then((resp) => resp.json())
    .then((rawData) => rawData);
});

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = false;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.loading = false;
      state.products = [];
      state.error = true;
    });
  },
});

// export const { fetchUsers, incrementByAmount } = productListSlice.actions;

export default productListSlice.reducer;
