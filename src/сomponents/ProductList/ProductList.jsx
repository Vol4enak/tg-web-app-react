import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import css from "./ProductList.module.css";


const ProductList = ({ products }) => {
  return (
    <ul className={css.list}>
      {products.map((product) => (
        <ProductItem
          key={product._id}
          _id={product._id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          brand={product.brand}
          model={product.model}
          color={product.color}
          category={product.category}
          onSale={product.onSale}
          popular={product.popular}
          discount={product.discount}
          activeFavorite={product.activeFavorite}
          activeBasket={product.activeBasket}
        />
      ))}
    </ul>
  );
};

export default ProductList;
