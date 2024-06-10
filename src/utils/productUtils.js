export const updateProductsWithActiveField = (
  allProducts,
  userProducts,
  userProductBasket
) => {

  if (!Array.isArray(userProducts)) {
    userProducts = [];
  }
  if (!Array.isArray(userProductBasket)) {
    userProductBasket = [];
  }

  return allProducts.map((product) => {
    const isUserProductFavorite = userProducts.some((userProduct) => {
      if (userProduct._id !== undefined && userProduct._id !== null) {
        return userProduct._id === product._id;
      }
      return userProduct === product._id;
    });

    const isUserProductBasket = userProductBasket.some((userBasketProduct) => {
      if (
        userBasketProduct._id !== undefined &&
        userBasketProduct._id !== null
      ) {
        return userBasketProduct._id === product._id;
      }
      return userBasketProduct === product._id;
    });

    return {
      ...product,
      activeFavorite: isUserProductFavorite,
      activeBasket: isUserProductBasket,
    };
  });
};
