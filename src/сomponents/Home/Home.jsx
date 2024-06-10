import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsSelectors, productsOperations } from "../../redux/Product";
import { updateProductsWithActiveField } from "../../utils/productUtils";
import ProductList from "../ProductList/ProductList";
import { authSelectors } from "../../redux/auth";
const Home = () => {
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
  // console.log(updatedProducts);
  if (!updatedProducts) {
    return <div>Загрузка...</div>;
  }

  return <ProductList products={updatedProducts} />;
};

export default Home;
