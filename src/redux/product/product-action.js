import { createAction } from "@reduxjs/toolkit";

const fetchProductsRequest = createAction("products/fetchProductsRequest");
const fetchProductsSuccess = createAction("products/fetchProductsSuccess");
const fetchProductsError = createAction("products/fetchProductsError");

const userProductRequest = createAction("products/UserProductRequest");
const userProductSuccess = createAction("products/UserProductSuccess");
const userProductError = createAction("products/UserProductError");

const toggleCompletedRequest = createAction(
  "products/toggleProductCompletedRequest"
);
const toggleCompletedSuccess = createAction(
  "products/toggleProductCompletedSuccess"
);
const toggleCompletedError = createAction(
  "products/toggleProductCompletedError"
);

const logoutSuccess = createAction("auth/logoutSuccess");
const changeFilter = createAction("products/changeFilter");

const productActions = {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  userProductRequest,
  userProductSuccess,
  userProductError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  logoutSuccess,
  changeFilter,
};

export default productActions;
