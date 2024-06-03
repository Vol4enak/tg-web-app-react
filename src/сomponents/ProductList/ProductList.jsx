import React from "react";
import axios from "axios";
import css from "./ProductList.module.css";
import { useState, useEffect } from "react";

import ProductItem from "./ProductItem/ProductItem";
// const products = [
//   {
//     id: "1",
//     title: "Джинсы",
//     price: 5000,
//     description: "Синего цвета, прямые",
//   },
//   {
//     id: "2",
//     title: "Куртка",
//     price: 12000,
//     description: "Зеленого цвета, теплая",
//   },
//   {
//     id: "3",
//     title: "Джинсы 2",
//     price: 5000,
//     description: "Синего цвета, прямые",
//   },
//   {
//     id: "4",
//     title: "Куртка 8",
//     price: 122,
//     description: "Зеленого цвета, теплая",
//   },
//   {
//     id: "5",
//     title: "Джинсы 3",
//     price: 5000,
//     description: "Синего цвета, прямые",
//   },
//   {
//     id: "6",
//     title: "Куртка 7",
//     price: 600,
//     description: "Зеленого цвета, теплая",
//   },
//   {
//     id: "7",
//     title: "Джинсы 4",
//     price: 5500,
//     description: "Синего цвета, прямые",
//   },
//   {
//     id: "8",
//     title: "Куртка 5",
//     price: 12000,
//     description: "Зеленого цвета, теплая",
//   },
//   {
//     id: "9",
//     title: "Куртка 6",
//     price: 15000,
//     description: "малина цвета, теплая",
//   },
// ];

// const getTotalPrice = (items = []) => {
//   return items.reduce((acc, item) => {
//     return (acc += item.price);
//   }, 0);
// };

const ProductList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [addedItems, setAddedItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/data");
        setData(response.data);
      } catch (error) {
        setError("Ошибка при получении данных");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Загрузка...</div>;
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
      {data.map(({ id, category, description, image, price, title }) => (
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
      ))}
    </div>
  );
};

export default ProductList;
