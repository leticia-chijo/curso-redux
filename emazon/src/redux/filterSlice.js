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
    toggleCategory: (state, action) => {
      const category = action.payload;
      const categoryIndex = state.selectedCategories.indexOf(category);

      if (categoryIndex === -1) {
        state.selectedCategories.push(category);
      } else {
        state.selectedCategories.splice(categoryIndex, 1);
      }
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { toggleCategory, setPriceRange, setSearchText } = filterSlice.actions;
