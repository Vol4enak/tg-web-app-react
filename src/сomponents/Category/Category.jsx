import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../ProductList/ProductList";
import { updateProductsWithActiveField } from "../../utils/productUtils";
import { authSelectors } from "../../redux/auth";
import { productsOperations, productsSelectors } from "../../redux/Product";

export const Category = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(productsOperations.fetchUserProducts());
    }
  }, [dispatch, isLoggedIn]);
  const allProducts = useSelector(productsSelectors.getAllProducts);

  const userProducts = useSelector(productsSelectors.getUserProduct);
  const userBasketProducts = useSelector(productsSelectors.getUserBasket);
  const updatedProducts = updateProductsWithActiveField(
    allProducts,
    userProducts,
    userBasketProducts
  );
  console.log(allProducts);

  return (
    <main>
      <ProductList products={updatedProducts} />
    </main>
  );
};
