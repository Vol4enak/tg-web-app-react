import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import productActions from "./productAction";

const {
  setSearchQuery,
  userProductRequest,
  userProductSuccess,
  userProductError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  logoutSuccess,
} = productActions;

const items = createReducer([], (builder) => {
  builder.addCase(fetchProductsSuccess, (_, { payload }) => payload);
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
    .addCase(toggleCompletedRequest, () => true)
    .addCase(toggleCompletedSuccess, () => false)
    .addCase(toggleCompletedError, () => false);
});
const searchQuery = createReducer("", (builder) => {
  builder.addCase(setSearchQuery, (_, { payload }) => payload);
});

const error = createReducer(null, (builder) => {
  builder
    .addCase(fetchProductsError, (_, { payload }) => payload)
    .addCase(userProductError, (_, { payload }) => payload)
    .addCase(toggleCompletedError, (_, { payload }) => payload);
});

export default combineReducers({
  items,
  itemsUser,
  loading,
  error,
  searchQuery,
});
