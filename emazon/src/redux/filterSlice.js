import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategories: [],
  priceRange: [0, Infinity],
  searchText: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleCategory: (state, action) => {},
    setPriceRange: (state, action) => {},
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { toggleCategory, setPriceRange, setSearchText } = filterSlice.actions;
