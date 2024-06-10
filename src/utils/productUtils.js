export const updateProductsWithActiveField = (allProducts, userProducts) => {
  return allProducts.map((product) => {
    const isUserProduct = userProducts.some(
      (userProduct) => userProduct._id === product._id
    );
    return { ...product, active: isUserProduct };
  });
};
