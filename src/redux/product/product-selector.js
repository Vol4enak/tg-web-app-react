import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.products.loading;
const getError = (state) => state.products.error;
const getFilter = (state) => state.products.filter;
const getAllProducts = (state) => state.products.items;
const getUserProductRefresh = (state) => state.products.itemsUserRefresh;
const getUserProduct = (state) => state.products.itemsUser;
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

const updateProductsWithActiveField = (allProducts, userProducts) => {
  // Создаем новый массив для хранения обновленных товаров
  const updatedProducts = [];

  // Проходим по каждому товару из общего списка
  allProducts.forEach((product) => {
    // Проверяем, есть ли текущий товар в списке товаров пользователя
    if (!userProducts) {
      return allProducts;
    }

    const userProductIndex = userProducts.findIndex(
      (userProduct) => userProduct._id === product._id
    );
    // Если находим совпадение, то добавляем поле active со значением true
    if (userProductIndex !== -1) {
      updatedProducts.push({ ...product, active: true });
    } else {
      // Если не находим совпадение, то добавляем поле active со значением false
      updatedProducts.push({ ...product, active: false });
    }
  });

  return updatedProducts;
};

const getVisibleProducts = createSelector(
  [getAllProducts, getFilter],
  (products, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return products.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter)
    );
  }
);

const productsSelectors = {
  getUserProductRefresh,
  updateProductsWithActiveField,
  getLoading,
  getFilter,
  getAllProducts,
  getUserProduct,
  getError,
  getVisibleProducts,
  //   getTotalProductCount,
  //   getCompletedProductCount,
};

export default productsSelectors;
