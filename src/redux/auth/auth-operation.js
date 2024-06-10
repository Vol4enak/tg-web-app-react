import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:8000/api";

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

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/auth/logout");

    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",

  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      console.log("Токена нет, уходим из fetchCurrentUser");
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
