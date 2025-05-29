import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex === -1) {
        state.cartItems.push({ ...action.payload, amount: 1 });
      } else {
        state.cartItems[itemIndex].amount++;
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex === -1) return;

      if (state.cartItems[itemIndex].amount === 1) {
        state.cartItems.splice(itemIndex, 1);
      } else {
        state.cartItems[itemIndex].amount--;
      }
    },
    changeAmount: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex === -1) return;
      if (Number(action.payload) <= 0) return;

      state.cartItems[itemIndex].amount = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart, changeAmount } = cartSlice.actions;
