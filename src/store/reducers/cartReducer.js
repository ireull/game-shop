import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.cartItems.push(action.payload)
    },
    deleteItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(game => game.id !== action.payload)
    },
  }
})

export const { setItemInCart, deleteItemFromCart, totapPrice } = cartSlice.actions;
export default cartSlice.reducer;