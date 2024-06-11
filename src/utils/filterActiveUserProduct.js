export const filterActiveUserProducts = (allProducts, userProducts, userProductBasket) => {

  if (!Array.isArray(userProducts)) {
    
    return [];
  }

  if (!Array.isArray(userProductBasket)) {
  
    return [];
  }

  const userProductIds = userProducts.map((userProduct) =>
    userProduct._id !== undefined && userProduct._id !== null
      ? userProduct._id
      : userProduct
  );

  const userBasketIds = userProductBasket.map((userBasketProduct) =>
    userBasketProduct._id !== undefined && userBasketProduct._id !== null
      ? userBasketProduct._id
      : userBasketProduct
  );

  return allProducts.map((product) => {
    const isFavorite = userProductIds.includes(product._id);
    const isBasket = userBasketIds.includes(product._id);
    return {
      ...product,
      activeFavorite: isFavorite,
      activeBasket: isBasket,
    };
  }).filter(product => product.activeFavorite);
};
