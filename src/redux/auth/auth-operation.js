import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://tg-web-app-node-5618b5f5f78b.herokuapp.com/api/";

 const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("./api/auth/register", credentials);
      return data;
    } catch (error) {}
  }
);

 const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("./api/auth/login", credentials);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log("Токена нет, уходим из fetchCurrentUser");
      return thunkAPI.rejectWithValue();
    }

    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);
const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
