import React from "react";
import SearchBar from "../сomponents/SearchBar/SearchBar";
import ProductList from "../сomponents/ProductList/ProductList";
import { useSelector } from "react-redux";
import { productsSelectors } from "../redux/Product";
export const Home = () => {
  const isLoading = useSelector(productsSelectors.getLoading);

  return (
    <main>
      <SearchBar />
      <ProductList />
    </main>
  );
};
