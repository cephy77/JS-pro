import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: false,
  sorted: false,
};

export const getUsers = createAsyncThunk("productList/getUsers", () => {
  return fetch("http://localhost:4000/users")
    .then((resp) => resp.json())
    .then((rawData) => rawData);
});

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    sort: (state) => {
      if (!state.sorted) {
        const sortedProd = state.products.map((elm) => elm);
        sortedProd.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        state.products = sortedProd;
      } else {
        const unsortedProd = state.products.map((elm) => elm);
        unsortedProd.sort((a, b) => {
          const idA = a.id;
          const idB = b.id;
          if (idA < idB) {
            return -1;
          }
          if (idA > idB) {
            return 1;
          }
          return 0;
        });
        state.products = unsortedProd;
      }
      state.sorted = !state.sorted;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = false;
      state.sorted = false;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.loading = false;
      state.products = [];
      state.error = true;
      state.sorted = false;
    });
  },
});

export const { sort } = productListSlice.actions;

export default productListSlice.reducer;
