const getLoading = (state) => state.products.loading;
const getError = (state) => state.products.error;
const getFilter = (state) => state.products.filter;
const getAllProducts = (state) => state.products.items;
const getUserProduct = (state) => state.products.itemsUser.favorites;
const getUserBasket = (state) => state.products.itemsUser.basket;


const productsSelectors = {
  getUserProduct,
  getUserBasket,
  getLoading,
  getFilter,
  getAllProducts,
  getError,
};

export default productsSelectors;
