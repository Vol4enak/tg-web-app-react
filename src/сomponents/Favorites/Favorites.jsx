import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../ProductList/ProductList";
import { productsOperations, productsSelectors } from "../../redux/Product";
import { filterActiveUserProducts } from "../../utils/filterActiveUserProduct";
// import Notiflix from "notiflix";
import css from "./Favorites.module.css";
import authSelectors from "../../redux/auth/auth-selectors";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isToken = useSelector(authSelectors.getUserToken);
  const allProducts = useSelector(productsSelectors.getAllProducts);
  const userProducts = useSelector(productsSelectors.getUserProduct);
  const userBasketProducts = useSelector(productsSelectors.getUserBasket);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isToken) {
      navigate("/", { replace: true });
    }
  }, [isToken, navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(productsOperations.fetchUserProducts());
    }
  }, [dispatch, isLoggedIn]);
  const updatedProducts = filterActiveUserProducts(
    allProducts,
    userProducts,
    userBasketProducts
  );
  // const notisCircl = () => {
  //   if (!isLoading) {
  //     Notiflix.Loading.standard("Loading...");
  //   } else {
  //     Notiflix.Loading.remove();
  //   }
  // };
  // notisCircl();

  if (!updatedProducts) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      {updatedProducts.length ? (
        <>
          <h2 className={css.favoriteTitleEmpty}>Вподобайки.</h2>
          <ProductList products={updatedProducts} />
        </>
      ) : (
        <h2 className={css.favoriteTitleEmpty}>Cписок вподобайок порожній.</h2>
      )}
    </>
  );
};

export default Favorites;
