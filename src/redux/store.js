// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    cart: cartReducer,
  },
});

export default store;
