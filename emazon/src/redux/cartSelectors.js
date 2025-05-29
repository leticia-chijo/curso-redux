import { createSelector } from "@reduxjs/toolkit";

const selectCart = (state) => state.cart.cartItems;

export const selectCartTotal = createSelector([selectCart], (cart) => {
  return cart.reduce((sum, item) => sum + item.price * item.amount, 0);
});
