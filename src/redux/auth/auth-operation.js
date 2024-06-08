import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://tg-web-app-node-5618b5f5f78b.herokuapp.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/register", credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/auth/logout");
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    console.log(thunkAPI.getState());
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // console.log(persistedToken);
    // if (persistedToken === null) {
    //   console.log("Токена нет, уходим из fetchCurrentUser");
    //   return thunkAPI.rejectWithValue();
    // }
    // token.set(persistedToken);
    // try {
    //   const { data } = await axios.get("/auth/current");
    //   return data;
    // } catch (error) {
    //   // TODO: Добавить обработку ошибки error.message
    // }
  }
);
const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
