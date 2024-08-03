import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newitem = action.payload;
      const existingitem = state.items.find((item) => item.id === newitem.id);
      if (!existingitem) {
        state.items.push({
          id: newitem.id,
          image: newitem.image,
          name: newitem.name,
          price: newitem.price,
          quantity: newitem.quantity,
        });
      } else {
        existingitem.quantity++;
      }
      state.totalQuantity += newitem.quantity;
      state.totalPrice += newitem.price;
    },
    removeToCart(state, action) {
      const newitem = action.payload;
      const existingitem = state.items.find((item) => item.id === newitem.id);
      if (existingitem) {
        if (existingitem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== existingitem.id
          );
        } else {
          existingitem.quantity--;
        }
        state.totalQuantity--;
        state.totalPrice -= newitem.price;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
