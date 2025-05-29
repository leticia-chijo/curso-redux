import { createSelector } from "@reduxjs/toolkit";

const selectProducts = (state) => state.products.list;
const selectFilters = (state) => state.filters;

export const selectCategories = createSelector([selectProducts], (products) => {
  const categories = products.map((prod) => prod.category);
  return [...new Set(categories)];
});

export const selectPossiblePriceRange = createSelector([selectProducts], (products) => {
  const prices = products.map((prod) => prod.price);
  const min = Math.floor(Math.min(...prices));
  const max = Math.ceil(Math.max(...prices));
  return [min, max];
});

export const selectFilteredProducts = createSelector([selectProducts, selectFilters], (products, filters) => {
  const { selectedCategories, priceRange, searchText } = filters;

  return products.filter((prod) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(prod.category);

    const matchesPrice = !priceRange || (prod.price >= priceRange[0] && prod.price <= priceRange[1]);

    const matchesSearchText =
      !searchText || (prod && prod.title && prod.title.toLowerCase().includes(searchText.toLowerCase()));

    return matchesSearchText && matchesCategory && matchesPrice;
  });
});
