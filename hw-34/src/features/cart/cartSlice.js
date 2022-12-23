import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: JSON.parse(sessionStorage.getItem("cart")) || [],
};
function adjustAmmount(cart, id, ammount) {
  const index = cart.findIndex((e) => e.id === id);
  cart[index].ammount = cart[index].ammount + ammount;
  return cart;
}
function find(array, id) {
  const result = array.find((e) => e.id === id);
  return !!result;
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, img, price } = action.payload;
      const cart = JSON.parse(JSON.stringify(state.cartList));
      if (!find(cart, id)) {
        const item = {
          id: id,
          name: name,
          img: img,
          price: price,
          ammount: 1,
        };
        state.cartList = cart.concat(item);
      } else {
        state.cartList = adjustAmmount(cart, id, 1);
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const cart = JSON.parse(JSON.stringify(state.cartList));
      state.cartList = cart.filter((e) => e.id !== id);
      sessionStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    changeQuantity: (state, action) => {
      const { id, ammount } = action.payload;
      const cart = JSON.parse(JSON.stringify(state.cartList));
      state.cartList = adjustAmmount(cart, id, ammount);
      sessionStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    clearCart: (state) => {
      state.cartList = [];
      sessionStorage.setItem("cart", JSON.stringify(state.cartList));
    },
  },
});
export const selectCart = (state) => state.cart.cartList;
export const { addItem, deleteItem, changeQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
