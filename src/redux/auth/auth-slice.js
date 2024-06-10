import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authOperations.register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(authOperations.register.rejected, (state, action) => {
      state.error = action.payload || action.error.message;
    });
    builder.addCase(authOperations.logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(authOperations.logIn.rejected, (state, action) => {
      state.error = action.payload || action.error.message;
    });
    builder.addCase(authOperations.logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    });
    builder.addCase(authOperations.logOut.rejected, (state, action) => {
      state.error = action.payload || action.error.message;
    });
    builder.addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
      state.error = null
    });
  },
});

export default authSlice.reducer;
