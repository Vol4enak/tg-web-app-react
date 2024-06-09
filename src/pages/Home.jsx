import React, { useEffect } from "react";
import SearchBar from "../сomponents/SearchBar/SearchBar";
import ProductList from "../сomponents/ProductList/ProductList";

import { productsOperations } from "../redux/Product";
import { useDispatch } from "react-redux";
export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);

  return (
    <main>
      <SearchBar />
      <ProductList />
    </main>
  );
};
