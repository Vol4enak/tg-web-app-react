import { createAction } from "@reduxjs/toolkit";

export const fetchProductsRequest = createAction(
  "products/fetchProductsRequest"
);
export const fetchProductsSuccess = createAction(
  "products/fetchProductsSuccess"
);
export const fetchProductsError = createAction("products/fetchProductsError");

export const addProductRequest = createAction("products/addProductRequest");
export const addProductSuccess = createAction("products/addProductSuccess");
export const addProductError = createAction("products/addProductError");

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

export const changeFilter = createAction("products/changeFilter");