import { createSlice } from "@reduxjs/toolkit";
import authOperation from "./auth-operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};
const authSlise = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action){

    }
  },
});

export default authSlise.reducer;
