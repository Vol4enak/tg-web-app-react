import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.products.loading;
const getError = (state) => state.products.error;
const getFilter = (state) => state.products.filter;
const getAllProducts = (state) => state.products.items;
const getUserProduct = (state) => state.products.itemsUser.favorites;
const getUserBasket = (state) => state.products.itemsUser.basket;
const getQuery = (state) => state.products.searchQuery;

const filterProductsByTitle = (products, query) =>
  products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

const getFilteredProducts = createSelector(
  [getAllProducts, getQuery],
  (products, query) => filterProductsByTitle(products, query)
);

const productsSelectors = {
  getQuery,
  getUserProduct,
  getUserBasket,
  getLoading,
  getFilter,
  getAllProducts,
  getError,
  getFilteredProducts,
};

export default productsSelectors;
