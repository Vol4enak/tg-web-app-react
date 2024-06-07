import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
} from "./product-actions";

const items = createReducer([], {
  [fetchProductSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => [...state, payload],
  [deleteProductSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchProductRequest]: () => true,
  [fetchProductSuccess]: () => false,
  [fetchProductError]: () => false,
  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,
  [deleteProductRequest]: () => true,
  [deleteProductSuccess]: () => false,
  [deleteProductError]: () => false,
});

const error = createReducer(null, {
  [fetchProductError]: (_, { payload }) => payload,
  [addProductError]: (_, { payload }) => payload,
  [deleteProductError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  error,
});
