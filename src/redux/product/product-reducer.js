import { createReducer } from "@reduxjs/toolkit";
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
} from "./product-actions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTodosRequest, (state) => {
      state.loading = true;
    })
    .addCase(fetchTodosSuccess, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(fetchTodosError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addTodoRequest, (state) => {
      state.loading = true;
    })
    .addCase(addTodoSuccess, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(addTodoError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    // Add other action cases here
    .addDefaultCase((state) => {
      // Handle default case if needed
    });
});

export default productReducer;
