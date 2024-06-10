import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  userProductRequest,
  userProductSuccess,
  userProductError,
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
  logoutSuccess,
} from "./product-action";

const items = createReducer([], (builder) => {
  builder
    .addCase(fetchProductsSuccess, (_, { payload }) => payload)
    .addCase(deleteProductSuccess, (state, { payload }) =>
      state.filter(({ id }) => id !== payload)
    );
});
const itemsUser = createReducer([], (builder) => {
  builder
    .addCase(toggleCompletedSuccess, (_, { payload }) => payload)
    .addCase(logoutSuccess, () => []); 
});

const loading = createReducer(false, (builder) => {
  builder
    .addCase(fetchProductsRequest, () => true)
    .addCase(fetchProductsSuccess, () => false)
    .addCase(fetchProductsError, () => false)
    .addCase(userProductRequest, () => true)
    .addCase(userProductSuccess, () => false)
    .addCase(userProductError, () => false)
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
    .addCase(userProductError, (_, { payload }) => payload)
    .addCase(deleteProductError, (_, { payload }) => payload)
    .addCase(toggleCompletedError, (_, { payload }) => payload);
});

export default combineReducers({
  items,
  itemsUser,
  filter,
  loading,
  error,
});
