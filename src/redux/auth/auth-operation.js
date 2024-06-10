import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logoutRequest, logoutSuccess } from "./auth-action";
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

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return thunkAPI.rejectWithValue("Email already in use");
      }
      return thunkAPI.rejectWithValue("Registration failed");
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);

    token.set(data.token);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  // Используем thunkAPI.dispatch для доступа к методу dispatch
  thunkAPI.dispatch(logoutRequest());

  try {
    await axios.post("/auth/logout");

    token.unset();
    // Опять используем thunkAPI.dispatch для диспатча
    thunkAPI.dispatch(logoutSuccess());
  } catch (error) {
    console.error(error);
    // В случае ошибки, мы также можем использовать thunkAPI.rejectWithValue, чтобы обработать ошибку
    return thunkAPI.rejectWithValue("Logout failed");
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",

  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/auth/current");
      return data;
    } catch (error) {}
  }
);
const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
