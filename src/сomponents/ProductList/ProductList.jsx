import React from "react";
import css from "./ProductList.module.css";
import { useState } from "react";
import useFetchData from "../../Hooks/useFetchData";
import ProductItem from "./ProductItem/ProductItem";

// const getTotalPrice = (items = []) => {
//   return items.reduce((acc, item) => {
//     return (acc += item.price);
//   }, 0);
// };

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);

  const {
    data: fetchData,
    loading,
    error,
  } = useFetchData("https://tg-web-app-node-5618b5f5f78b.herokuapp.com/api/data");

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);
  };

  return (
    <div className={css.list}>
      {fetchData.products.map(
        ({ id, category, description, image, price, title }) => (
          <ProductItem
            key={id}
            id={id}
            category={category}
            description={description}
            price={price}
            image={image}
            title={title}
            onAdd={onAdd}
            className={css.item}
          />
        )
      )}
    </div>
  );
};

export default ProductList;
