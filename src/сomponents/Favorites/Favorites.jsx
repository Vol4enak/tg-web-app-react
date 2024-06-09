import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../ProductList/ProductList.module.css";
import { productsOperations, productsSelectors } from "../../redux/Product";
import { onAddBasket, onAddFavorite } from "../../redux/Product/product-helper";
import ProductItem from "../ProductItem/ProductItem";

import Notiflix from "notiflix";
import authSelectors from "../../redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getAllProducts);
  const isLoading = useSelector(productsSelectors.getLoading);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  useEffect(() => {
    dispatch(productsOperations.fetchUserProducts());
  }, [dispatch, isLoggedIn]);
  const notisCircl = () => {
    if (!isLoading) {
      Notiflix.Loading.standard("Loading...");
    } else {
      Notiflix.Loading.remove();
    }
  };

  notisCircl();

  if (!products) {
    console.log(products);
    return <div>Загрузка...</div>;
  }

  return (
    <>
      {isLoggedIn ? (
        <ul className={css.list}>
          {products.map(
            ({
              _id,
              id,
              title,
              image,
              price,
              description,
              brand,
              model,
              color,
              category,
              popular,
              onSale,
              discount,
              favorite,
              basket,
            }) => (
              <ProductItem
                key={id}
                _id={_id}
                id={id}
                title={title}
                image={image}
                price={price}
                description={description}
                brand={brand}
                model={model}
                color={color}
                category={category}
                onSale={onSale}
                popular={popular}
                discount={discount}
                favorite={favorite}
                basket={basket}
                onAddFavorite={onAddFavorite}
                onAddBasket={onAddBasket}
              />
            )
          )}
        </ul>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Favorites;
