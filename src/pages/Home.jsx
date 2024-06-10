import React, { useEffect } from "react";
import SearchBar from "../сomponents/SearchBar/SearchBar";
import Home from "../сomponents/Home/Home";

import { productsOperations } from "../redux/Product";
import { useDispatch } from "react-redux";
export const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);

  return (
    <main>
      <SearchBar />
      <Home />
    </main>
  );
};
