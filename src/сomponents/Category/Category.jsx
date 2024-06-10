import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../ProductList/ProductList";
import { updateProductsWithActiveField } from "../../utils/productUtils";
import { authSelectors } from "../../redux/auth";
import { productsOperations, productsSelectors } from "../../redux/Product";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Category = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const allProducts = useSelector(productsSelectors.getAllProducts);
  const isToken = useSelector(authSelectors.getUserToken);
  const userProducts = useSelector(productsSelectors.getUserProduct);
  const userBasketProducts = useSelector(productsSelectors.getUserBasket);
  const updatedProducts = updateProductsWithActiveField(
    allProducts,
    userProducts,
    userBasketProducts
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!isToken) {
      navigate("/", { replace: true });
    }
  }, [isToken, navigate]);

  useEffect(() => {
    dispatch(productsOperations.fetchCategoris(params.categoryName));
  }, [dispatch, params.categoryName]);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(productsOperations.fetchUserProducts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <main>
      <ProductList products={updatedProducts} />
    </main>
  );
};
