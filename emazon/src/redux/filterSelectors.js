import { createSelector } from "@reduxjs/toolkit";

const selectProducts = (state) => state.products.list;
const selectFilters = (state) => state.filters;

export const selectFilteredProducts = createSelector([selectProducts, selectFilters], (products, filters) => {
  const { selectedCategories, priceRange, searchText } = filters;

  return products.filter((prod) => {
    const matchesSearchText =
      prod && prod.title && prod.title.toLowerCase().includes(searchText.toLowerCase());

    return matchesSearchText;
  });
});
