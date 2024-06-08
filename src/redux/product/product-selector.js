// import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.products.loading;

const getFilter = (state) => state.products.filter;

const getAllProducts = (state) => state.products.items;

// const getTotalProductCount = (state) => {
//   const products = getAllProducts(state);
//   return products.length;
// };

// const getCompletedProductCount = createSelector(
//   [getAllProducts],
//   (products) => {
//     return products.reduce(
//       (total, product) => (product.completed ? total + 1 : total),
//       0
//     );
//   }
// );

// const getVisibleProducts = createSelector(
//   [getAllProducts, getFilter],
//   (products, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return products.filter(({ description }) =>
//       description.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );

const productsSelectors = {
  getLoading,
  getFilter,
  getAllProducts,
  //   getVisibleProducts,
  //   getTotalProductCount,
  //   getCompletedProductCount,
};

export default productsSelectors;
