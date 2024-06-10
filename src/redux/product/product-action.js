import { createAction } from "@reduxjs/toolkit";

export const fetchProductsRequest = createAction(
  "products/fetchProductsRequest"
);
export const fetchProductsSuccess = createAction(
  "products/fetchProductsSuccess"
);
export const fetchProductsError = createAction("products/fetchProductsError");

export const userProductRequest = createAction("products/UserProductRequest");
export const userProductSuccess = createAction("products/UserProductSuccess");
export const userProductError = createAction("products/UserProductError");

export const deleteProductRequest = createAction(
  "products/deleteProductRequest"
);
export const deleteProductSuccess = createAction(
  "products/deleteProductSuccess"
);
export const deleteProductError = createAction("products/deleteProductError");

export const toggleCompletedRequest = createAction(
  "products/toggleProductCompletedRequest"
);
export const toggleCompletedSuccess = createAction(
  "products/toggleProductCompletedSuccess"
);
export const toggleCompletedError = createAction(
  "products/toggleProductCompletedError"
);
export const logoutSuccess = createAction("auth/logoutSuccess");
export const changeFilter = createAction("products/changeFilter");
