import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  changeFilter,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
} from "./product-action";

const items = createReducer([], (builder) => {
  builder
    .addCase(fetchProductsSuccess, (_, { payload }) => payload)
    .addCase(addProductSuccess, (state, { payload }) => [...state, payload])
    .addCase(deleteProductSuccess, (state, { payload }) =>
      state.filter(({ id }) => id !== payload)
    )
    .addCase(toggleCompletedSuccess, (state, { payload }) =>
      state.map((product) => (product.id === payload.id ? payload : product))
    );
});

const loading = createReducer(false, (builder) => {
  builder
    .addCase(fetchProductsRequest, () => true)
    .addCase(fetchProductsSuccess, () => false)
    .addCase(fetchProductsError, () => false)
    .addCase(addProductRequest, () => true)
    .addCase(addProductSuccess, () => false)
    .addCase(addProductError, () => false)
    .addCase(deleteProductRequest, () => true)
    .addCase(deleteProductSuccess, () => false)
    .addCase(deleteProductError, () => false)
    .addCase(toggleCompletedRequest, () => true)
    .addCase(toggleCompletedSuccess, () => false)
    .addCase(toggleCompletedError, () => false);
});

const filter = createReducer("", (builder) => {
  builder.addCase(changeFilter, (_, { payload }) => payload);
});

const error = createReducer(null, (builder) => {
  builder
    .addCase(fetchProductsError, (_, { payload }) => payload)
    .addCase(addProductError, (_, { payload }) => payload)
    .addCase(deleteProductError, (_, { payload }) => payload)
    .addCase(toggleCompletedError, (_, { payload }) => payload);
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
