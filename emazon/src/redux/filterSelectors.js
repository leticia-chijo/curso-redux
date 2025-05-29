import { createSelector } from "@reduxjs/toolkit";

const selectProducts = (state) => state.products.list;
const selectFilters = (state) => state.filters;

export const selectCategories = createSelector([selectProducts], (products) => {
  const categories = products.map((prod) => prod.category);
  return [...new Set(categories)];
});

export const selectFilteredProducts = createSelector([selectProducts, selectFilters], (products, filters) => {
  const { selectedCategories, priceRange, searchText } = filters;

  return products.filter((prod) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(prod.category);

    const matchesPrice = true;

    const matchesSearchText =
      !searchText || (prod && prod.title && prod.title.toLowerCase().includes(searchText.toLowerCase()));

    return matchesSearchText && matchesCategory && matchesPrice;
  });
});
