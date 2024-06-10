import React, { useEffect } from "react";
import Basket from "../сomponents/Basket/Basket";

import { productsOperations } from "../redux/Product";
import { useDispatch } from "react-redux";
export const BasketPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <Basket />
    </div>
  );
};
