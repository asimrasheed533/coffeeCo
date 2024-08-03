import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/features/cartSlice";
import { loadState, saveState } from "./utils/LocalStorage";

const presistedState = loadState();
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  preloadedState: {
    cart: presistedState,
  },
});

// load presisted state

store.subscribe(() => {
  saveState(store.getState().cart);
});
