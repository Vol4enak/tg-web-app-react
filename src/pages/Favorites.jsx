import React, { useEffect } from "react";
import Favorites from "../сomponents/Favorites/Favorites";

import { productsOperations } from "../redux/Product";
import { useDispatch } from "react-redux";
export const FavoritesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Favorites />
    </div>
  );
};
