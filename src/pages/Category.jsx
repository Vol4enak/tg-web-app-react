import React, { useEffect } from "react";
import { Category } from "../сomponents/Category/Category";
import {  useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { productsOperations } from "../redux/Product";
export const CategoryPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsOperations.fetchCategoris(params.categoryName));
  }, [dispatch, params.categoryName]);

  return (
    <div>
      <Category />
    </div>
  );
};
