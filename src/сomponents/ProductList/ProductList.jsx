import React, { useEffect } from "react";
import css from "./ProductList.module.css";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Notiflix from "notiflix";
import ProductItem from "../ProductItem/ProductItem";
import { productsOperations, productsSelectors } from "../../redux/Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getAllProducts);
  const isLoading = useSelector(productsSelectors.getLoading);
  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);

  if (!products) {
    console.log(products);
    return <div>Загрузка...</div>;
  }
  const notisCircl = () => {
    if (isLoading) {
      Notiflix.Loading.standard("Loading...");
    } else {
      Notiflix.Loading.remove();
    }
  };
  notisCircl();
  return (
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
          />
        )
      )}
    </ul>
  );
};

export default ProductList;
