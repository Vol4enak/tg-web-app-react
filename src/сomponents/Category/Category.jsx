import React from "react";
import useFetchProductsByCategory from "../../Hooks/usefetchProductsByCategory";
import css from "./Category.module.css";
import ProductItem from "../ProductItem/ProductItem";
import { useParams } from "react-router-dom";
export const Category = () => {
  const { categoryName } = useParams();
  const {
    data: item,
    loading,
    error,
  } = useFetchProductsByCategory(categoryName);
  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <main>
      <div className={css.list}>
        {item.products.map(
          ({ id, category, description, image, price, title }) => (
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
          )
        )}
      </div>
    </main>
  );
};
