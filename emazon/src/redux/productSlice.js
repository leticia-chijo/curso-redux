import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/products`).then((res) => res.data);
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export default productSlice.reducer;
