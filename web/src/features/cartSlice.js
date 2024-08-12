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
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
      } else {
        existingtem.quantity++;
      }
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price *  newItem.quantity;
    },
    removeToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== existingItem.id
          );
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity--;
        state.totalPrice -= newItem.price;
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
