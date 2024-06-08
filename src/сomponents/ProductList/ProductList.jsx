import React, { useEffect } from "react";
import css from "./ProductList.module.css";
// import { useState } from "react";
import { useDispatch } from "react-redux";
// import useFetchData from "../../Hooks/useFetchData";
import ProductItem from "../ProductItem/ProductItem";
import { productsOperations } from "../../redux/Product";

const ProductList = () => {
  // const [addedItems, setAddedItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => dispatch(productsOperations.fetchProducts())[dispatch]);

  return (
    <ul className={css.list}>
      <ProductItem />
    </ul>
  );
};

export default ProductList;
// const {
//   data: fetchData,
//   loading,
//   error,
// } = useFetchData(
//   "https://tg-web-app-node-5618b5f5f78b.herokuapp.com/api/data"
// );

// if (loading) {
//   return <div>Загрузка...</div>;
// }

// if (error) {
//   return <div>{error}</div>;
// }
// const onAdd = (product) => {
//   console.log(product);
//   const alreadyAdded = addedItems.find((item) => item.id === product.id);
//   let newItems = [];

//   if (alreadyAdded) {
//     newItems = addedItems.filter((item) => item.id !== product.id);
//   } else {
//     newItems = [...addedItems, product];
//   }
//   // dispatch(productsOperations.toggleCompleted(product.id, newItems));
//   setAddedItems(newItems);
// };
