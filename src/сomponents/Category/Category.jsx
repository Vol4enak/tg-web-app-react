import React from "react";
import useFetchProductsByCategory from "../../Hooks/usefetchProductsByCategory";
import css from "./Category.module.css";
import ProductItem from "../ProductItem/ProductItem";
import { useParams } from "react-router-dom";
export const Category = () => {
  const { categoryName } = useParams();
  const {
    data: productsData,
    loading,
    error,
  } = useFetchProductsByCategory(categoryName);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error || !productsData || !productsData.products) {
    return <div>Произошла ошибка при загрузке данных</div>;
  }

  const { products } = productsData;

  return (
    <main>
      <div className={css.list}>
        {products.map(({ id, category, description, image, price, title }) => (
          <ProductItem
            key={id}
            id={id}
            category={category}
            description={description}
            price={price}
            image={image}
            title={title}
            className={css.item}
          />
        ))}
      </div>
    </main>
  );
};
