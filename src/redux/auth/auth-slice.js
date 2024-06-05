import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: " ",
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = " ";
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
// import authOperation from "./auth-operation";

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
// };
// const authSlise = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [authOperation.register.fulfilled](state, action){

//     }
//   },
// });

// export default authSlise.reducer;

